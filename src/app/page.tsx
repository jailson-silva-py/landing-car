import styles from "./page.module.css";
import dynamic from "next/dynamic";

const SectionProduct = dynamic(() => import("@/components/SectionProduct/SectionProduct"))
const SectionCompany = dynamic(() => import("@/components/SectionCompany/SectionCompany"))
const SectionColors = dynamic(() => import("@/components/SectionColors/SectionColors"))
const SectionAbout = dynamic(() => import("@/components/SectionAbout/SectionAbout"))



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
