"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import CloudinaryImage from "./CloudinaryImage";

export default function InteractiveCamera({
    cameraFrameUrl,
    images
}: {
    cameraFrameUrl: string;
    images: string[]
}) {
    const [index, setIndex] = useState(0);
    const [isBlack, setIsBlack] = useState(false);

    const handleCapture = () => {
        if (isBlack) return; // Tránh bấm liên tục khi đang chớp đen

        // 1. Chớp màn hình đen
        setIsBlack(true);

        // 2. Chờ 300ms rồi đổi ảnh và sáng lại
        setTimeout(() => {
            setIndex((prev) => (prev + 1) % images.length);
            setIsBlack(false);
        }, 300);
    };

    return (
        <div
            className="relative w-full aspect-video cursor-pointer group"
            onClick={handleCapture}
        >
            {/* KHU VỰC 1: MÀN HÌNH BÊN TRONG (Hiển thị ảnh) */}
            {/* Các chỉ số inset-[12%] hay inset-[15%] cần được bạn điều chỉnh 
          sao cho vừa khít với cái lỗ hổng (màn hình) của tấm ảnh khung máy ảnh bạn sẽ cắt */}
            <div className="absolute inset-[15%] bg-black rounded-sm md:rounded-md overflow-hidden z-0">
                <motion.div
                    animate={{ opacity: isBlack ? 0 : 1 }}
                    transition={{ duration: 0.2 }}
                    className="w-full h-full relative"
                >
                    <CloudinaryImage
                        src={images[index]}
                        alt={`Camera view ${index + 1}`}
                        fill
                        className="object-cover"
                    />
                </motion.div>
            </div>

            {/* KHU VỰC 2: KHUNG MÁY ẢNH (Phủ lên trên cùng) */}
            {/* Tấm ảnh này phải được đục lỗ trong suốt ở phần màn hình */}
            <div className="absolute inset-0 z-10 pointer-events-none drop-shadow-xl transition-transform duration-300 group-hover:scale-[1.02]">
                <CloudinaryImage
                    src={cameraFrameUrl}
                    alt="Digital Camera Frame"
                    fill
                    className="object-contain"
                />
            </div>

            {/* Nút gợi ý bấm (Chỉ hiện nhấp nháy mờ mờ để người dùng biết có thể chạm) */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs md:text-sm font-bold text-pink-500 animate-bounce">
                Tap to capture 📸
            </div>
        </div>
    );
}