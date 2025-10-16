"use client";

import { useState, useCallback, useRef, useEffect } from 'react';
import Link  from 'next/link'
import styles from './NavBar.module.css'
import {motion} from 'framer-motion'
import { HiOutlineX } from 'react-icons/hi';
import { CiMenuFries } from 'react-icons/ci';
import { Arapey } from 'next/font/google';

const items = [

    
    {name:'Product', id:'#product'},
    {name:'Brand',id:'#brand'},
    {name:'Company', id:'#company'},
    {name:'About', id:'#about'},
]



const NavBar = () => {

    const [isMobile, setIsMobile] = useState(false)
    const [hoveredItem, 
        setHoveredItem] = useState<null | string>(null)
    const [openDropdown, setOpenDropdown] = useState(false)
    const props = {onClick:() => setOpenDropdown(false)}

    const ListItems = useCallback(({underline=true}) => {

       const props:{onClick?:() => void} = {}
    
       openDropdown ? props.onClick = () => setOpenDropdown(false):null

       return  (
    <>

    <li className={styles.logoContent}>
        <Link className={styles.logoContent} href="/" replace>
        FexLuxAuto
        </Link>
    </li>

    {items.map(item => (

    <li key={item.id} {...props}
    onMouseEnter={() => {setHoveredItem(item.id)}}
    onMouseLeave={() => setHoveredItem(null)}>

        <Link href={item.id} replace>{item.name}</Link>

        { underline && hoveredItem === item.id &&

        <motion.div layoutId='underline'
        className={styles.underline} initial={{width:0}} 
        animate={{width:'100%'}}
        transition={{type:"spring", duration:0.4}}/> 

        }

    </li>


    ))}

    <motion.li whileTap={{scale:1.02} }  {...props}
    whileHover={{scale:0.98}}>

    <Link href="#book-a-call" replace>Book a call</Link>

    </motion.li>

    </>)}, [hoveredItem])

    return (

    <nav className={styles.menuContent}>

        

        <ul className={styles.menu}>
        
        <ListItems/>
        </ul>

        <div className={styles.dropdownMenuContent}>
        
        <Link className={styles.logoContent}
        href="/" replace>
        FexLuxAuto
        </Link>

        <motion.button whileHover={{scale:1.1}} 
        onClick={() => setOpenDropdown(true)}>
    
            <CiMenuFries size={32}  className={styles.iconMenu}/>

        </motion.button>

        {openDropdown && 
        
        <motion.ul initial={{height:0, opacity:.5}}
        animate={{height:'100%', opacity:1}}
        exit={{height:0, opacity:.4}}
        transition={{duration:2, type:"spring"}}
        className={styles.dropdownMenu}>
            <div className={styles.iconCloseContent}>
                <button className={styles.btnCloseDropdown}
                onClick={() => {setOpenDropdown(false)}}>
                <HiOutlineX size={32}/>
                </button>

            </div>

            <ListItems underline={false}/>
        
        </motion.ul>}

        </div>

    </nav>

    )

}

export default NavBar