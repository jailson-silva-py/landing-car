"use client"
import styles from "./page.module.css";
import SectionProduct from "@/components/SectionProduct/SectionProduct";
import SectionCompany from "@/components/SectionCompany/SectionCompany";
import SectionColors from "@/components/SectionColors/SectionColors";
import SectionAbout from "@/components/SectionAbout/SectionAbout";


export default function Home() {

 



  return (
    <div className={`content ${styles.page}`}>

    <SectionProduct/>  
    <SectionColors/>
    <SectionCompany/>
    <SectionAbout/>

    </div>

    
  );
}
