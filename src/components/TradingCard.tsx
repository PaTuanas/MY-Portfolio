"use client";

import { motion } from "framer-motion";

export default function TradingCard({
    children,
    rotate = 0
}: {
    children: React.ReactNode;
    rotate?: number;
}) {
    return (
        <motion.div
            initial={{ rotate: rotate, y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{
                scale: 1.05,
                rotate: 0,
                y: -15,
                transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
            className="relative w-full aspect-3/4 cursor-pointer group transition-shadow duration-300"
        >

            {/* 
         CHÌA KHÓA: LỚP MẶT NẠ (CSS MASK) 
         Dùng radial-gradient để tạo một vùng "trong suốt" (transparent) chiếm 45% ở ngay giữa tâm thẻ. 
         Vùng "đen" (black) ở viền là nơi ánh sáng được phép hiển thị.
      */}
            <div
                className="absolute inset-0 z-20 pointer-events-none rounded-3xl overflow-hidden"
                style={{
                    maskImage: "radial-gradient(ellipse at center, transparent 45%, black 80%)",
                    WebkitMaskImage: "radial-gradient(ellipse at center, transparent 45%, black 80%)"
                }}
            >
                {/* Vệt sáng quét qua (Đã giảm độ chói xuống white/30) */}
                <div className="absolute top-0 left-[-150%] w-[150%] h-[150%] bg-linear-to-r from-transparent via-white/50 to-transparent -rotate-45 group-hover:translate-x-[250%] transition-transform duration-2000 ease-in-out" />
            </div>

            {/* KHUNG CHỨA ẢNH GỐC */}
            <div className="absolute inset-0 z-10 rounded-3xl overflow-hidden backdrop-blur-sm">
                {children}
            </div>

        </motion.div>
    );
}