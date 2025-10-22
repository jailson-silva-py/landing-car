"use client";
import styles from './SectionProduct.module.css'
import { ContactShadows, Environment, Lightformer, OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import Ferrari from '../FerrariModel/FerrariModel';
import { Canvas } from '@react-three/fiber';
import { HiOutlineArrowDown, HiOutlineCurrencyDollar } from 'react-icons/hi';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import { ScrollTrigger, TextPlugin } from 'gsap/all';
import Card from '../Card/Card';
import { FiCrosshair, FiTarget, FiTool, FiWind, FiZap } from 'react-icons/fi';


gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(TextPlugin)

const SectionProduct = () => {

    useGSAP(() => {
      window.addEventListener('load', () => ScrollTrigger.refresh())
      ScrollTrigger.normalizeScroll({ allowNestedScroll: true, momentum: 1 })
     

      const tl = gsap.timeline({
        scrollTrigger: {

          markers:true,
          trigger:`.${styles.screensContent}`,
          start:`top top`,
          end:`+=500%`,
          scrub:1,
          snap:1/6,
          pin:true,
          //pinType:'transform'
  

        },

      })

      // gsap.to(`.${styles.screensContent}`,{

      //   scrollTrigger:{

      //     markers:true,
      //     trigger:`.${styles.screensContent}`,
      //     start:`top top`,
      //     end:`+=${window.innerHeight * 4}`,
      //     scrub:1,
      //     snap:0.25 ,
      //     pin:true,
         
      //   },

      tl.to(`.${styles.mainIntroduction}`, {

        text:'Precisão de relojoeiro, arrogância de pista — assinado em vermelho.',
        ease:"none",
        duration:1,
       

      }, 0).to(`.${styles.subIntroduction}`, {

        text:'— Ícone da virada de milênio',
        ease:"none",

      }, 1)

     

      tl.fromTo(`.${styles.firstScreen}`, 
        {translateX:'-101%'},
        {translateX:0},
       2

      )

      tl.fromTo(`.${styles.secondScreen}`, 
        {translateX:'101%'},
        {translateX:0},
        3

      )

      tl.fromTo(`.${styles.thirdScreen}`, 
        {translateY:'-101%'},
        {translateY:0},
        4

      )

      tl.fromTo(`.${styles.fourthScreen}`, 
        {translateY:'101%'},
        {translateY:0},
        5

      )
    })

    return (

        <section id="product" className={styles.product}>
        <div className={styles.model3dContent}>
            
        <Canvas shadows 
      gl={{
        logarithmicDepthBuffer:true, antialias:false}}
      camera={{position:[1, 2.5, 10], fov:25}}>
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
        <OrbitControls maxPolarAngle={1.5}  autoRotate={true} rotateSpeed={0.3}
        enableDamping={true}/>
        <ContactShadows frames={1} opacity={1} scale={500} 
        blur={1.2} far={1000} resolution={1024}/>
      </Canvas>
      <div className={styles.feedbackForUser}>
        <span>Click to scroll</span>
        <HiOutlineArrowDown size={16} className={styles.arrowIcon}/>
      </div>
      </div>

      <div className={styles.screensContent}>
        <div className={styles.introduction}>

          <p className={styles.mainIntroduction}>
            
          </p>
          <p className={styles.subIntroduction}>
            
          </p>
        </div>
        <div className={styles.firstScreen}>

          <div className={styles.cardContent}>

            <Card Icon={HiOutlineCurrencyDollar} 
            title='Valor de coleção estável'
            newClass='card1'
            text="Ícone da virada do milênio,
            ponto de transição de linguagem e engenharia.
            Procura consistente, oferta limitada, aura de
            clássico moderno."/>
            
            <Card Icon={FiWind} 
            title='Aero e design' 
            newClass='card2'
            text="Curvas limpas, proporção certa, entradas de ar
            funcionais. É forma que nasce da função, não efeito
            especial."/>

          </div>

        </div>
        <div className={styles.secondScreen}>
          <div className={styles.cardContent}>

            <Card Icon={FiCrosshair} 
            title='Arquitetura de motor central-traseiro'
            newClass='card3'
            text="Baixo momento polar de inércia e distribuição
            de massa entre eixos: entrada de curva ágil, transições
            estáveis e saída previsível."/>
            
            <Card Icon={FiWind} 
            title='Sistema de freios eficiente e escalável' 
            newClass='card4'
            text="Conjunto com boa resistência a fading e caminho
            claro de upgrades (compostos, discos, dutos) para uso
            intensivo."/>

          </div>
        </div>
        <div className={styles.thirdScreen}>
          <div className={styles.cardContent}>
          <Card Icon={FiTool} 
            title='Manutenibilidade do conjunto V8'
            newClass='card5'
            text="Trem de força confiável com
            documentação / procedimentos amplos, reduzindo tempo
            de imobilização e custo operacional relativo."/>
            
          <Card Icon={FiWind} 
            title='Variante Challenge Stradale (foco em pista)' 
            newClass='card6'
            text="Redução de massa, calibração dinâmica mais
            agressiva e frenagem de maior capacidade térmica,
            homologada para rua."/>
        </div>
        </div>
        <div className={styles.fourthScreen}>
          <div className={styles.cardContent}>
          <Card Icon={FiTarget} 
            title='Experiência de condução consistente'
            newClass='card7'
            text="Calibração integrada de
            chassi / freios / powertrain resultando em comportamento
            previsível e repetível em estrada e track day."/>
            
          <Card Icon={FiZap} 
            title='Motorização V8 3.6 aspirada' 
            newClass='card8'
            text="Entrega linear e resposta imediata ao
            acelerador em ampla faixa de rotação, sem
            dependência de sobrealimentação."/>
        </div>
        </div>
      </div>
      
     

    </section>

    )

}

export default SectionProduct