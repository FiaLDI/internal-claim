"use client";

import { useTransform } from "framer-motion";
import { THEMES } from "./background.config";
import { IComponentProps } from "../ui/AnimatedBackground";

export const useAnimatedBackground = ({index, progress, projectsProgress}: IComponentProps) => {
    const theme = THEMES[index % THEMES.length];

    const scale = useTransform(progress, [0, 1], [1, 1.2]);
    const opacity = useTransform(progress, [0, 1], [0.25, 0.45]);

    const projectsGlow = useTransform(
        projectsProgress,
        [0, 1],
        [0.25, 0.6]
    );

    const projectsScale = useTransform(
        projectsProgress,
        [0, 1],
        [1, 1.35]
    );
    return {theme, scale, opacity, projectsGlow, projectsScale};
}