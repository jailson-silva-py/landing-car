import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { JSX, useEffect, useMemo, useRef } from "react"
import * as THREE from 'three'

const Ferrari = (props:JSX.IntrinsicElements['group']) => {
    const { scene } = useGLTF('/ferrari.glb')

    
    
    return (

    <primitive object={scene} {...props}/>
    
    )
}

export default Ferrari