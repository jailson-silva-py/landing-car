"use client";
import { colorsCar } from "@/types/colorCars"
import { useGLTF } from "@react-three/drei"
import { useEffect } from 'react'
import { JSX } from "react"
import * as THREE from 'three'

type Iprops =  { 

    colorState: colorsCar,

} & JSX.IntrinsicElements['group']

const objCores = {

    red:'#8f1515',
    purple:'#69107b',
    yellow:'#745a05',
    green:'#0b5308'

}

const Ferrari = ({colorState, ...props}:Iprops) => {
    const { scene, materials } = useGLTF('/ferrari.glb')

    useEffect(() => {

        const m  = (materials.Vehicle_Exterior_mm_ext as THREE.MeshStandardMaterial)
        m.color.set(new THREE.Color(objCores[colorState]))
        m.map = null

    }, [colorState])
    
    return (
        
    <primitive object={scene} { ...props}/>
    
    )
}

export default Ferrari