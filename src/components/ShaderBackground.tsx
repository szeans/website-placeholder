import { useRef } from 'react'
//import { useFrame } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'

const ShaderMaterial = shaderMaterial(
  {
    time: 0,
  },
  // Vertex shader
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment shader
  `
    uniform float time;
    varying vec2 vUv;
    
    void main() {
      vec2 uv = vUv;
      float t = time * 0.5;
      
      // Create a simple animated gradient
      vec3 color1 = vec3(0.1, 0.2, 0.4);
      vec3 color2 = vec3(0.3, 0.4, 0.6);
      
      float gradient = uv.y + sin(uv.x * 10.0 + t) * 0.1;
      vec3 finalColor = mix(color1, color2, gradient);
      
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
)

export default function ShaderBackground() {
  const materialRef = useRef<typeof ShaderMaterial>(null)

  // useFrame((state) => {
  //   if (materialRef.current) {
  //     materialRef.current.time = state.clock.getElapsedTime()
  //   }
  // })

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <primitive object={ShaderMaterial} ref={materialRef} />
    </mesh>
  )
} 