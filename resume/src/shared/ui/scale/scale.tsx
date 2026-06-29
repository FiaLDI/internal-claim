"use client";
import { motion } from "framer-motion";
import { IComponentProps } from "./interface";

export const Scale = (props: IComponentProps) => {

    return (
        <motion.div
            initial={{ scale: 1.01 }}
            animate={{ scale: 1 }}
            transition={{
                duration: 1,
            }}
            className={props.className}
        >
            {props.children}
        </motion.div>

    )
}