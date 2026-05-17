"use client";

import Navbar from "@/components/Navbar";
import FadeIn from "@/components/FadeIn";
import CloudinaryImage from "@/components/CloudinaryImage";
import Floating from "@/components/Floating";
// import Sticker from "@/components/Sticker";
import TradingCard from "@/components/TradingCard";
import MagneticIcon from "@/components/MagneticIcon";
import ProjectSlider from "@/components/ProjectSlider";
import InteractiveCamera from "@/components/InteractiveCamera";
import { motion } from "framer-motion";
import Sticker from "@/components/Sticker";
import TradingCardMobile from "@/components/TradingCardMobile";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Navbar />

      <main className="flex-1 w-full overflow-hidden">

        <section id="hero" className="w-full flex flex-col px-0 md:py-8">
          <FadeIn className="w-full">

            <div className="relative w-full h-70 md:h-[50vh] xl:h-[85vh] overflow-hidden">

              {/* LỚP 1: CÁC MẢNG JEAN TRANG TRÍ (DÙNG OBJECT-COVER ĐỂ TRÀN VIỀN) */}
              <div className="absolute inset-0 z-0 pointer-events-none">
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
                    src="https://res.cloudinary.com/dyavs1cdn/image/upload/v1779002705/Portfolio_compo5_y6leyt.png"
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

        {/* =========================================
            SECTION: WHO AM I
            ========================================= */}
        <section id="about" className="py-5 md:py-8 mb-8 md:mb-20 px-6 md:px-12 lg:px-24 w-full max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex flex-col items-center justify-center mb-10 md:mb-16">

              {/* Hàng 1: Icon Hoa + Tiêu đề */}
              <div className="flex items-center justify-center gap-3 md:gap-4 mb-4">
                <div className="relative w-10 h-10 md:w-14 md:h-14 shrink-0">
                  <CloudinaryImage
                    src="https://res.cloudinary.com/dyavs1cdn/image/upload/v1778664663/Portfolio_compo9_chaahj.png"
                    alt="Flower Decor"
                    fill
                    className="object-contain drop-shadow-md hover:rotate-12 transition-transform"
                  />
                </div>
                <h2 className="text-5xl md:text-7xl font-spray tracking-wide text-[#d7427c] text-center">
                  Who am I
                </h2>
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Cột trái: Máy ảnh */}
            <div className="w-full max-w-md lg:max-w-lg mx-auto flex flex-col items-center">

              <InteractiveCamera
                cameraFrameUrl="https://res.cloudinary.com/dyavs1cdn/image/upload/v1779004163/Portfolio_compo34_xy1xg7.png"
                images={[
                  "https://res.cloudinary.com/dyavs1cdn/image/upload/v1779008922/5_dpmo9a.png",
                  "https://res.cloudinary.com/dyavs1cdn/image/upload/v1779008922/4_lmkg2q.png",
                  "https://res.cloudinary.com/dyavs1cdn/image/upload/v1779008921/1_fxrqfl.png",
                  "https://res.cloudinary.com/dyavs1cdn/image/upload/v1779008920/3_mt5yzt.png",
                  "https://res.cloudinary.com/dyavs1cdn/image/upload/v1779008921/2_nsubs6.png",
                ]}
              />

            </div>

            {/* Cột phải: Text giới thiệu (Giữ nguyên) */}
            <FadeIn delay={0.4}>
              <div className="space-y-6 text-[#2d4669] text-base md:text-xl leading-relaxed font-medium">
                <p>Hello, my name is <strong className="font-bold">Uyển My</strong>, but you can also call me <strong className="font-bold">Mimi</strong>.</p>
                <p>As an outgoing and communicative Event Marketing, I easily build strong connections with both clients and partners.</p>
                <p>Backed by confidence and negotiation skills, I am committed to bringing practical and sustainable value to your organization. I am always eager to learn, adapt, and embrace new experiences to create impactful projects.</p>
              </div>
            </FadeIn>

          </div>
        </section>

        {/* =========================================
            SECTION: EDUCATION
            ========================================= */}
        <section id="education" className="py-5 md:py-8 mb-10 px-6 md:px-12 lg:px-24 w-full max-w-7xl mx-auto">

          <FadeIn>
            <div className="flex items-center justify-center gap-4 py-8 md:py-0">
              <div className="relative w-12 h-12 md:w-16 md:h-16">
                <CloudinaryImage src="https://res.cloudinary.com/dyavs1cdn/image/upload/v1778664663/Portfolio_compo9_chaahj.png" alt="Flower Decor" fill className="object-contain drop-shadow-md hover:rotate-12 transition-transform" />
              </div>
              <h2 className="text-5xl md:text-7xl font-spray tracking-wide text-[#d7427c]">Education</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-20 items-center">

            {/* CỘT TRÁI: TIMELINE */}
            <FadeIn delay={0.2} className="relative w-full">
              <div className="absolute left-5 md:left-6 top-0 bottom-0 w-0.5 bg-[#2d4669] -translate-x-1/2 z-0"></div>
              <div className="absolute left-5 md:left-6 top-0 w-3.5 h-3.5 border-2 border-[#2d4669] bg-[#f7e9c3] rotate-45 -translate-x-1/2 -translate-y-1/2 z-10"></div>
              <div className="absolute left-5 md:left-6 bottom-0 w-3.5 h-3.5 border-2 border-[#2d4669] bg-[#f7e9c3] rotate-45 -translate-x-1/2 translate-y-1/2 z-10"></div>

              <div className="space-y-16 py-10">

                {/* --- CỘT MỐC 1 --- */}
                {/* MOBILE (Cuộn tới đâu sáng tới đó) */}
                <motion.div initial={{ opacity: 0.5, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ margin: "-20% 0px -20% 0px" }} className="relative z-10 md:hidden flex gap-6 items-start">
                  <div className="w-10 shrink-0 flex justify-center mt-4">
                    <motion.div whileInView={{ borderColor: "#f472b6", scale: 1.15 }} viewport={{ margin: "-20% 0px -20% 0px" }} className="relative w-10 h-10 bg-[#f7e9c3] flex items-center justify-center rounded-full border-2 border-transparent transition-all duration-500">
                      <CloudinaryImage src="https://res.cloudinary.com/dyavs1cdn/image/upload/v1778664937/Portfolio_compo10_t39nyd.png" alt="Cap" fill className="object-contain p-1.5" />
                    </motion.div>
                  </div>
                  <div className="flex-1 text-[#2d4669]">
                    <p className="text-right text-sm font-semibold opacity-70 font-mono">2024 - Present</p>
                    <motion.h3 whileInView={{ color: "#d7427c" }} viewport={{ margin: "-20% 0px -20% 0px" }} className="text-xl font-extrabold mb-1 transition-colors duration-500">MBA- Master of Business Administration</motion.h3>
                    <p className="text-base font-medium opacity-80">Van Lang University</p>
                  </div>
                </motion.div>

                {/* DESKTOP (Hover như cũ) */}
                <div className="relative z-10 hidden md:flex gap-8 items-start group">
                  <div className="w-12 shrink-0 flex justify-center mt-4">
                    <div className="relative w-12 h-12 bg-[#f7e9c3] flex items-center justify-center rounded-full border-2 border-transparent group-hover:border-pink-400 group-hover:scale-110 transition-all duration-300">
                      <CloudinaryImage src="https://res.cloudinary.com/dyavs1cdn/image/upload/v1778664937/Portfolio_compo10_t39nyd.png" alt="Cap" fill className="object-contain p-1.5" />
                    </div>
                  </div>
                  <div className="flex-1 text-[#2d4669]">
                    <p className="text-right text-base font-semibold opacity-70 font-mono">2024 - Present</p>
                    <h3 className="text-2xl font-extrabold mb-1 group-hover:text-[#d7427c] transition-colors">MBA- Master of Business Administration</h3>
                    <p className="text-lg font-medium opacity-80">Van Lang University</p>
                  </div>
                </div>

                {/* --- CỘT MỐC 2 --- */}
                {/* MOBILE */}
                <motion.div initial={{ opacity: 0.5, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ margin: "-20% 0px -20% 0px" }} className="relative z-10 md:hidden flex gap-6 items-start">
                  <div className="w-10 shrink-0 flex justify-center mt-4">
                    <motion.div whileInView={{ borderColor: "#f472b6", scale: 1.15 }} viewport={{ margin: "-20% 0px -20% 0px" }} className="relative w-10 h-10 bg-[#f7e9c3] flex items-center justify-center rounded-full border-2 border-transparent transition-all duration-500">
                      <CloudinaryImage src="https://res.cloudinary.com/dyavs1cdn/image/upload/v1778664937/Portfolio_compo10_t39nyd.png" alt="Cap" fill className="object-contain p-1.5" />
                    </motion.div>
                  </div>
                  <div className="flex-1 text-[#2d4669]">
                    <p className="text-right text-sm font-semibold opacity-70 font-mono">2020 - 2024</p>
                    <motion.h3 whileInView={{ color: "#d7427c" }} viewport={{ margin: "-20% 0px -20% 0px" }} className="text-xl font-extrabold mb-1 transition-colors duration-500">Marketing Management</motion.h3>
                    <p className="text-base font-medium opacity-80">Van Lang University</p>
                    <p className="text-base font-bold mt-2 text-[#d7427c]">GPA: 3.10/4</p>
                  </div>
                </motion.div>

                {/* DESKTOP */}
                <div className="relative z-10 hidden md:flex gap-8 items-start group">
                  <div className="w-12 shrink-0 flex justify-center mt-4">
                    <div className="relative w-12 h-12 bg-[#f7e9c3] flex items-center justify-center rounded-full border-2 border-transparent group-hover:border-pink-400 group-hover:scale-110 transition-all duration-300">
                      <CloudinaryImage src="https://res.cloudinary.com/dyavs1cdn/image/upload/v1778664937/Portfolio_compo10_t39nyd.png" alt="Cap" fill className="object-contain p-1.5" />
                    </div>
                  </div>
                  <div className="flex-1 text-[#2d4669]">
                    <p className="text-right text-base font-semibold opacity-70 font-mono">2020 - 2024</p>
                    <h3 className="text-2xl font-extrabold mb-1 group-hover:text-[#d7427c] transition-colors">Marketing Management</h3>
                    <p className="text-lg font-medium opacity-80">Van Lang University</p>
                    <p className="text-lg font-bold mt-2 text-[#d7427c]">GPA: 3.10/4</p>
                  </div>
                </div>

              </div>
            </FadeIn>

            {/* CỘT PHẢI: HÌNH LỚN SCRAPBOOK */}
            <div className="w-[65%] md:w-full max-w-65 md:max-w-sm lg:max-w-md mx-auto flex flex-col items-center my-8 md:mt-5 lg:mt-0">
              {/* MOBILE: Hiệu ứng Lơ lửng chậm */}
              <div className="block md:hidden w-full">
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="relative w-full aspect-4/5">
                  <CloudinaryImage src="https://res.cloudinary.com/dyavs1cdn/image/upload/v1778663439/Portfolio_compo8_krakic.png" alt="Graduation" fill className="object-cover drop-shadow-2xl pointer-events-none scale-[1.3]" />
                </motion.div>
              </div>

              {/* DESKTOP: Sticker Hover cũ */}
              <div className="hidden md:block w-full">
                <Sticker className="aspect-4/5">
                  <CloudinaryImage src="https://res.cloudinary.com/dyavs1cdn/image/upload/v1778663439/Portfolio_compo8_krakic.png" alt="Graduation Portrait" fill className="object-contain drop-shadow-2xl pointer-events-none scale-[1.8]" />
                </Sticker>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================
            SECTION: EXPERIENCE
            ========================================= */}
        <section id="experience" className="py-5 md:py-8 mb-8 md:mb-20 px-6 md:px-12 lg:px-24 w-full max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex items-center justify-center gap-4 mb-12 md:mb-20">
              <div className="relative w-12 h-12 md:w-16 md:h-16">
                <CloudinaryImage src="https://res.cloudinary.com/dyavs1cdn/image/upload/v1778664663/Portfolio_compo9_chaahj.png" alt="Flower Decor" fill className="object-contain drop-shadow-md hover:rotate-12 transition-transform" />
              </div>
              <h2 className="text-5xl md:text-7xl font-spray tracking-wide text-[#d7427c]">
                Experience
              </h2>
            </div>
          </FadeIn>

          {/* === GIAO DIỆN MOBILE (Giữ nguyên vuốt tới sáng tới) === */}
          <div className="grid md:hidden grid-cols-1 sm:grid-cols-2 gap-8">
            <TradingCardMobile><CloudinaryImage src="https://res.cloudinary.com/dyavs1cdn/image/upload/v1778687699/Portfolio_compo11_oqaw8b.png" alt="Experience EVIA" fill className="object-cover" /></TradingCardMobile>
            <TradingCardMobile><CloudinaryImage src="https://res.cloudinary.com/dyavs1cdn/image/upload/v1778687698/Portfolio_compo12_p8twr1.png" alt="Experience VIVERSE" fill className="object-cover" /></TradingCardMobile>
            <TradingCardMobile><CloudinaryImage src="https://res.cloudinary.com/dyavs1cdn/image/upload/v1778687699/Portfolio_compo13_sygla4.png" alt="Experience TG" fill className="object-cover" /></TradingCardMobile>
            <TradingCardMobile><CloudinaryImage src="https://res.cloudinary.com/dyavs1cdn/image/upload/v1778687699/Portfolio_compo14_cxgtkn.png" alt="Experience GEARMENT" fill className="object-cover" /></TradingCardMobile>
          </div>

          {/* === GIAO DIỆN DESKTOP (Gỡ bỏ onClick, Trả về z-0) === */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 relative z-0">
            <FadeIn delay={0.1}>
              <TradingCard rotate={-3}>
                <CloudinaryImage src="https://res.cloudinary.com/dyavs1cdn/image/upload/v1778687699/Portfolio_compo11_oqaw8b.png" alt="Experience EVIA" fill className="object-cover" />
              </TradingCard>
            </FadeIn>
            <FadeIn delay={0.2}>
              <TradingCard rotate={2}>
                <CloudinaryImage src="https://res.cloudinary.com/dyavs1cdn/image/upload/v1778687698/Portfolio_compo12_p8twr1.png" alt="Experience VIVERSE" fill className="object-cover" />
              </TradingCard>
            </FadeIn>
            <FadeIn delay={0.3}>
              <TradingCard rotate={-2}>
                <CloudinaryImage src="https://res.cloudinary.com/dyavs1cdn/image/upload/v1778687699/Portfolio_compo13_sygla4.png" alt="Experience TG" fill className="object-cover" />
              </TradingCard>
            </FadeIn>
            <FadeIn delay={0.4}>
              <TradingCard rotate={3}>
                <CloudinaryImage src="https://res.cloudinary.com/dyavs1cdn/image/upload/v1778687699/Portfolio_compo14_cxgtkn.png" alt="Experience GEARMENT" fill className="object-cover" />
              </TradingCard>
            </FadeIn>
          </div>

        </section>

        {/* =========================================
            SECTION: PERSONAL SKILLS
            ========================================= */}
        <section id="skill" className="py-5 md:py-8 mb-8 md:mb-20 px-6 md:px-12 lg:px-24 w-full max-w-7xl mx-auto">

          {/* Tiêu đề & Icon Hoa */}
          <FadeIn>
            <div className="flex items-center justify-center gap-4 mb-10 md:mb-16">
              <div className="relative w-12 h-12 md:w-16 md:h-16">
                <CloudinaryImage
                  src="https://res.cloudinary.com/dyavs1cdn/image/upload/v1778664663/Portfolio_compo9_chaahj.png"
                  alt="Flower Decor"
                  fill
                  className="object-contain drop-shadow-md hover:rotate-12 transition-transform"
                />
              </div>
              <h2 className="text-5xl md:text-7xl font-spray tracking-wide text-[#d7427c]">
                Personal Skills
              </h2>
            </div>
          </FadeIn>

          <div className="flex flex-col gap-8">

            {/* BOX 1: Các kỹ năng mềm */}
            <FadeIn delay={0.2}>
              {/* Khung viền gradient bo tròn giống thiết kế */}
              <div className="w-full rounded-3xl border-2 border-[#b5a3cc]/60 bg-white/30 backdrop-blur-sm p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">

                  {/* Cột trái */}
                  <ul className="space-y-4 text-base md:text-xl text-[#3a5d8f] font-medium">
                    <li className="flex items-start">
                      <span className="mr-3 mt-1 text-2xl leading-none">•</span>
                      <span>Teamwork and cross-functional collaboration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1 text-2xl leading-none">•</span>
                      <span>Negotiation, communication and presentation</span>
                    </li>
                  </ul>

                  {/* Cột phải */}
                  <ul className="space-y-4 text-base md:text-xl text-[#3a5d8f] font-medium">
                    <li className="flex items-start">
                      <span className="mr-3 mt-1 text-2xl leading-none">•</span>
                      <span>Event planning and organization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1 text-2xl leading-none">•</span>
                      <span>Advertising and branding</span>
                    </li>
                  </ul>

                </div>
              </div>
            </FadeIn>

            {/* BOX 2: TOOLS (Công cụ) */}
            <FadeIn delay={0.4}>
              <div className="w-full rounded-3xl border-2 border-[#b5a3cc]/60 bg-white/30 backdrop-blur-sm p-8 md:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-sm hover:shadow-md transition-shadow">

                {/* Text giới thiệu */}
                <div className="space-y-2">
                  <h3 className="text-3xl md:text-4xl font-bold text-[#d7427c]">Tools:</h3>
                  <div className="flex items-start text-base md:text-xl text-[#3a5d8f] font-medium">
                    <span className="mr-3 mt-1 text-2xl leading-none">•</span>
                    <span>Use tools to support your work:</span>
                  </div>
                </div>

                {/* Khu vực chứa Icon có hiệu ứng Nam Châm */}
                <div className="flex flex-wrap items-center gap-4 md:gap-8 justify-center w-full lg:w-auto">

                  <div className="flex flex-wrap items-center gap-4 md:gap-8 justify-center w-full lg:w-auto">

                    {/* Icon Canva */}
                    <MagneticIcon>
                      {/* Thêm animate-pulse trên mobile, tắt trên md */}
                      <div className="relative w-16 h-16 md:w-20 md:h-20 drop-shadow-md animate-pulse md:animate-none">
                        <CloudinaryImage
                          src="https://res.cloudinary.com/dyavs1cdn/image/upload/v1778689342/Portfolio_compo15_vme7ze.png"
                          alt="Canva"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </MagneticIcon>

                    {/* Icon Logo 2 */}
                    <MagneticIcon>
                      <div className="relative w-16 h-16 md:w-20 md:h-20 drop-shadow-md animate-pulse md:animate-none" style={{ animationDelay: '0.5s' }}>
                        <CloudinaryImage
                          src="https://res.cloudinary.com/dyavs1cdn/image/upload/v1778689446/Portfolio_compo16_rxtluy.png"
                          alt="Tool 2"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </MagneticIcon>

                    {/* Icon Google Workspace */}
                    <MagneticIcon>
                      <div className="relative w-32 h-12 md:w-40 md:h-16 drop-shadow-md animate-pulse md:animate-none" style={{ animationDelay: '1s' }}>
                        <CloudinaryImage
                          src="https://res.cloudinary.com/dyavs1cdn/image/upload/v1778689341/Portfolio_compo17_qv4rmb.png"
                          alt="Google Workspace"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </MagneticIcon>

                  </div>

                </div>
              </div>
            </FadeIn>

          </div>
        </section>
        {/* =========================================
            SECTION: BRANDS
            ========================================= */}
        <section id="brand" className="py-5 md:py-8 mb-8 md:mb-20 px-6 md:px-12 lg:px-24 w-full max-w-7xl mx-auto">

          {/* Tiêu đề & Icon Hoa */}
          <FadeIn>
            <div className="flex items-center justify-center gap-4 mb-10 md:mb-16">
              <div className="relative w-12 h-12 md:w-16 md:h-16">
                <CloudinaryImage
                  src="https://res.cloudinary.com/dyavs1cdn/image/upload/v1778664663/Portfolio_compo9_chaahj.png"
                  alt="Flower Decor"
                  fill
                  className="object-contain drop-shadow-md hover:rotate-12 transition-transform"
                />
              </div>
              <h2 className="text-5xl md:text-7xl font-spray tracking-wide text-[#d7427c]">
                Brands
              </h2>
            </div>
          </FadeIn>

          {/* Khung chứa các Logo */}
          <FadeIn delay={0.2}>
            <div className="w-full rounded-3xl border-2 border-[#b5a3cc]/60 bg-white/30 backdrop-blur-sm p-8 md:p-12 shadow-sm hover:shadow-md transition-shadow">

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center">

                {[
                  "https://res.cloudinary.com/dyavs1cdn/image/upload/v1778691664/Portfolio_compo18_qgsniv.png",
                  "https://res.cloudinary.com/dyavs1cdn/image/upload/v1778691665/Portfolio_compo19_v5ehjx.png",
                  "https://res.cloudinary.com/dyavs1cdn/image/upload/v1778691749/Portfolio_compo33_s7whyg.png",
                  "https://res.cloudinary.com/dyavs1cdn/image/upload/v1778691743/Portfolio_compo21_ha94n6.png",
                  "https://res.cloudinary.com/dyavs1cdn/image/upload/v1778691744/Portfolio_compo22_q7l6vn.png",
                  "https://res.cloudinary.com/dyavs1cdn/image/upload/v1778691744/Portfolio_compo23_vkuh45.png",
                  "https://res.cloudinary.com/dyavs1cdn/image/upload/v1778691745/Portfolio_compo24_cug8hv.png",
                  "https://res.cloudinary.com/dyavs1cdn/image/upload/v1778691745/Portfolio_compo25_bi2uqx.png",
                  "https://res.cloudinary.com/dyavs1cdn/image/upload/v1778691746/Portfolio_compo26_syehtj.png",
                  "https://res.cloudinary.com/dyavs1cdn/image/upload/v1778691746/Portfolio_compo27_zoirze.png",
                  "https://res.cloudinary.com/dyavs1cdn/image/upload/v1778691747/Portfolio_compo28_qzobxk.png",
                  "https://res.cloudinary.com/dyavs1cdn/image/upload/v1778691748/Portfolio_compo29_p5xch8.png",
                  "https://res.cloudinary.com/dyavs1cdn/image/upload/v1778691748/Portfolio_compo30_lr5s8v.png",
                  "https://res.cloudinary.com/dyavs1cdn/image/upload/v1778691749/Portfolio_compo31_oz4nkp.png",
                  "https://res.cloudinary.com/dyavs1cdn/image/upload/v1778691749/Portfolio_compo32_yleq35.png",
                ].map((logoUrl, index) => (
                  <div
                    key={index}
                    className="relative w-24 h-12 md:w-32 md:h-16 group cursor-pointer"
                  >
                    <CloudinaryImage
                      src={logoUrl}
                      alt={`Brand Partner ${index + 1}`}
                      fill
                      className="object-contain transition-all duration-300 ease-in-out grayscale-0 opacity-100 md:grayscale md:opacity-60 md:group-hover:grayscale-0 md:group-hover:opacity-100 md:group-hover:scale-110 md:group-hover:drop-shadow-lg" />
                  </div>
                ))}

              </div>
            </div>
          </FadeIn>
        </section>

        {/* =========================================
            SECTION: PROJECTS
            ========================================= */}
        <section id="projects" className="py-5 md:py-8 mb-8 md:mb-20 px-6 md:px-12 lg:px-24 w-full max-w-7xl mx-auto">

          <FadeIn>
            <div className="flex flex-col items-center justify-center mb-10 md:mb-16">

              {/* Hàng 1: Icon Hoa + Tiêu đề */}
              <div className="flex items-center gap-3 md:gap-4 mb-4">
                <div className="relative w-10 h-10 md:w-14 md:h-14 shrink-0">
                  <CloudinaryImage
                    src="https://res.cloudinary.com/dyavs1cdn/image/upload/v1778664663/Portfolio_compo9_chaahj.png"
                    alt="Flower Decor"
                    fill
                    className="object-contain drop-shadow-md hover:rotate-12 transition-transform"
                  />
                </div>
                <h2 className="text-5xl md:text-7xl font-spray tracking-wide text-[#d7427c] text-center">
                  Projects
                </h2>
              </div>

              {/* Hàng 2: Đoạn mô tả (Canh giữa) */}
              <p className="text-center text-[#3a5d8f] text-base md:text-xl max-w-2xl font-medium px-4">
                A showcase of highlighted events, campaigns, and experiences I have proudly contributed to.
              </p>

            </div>
          </FadeIn>
          <FadeIn delay={0.2} className="w-full max-w-5xl mx-auto drop-shadow-xl">
            <ProjectSlider
              images={[
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
              ]}
            />
          </FadeIn>

        </section>
        {/* =========================================
            SECTION: SOCIAL CONTENT (Home Slider)
            ========================================= */}
        <section id="social" className="py-5 md:py-8 mb-8 md:mb-20 px-6 md:px-12 lg:px-24 w-full max-w-7xl mx-auto">

          <FadeIn>
            <div className="flex flex-col items-center justify-center mb-10 md:mb-16">

              {/* Hàng 1: Icon Hoa + Tiêu đề */}
              <div className="flex items-center justify-center gap-3 md:gap-4 mb-4">
                <div className="relative w-10 h-10 md:w-14 md:h-14 shrink-0">
                  <CloudinaryImage
                    src="https://res.cloudinary.com/dyavs1cdn/image/upload/v1778664663/Portfolio_compo9_chaahj.png"
                    alt="Flower Decor"
                    fill
                    className="object-contain drop-shadow-md hover:rotate-12 transition-transform"
                  />
                </div>
                <h2 className="text-5xl md:text-7xl font-spray tracking-wide text-[#d7427c] text-center">
                  Social Content
                </h2>
              </div>

              {/* Hàng 2: Đoạn mô tả (Canh giữa) */}
              <p className="text-center text-[#3a5d8f] text-base md:text-xl max-w-2xl font-medium px-4">
                Highlighted social media campaigns, community management, and creative assets.
              </p>

            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="w-full max-w-5xl mx-auto drop-shadow-xl">
            <ProjectSlider
              images={[
                "https://res.cloudinary.com/dyavs1cdn/image/upload/v1779006630/Cover_ol0gxx.png",
                "https://res.cloudinary.com/dyavs1cdn/image/upload/v1779006631/Page1_jekkvy.png",
                "https://res.cloudinary.com/dyavs1cdn/image/upload/v1779006631/Page2_mjm1wv.png",
                "https://res.cloudinary.com/dyavs1cdn/image/upload/v1779006632/Page3_jni6qf.png",
                "https://res.cloudinary.com/dyavs1cdn/image/upload/v1779006632/Page4_kieeak.png",
                "https://res.cloudinary.com/dyavs1cdn/image/upload/v1779006632/Page5_a5xcnq.png",
                "https://res.cloudinary.com/dyavs1cdn/image/upload/v1779006633/Page6_se3wil.png",
              ]}
            />
          </FadeIn>

        </section>
        {/* =========================================
            SECTION: CONTACT ME
            ========================================= */}
        <section id="contact" className="py-10 md:py-16 mb-10 md:mb-20 px-6 md:px-12 w-full max-w-7xl mx-auto ">

          <FadeIn>
            {/* Tiêu đề & Icon Hoa */}
            <div className="flex items-center justify-center gap-3 md:gap-4 mb-10 md:mb-16">
              <div className="relative w-10 h-10 md:w-16 md:h-16 shrink-0">
                <CloudinaryImage
                  src="https://res.cloudinary.com/dyavs1cdn/image/upload/v1778664663/Portfolio_compo9_chaahj.png"
                  alt="Flower Decor"
                  fill
                  className="object-contain drop-shadow-md hover:rotate-12 transition-transform"
                />
              </div>
              <h2 className="text-5xl md:text-7xl font-spray tracking-wide text-[#d7427c]">
                CONTACT ME
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            {/* Khung Card Contact */}
            <div className="w-full rounded-4xl border-2 border-[#b5a3cc]/60 bg-white/40 backdrop-blur-md p-6 sm:p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">

              {/* Cột trái: Lời chào và Thông tin liên hệ */}
              <div className="flex flex-col gap-6 md:gap-8 w-full md:w-2/3">
                <p className="text-[#3a5d8f] text-sm sm:text-base md:text-xl font-medium text-center md:text-left leading-relaxed">
                  {"Let's create something amazing together! Feel free to reach out to me for collaborations, campaigns, or just a friendly chat."}
                </p>

                {/* Khu vực thông tin (Bỏ w-fit đi để nó không bị tràn) */}
                <div className="flex flex-col gap-4 md:gap-5 text-[#d7427c] text-sm sm:text-base md:text-xl font-bold w-full">

                  {/* Dòng 1: Email */}
                  <a href="mailto:mimi.marketing0304@gmail.com" className="flex items-center gap-3 md:gap-4 hover:translate-x-2 hover:text-pink-600 transition-transform origin-left cursor-pointer group">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#f7e9c3] border-2 border-[#d7427c]/40 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </div>
                    {/* Thêm break-all trên mobile để email dài tự rớt dòng */}
                    <span className="break-all md:break-normal">mimi.marketing0304@gmail.com</span>
                  </a>

                  {/* Dòng 2: Phone */}
                  <a href="tel:0906989071" className="flex items-center gap-3 md:gap-4 hover:translate-x-2 hover:text-pink-600 transition-transform origin-left cursor-pointer group">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#f7e9c3] border-2 border-[#d7427c]/40 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    </div>
                    <span>0906 989 071</span>
                  </a>

                  {/* Dòng 3: Location */}
                  <div className="flex items-center gap-3 md:gap-4 group cursor-default">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#f7e9c3] border-2 border-[#d7427c]/40 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    </div>
                    <span>District 12, Ho Chi Minh City</span>
                  </div>

                </div>
              </div>

            </div>
          </FadeIn>
        </section>

      </main>
    </div>
  );
}