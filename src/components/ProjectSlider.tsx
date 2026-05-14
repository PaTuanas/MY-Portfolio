"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CloudinaryImage from "./CloudinaryImage";

const variants = {
    enter: (direction: number) => {
        return {
            x: direction > 0 ? 800 : -800,
            opacity: 0,
            scale: 0.95,
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
        scale: 1,
    },
    exit: (direction: number) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 800 : -800,
            opacity: 0,
            scale: 0.95,
        };
    },
};

// Hàm tính toán lực vuốt (để phân biệt giữa việc chạm nhầm và vuốt thật sự)
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};

export default function ProjectSlider({ images }: { images: string[] }) {
    const [[page, direction], setPage] = useState([0, 0]);

    const imageIndex = Math.abs(page % images.length);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    return (
        <div className="relative w-full aspect-video rounded-2xl md:rounded-4xl overflow-hidden bg-white/40 shadow-xl border-4 border-white/60 group flex items-center justify-center">

            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={page}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                    }}
                    // BẬT TÍNH NĂNG KÉO THẢ (DRAG)
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        // Nếu vuốt mạnh sang trái -> Chuyển ảnh tiếp theo
                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        }
                        // Nếu vuốt mạnh sang phải -> Quay lại ảnh trước đó
                        else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                    className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
                >
                    <CloudinaryImage
                        src={images[imageIndex]}
                        alt={`Project slide ${imageIndex + 1}`}
                        fill
                        className="object-contain pointer-events-none"
                    // Thêm pointer-events-none vào ảnh để tránh lỗi trình duyệt tự động bắt sự kiện kéo ảnh mặc định
                    />
                </motion.div>
            </AnimatePresence>

            {/* NÚT BẤM TRÁI (PREV) */}
            <button
                className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/80 text-[#e84976] flex items-center justify-center shadow-lg hover:bg-[#e84976] hover:text-white transition-colors z-10 backdrop-blur-sm opacity-0 group-hover:opacity-100 duration-300"
                onClick={() => paginate(-1)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>

            {/* NÚT BẤM PHẢI (NEXT) */}
            <button
                className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/80 text-[#e84976] flex items-center justify-center shadow-lg hover:bg-[#e84976] hover:text-white transition-colors z-10 backdrop-blur-sm opacity-0 group-hover:opacity-100 duration-300"
                onClick={() => paginate(1)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>

            {/* DẤU CHẤM TRANG */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                {images.map((_, idx) => (
                    <div
                        key={idx}
                        className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${idx === imageIndex ? "bg-[#e84976] w-6 md:w-8" : "bg-white/60"
                            }`}
                    />
                ))}
            </div>

        </div>
    );
}