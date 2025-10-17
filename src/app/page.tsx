import SectionProduct from "@/components/SectionProduct/SectionProduct";
import styles from "./page.module.css";


export default function Home() {

  

  return (
    <div className={styles.page}>
    <video src="/video-ferrari.mp4" autoPlay 
        loop className={styles.productVideo}
        muted playsInline/>
     <article className={styles.contentSections}>
      <SectionProduct/>


     </article>
    </div>
  );
}
