// Inline Manifest as Blob
(function(){
  const manifest = {
    name: "Farah Ramzan Companion 2026",
    short_name: "Ramzan 2026",
    description: "Farah, Mathura ke liye Ramzan 1447 — Sehri, Iftar, Duas, Quiz, Chatbot",
    start_url: "./",
    display: "standalone",
    orientation: "portrait",
    background_color: "#040c04",
    theme_color: "#040c04",
    lang: "hi",
    categories: ["religion", "lifestyle"],
    icons: [
      { src: "data:image/svg+xml;base64," + btoa('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192"><rect width="192" height="192" fill="#040c04" rx="24"/><text y="140" x="20" font-size="140">🌙</text></svg>'), sizes: "192x192", type: "image/svg+xml", purpose: "any maskable" },
      { src: "data:image/svg+xml;base64," + btoa('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><rect width="512" height="512" fill="#040c04" rx="60"/><text y="390" x="40" font-size="380">🌙</text></svg>'), sizes: "512x512", type: "image/svg+xml", purpose: "any maskable" }
    ],
    shortcuts: [
      { name: "Aaj ki Sehri/Iftar", short_name: "Timings", url: "./#home", icons: [{ src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5NiA5NiI+PHRleHQgeT0iODAiIGZvbnQtc2l6ZT0iODAiPvCfjIk8L3RleHQ+PC9zdmc+", sizes: "96x96" }] },
      { name: "Duas", short_name: "Duas", url: "./#duas", icons: [{ src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5NiA5NiI+PHRleHQgeT0iODAiIGZvbnQtc2l6ZT0iODAiPvCfpLI8L3RleHQ+PC9zdmc+", sizes: "96x96" }] }
    ]
  };
  const blob = new Blob([JSON.stringify(manifest)], {type: 'application/manifest+json'});
  const link = document.createElement('link');
  link.rel = 'manifest';
  link.href = URL.createObjectURL(blob);
  document.currentScript.parentNode.appendChild(link);
})();