// blog-render.js — reads posts.js and renders either the blog listing
// page or a single post page, depending on which containers it finds
// on the current page. This file should never need editing — only
// posts.js does, to add or change posts.

function formatDate(isoDate) {
  const d = new Date(isoDate + "T00:00:00");
  if (isNaN(d)) return isoDate;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function sortedPosts() {
  return [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
}

document.addEventListener("DOMContentLoaded", () => {
  // ---------- Blog listing page (blog.html) ----------
  const grid = document.getElementById("blog-grid");
  if (grid) {
    const posts = sortedPosts();

    if (posts.length === 0) {
      grid.innerHTML = `<p class="text-ink/60">No posts yet — add one in posts.js.</p>`;
    } else {
      grid.innerHTML = posts
        .map(
          (post) => `
        <a href="blog-post.html?slug=${encodeURIComponent(post.slug)}"
           class="reveal blog-card rounded-2xl overflow-hidden bg-white border border-ink/5 block">
          ${
            post.coverImage
              ? `<img src="${post.coverImage}" alt="" class="w-full h-56 object-cover" />`
              : ""
          }
          <div class="p-7">
            <p class="text-soil text-xs font-semibold tracking-wide uppercase mb-2">${formatDate(post.date)}</p>
            <h3 class="font-display text-xl font-medium mb-3">${post.title}</h3>
            <p class="text-ink/65 leading-relaxed text-sm">${post.excerpt}</p>
          </div>
        </a>`
        )
        .join("");

      // newly-injected cards still get the scroll-reveal treatment
      if ("IntersectionObserver" in window) {
        const obs = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                obs.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
        );
        grid.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
      } else {
        grid.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
      }
    }
  }

  // ---------- Single post page (blog-post.html) ----------
  const postContainer = document.getElementById("blog-post");
  if (postContainer) {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("slug");
    const post = POSTS.find((p) => p.slug === slug);

    if (!post) {
      postContainer.innerHTML = `
        <p class="eyebrow text-soil text-sm font-semibold tracking-widest uppercase mb-4">Not found</p>
        <h1 class="font-display text-3xl md:text-5xl font-medium leading-tight text-ink mb-6">
          We couldn't find that post.
        </h1>
        <p class="text-ink/65 mb-8">It may have been renamed or removed.</p>
        <a href="blog.html" class="inline-flex items-center gap-2 bg-lime text-forest-900 font-semibold px-6 py-3 rounded-full hover:bg-forest-900 hover:text-white transition-colors">
          ← Back to Blog
        </a>`;
    } else {
      document.title = post.title + " — Sustenaa Blog";
      postContainer.innerHTML = `
        <a href="blog.html" class="inline-flex items-center gap-2 text-soil text-sm font-semibold hover:text-ink transition-colors mb-8">
          ← Back to Blog
        </a>
        <p class="eyebrow text-soil text-sm font-semibold tracking-widest uppercase mb-4">${formatDate(post.date)}</p>
        <h1 class="font-display text-3xl md:text-5xl font-medium leading-tight text-ink mb-8">
          ${post.title}
        </h1>
        ${
          post.coverImage
            ? `<img src="${post.coverImage}" alt="" class="w-full h-64 md:h-96 object-cover rounded-2xl mb-10" />`
            : ""
        }
        <div class="prose-blog text-ink/80 leading-relaxed">${post.content}</div>
      `;
    }
  }
});
