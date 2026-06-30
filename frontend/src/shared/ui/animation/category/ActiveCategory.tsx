import { ProjectCategory } from "@/entities/project";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export const ActiveCategory = ({children, category, setActiveCategory, isActive }: {
    children: ReactNode
    category: ProjectCategory, 
    setActiveCategory : (category: ProjectCategory) => void, 
    isActive: boolean }
) => (
    <motion.section
        id={`cat-${category}`}
        onViewportEnter={() => setActiveCategory(category)}
        viewport={{ margin: "-50%" }}
        animate={{ opacity: isActive ? 1 : 0.35 }}
        transition={{ duration: 0.4 }}
        className="relative"
    >
        {children}
    </motion.section>
)
