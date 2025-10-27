"use client";
import { useState, useCallback } from 'react';
import Link  from 'next/link'
import styles from './NavBar.module.css'
import { HiOutlineX } from 'react-icons/hi';
import { CiMenuFries } from 'react-icons/ci';
import { Big_Shoulders_Stencil } from "next/font/google"

const kapakana = Big_Shoulders_Stencil({

    weight:['100', '100', '300', 
        '400', '500', '600', '700', '900'],
    display:'swap',
    subsets:['latin']

})

const items = [

    
    {name:'Product', id:'#product'},
    {name:'Colors',id:'#colors'},
    {name:'Company', id:'#company'},
    {name:'About', id:'#about'},
]



const NavBar = () => {

    const [hoveredItem, 
        setHoveredItem] = useState<null | string>(null)
    const [openDropdown, setOpenDropdown] = useState(false)

    const ListItems = useCallback(({underline=true}) => {

       const props:{onClick?:() => void} = {}
    
       openDropdown ? props.onClick = () => setOpenDropdown(false):null

       return  (
    <>

    <li className={`${styles.logoContent} ${kapakana.className}`}>
        <Link className={styles.logoContent} href="/" replace>
        FexLuxAuto
        </Link>
    </li>

    {items.map(item => (

    <li key={item.id} {...props}
    onMouseEnter={() => setHoveredItem(item.id)}
    onMouseLeave={() => setHoveredItem(null)}>

        <Link href={item.id} replace>{item.name}</Link>

        { underline && hoveredItem === item.id &&

        <div/> 

        }

    </li>


    ))}

    <li {...props}>

    <Link href="mailto:voce@dominio.com?subject=Agendar%20call&body=Oi,\nQuero agendar seu serviço ...." replace>Book a call</Link>

    </li>

    </>)}, [hoveredItem])

    return (

    <nav className={styles.menuContent}>

        <ul className={styles.menu}>
        
        <ListItems/>
        </ul>

        <div className={styles.dropdownMenuContent}>
        
        <Link className={`${styles.logoContent} ${kapakana.className}`}
        href="/" replace>
        FexLuxAuto
        </Link>

        <button
        onClick={() => setOpenDropdown(true)}>
    
            <CiMenuFries size={32}  className={styles.iconMenu}/>

        </button>

        {openDropdown && 
        
        <ul 
        className={styles.dropdownMenu}>
            <div className={styles.iconCloseContent}>
                <button className={styles.btnCloseDropdown}
                onClick={() => {setOpenDropdown(false)}}>
                <HiOutlineX size={32}/>
                </button>

            </div>

            <ListItems underline={false}/>
        
        </ul>}

        </div>

    </nav>

    )

}

export default NavBar