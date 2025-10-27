"use client";
import { IconType } from 'react-icons'
import styles from './Card.module.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import TextPlugin from 'gsap/TextPlugin'

interface Iprops {

    text:string,
    title:string,
    Icon:IconType,
    newClass:string

}

gsap.registerPlugin(TextPlugin)
gsap.registerPlugin(useGSAP)

const Card = ({title, text, Icon, newClass}:Iprops) => {

   
    useGSAP(() => {
        const cardActual = document.querySelector(`.${newClass}`)!
        const titleActual = cardActual.querySelector(
            `.${styles.cardTitleText}`)
        const descriptionActual = cardActual.querySelector(`.${styles.cardDescription}`)
        const cardInter = new IntersectionObserver((entries) => {

            entries.forEach((element) => {

                if (element.isIntersecting) {
                    
                    gsap.to(titleActual, {

                    text:{

                        value:title,

                    },
                    duration:.5
                    })

                    gsap.to(descriptionActual, {

                    text:{

                        value:text,
                        speed:2

                    },
                 
                   

                    })
                    
                    // cardInter.unobserve(element.target)

                }

            })

        }, {threshold:0.5})
        
        cardInter.observe(cardActual)

    })

    return (

        <div className={`${styles.card} ${newClass}`}>

            <div className={styles.cardTitle}>
                 <Icon size={32}/>
                 <span className={styles.cardTitleText}>
                    
                </span>
            </div>
              
            <p className={styles.cardDescription}>


            </p>

        </div>

    )

}

export default Card