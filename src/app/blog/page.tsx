import Link from "next/link";
import { posts } from "./posts";     // <-- Poprawna ścieżka (ten sam folder)

export default function BlogPage() {
  return (
    <section className="py-24 px-6 bg-neutral-50">
      <h1 className="text-4xl font-bold mb-12 text-center">Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        
        {posts.map((post) => (
          <Link 
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group"
          >
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition cursor-pointer h-full flex flex-col">
              <p className="text-sm text-neutral-500 mb-2">{post.date}</p>
              <h2 className="text-xl font-bold mb-2 group-hover:text-orange-600 transition">
                {post.title}
              </h2>
              <p className="text-neutral-600 text-sm flex-1">
                {post.excerpt}
              </p>
              <div className="text-sm text-neutral-500 mt-6 pt-4 border-t">
                {post.readingTime} • {post.category}
              </div>
            </div>
          </Link>
        ))}

      </div>
    </section>
  );
}