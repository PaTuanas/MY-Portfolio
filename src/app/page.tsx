import { getAllProjectsMeta } from "@/lib/mdx";
import Navbar from "@/components/Navbar";
import FadeIn from "@/components/FadeIn";
import CloudinaryImage from "@/components/CloudinaryImage";
import Floating from "@/components/Floating";
import Sticker from "@/components/Sticker";

export default function Home() {
  const projects = getAllProjectsMeta();

  return (
    <div className="flex min-h-screen">
      <Navbar />

      <main className="flex-1 w-full overflow-hidden">

        <section id="hero" className="w-full flex flex-col px-0">
          <FadeIn className="w-full">

            <div className="relative w-full h-70 md:h-[50vh] xl:h-[85vh] overflow-hidden">

              {/* LỚP 1: CÁC MẢNG JEAN TRANG TRÍ (DÙNG OBJECT-COVER ĐỂ TRÀN VIỀN) */}
              <div className="absolute inset-0 z-0 pointer-events-none mt-16">
                <CloudinaryImage
                  src="https://res.cloudinary.com/dyavs1cdn/image/upload/v1778645989/Portfolio_compo2_jnvmjd.png"
                  alt="Decor Left"
                  fill
                  // Ép mảng Jean trái tràn màn hình và bám chặt lề trái
                  className="object-cover object-left"
                  priority
                />
                <CloudinaryImage
                  src="https://res.cloudinary.com/dyavs1cdn/image/upload/v1778645989/Portfolio_compo3_ifdlcu.png"
                  alt="Decor Right"
                  fill
                  // Ép mảng Jean phải bám chặt góc phải dưới
                  className="object-cover object-bottom-right"
                />
                <CloudinaryImage
                  src="https://res.cloudinary.com/dyavs1cdn/image/upload/v1778645989/Portfolio_compo1_ehoqcw.png"
                  alt="Decor Star"
                  fill
                  // Ép Ngôi sao bám chặt góc phải trên
                  className="object-cover object-top-right"
                />
              </div>

              {/* LỚP 2, 3, 4: CÔ GÁI & TEXT (DÙNG OBJECT-CONTAIN ĐỂ GIỮ CHUẨN TỈ LỆ KHÔNG BỊ CẮT) */}
              <div className="absolute inset-0 z-10 pointer-events-none">
                <Floating delay={0}>
                  <CloudinaryImage
                    src="https://res.cloudinary.com/dyavs1cdn/image/upload/v1778645989/Portfolio_compo4_bqpl5f.png"
                    alt="Text POR"
                    fill
                    className="object-contain object-center"
                    priority
                  />
                </Floating>
              </div>

              <div className="absolute inset-0 z-20 pointer-events-none">
                <CloudinaryImage
                  src="https://res.cloudinary.com/dyavs1cdn/image/upload/v1778645989/Portfolio_compo6_nwcrf4.png"
                  alt="Võ Uyển My"
                  fill
                  className="object-contain object-center mt-8"
                  priority
                />
              </div>

              <div className="absolute inset-0 z-30 pointer-events-none">
                <Floating delay={1}>
                  <CloudinaryImage
                    src="https://res.cloudinary.com/dyavs1cdn/image/upload/v1778645989/Portfolio_compo5_y6leyt.png"
                    alt="Text TFOLIO"
                    fill
                    className="object-contain object-center"
                    priority
                  />
                </Floating>
              </div>

              {/* LỚP 5: TEXT 2026 & EVENT MARKETING */}
              <div className="absolute bottom-2 sm:bottom-4 md:bottom-[8%] left-0 w-full z-40 flex justify-between items-end px-[5%] md:px-[15%] lg:px-[20%]">
                <span className="text-pink-600 font-bold tracking-widest border border-pink-300 px-2 md:px-3 py-1 rounded text-[10px] sm:text-xs md:text-sm bg-[#f7e9c3]/30 backdrop-blur-sm">
                  2026
                </span>
                <span className="text-pink-600 font-bold tracking-[0.2em] sm:tracking-[0.4em] md:tracking-[0.6em] text-[8px] sm:text-[10px] md:text-xs lg:text-sm border-b border-t border-pink-300 py-1 bg-[#f7e9c3]/30 backdrop-blur-sm">
                  EVENT MARKETING
                </span>
              </div>

            </div>
          </FadeIn>
        </section>

        {/* Updated Page Title and Description */}
        <section id="about" className="py-10 md:py-16 px-6 md:px-12 lg:px-24 w-full max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-extrabold text-center mb-16 tracking-wide text-[#e84976]">
              Who Am I?
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Cột trái: Máy ảnh 3D */}
            <div className="w-full max-w-md lg:max-w-lg mx-auto flex flex-col items-center">

              <Sticker className="aspect-video">
                <CloudinaryImage
                  src="https://res.cloudinary.com/dyavs1cdn/image/upload/v1778659649/Portfolio_compo7_tb2vty.png"
                  alt="Digital Camera Profile"
                  fill
                  className="object-contain drop-shadow-xl scale-[1.2] pointer-events-none"
                />
              </Sticker>

              <p className="text-center text-[#2d4669]/60 text-xs mt-10 md:mt-16 font-mono">
                Capturing moments...
              </p>
            </div>

            {/* Cột phải: Text giới thiệu */}
            <FadeIn delay={0.4}>
              <div className="space-y-6 text-[#2d4669] text-base md:text-xl leading-relaxed font-medium">
                <p>
                  Hello, my name is <strong className="font-bold">Uyển My</strong>, but you can also call me <strong className="font-bold">Mimi</strong>.
                </p>
                <p>
                  As an outgoing and communicative Event Marketing, I easily build strong connections with both clients and partners.
                </p>
                <p>
                  Backed by confidence and negotiation skills, I am committed to bringing practical and sustainable value to your organization. I am always eager to learn, adapt, and embrace new experiences to create impactful projects.
                </p>
              </div>
            </FadeIn>

          </div>
        </section>

        {/* =========================================
            SECTION: EDUCATION
            ========================================= */}
        <section id="education" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 w-full max-w-7xl mx-auto">

          {/* Tiêu đề & Icon Hoa */}
          <FadeIn>
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-16 md:mb-24">
              <div className="relative w-10 h-10 md:w-14 md:h-14">
                <CloudinaryImage
                  src="https://res.cloudinary.com/dyavs1cdn/image/upload/v1778664663/Portfolio_compo9_chaahj.png"
                  alt="Flower Decor"
                  fill
                  className="object-contain drop-shadow-md"
                />
              </div>
              <h2 className="text-5xl md:text-7xl font-extrabold tracking-wide text-[#e84976]">
                Education
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-20 items-center">

            {/* CỘT TRÁI: TIMELINE */}
            <FadeIn delay={0.2} className="relative w-full">

              <div className="absolute left-5 md:left-6 top-0 bottom-0 w-0.5 bg-[#2d4669] -translate-x-1/2 z-0"></div>

              <div className="absolute left-5 md:left-6 top-0 w-3.5 h-3.5 border-2 border-[#2d4669] bg-[#f7e9c3] rotate-45 -translate-x-1/2 -translate-y-1/2 z-10"></div>
              <div className="absolute left-5 md:left-6 bottom-0 w-3.5 h-3.5 border-2 border-[#2d4669] bg-[#f7e9c3] rotate-45 -translate-x-1/2 translate-y-1/2 z-10"></div>

              <div className="space-y-16 py-10">

                {/* Cột mốc 1: Thạc sĩ */}
                <div className="relative z-10 flex gap-6 md:gap-8 items-start group">
                  <div className="w-10 md:w-12 shrink-0 flex justify-center mt-4">
                    <div className="relative w-10 h-10 md:w-12 md:h-12 bg-[#f7e9c3] flex items-center justify-center rounded-full border-2 border-transparent group-hover:border-pink-400 group-hover:scale-110 transition-all duration-300">
                      <CloudinaryImage
                        src="https://res.cloudinary.com/dyavs1cdn/image/upload/v1778664937/Portfolio_compo10_t39nyd.png"
                        alt="Graduation Cap"
                        fill
                        className="object-contain p-1.5 drop-shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="flex-1 text-[#2d4669]">
                    <p className="text-right text-sm md:text-base font-semibold opacity-70 font-mono">
                      2024 - Present
                    </p>
                    <h3 className="text-xl md:text-2xl font-extrabold mb-1 group-hover:text-[#e84976] transition-colors">
                      MBA- Master of Business Administration
                    </h3>
                    <p className="text-base md:text-lg font-medium opacity-80">
                      Van Lang University
                    </p>
                  </div>
                </div>

                {/* Cột mốc 2: Cử nhân */}
                <div className="relative z-10 flex gap-6 md:gap-8 items-start group">
                  {/* Cột cố định chứa Icon */}
                  <div className="w-10 md:w-12 shrink-0 flex justify-center mt-4">
                    <div className="relative w-10 h-10 md:w-12 md:h-12 bg-[#f7e9c3] flex items-center justify-center rounded-full border-2 border-transparent group-hover:border-pink-400 group-hover:scale-110 transition-all duration-300">
                      <CloudinaryImage
                        src="https://res.cloudinary.com/dyavs1cdn/image/upload/v1778664937/Portfolio_compo10_t39nyd.png"
                        alt="Graduation Cap"
                        fill
                        className="object-contain p-1.5 drop-shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Nội dung text */}
                  <div className="flex-1 text-[#2d4669]">
                    <p className="text-right text-sm md:text-base font-semibold opacity-70 font-mono">
                      2020 - 2024
                    </p>
                    <h3 className="text-xl md:text-2xl font-extrabold mb-1 group-hover:text-[#e84976] transition-colors">
                      Marketing Management
                    </h3>
                    <p className="text-base md:text-lg font-medium opacity-80">
                      Van Lang University
                    </p>
                    <p className="text-base md:text-lg font-bold mt-2 text-[#e84976]">
                      GPA: 3.10/4
                    </p>
                  </div>
                </div>

              </div>
            </FadeIn>

            {/* CỘT PHẢI: HÌNH LỚN SCRAPBOOK */}
            <div className="w-full max-w-sm lg:max-w-md mx-auto flex flex-col items-center mt-5 lg:mt-0">

              <Sticker className="aspect-4/5">
                <CloudinaryImage
                  src="https://res.cloudinary.com/dyavs1cdn/image/upload/v1778663439/Portfolio_compo8_krakic.png"
                  alt="Graduation Portrait"
                  fill
                  className="object-contain drop-shadow-2xl pointer-events-none scale-[1.8]"
                />
              </Sticker>

            </div>

          </div>
        </section>

        {/* SECTION: DỰ ÁN */}
        <section id="projects" className="py-16 md:py-24 px-6 md:px-12 lg:px-24">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 md:mb-16 border-b border-stone-300 pb-4 text-stone-900">
              Dự án tiêu biểu
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {projects.map((project, index) => (
              <FadeIn key={project.slug} delay={index * 0.2}>
                <div className="group relative rounded-2xl overflow-hidden bg-white/30 hover:bg-white/60 transition-colors border border-stone-300/50 shadow-sm backdrop-blur-sm">
                  <div className="h-56 md:h-64 w-full relative">
                    <CloudinaryImage
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6">
                    <div className="text-sm text-emerald-600 mb-2 font-mono">{project.date}</div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-3 text-stone-900 group-hover:text-stone-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-stone-600">
                      {project.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* SECTION: LIÊN HỆ */}
        <section id="contact" className="min-h-[40vh] py-16 md:py-24 px-6 md:px-12 lg:px-24">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-stone-900">Kết nối với tôi</h2>
            <p className="text-stone-600 text-base md:text-lg">
              Sẵn sàng thảo luận về các chiến dịch marketing hoặc những dự án mới thú vị.
            </p>
          </FadeIn>
        </section>

      </main>
    </div>
  );
}