import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
//import { motion } from "framer-motion";

const CodeSnippetCTA = () => {
  const code = `// Connect, Build & Grow with Tanishq 
const reach = async () => {
  const connections = await createNetwork();
  const impact = connections * creativity;
  console.log(\`Your reach is now \${impact}x larger!\`);
};
reach();`;

  return (
    <section className="w-full h-full flex items-center justify-center">
      {/* 3D Code Snippet */}
      <Canvas className="w-full h-[500px]">
        <OrbitControls enableZoom={false} enablePan={false} />
        <ambientLight intensity={2} />
        <directionalLight position={[3, 3, 3]} intensity={2.5} />
        <spotLight position={[-5, 5, 0]} angle={0.15} penumbra={1} intensity={1} />

        {/* Floating 3D Text */}
        <Text
          fontSize={0.25}
          position={[0, 0, 0]}
          maxWidth={6}
          textAlign="left"
          color="#00c2ff"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor="#1c1c1c"
        >
          {code}
        </Text>
      </Canvas>
    </section>
  );
};

export default CodeSnippetCTA;
