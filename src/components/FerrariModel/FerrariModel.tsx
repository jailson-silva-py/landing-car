import { useGLTF } from "@react-three/drei"
import { JSX, useMemo } from "react"
import * as THREE from 'three'

const Ferrari = (props:JSX.IntrinsicElements['group']) => {
    const { scene, nodes, materials } = useGLTF('/ferrari.glb')

    useMemo(() => {

        Object.values(nodes).forEach((node) => {
        if (node instanceof THREE.Mesh) {
        // Fix glas, normals look messed up in the original, most likely deformed meshes bc of compression :/
        const isGlass = /^lod_a_glass/i.test(node.name)
        if (isGlass) {
         
            node.geometry.computeVertexNormals()


            const glassMaterial = new THREE.MeshPhysicalMaterial({

                color:'#555',
                transparent:false,
                opacity:1,
                transmission:1,
                envMapIntensity:1.4,
                thickness:0.1,
                roughness:.01,
                metalness:0

            })

            node.material = glassMaterial
        
        }

        const isHeadlight = /^LOD_A_HEADLIGHT/i.test(node.name)
        
        if(isHeadlight) {
          
           const material = node.material
            console.log(material)
           if (!material) return

           material.emissive = new THREE.Color('#111')
           material.toneMapped = false
           material.roughness = Math.min(material.roughness ?? 0.2, 0.2)
           material.metalness = 0
           material.transmission = 1
           material.envMapIntensity = 1.4
           material.transparent = false
           node.material = material

        }
        const isLight = /light/i.test(node.name)
        if (isLight) {
        
        console.log('is light')
        console.log(node.material)
        const m = node.material 
        if (!m) return
        m.emissiveIntensity = 10
        m.toneMapped = false
        m.roughness = Math.min(m.roughness ?? 0.2, 0.2)
        m.metalness = false

        }
    
    
    }
        
        
      

    })

    }, [nodes, materials])
    console.log(nodes)
    console.log(materials)
    return (<primitive object={scene}{...props}></primitive>)

}

export default Ferrari