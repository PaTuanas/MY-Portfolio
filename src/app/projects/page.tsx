import Navbar from "@/components/Navbar";
import FadeIn from "@/components/FadeIn";
import CloudinaryImage from "@/components/CloudinaryImage";

export default function ProjectsPage() {
    const projectImages = [
        "https://res.cloudinary.com/dyavs1cdn/image/upload/v1778776588/Project_gzcnmd.png",
        "https://res.cloudinary.com/dyavs1cdn/image/upload/v1778776588/Project_1_e5gvz4.png",
        "https://res.cloudinary.com/dyavs1cdn/image/upload/v1778776588/Project_2_vwtq0t.png",
        "https://res.cloudinary.com/dyavs1cdn/image/upload/v1778777604/Project_3_ejypbh.png",
        "https://res.cloudinary.com/dyavs1cdn/image/upload/v1778777604/Project_4_zwgsmz.png",
        "https://res.cloudinary.com/dyavs1cdn/image/upload/v1778777604/Project_5_lm1t2a.png",
        "https://res.cloudinary.com/dyavs1cdn/image/upload/v1778777606/Project_6_vyfgt7.png",
        "https://res.cloudinary.com/dyavs1cdn/image/upload/v1778777606/Project_7_ing92f.png",
        "https://res.cloudinary.com/dyavs1cdn/image/upload/v1778777606/Project_8_as7nj1.png",
        "https://res.cloudinary.com/dyavs1cdn/image/upload/v1778777605/Project_9_lsubwv.png",
        "https://res.cloudinary.com/dyavs1cdn/image/upload/v1778777606/Project_10_vgdvyq.png",
        "https://res.cloudinary.com/dyavs1cdn/image/upload/v1778777606/Project_11_ox4ln5.png",
        "https://res.cloudinary.com/dyavs1cdn/image/upload/v1778777606/Project_12_sr3nhe.png",
        "https://res.cloudinary.com/dyavs1cdn/image/upload/v1778777606/Project_13_zmrl6m.png",
        "https://res.cloudinary.com/dyavs1cdn/image/upload/v1778777607/Project_14_hwbkoj.png",
        "https://res.cloudinary.com/dyavs1cdn/image/upload/v1778777607/Project_15_hcmsym.png",
        "https://res.cloudinary.com/dyavs1cdn/image/upload/v1778777607/Project_16_lxsow2.png",
        "https://res.cloudinary.com/dyavs1cdn/image/upload/v1778777607/Project_17_rokngy.png",
    ];

    return (
        <div className="flex min-h-screen">
            <Navbar />

            {/* Main Content */}
            <main className="flex-1 w-full pt-28 pb-24 px-4 md:px-8 max-w-6xl mx-auto">

                {/* Header Trang Projects */}
                <FadeIn>
                    <div className="mb-8 md:mb-12 flex flex-col items-center">
                        <h1 className="text-5xl md:text-7xl font-spray tracking-wide text-[#e84976] mb-4 text-center">
                            All Projects
                        </h1>
                        <p className="text-center text-[#3a5d8f] text-base md:text-xl font-medium max-w-2xl">
                            Scroll down to explore the details of each event and campaign.
                        </p>
                    </div>
                </FadeIn>

                {/* Danh sách ảnh xếp dọc */}
                <div className="flex flex-col gap-6 md:gap-12 items-center">
                    {projectImages.map((src, index) => (
                        <FadeIn key={index} className="w-full max-w-5xl">
                            {/* Thiết kế: Khung thẳng đứng (rotate-0), bo tròn đều, 
                  đổ bóng sang trọng, có viền mảnh để tách bạch nội dung khỏi nền 
              */}
                            <div className="relative w-full aspect-video md:aspect-16/8 rounded-xl md:rounded-4xl overflow-hidden shadow-[0_20px_50px_rgba(8,112,184,0.1)] border border-white/50 bg-white/40 backdrop-blur-sm group">
                                <CloudinaryImage
                                    src={src}
                                    alt={`Project slide ${index + 1}`}
                                    fill
                                    // Dùng object-contain để giữ trọn vẹn slide, không bị cắt xén
                                    className="object-contain p-2 md:p-4 transition-transform duration-700 group-hover:scale-[1.02]"
                                    priority={index < 2} // Ưu tiên load nhanh 2 ảnh đầu tiên
                                />
                            </div>
                        </FadeIn>
                    ))}
                </div>

            </main>
        </div>
    );
}