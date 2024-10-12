import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Line, Text } from "@react-three/drei";

const DeviceMesh = ({ pitch }) => {
  const mesh = useRef(null);

  // Convertir el pitch a radianes para la rotación
  const pitchRad = (pitch * Math.PI) / 180;

  // Generar puntos para el arco
  const arcPoints = [];
  const arcLength = 1.5; // Longitud del arco
  const numPoints = 50; // Número de puntos en el arco

  for (let i = 0; i <= numPoints; i++) {
    const angle = (i / numPoints) * pitchRad; // Proporción del ángulo

    arcPoints.push([
      arcLength * Math.cos(angle),
      arcLength * Math.sin(angle),
      0,
    ]); // Puntos del arco
  }

  return (
    <>
      {/* Cubo movido para que su extremo esté en el eje */}

      <group rotation={[0, 0, pitchRad]} position={[0, 0, 0]}>
        <mesh ref={mesh} position={[1.5, 0, 0]}>
          <boxGeometry args={[3, 0.1, 0.5]} />
          <meshStandardMaterial color={"orange"} />
        </mesh>
      </group>
      {/* Línea que representa el arco */}
      <Line
        points={arcPoints}
        color={"blue"}
        lineWidth={2}
        position={[0, 0, 0]}
      />

      {/* Renderizar el ángulo */}
      <Text
        position={[-1, 0.3, 0]} // Posición del texto
        fontSize={0.9}
        color={"whitee"}
        anchorX="center"
        anchorY="middle"
      >
        {Math.round(pitch)}°
      </Text>
    </>
  );
};

const Device2D = ({ pitch }) => {
  return (
    <Canvas style={{ height: "400px" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 5]} intensity={1} />
      <DeviceMesh pitch={pitch} />
      <camera position={[2, 0, 1]} fov={75} />
    </Canvas>
  );
};

export default Device2D;
