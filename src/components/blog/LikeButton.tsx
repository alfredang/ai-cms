"use client";

import { useEffect, useState } from "react";
import { HiThumbUp } from "react-icons/hi";

export function LikeButton({
  slug,
  initialCount,
}: {
  slug: string;
  initialCount: number;
}) {
  const [count, setCount] = useState(initialCount);
  const [liked, setLiked] = useState(false);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setLiked(localStorage.getItem(`blog-liked:${slug}`) === "1");
  }, [slug]);

  async function onClick() {
    if (liked || pending) return;
    setPending(true);
    // Optimistic update
    setCount((c) => c + 1);
    setLiked(true);
    localStorage.setItem(`blog-liked:${slug}`, "1");
    try {
      const res = await fetch("/api/blog/like", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug }),
      });
      if (res.ok) {
        const data = (await res.json()) as { likeCount?: number };
        if (typeof data.likeCount === "number") setCount(data.likeCount);
      } else {
        // Roll back on failure
        setCount((c) => Math.max(0, c - 1));
        setLiked(false);
        localStorage.removeItem(`blog-liked:${slug}`);
      }
    } catch {
      setCount((c) => Math.max(0, c - 1));
      setLiked(false);
      localStorage.removeItem(`blog-liked:${slug}`);
    } finally {
      setPending(false);
    }
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={liked || pending}
      aria-pressed={liked}
      aria-label={liked ? "You liked this post" : "Like this post"}
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium transition ${
        liked
          ? "bg-(--color-cyan)/15 border-(--color-cyan)/40 text-(--color-cyan)"
          : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-(--color-cyan) hover:border-(--color-cyan)/30"
      } disabled:cursor-default`}
    >
      <HiThumbUp className={`w-4 h-4 ${liked ? "" : "opacity-80"}`} />
      <span className="tabular-nums">{count}</span>
      <span className="hidden sm:inline">{liked ? "Liked" : "Like"}</span>
    </button>
  );
}
