"use client";

import { motion } from "framer-motion";

export default function Floating({
    children,
    delay = 0
}: {
    children: React.ReactNode,
    delay?: number
}) {
    return (
        <motion.div
            className="absolute inset-0 w-full h-full"
            animate={{
                y: [-4, 4, -4], // Trôi lên xuống nhẹ nhàng 
                rotate: [-1.5, 1.5, -1.5] // Lắc lư cực nhẹ 0.5 độ
            }}
            transition={{
                duration: 4, // Thời gian hoàn thành 1 chu kỳ (giây)
                repeat: Infinity, // Lặp lại vô hạn
                ease: "easeInOut", // Chuyển động mượt ở 2 đầu
                delay: delay // Độ trễ để các chữ không rung cùng một nhịp
            }}
        >
            {children}
        </motion.div>
    );
}