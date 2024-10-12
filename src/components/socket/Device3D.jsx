// components/Device3D.js
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const DeviceMesh = ({ pitch, roll, yaw }) => {
  const mesh = useRef(null);

  // Usamos useFrame para animar la rotación basada en pitch, roll y yaw
  useFrame(() => {
    // Convertir a radianes
    const pitchRad = (pitch * Math.PI) / 180;
    const rollRad = (roll * Math.PI) / 180;
    const yawRad = (yaw * Math.PI) / 180;

    // Rotar el objeto 3D
    mesh.current.rotation.set(pitchRad, yawRad, rollRad);
  });

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[1, 0.1, 0.5]} />{" "}
      {/* Un cubo representando el dispositivo */}
      <meshStandardMaterial color={"orange"} />
    </mesh>
  );
};

const Device3D = ({ pitch, roll, yaw }) => {
  return (
    <Canvas style={{ height: "400px" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 5]} intensity={1} />
      <DeviceMesh pitch={pitch} roll={roll} yaw={yaw} />{" "}
      {/* Pasar los datos de orientación */}
    </Canvas>
  );
};

export default Device3D;
