import { IconType } from "react-icons"
import styles from './ButtonBuy.module.css'
import { HTMLAttributes } from "react"

interface Iprops {

    Icon: IconType,
    absPos?:boolean
}

const ButtonBuy  = ({Icon,  absPos=false,...props}:Iprops) => {

    return (
        <button className={`${styles.btnBuyNow}
        ${absPos ? styles.abs: ''}`} {...props}>
           

          <span>Buy now</span>
          <Icon size={24}/>
        
        </button>

    )

}

export default ButtonBuy