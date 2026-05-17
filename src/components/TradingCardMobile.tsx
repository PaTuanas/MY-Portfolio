"use client";

import { motion } from "framer-motion";

export default function TradingCardMobile({
    children,
}: {
    children: React.ReactNode;
    rotate?: number;
}) {
    return (
        <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 200, damping: 20 } }}
            viewport={{ once: true, margin: "-10% 0px" }}
            className="relative w-full aspect-3/4 rounded-3xl group"
        >
            <div className="absolute inset-0 z-20 pointer-events-none rounded-3xl overflow-hidden" style={{ maskImage: "radial-gradient(ellipse at center, transparent 45%, black 80%)", WebkitMaskImage: "radial-gradient(ellipse at center, transparent 45%, black 80%)" }}>
                <motion.div
                    initial={{ x: "-150%" }}
                    whileInView={{ x: "250%" }}
                    transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
                    viewport={{ once: false }}
                    className="absolute top-0 w-[150%] h-[150%]"
                />
            </div>
            <div className="absolute inset-0 z-10 rounded-3xl overflow-hidden">{children}</div>
        </motion.div>
    );
}