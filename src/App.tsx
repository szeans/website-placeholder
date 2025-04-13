//import { Canvas } from '@react-three/fiber'
//import { Suspense } from 'react'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { Analytics } from '@vercel/analytics/react'
//import ShaderBackground from './components/ShaderBackground'
import Content from './components/Content'

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Sean Choi</title>
        <meta name="description" content="Personal portfolio of Sean Choi, Software Engineer" />
        <meta name="keywords" content="Sean Choi, Software Engineer, Portfolio, choisean.com, szeanchoi.com" />
        <meta name="author" content="Sean Choi" />
        <link rel="canonical" href="https://choisean.com" />
        <meta property="og:title" content="Sean Choi" />
        <meta property="og:description" content="Personal portfolio of Sean Choi, Software Engineer" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://choisean.com" />
      </Helmet>
      
      <div className="container">
        {/* <Canvas className="absolute inset-0">
          <Suspense fallback={null}>
            <ShaderBackground />
          </Suspense>
        </Canvas> */}
        <Content />
      </div>
      <Analytics />
    </HelmetProvider>
  )
}

export default App
