import { getAllProjectsMeta, ProjectMetadata } from "@/lib/mdx";
import Sidebar from "@/components/Sidebar";
import FadeIn from "@/components/FadeIn";
import { CldImage } from 'next-cloudinary';
import CloudinaryImage from "@/components/CloudinaryImage";

export default function Home() {
  // Đọc dữ liệu từ ổ cứng ngay lúc build trên Server
  const projects = getAllProjectsMeta();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar cố định bên trái */}
      <Sidebar />

      {/* Nội dung chính cuộn bên phải */}
      <main className="flex-1 md:ml-64 p-8 md:p-24 overflow-hidden">

        {/* NEW SECTION: GIỚI THIỆU - HERO IMAGE */}
        <section id="about" className="min-h-screen flex flex-col justify-center w-full pt-20">
          {/* Truyền w-full để FadeIn mở rộng tối đa */}
          <FadeIn className="w-full">
            {/* Thay thế aspect-video bằng các chiều cao cụ thể (h-[...]) cho từng màn hình */}
            <div className="relative w-full h-[300px] md:h-[500px] lg:h-[75vh] max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
              <CloudinaryImage
                src="https://res.cloudinary.com/dyavs1cdn/image/upload/v1778608168/Portfolio_lmwzch.png"
                alt="Uyển My Account Marketing Portfolio 2025"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 1000px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/40" />
            </div>
          </FadeIn>
        </section>

        {/* Updated Page Title and Description */}
        <section id="intro" className="py-24">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-emerald-400">
              Trần Hương Giao <br /> Portfolio.
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
              Account Marketing chuyên nghiệp với đam mê xây dựng các chiến dịch mạnh mẽ và tối ưu hóa trải nghiệm khách hàng.
            </p>
          </FadeIn>
        </section>

        {/* SECTION: DỰ ÁN */}
        <section id="projects" className="py-24">
          <FadeIn>
            <h2 className="text-4xl font-bold mb-16 border-b border-slate-800 pb-4">Dự án tiêu biểu</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <FadeIn key={project.slug} delay={index * 0.2}>
                <div className="group relative rounded-2xl overflow-hidden bg-slate-800/50 hover:bg-slate-800 transition-colors border border-slate-700/50">
                  <div className="h-64 w-full relative">
                    <CldImage
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6">
                    <div className="text-sm text-emerald-400 mb-2 font-mono">{project.date}</div>
                    <h3 className="text-2xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400">
                      {project.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* SECTION: LIÊN HỆ */}
        <section id="contact" className="min-h-[50vh] py-24">
          <FadeIn>
            <h2 className="text-4xl font-bold mb-8">Kết nối với tôi</h2>
            <p className="text-slate-400 text-lg">
              Sẵn sàng thảo luận về các chiến dịch marketing hoặc những dự án mới thú vị.
            </p>
          </FadeIn>
        </section>

      </main>
    </div>
  );
}