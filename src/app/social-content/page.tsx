"use client";

import Navbar from "@/components/Navbar";
import FadeIn from "@/components/FadeIn";
import CloudinaryImage from "@/components/CloudinaryImage";

export default function SocialContentPage() {
    const socialImages = [
        "https://res.cloudinary.com/dyavs1cdn/image/upload/v1779006630/Cover_ol0gxx.png",
        "https://res.cloudinary.com/dyavs1cdn/image/upload/v1779006631/Page1_jekkvy.png",
        "https://res.cloudinary.com/dyavs1cdn/image/upload/v1779006631/Page2_mjm1wv.png",
        "https://res.cloudinary.com/dyavs1cdn/image/upload/v1779006632/Page3_jni6qf.png",
        "https://res.cloudinary.com/dyavs1cdn/image/upload/v1779006632/Page4_kieeak.png",
        "https://res.cloudinary.com/dyavs1cdn/image/upload/v1779006632/Page5_a5xcnq.png",
        "https://res.cloudinary.com/dyavs1cdn/image/upload/v1779006633/Page6_se3wil.png",
    ];

    return (
        <div className="flex min-h-screen">
            <Navbar />

            <main className="flex-1 w-full pt-28 pb-24 px-4 md:px-8 max-w-6xl mx-auto">

                {/* Header */}
                <FadeIn>
                    <div className="mb-16 md:mb-24 flex flex-col items-center">
                        <h1 className="text-5xl md:text-7xl font-spray tracking-wide text-[#e84976] mb-4 text-center">
                            Social Content
                        </h1>
                        <p className="text-center text-[#2d4669] text-base md:text-xl font-medium max-w-2xl">
                            Data-driven creative content and community engagement strategies managed across social platforms.
                        </p>
                    </div>
                </FadeIn>

                {/* Gallery xếp dọc */}
                <div className="flex flex-col gap-12 md:gap-24 items-center">
                    {socialImages.map((src, index) => (
                        <FadeIn key={index} className="w-full max-w-5xl">
                            <div className="relative w-full aspect-video md:aspect-16/8 rounded-xl md:rounded-4xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/50 bg-white/40 backdrop-blur-sm group">
                                <CloudinaryImage
                                    src={src}
                                    alt={`Social content detail ${index + 1}`}
                                    fill
                                    className="object-contain p-2 md:p-4 transition-transform duration-700 group-hover:scale-[1.02]"
                                    priority={index < 2}
                                />
                            </div>
                        </FadeIn>
                    ))}
                </div>

            </main>
        </div>
    );
}