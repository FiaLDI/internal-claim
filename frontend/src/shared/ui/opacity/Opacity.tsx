"use client";
import { motion } from "framer-motion";
import { IComponentProps } from "./interface";

export const Opacity = (props: IComponentProps) => {

    return (
        <motion.div
            initial={{opacity: 0, top: 10}}
            animate={{opacity: 1, top: 0}}
            transition={{duration: 0.5}}
            className="absolute"
        >
            {props.children}
        </motion.div>
    )
}