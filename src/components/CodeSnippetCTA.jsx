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
    <section className="w-full flex flex-col items-start justify-left min-h-screen">
      

      {/* 3D Code Snippet */}
      <Canvas className="w-full h-[400px]">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1.5} />
        <directionalLight position={[3, 3, 3]} intensity={2} />

        {/* Floating 3D Text */}
        <Text
          fontSize={0.2} // Adjusted font size
          position={[0, 0, 0]} // Centered position
          maxWidth={5} // Proper width
          textAlign="left"
          color="cyan"
        >
          {code}
        </Text>
      </Canvas>
    </section>
  );
};

export default CodeSnippetCTA;
