"use client";

import { motion } from "framer-motion";

export default function Sticker({
    children,
    className = ""
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ scale: 1.05, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className={`relative w-full cursor-pointer ${className}`}
        >
            {children}
        </motion.div>
    );
}