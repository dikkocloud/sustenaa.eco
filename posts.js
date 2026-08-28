// posts.js — Sustenaa Blog content.
//
// THIS IS THE ONLY FILE YOU NEED TO TOUCH TO PUBLISH SOMETHING NEW.
// No new HTML pages, no build step — just add an object to this list.
//
// TO ADD A NEW POST:
//   1. Copy one of the objects below (the { ... } block, including the
//      trailing comma).
//   2. Paste your copy right after the opening "const POSTS = [" line,
//      so newer posts stay at the top.
//   3. Edit the fields (see notes on each one below).
//   4. Save. That's it — blog.html and blog-post.html both read this
//      file automatically, no other changes needed.
//
// FIELD NOTES:
//   slug        — becomes the URL: blog-post.html?slug=THIS-VALUE
//                 lowercase, no spaces — use hyphens instead of spaces.
//   title       — shown on the listing page and at the top of the post.
//   date        — format YYYY-MM-DD (e.g. "2026-08-28"). Controls sort
//                 order — newest date shows first automatically.
//   excerpt     — one or two sentences shown on the blog listing card.
//   coverImage  — filename of a photo sitting in this same folder
//                 (e.g. "impact-6.jpg" or a new photo you upload).
//                 Leave as "" (empty quotes) for no cover image.
//   content     — the post body. Each paragraph goes in its own
//                 <p>...</p>. You can also use <h3>...</h3> for a
//                 subheading inside the post. Don't worry about the
//                 backticks (`) at the start/end — just edit the text
//                 in between.

const POSTS = [
  {
    slug: "ozone-guardians-gombe",
    title: "Bringing Ozone Guardians into Gombe classrooms",
    date: "2026-07-15",
    excerpt: "Sustenaa partnered with YE-CAN's Ozone Guardians program to bring climate conversations directly into secondary school classrooms in Gombe State.",
    coverImage: "impact-6.jpg",
    content: `
      <p>[Draft post — replace this with your own recap before publishing.]
      Earlier this year, Sustenaa joined YE-CAN (Youth Empowerment for
      Climate Action in Nigeria) for an Ozone Guardians session in Gombe
      State, part of a wider push to get climate conversations into
      classrooms rather than just conference rooms.</p>

      <h3>Why schools</h3>
      <p>Students spend their days in the buildings and communities most
      affected by the changes we talk about — heat, air quality, seasonal
      shifts. Meeting them there, with a direct and practical conversation,
      tends to land differently than a general awareness campaign.</p>

      <p>[Add details here: how many students attended, what the session
      covered, any reactions or questions worth sharing, and what happens
      next.]</p>
    `
  },
  {
    slug: "planting-season-recap",
    title: "Planting for the season ahead",
    date: "2026-06-02",
    excerpt: "A look back at a recent community tree-planting effort — and why we keep coming back to something as simple as putting a tree in the ground.",
    coverImage: "impact-3.jpg",
    content: `
      <p>[Draft post — replace this with your own recap before publishing.]
      Tree planting isn't a new idea, but it's still one of the clearest,
      most visible ways a community can point at something and say
      "we did that." This past season, Sustenaa took part in a group
      planting effort involving volunteers of all ages.</p>

      <p>[Add details here: where this took place, how many trees were
      planted, who was involved, and what kind of trees or follow-up
      care is planned.]</p>

      <h3>What's next</h3>
      <p>[Add a closing paragraph on next steps — a follow-up visit,
      a second planting date, or how people can get involved next time.]</p>
    `
  },
];
