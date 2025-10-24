"use client"
import styles from "./page.module.css";
import SectionProduct from "@/components/SectionProduct/SectionProduct";
import SectionCompany from "@/components/SectionCompany/SectionCompany";


export default function Home() {

 



  return (
    <div className={`content ${styles.page}`}>

    <SectionProduct/>  
    <SectionCompany/>

    </div>

    
  );
}
