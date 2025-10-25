import styles from './SectionColors.module.css' 
import { useState } from 'react';
import { HiArrowRight, HiOutlineArrowDown } from 'react-icons/hi';
import { ContactShadows, Environment, Lightformer, OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Ferrari from '../FerrariModel/FerrariModel';

const arrayCars = [

    '/ferrari-red.png',
    '/ferrari-green.png',
    '/ferrari-yellow.png',
    '/ferrari-purple.png',

]

const SectionColors = () => {


    const [radioId, setRadioId] = useState(0)


    return (
    <section 
    id="#colors" className={styles.colors}>
            <div className={styles.model3dContent}>
            
        <Canvas shadows gl={{antialias:false}}
      camera={{position:[2,0,-5], fov:50}}>
        <ambientLight intensity={0.2}  position={[1, 10, 10]}/>
        <hemisphereLight intensity={0.2}/>
        <mesh scale={4} position={[3, -1.161, -1.5]} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
        <ringGeometry args={[0.9, 1, 4, 1]} />
        <meshStandardMaterial color="white" roughness={0.75} />
        </mesh>
        <mesh scale={4} position={[-3, -1.161, -1]} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
        <ringGeometry args={[0.9, 1, 3, 1]} />
        <meshStandardMaterial color="white" roughness={0.75} />
        </mesh>
        <directionalLight castShadow={true} position={[0, 10, 10]}
        intensity={1.5} shadow-mapSize={[2048, 2048]}/>
        <Suspense fallback={null}>
        <Ferrari position={[0, -1.2, 0]} rotation={[0, Math.PI / 1.5, 0]} scale={1.2}/>
        <color attach="background" args={['#15151a']}/>
        </Suspense>
        <Environment resolution={512} >
        {/* Ceiling */}
        <Lightformer intensity={0.5} rotation-x={Math.PI / 2} position={[0, 4, -9]} scale={[10, 1, 1]} />
        <Lightformer intensity={0.5} rotation-x={Math.PI / 2} position={[0, 4, -6]} scale={[10, 1, 1]} />
        <Lightformer intensity={0.5} rotation-x={Math.PI / 2} position={[0, 4, -3]} scale={[10, 1, 1]} />
        <Lightformer intensity={0.5} rotation-x={Math.PI / 2} position={[0, 4, 0]} scale={[10, 1, 1]} />
        <Lightformer intensity={0.5} rotation-x={Math.PI / 2} position={[0, 4, 3]} scale={[10, 1, 1]} />
        <Lightformer intensity={0.5} rotation-x={Math.PI / 2} position={[0, 4, 6]} scale={[10, 1, 1]} />
        <Lightformer intensity={0.5} rotation-x={Math.PI / 2} position={[0, 4, 9]} scale={[10, 1, 1]} />
        {/* Sides */}
        <Lightformer intensity={0.5} rotation-y={Math.PI / 2} position={[-50, 2, 0]} scale={[100, 2, 1]} />
        <Lightformer intensity={0.5} rotation-y={-Math.PI / 2} position={[50, 2, 0]} scale={[100, 2, 1]} />
        {/* Key */}
        <Lightformer form="ring" color="red" intensity={10} scale={2} position={[10, 5, 10]} onUpdate={(self) => self.lookAt(0, 0, 0)} />
      </Environment>
        <OrbitControls maxPolarAngle={1.5} autoRotate rotateSpeed={0.3}
        enableDamping={true}/>
        <ContactShadows frames={1} opacity={1} scale={500} 
        blur={1.2} far={1000} resolution={1024}/>
      </Canvas>
      <div className={styles.feedbackForUser}>
        <span>Click to scroll</span>
        <HiOutlineArrowDown size={16} className={styles.arrowIcon}/>
      </div>
      </div>
        <div className={styles.colorsContent} >
            <p className={styles.titleColors}>Escolha sua cor:</p>
            <img 
            src={arrayCars[radioId]} 
            key={arrayCars[radioId].toString()}
            alt="Car custom color" />
            
            <div className={styles.radiosContent}>
            {arrayCars.map((_, index) => (

            <div key={index} className={`${styles.colorContent}
            ${radioId === index ? styles.selectedColor: ""}`}>
            <input type="radio" name="colors" value={index}
            onChange={() => setRadioId(index)}/>
            </div>

            ))}
            

            </div>

            <form onSubmit={(e) => {e.preventDefault()}} 
            className={styles.btnBuyContent}>

                <button 
                type="submit" className={styles.btnBuy}>
                    <span>Buy now</span>
                    <HiArrowRight size={16}/>
                </button>

            </form>

        </div>

    </section>   
    )

}

export default SectionColors