import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const rootDirectory = path.join(process.cwd(), 'src', 'content', 'projects');

// Định nghĩa Interface để code type-safe
export interface ProjectMetadata {
    slug: string;
    title: string;
    date: string;
    description: string;
    coverImage: string;
}

// 1. Hàm lấy chi tiết một Project dựa vào tên file (slug)
export const getProjectBySlug = (slug: string) => {
    // Đảm bảo loại bỏ đuôi .mdx nếu có để tạo đường dẫn chuẩn
    const realSlug = slug.replace(/\.mdx$/, '');
    const filePath = path.join(rootDirectory, `${realSlug}.mdx`);

    // Đọc nội dung file từ ổ cứng
    const fileContent = fs.readFileSync(filePath, 'utf8');

    // Dùng gray-matter để tách riêng phần Frontmatter (data) và phần thân bài viết (content)
    const { data, content } = matter(fileContent);

    return {
        meta: { ...data, slug: realSlug } as ProjectMetadata,
        content,
    };
};

// 2. Hàm lấy danh sách tất cả các Project (chỉ lấy Metadata để hiển thị Card)
export const getAllProjectsMeta = (): ProjectMetadata[] => {
    // Đọc toàn bộ tên file trong thư mục
    const files = fs.readdirSync(rootDirectory);

    const projects = files
        .filter((file) => file.endsWith('.mdx'))
        .map((file) => getProjectBySlug(file).meta)
        // Sắp xếp ngày tháng giảm dần (bài mới nhất lên đầu)
        .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));

    return projects;
};