"use client";
import { motion } from 'framer-motion'
import styles from './SectionColors.module.css' 
import { useState } from 'react';
import { HiArrowRight } from 'react-icons/hi';

const arrayCars = [

    '/ferrari-red.png',
    '/ferrari-green.png',
    '/ferrari-yellow.png',
    '/ferrari-purple.png',

]

const SectionColors = () => {


    const [radioId, setRadioId] = useState(0)


    return (
    <motion.section id="#colors" className={styles.colors}>
        
        <div className={styles.colorsContent}>
            <p className={styles.titleColors}>Escolha sua cor:</p>
            <motion.img initial={{translateX:-100}}
            animate={{translateX:0}}
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

                <motion.button 
                type="submit" className={styles.btnBuy}>
                    <span>Buy now</span>
                    <HiArrowRight size={16}/>
                </motion.button>

            </form>

        </div>

    </motion.section>   
    )

}

export default SectionColors