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
                scale: 1.5, // Tăng scale lớn hẳn lên
                rotate: 0, // Đứng thẳng lại
                y: -30, // Nhích lên cao hơn
                zIndex: 50, // QUAN TRỌNG: Nổi đè lên các thẻ xung quanh
                transition: { type: "spring", stiffness: 500, damping: 25 }
            }}

            // Thêm relative z-0 mặc định để zIndex khi hover hoạt động
            className="relative z-0 w-full aspect-3/4 rounded-3xl cursor-pointer group shadow-sm hover:shadow-2xl transition-all duration-300"
        >
            {/* Lớp mặt nạ ánh sáng */}
            <div
                className="absolute inset-0 z-20 pointer-events-none rounded-3xl overflow-hidden"
                style={{
                    maskImage: "radial-gradient(ellipse at center, transparent 45%, black 80%)",
                    WebkitMaskImage: "radial-gradient(ellipse at center, transparent 45%, black 80%)"
                }}
            >
                <div className="absolute top-0 left-[-150%] w-[150%] h-[150%] bg-linear-to-r from-transparent via-white/30 to-transparent -rotate-45 group-hover:translate-x-[250%] transition-transform duration-1000 ease-in-out" />
            </div>

            {/* Nội dung ảnh */}
            <div className="absolute inset-0 z-10 rounded-3xl overflow-hidden bg-white/50 backdrop-blur-sm">
                {children}
            </div>

        </motion.div>
    );
}