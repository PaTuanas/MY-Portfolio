"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

export default function MagneticIcon({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);

    // Lưu trữ tọa độ x, y
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Cấu hình độ nảy (spring) - chỉnh mass và damping để tạo cảm giác nặng/nhẹ của icon
    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    // Tính toán lực hút nam châm
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current!.getBoundingClientRect();

        // Tìm điểm tâm của icon
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);

        // Nhân với 0.4 để lực hút vừa phải, không bị bay quá xa
        x.set(middleX * 0.4);
        y.set(middleY * 0.4);
    };

    const handleMouseLeave = () => {
        // Trả về vị trí 0 khi chuột rời đi
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
            // Kết hợp hút nam châm + phóng to nhẹ khi hover
            whileHover={{ scale: 1.15, zIndex: 50 }}
            className="relative cursor-pointer p-2 md:p-4"
        >
            {children}
        </motion.div>
    );
}