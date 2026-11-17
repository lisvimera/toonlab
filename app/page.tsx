"use client";

import { POSTS } from "@/data/posts";
import { Navbar } from "@/components/Navbar";
import { ProfileHeader } from "@/components/ProfileHeader";
import { PostCard } from "@/components/PostCard";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#e7e3f1]">
      <Navbar />

      <main className="flex-1 mx-auto w-full max-w-5xl px-4 sm:px-6">
        {/* Profile Header */}
        <ProfileHeader />

        {/* Featured Link Cards */}
        <section className="py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {POSTS.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
