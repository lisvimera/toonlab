"use client";

import { useState } from "react";
import { POSTS, Post } from "@/data/posts";
import { Navbar } from "@/components/Navbar";
import { ProfileHeader } from "@/components/ProfileHeader";
import { FeedTabs } from "@/components/FeedTabs";
import { PostCard } from "@/components/PostCard";
import { PostModal } from "@/components/PostModal";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("todos");
  const [activePost, setActivePost] = useState<Post | null>(null);
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});

  const filteredPosts =
    selectedCategory === "todos"
      ? POSTS
      : POSTS.filter((p) => p.category === selectedCategory);

  const toggleLike = (postId: string) => {
    setLikedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#09090b]">
      <Navbar />

      <main className="flex-1 mx-auto w-full max-w-5xl px-4 sm:px-6">
        {/* Profile / Instagram Header */}
        <ProfileHeader
          totalPosts={POSTS.length}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Feed Filter & Bar */}
        <FeedTabs
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          activeCount={filteredPosts.length}
        />

        {/* Instagram Grid of Posts */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6 py-6">
            {filteredPosts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                onClick={setActivePost}
                isLiked={Boolean(likedPosts[post.id])}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center text-zinc-500">
            <p className="text-sm">No hay publicaciones en esta categoría todavía.</p>
          </div>
        )}
      </main>

      {/* Lightbox / Post Detail Modal */}
      <PostModal
        post={activePost}
        onClose={() => setActivePost(null)}
        isLiked={Boolean(activePost && likedPosts[activePost.id])}
        onToggleLike={toggleLike}
      />

      <Footer />
    </div>
  );
}
