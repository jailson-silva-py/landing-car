import SectionProduct from "@/components/SectionProduct/SectionProduct";
import styles from "./page.module.css";
import SectionColors from "@/components/SectionColors/SectionColors";
import SectionCompany from "@/components/SectionCompany/SectionCompany";


export default function Home() {

  

  return (
    <div className={styles.page}>
    <video src="/video-ferrari.mp4" autoPlay 
        loop className={styles.productVideo}
        muted playsInline/>
     <article className={styles.contentSections}>
      <SectionProduct/>
      <SectionColors/>
      <SectionCompany/>


     </article>
    </div>
  );
}
