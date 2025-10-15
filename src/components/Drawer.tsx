"use client";
import { motion } from "framer-motion"

const Drawer = () => {

     const draw = {

        hidden: {

      pathLength:0,
      opacity:0

        },
        visible:(i:number) => {

      return {

        pathLength:1,
        opacity:1,
        transition: {

          pathLength: {delay: i * 0.3, type:'spring', duration:1.5, bounce:0},
          opacity: {delay:i*0.3, duration:0.01}

        } 

      } as any

    } }

    return (

    <>

    <motion.svg
            width="800"
            height="800"
            viewBox="0 0 800 800"
            initial="hidden"
            animate="visible"
            style={{ maxWidth: "80vw" }}
        >
            <motion.circle
                cx="100"
                cy="100"
                r="80"
                stroke="#FF0055"
                variants={draw}
                custom={1}
                style={{
                    strokeWidth: 10,
                    strokeLinecap: "round",
                    fill: "transparent",
                }}
            />
            <motion.line
                x1="220"
                y1="30"
                x2="300"
                y2="120"
                stroke="#7700FF"
                variants={draw}
                custom={2}
                style={{
                    strokeWidth: 10,
                    strokeLinecap: "round",
                    fill: "transparent",
                }}
            />
            <motion.line
                x1="300"
                y1="30"
                x2="220"
                y2="120"
                stroke="#684c88ff"
                variants={draw}
                custom={2}
                style={{
                    strokeWidth: 10,
                    strokeLinecap: "round",
                    fill: "transparent",
                }}
            />
            
        </motion.svg>

        </>

    )

}

export default Drawer