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
        if (isBlack) return; // Chống spam click

        // 1. Chớp đen màn hình
        setIsBlack(true);

        // 2. Chờ 250ms (như tiếng tách của máy ảnh) rồi đổi ảnh
        setTimeout(() => {
            setIndex((prev) => (prev + 1) % images.length);
            setIsBlack(false);
        }, 250);
    };

    return (
        <div
            className="relative w-full aspect-video cursor-pointer group touch-manipulation drop-shadow-xl transition-transform duration-300 active:scale-95"
            onClick={handleCapture}
        >
            {/* KHU VỰC 1: MÁY ẢNH GỐC (Nằm dưới cùng - z-0) */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <CloudinaryImage
                    src={cameraFrameUrl}
                    alt="Digital Camera Frame"
                    fill
                    className="object-contain"
                />
            </div>

            {/* KHU VỰC 2: MÀN HÌNH CHỨA ẢNH (Nằm đè lên trên - z-10) 
                Vì màn hình máy ảnh Sony nằm lệch sang trái, chúng ta dùng inline-style
                để ép 4 góc (top, bottom, left, right) cho vừa khít với cục màu đen.
            */}
            <div
                className="absolute z-10 bg-black overflow-hidden rounded-xs md:rounded-sm"
                style={{
                    // BẠN HÃY TINH CHỈNH 4 CON SỐ % NÀY ĐỂ ẢNH LỌT VỪA KHÍT VÀO MÀN HÌNH NHÉ
                    top: '18%',    // Đẩy từ trên xuống
                    bottom: '22%', // Đẩy từ dưới lên
                    left: '12%',   // Đẩy từ trái sang
                    right: '35%'   // Đẩy từ phải sang (chừa khoảng trống cho cụm nút bấm)
                }}
            >
                <motion.div
                    animate={{ opacity: isBlack ? 0 : 1 }}
                    transition={{ duration: 0.15 }}
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

            {/* Chữ gợi ý */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-bold text-pink-500 animate-bounce whitespace-nowrap">
                Click / Tap to capture 📸
            </div>

        </div>
    );
}