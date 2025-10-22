"use client"
import styles from "./page.module.css";
import { Canvas } from "@react-three/fiber";
import Ferrari from "@/components/FerrariModel/FerrariModel";
import { Suspense } from "react";
import { ContactShadows, Environment, Lightformer, OrbitControls } from "@react-three/drei";
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
