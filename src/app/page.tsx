import Navbar from "@/components/Navbar";
import FadeIn from "@/components/FadeIn";
import CloudinaryImage from "@/components/CloudinaryImage";
import Floating from "@/components/Floating";
import Sticker from "@/components/Sticker";
import TradingCard from "@/components/TradingCard";
import MagneticIcon from "@/components/MagneticIcon";
import ProjectSlider from "@/components/ProjectSlider";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Navbar />

      <main className="flex-1 w-full overflow-hidden">

        <section id="hero" className="w-full flex flex-col px-0 md:py-8">
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

        {/* =========================================
            SECTION: WHO AM I
            ========================================= */}
        <section id="about" className="py-5 md:py-8 px-6 md:px-12 lg:px-24 w-full max-w-7xl mx-auto">
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
        <section id="education" className="py-5 md:py-8 px-6 md:px-12 lg:px-24 w-full max-w-7xl mx-auto">

          {/* Tiêu đề & Icon Hoa */}
          <FadeIn>
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-4 md:mb-8">
              <div className="relative w-12 h-12 md:w-16 md:h-16">
                <CloudinaryImage
                  src="https://res.cloudinary.com/dyavs1cdn/image/upload/v1778664663/Portfolio_compo9_chaahj.png"
                  alt="Flower Decor"
                  fill
                  className="object-contain drop-shadow-md hover:rotate-12 transition-transform"
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

        {/* =========================================
            SECTION: EXPERIENCE
            ========================================= */}
        <section id="experience" className="py-5 md:py-8 px-6 md:px-12 lg:px-24 w-full max-w-7xl mx-auto">

          <FadeIn>
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-12 md:mb-20">
              <div className="relative w-12 h-12 md:w-16 md:h-16">
                <CloudinaryImage
                  src="https://res.cloudinary.com/dyavs1cdn/image/upload/v1778664663/Portfolio_compo9_chaahj.png"
                  alt="Flower Decor"
                  fill
                  className="object-contain drop-shadow-md hover:rotate-12 transition-transform"
                />
              </div>
              <h2 className="text-5xl md:text-7xl font-extrabold tracking-wide text-[#e84976]">
                Experience
              </h2>
            </div>
          </FadeIn>

          {/* GRID: Chứa 4 thẻ bài */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">

            {/* Thẻ 1: Nghiêng trái -3 độ */}
            <FadeIn delay={0.1}>
              <TradingCard rotate={-3}>
                <CloudinaryImage
                  src="https://res.cloudinary.com/dyavs1cdn/image/upload/v1778687699/Portfolio_compo11_oqaw8b.png"
                  alt="Experience EVIA"
                  fill
                  // object-contain giúp ảnh giữ đúng tỉ lệ, không bị méo hay cắt mất viền
                  className="object-cover"
                />
              </TradingCard>
            </FadeIn>

            {/* Thẻ 2: Nghiêng phải 2 độ */}
            <FadeIn delay={0.2}>
              <TradingCard rotate={2}>
                <CloudinaryImage
                  src="https://res.cloudinary.com/dyavs1cdn/image/upload/v1778687698/Portfolio_compo12_p8twr1.png"
                  alt="Experience VIVERSE"
                  fill
                  className="object-cover"
                />
              </TradingCard>
            </FadeIn>

            {/* Thẻ 3: Nghiêng trái -2 độ */}
            <FadeIn delay={0.3}>
              <TradingCard rotate={-2}>
                <CloudinaryImage
                  src="https://res.cloudinary.com/dyavs1cdn/image/upload/v1778687699/Portfolio_compo13_sygla4.png"
                  alt="Experience TG"
                  fill
                  className="object-cover"
                />
              </TradingCard>
            </FadeIn>

            {/* Thẻ 4: Nghiêng phải 3 độ */}
            <FadeIn delay={0.4}>
              <TradingCard rotate={3}>
                <CloudinaryImage
                  src="https://res.cloudinary.com/dyavs1cdn/image/upload/v1778687699/Portfolio_compo14_cxgtkn.png"
                  alt="Experience GEARMENT"
                  fill
                  className="object-cover"
                />
              </TradingCard>
            </FadeIn>

          </div>
        </section>

        {/* =========================================
            SECTION: PERSONAL SKILLS
            ========================================= */}
        <section id="skill" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 w-full max-w-7xl mx-auto">

          {/* Tiêu đề & Icon Hoa */}
          <FadeIn>
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-10 md:mb-16">
              <div className="relative w-12 h-12 md:w-16 md:h-16">
                <CloudinaryImage
                  src="https://res.cloudinary.com/dyavs1cdn/image/upload/v1778664663/Portfolio_compo9_chaahj.png"
                  alt="Flower Decor"
                  fill
                  className="object-contain drop-shadow-md hover:rotate-12 transition-transform"
                />
              </div>
              <h2 className="text-5xl md:text-7xl font-extrabold tracking-wide text-[#e84976]">
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
                  <ul className="space-y-4 text-base md:text-xl text-[#e84976] font-medium">
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
                  <ul className="space-y-4 text-base md:text-xl text-[#e84976] font-medium">
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
                  <h3 className="text-3xl md:text-4xl font-bold text-[#e84976]">Tools:</h3>
                  <div className="flex items-start text-base md:text-xl text-[#e84976] font-medium">
                    <span className="mr-3 mt-1 text-2xl leading-none">•</span>
                    <span>Use tools to support your work:</span>
                  </div>
                </div>

                {/* Khu vực chứa Icon có hiệu ứng Nam Châm */}
                <div className="flex flex-wrap items-center gap-4 md:gap-8 justify-center w-full lg:w-auto">

                  {/* Icon Canva */}
                  <MagneticIcon>
                    <div className="relative w-16 h-16 md:w-20 md:h-20 drop-shadow-md">
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
                    <div className="relative w-16 h-16 md:w-20 md:h-20 drop-shadow-md">
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
                    <div className="relative w-32 h-12 md:w-40 md:h-16 drop-shadow-md">
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
            </FadeIn>

          </div>
        </section>
        {/* =========================================
            SECTION: BRANDS
            ========================================= */}
        <section id="brand" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 w-full max-w-7xl mx-auto">

          {/* Tiêu đề & Icon Hoa */}
          <FadeIn>
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-10 md:mb-16">
              <div className="relative w-12 h-12 md:w-16 md:h-16">
                <CloudinaryImage
                  src="https://res.cloudinary.com/dyavs1cdn/image/upload/v1778664663/Portfolio_compo9_chaahj.png"
                  alt="Flower Decor"
                  fill
                  className="object-contain drop-shadow-md hover:rotate-12 transition-transform"
                />
              </div>
              <h2 className="text-5xl md:text-7xl font-extrabold tracking-wide text-[#e84976]">
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
                      // Hiệu ứng: Mặc định xám (grayscale) và mờ 60%. Hover vào thì xóa xám, rõ 100% và to lên 10%.
                      className="object-contain filter grayscale opacity-60 transition-all duration-300 ease-in-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 group-hover:drop-shadow-lg"
                    />
                  </div>
                ))}

              </div>
            </div>
          </FadeIn>
        </section>

        {/* =========================================
            SECTION: PROJECTS
            ========================================= */}
        <section id="projects" className="py-16 md:py-24 px-4 md:px-8 lg:px-16 w-full max-w-350 mx-auto">

          <FadeIn>
            <div className="flex flex-col items-center justify-center mb-10 md:mb-16">
              <h2 className="text-5xl md:text-7xl font-extrabold tracking-wide text-[#e84976] mb-4">
                Projects
              </h2>
              <p className="text-center text-[#2d4669] text-base md:text-xl max-w-2xl font-medium">
                A showcase of highlighted events, campaigns, and experiences I have proudly contributed to.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="w-full">
            {/* Đưa danh sách link 10 ảnh của bạn vào đây */}
            <ProjectSlider
              images={[
                "https://res.cloudinary.com/dyavs1cdn/image/upload/v1778776588/Project_gzcnmd.png",
                "https://res.cloudinary.com/dyavs1cdn/image/upload/v1778776588/Project_1_e5gvz4.png",
                "https://res.cloudinary.com/dyavs1cdn/image/upload/v1778776588/Project_2_vwtq0t.png",
                "https://res.cloudinary.com/dyavs1cdn/image/upload/v1778777604/Project_3_ejypbh.png",
                "https://res.cloudinary.com/dyavs1cdn/image/upload/v1778777604/Project_4_zwgsmz.png",
                "https://res.cloudinary.com/dyavs1cdn/image/upload/v1778777604/Project_3_ejypbh.png",
                "https://res.cloudinary.com/dyavs1cdn/image/upload/v1778777604/Project_3_ejypbh.png",
                "https://res.cloudinary.com/dyavs1cdn/image/upload/v1778777604/Project_3_ejypbh.png",
                "https://res.cloudinary.com/dyavs1cdn/image/upload/v1778777604/Project_3_ejypbh.png",
                "https://res.cloudinary.com/dyavs1cdn/image/upload/v1778777604/Project_3_ejypbh.png",
              ]}
            />
          </FadeIn>

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