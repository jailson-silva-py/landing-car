"use client";
import styles from './SectionProduct.module.css'
import { Lobster_Two, Kavoon } from 'next/font/google'
import { motion, type Variants } from 'framer-motion'
import { HiOutlineArrowRight } from 'react-icons/hi';
import { useRouter } from 'next/navigation';
import { TbSteeringWheel } from 'react-icons/tb'

const lobster_two = Lobster_Two({

    weight:['400', '700'],
    subsets:['latin'],
    display:'swap'

})

const kavoon = Kavoon({

    weight:'400',
    subsets:['latin'],
    display:'swap'

})

const SectionProduct = () => {

    const route = useRouter()

    const variants = {  
    hidden:{opacity:0, translateX:'-100%'},
    visible: (i:number) => ({

      
        opacity:1, translateX:0, transition:{delay:i * 0.4}

    } )}

    return (

        <section id="product" className={styles.product}>

            <motion.div initial={{opacity:0, translateX:-1000}}
            animate={{opacity:1, translateX:0}} 
            transition={{type:'spring', delay:.3}}
            className={styles.introduction}>
            <p className={`${styles.textContent} ${lobster_two.className}`}>
                458 cavalos que transformam asfalto em adrenalina
                pura. 0 a 100 em 3.2s não é especificação técnica.
                É promessa cumprida.
            </p>
            <motion.button onClick={() => {

                route.replace('#product-models')

            }}
            initial={{translateX:-100, opacity:0}}
            animate={{translateX:0, opacity:1}}
            transition={{type:'tween', delay:.9}}
            className={styles.btnProductModels}>
                <span>Ver modelos</span>
                
                <HiOutlineArrowRight size={16}/>
                
            </motion.button>

            </motion.div>
            <div id="product-models" className={styles.productModels}>
            <motion.div initial={{opacity:0, translateY:'100%'}}
            whileInView={{opacity:1, translateY:0}} 
            viewport={{once:true,amount:0}}
            transition={{duration:.3}}
            className={styles.pictureContent}>
            <picture className={styles.pictureSvg}>

                <img src="/ferrari.gif" alt="Ferrari rotation" />

            </picture>

            <p className={`${styles.productModelsText} ${kavoon.className}`}>

                ACELERE SEU SUCESSO. DOMINE A PISTA DA VIDA.
                NÃO VENDEMOS CARROS, VENDEMOS A LIBERDADE PARA
                VOAR.

            </p>

            
            </motion.div>
            
            </div>
            <motion.div initial={{opacity:0}} 
            whileInView={{opacity:1}}
            transition={{duration:1}}
            className={styles.specific}
            viewport={{once:true}}>

            <motion.ul className={styles.leftUl} 
            initial="hidden" whileInView="visible" viewport={{once:true}}>

                <motion.li variants={variants} custom={1}>
                    <TbSteeringWheel size={32}/>
                    <span>
                        V8 de 400 cavalos que canta ópera
                        italiana
                    </span>
                </motion.li>
                <motion.li variants={variants} custom={2}>
                    <TbSteeringWheel size={32}/>
                    <span>
                        0-100 km/h em 4.5 segundos
                    </span>
                </motion.li>
                <motion.li variants={variants} custom={3}>
                    <TbSteeringWheel size={32}/>
                    <span>
                        Design atemporal assinado por Pininfarina
                    </span>
                </motion.li>
                
                <motion.li variants={variants} custom={4}>
                    <TbSteeringWheel size={32}/>
                    <span>
                        Última geração antes da eletrônica dominar
                    </span>
                </motion.li>

            </motion.ul>

            <motion.ul initial="hidden" whileInView="visible" 
            viewport={{once:true, amount:0}}
            className={styles.rightUl}>


                <motion.li variants={variants} custom={1}>
                <TbSteeringWheel size={32}/>
                <span>
                    Preço de entrada no mundo Ferrari
                </span>
                </motion.li>
                <motion.li variants={variants} custom={2}>
                <TbSteeringWheel size={32}/>
                <span>
                    Visibilidade traseira revolucionária
                </span>
                </motion.li>
                <motion.li variants={variants} custom={3}>
                <TbSteeringWheel size={32}/>
                <span>Chassis de alumínio space-frame</span>
                </motion.li>
                <motion.li variants={variants} custom={4}>
                <TbSteeringWheel size={32}/>
                <span>Apreciação garantida</span>
                </motion.li>

            </motion.ul>

            </motion.div>

        </section>

    )

}

export default SectionProduct