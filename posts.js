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
    title: "What Northern Nigeria Teaches Us About the Global Water Crisis
By Hafsat Shehu
",
    date: "2026-08-28",
    excerpt: "
In states across Northern Nigeria, the physical and socio-economic burden of water scarcity falls heaviest on women and young girls. 
  Every morning, long before dawn, young girls trek kilometers across dry, unsafe terrain carrying heavy jerrycans. 
  The hours spent searching for water are hours stolen from classrooms and personal growth, compounding gender inequality across generations. At the same time, declining water tables and parched grazing lands have intensified competition between pastoralists and agricultural farmers, demonstrating how environmental degradation directly fuels conflict.
.",
    coverImage: "impact-6.jpg",
    content: `
      <p>Across the globe, clean water is quietly becoming the rarest luxury of our era. According to global health and development reports, nearly 2.1 billion people—roughly one in four globally—still live without access to safely managed drinking water at home. While international discussions often frame water insecurity as an abstract, far-off threat tied to climate modeling, millions across the Global South experience it as a daily, relentless struggle. Nowhere is this crisis more vivid, or more urgent, than in Northern Nigeria.

In the semi-arid expanses of the Sahel, water is not merely a natural resource; it is the fundamental currency of human survival. Over recent decades, climate variability, shifting rainfall patterns, and severe groundwater depletion have placed immense strain on northern communities. The dramatic historic shrinkage of Lake Chad—which historically sustained agriculture, fishing, and livestock for over 30 million people across Nigeria, Niger, Chad, and Cameroon—serves as a stark warning to the world. Having lost roughly 90 percent of its surface area since the 1960s due to climate shifts and unsustainable extraction, the lake's degradation has destabilized local economies, deepened poverty, and displaced entire livelihoods.
.</p>

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
