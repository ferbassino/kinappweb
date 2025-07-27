const fs = require('fs');
const path = require('path');

// Function to recursively find all .jsx and .js files
function findFiles(dir, extensions = ['.jsx', '.js']) {
    let results = [];
    const list = fs.readdirSync(dir);
    
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat && stat.isDirectory()) {
            results = results.concat(findFiles(filePath, extensions));
        } else {
            const ext = path.extname(file);
            if (extensions.includes(ext)) {
                results.push(filePath);
            }
        }
    });
    
    return results;
}

// Function to extract component name from export statement
function extractComponentName(content, filePath) {
    const lines = content.split('\n');
    let componentName = null;
    
    // Look for export default statements
    for (const line of lines) {
        const exportMatch = line.match(/export\s+default\s+(\w+)/);
        if (exportMatch) {
            componentName = exportMatch[1];
            break;
        }
        
        // Also check for inline export default function
        const inlineMatch = line.match(/export\s+default\s+function\s+(\w+)/);
        if (inlineMatch) {
            componentName = inlineMatch[1];
            break;
        }
    }
    
    // If no explicit name found, try to infer from filename
    if (!componentName) {
        const fileName = path.basename(filePath, path.extname(filePath));
        // Only consider it a component if filename starts with uppercase
        if (fileName[0] === fileName[0].toUpperCase()) {
            componentName = fileName;
        }
    }
    
    return componentName;
}

// Function to find all imports in a file
function findImports(content) {
    const imports = [];
    const lines = content.split('\n');
    
    for (const line of lines) {
        // Match various import patterns
        const importMatches = [
            line.match(/import\s+(\w+)\s+from/),
            line.match(/import\s*{\s*([^}]+)\s*}\s*from/),
            line.match(/import\s+\*\s+as\s+(\w+)\s+from/)
        ];
        
        for (const match of importMatches) {
            if (match) {
                if (match[1].includes(',')) {
                    // Handle destructured imports
                    const names = match[1].split(',').map(name => name.trim());
                    imports.push(...names);
                } else {
                    imports.push(match[1].trim());
                }
            }
        }
    }
    
    return imports;
}

// Main analysis function
function analyzeUnusedComponents() {
    const srcDir = './src';
    const files = findFiles(srcDir);
    
    const components = new Map(); // componentName -> filePath
    const allImports = new Set();
    
    console.log('🔍 Analizando archivos...\n');
    
    // First pass: collect all components and imports
    for (const filePath of files) {
        try {
            const content = fs.readFileSync(filePath, 'utf8');
            
            // Extract component name if this file exports one
            const componentName = extractComponentName(content, filePath);
            if (componentName) {
                components.set(componentName, filePath);
            }
            
            // Extract all imports from this file
            const imports = findImports(content);
            imports.forEach(imp => allImports.add(imp));
            
        } catch (error) {
            console.log(`❌ Error leyendo ${filePath}: ${error.message}`);
        }
    }
    
    console.log(`📊 Encontrados ${components.size} componentes definidos`);
    console.log(`📊 Encontradas ${allImports.size} importaciones únicas\n`);
    
    // Find unused components
    const unusedComponents = [];
    
    for (const [componentName, filePath] of components) {
        if (!allImports.has(componentName)) {
            unusedComponents.push({
                name: componentName,
                path: filePath.replace(/\\/g, '/')
            });
        }
    }
    
    // Display results
    console.log('🚫 COMPONENTES NO UTILIZADOS:\n');
    
    if (unusedComponents.length === 0) {
        console.log('✅ ¡Todos los componentes están siendo utilizados!');
    } else {
        unusedComponents.forEach((comp, index) => {
            console.log(`${index + 1}. ${comp.name}`);
            console.log(`   📁 ${comp.path}\n`);
        });
        
        console.log(`📈 Total de componentes no utilizados: ${unusedComponents.length}`);
    }
    
    return unusedComponents;
}

// Run the analysis
if (require.main === module) {
    analyzeUnusedComponents();
}

module.exports = { analyzeUnusedComponents };
