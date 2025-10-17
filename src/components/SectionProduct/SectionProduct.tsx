"use client";
import styles from './SectionProduct.module.css'
import { Lobster_Two, Kavoon } from 'next/font/google'
import { motion } from 'framer-motion'
import { HiOutlineArrowRight } from 'react-icons/hi';
import { useRouter } from 'next/navigation';

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

    return (

        <section id="product" className={styles.product}>

            <div className={styles.introduction}>
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
            transition={{type:'tween'}}
            className={styles.btnProductModels}>
                <span>Ver modelos</span>
                
                <HiOutlineArrowRight size={16}/>
                
            </motion.button>

            </div>
            <div id="product-models" className={styles.productModels}>
            <div className={styles.pictureContent}>
            <picture className={styles.pictureSvg}>

                <img src="/ferrari.gif" alt="Ferrari rotation" />

            </picture>

            <p className={`${styles.productModelsText} ${kavoon.className}`}>

                ACELERE SEU SUCESSO. DOMINE A PISTA DA VIDA.
                NÃO VENDEMOS CARROS, VENDEMOS A LIBERDADE PARA
                VOAR.

            </p>
            </div>

            </div>

        </section>

    )

}

export default SectionProduct