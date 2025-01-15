// GSAP と ScrollTrigger を使ったアニメーションを定義
window.addEventListener("DOMContentLoaded", () => {
  // スクロール時にギャラリーアイテムがふわっと登場
  const galleryItems = document.querySelectorAll(".gallery-item");

  // ScrollTriggerを使って、セクションが見えたらアニメーション
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".about-section .section-title", {
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 70%", // 要素のトップがビューポートの70%に入ったら
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });

  gsap.from(".about-section .section-text", {
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 70%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "power2.out",
  });

  // ギャラリーアイテムを左右交互にフェードイン
  galleryItems.forEach((item, i) => {
    gsap.to(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 80%", 
      },
      opacity: 1,
      scale: 1,
      x: i % 2 === 0 ? -20 : 20, // 偶数番は左から、奇数番は右から
      duration: 1,
      ease: "power2.out",
    });
  });

  // Heroセクションのテキストを軽くアニメーション（ページ読み込み時）
  gsap.from(".hero-title", {
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });
  gsap.from(".hero-subtitle", {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.4,
    ease: "power2.out",
  });
  gsap.from(".hero-button", {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.8,
    ease: "power2.out",
  });
});

