"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CloudinaryImage from "./CloudinaryImage";

export default function AutoCamera({
    cameraFrameUrl,
    images
}: {
    cameraFrameUrl: string;
    images: string[]
}) {
    const [index, setIndex] = useState(0);
    const [isBlack, setIsBlack] = useState(false);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setIsBlack(true);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % images.length);
                setIsBlack(false);
            }, 250);
        }, 1500);

        return () => clearInterval(slideInterval);
    }, [images.length]);

    return (
        <div className="relative w-full aspect-video group drop-shadow-xl">

            {/* KHU VỰC 1: MÁY ẢNH GỐC (Nằm dưới cùng - z-0) */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <CloudinaryImage
                    src={cameraFrameUrl}
                    alt="Digital Camera Frame"
                    fill
                    className="object-contain"
                />
            </div>

            {/* KHU VỰC 2: MÀN HÌNH CHỨA ẢNH (Nằm đè lên trên - z-10) */}
            <div
                className="absolute z-10 bg-black overflow-hidden rounded-xs md:rounded-sm"
                style={{
                    top: '23%',
                    bottom: '15.5%',
                    left: '13%',
                    right: '33%'
                }}
            >
                <motion.div
                    animate={{ opacity: isBlack ? 0 : 1 }}
                    transition={{ duration: 0.15 }}
                    className="w-full h-full relative"
                >
                    {/* TRICK PRELOAD: Render toàn bộ ảnh ra nhưng chỉ tấm nào đúng index mới cho hiện opacity-1 */}
                    {images.map((imgSrc, imgIndex) => (
                        <div
                            key={imgSrc}
                            className={`absolute inset-0 transition-opacity duration-0 ${imgIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                        >
                            <CloudinaryImage
                                src={imgSrc}
                                alt={`Camera view ${imgIndex + 1}`}
                                fill
                                // Thêm priority={true} để trình duyệt ưu tiên tải các ảnh này ngay lập tức
                                priority={true}
                                className="object-cover"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>

        </div>
    );
}