"use client";

import { motion } from "framer-motion";

export default function TradingCardMobile({ children, rotate = 0 }: { children: React.ReactNode; rotate?: number; }) {
    return (
        <motion.div
            initial={{ rotate: rotate, y: 30, opacity: 0.6, scale: 0.95 }}
            whileInView={{ rotate: 0, y: 0, opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200, damping: 20 } }}
            viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
            className="relative w-full aspect-[3/4] rounded-3xl group shadow-md"
        >
            <div className="absolute inset-0 z-20 pointer-events-none rounded-3xl overflow-hidden" style={{ maskImage: "radial-gradient(ellipse at center, transparent 45%, black 80%)", WebkitMaskImage: "radial-gradient(ellipse at center, transparent 45%, black 80%)" }}>
                <motion.div
                    initial={{ x: "-150%" }}
                    whileInView={{ x: "250%" }}
                    transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
                    viewport={{ once: false, margin: "-20% 0px" }}
                    className="absolute top-0 w-[150%] h-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent -rotate-45"
                />
            </div>
            <div className="absolute inset-0 z-10 rounded-3xl overflow-hidden bg-white/50 backdrop-blur-sm">{children}</div>
        </motion.div>
    );
}