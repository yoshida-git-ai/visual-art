window.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Heroセクション：ページ読み込み時にフェードイン
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

  // Aboutセクション：スクロール時フェードイン
  gsap.from(".about-section .section-title", {
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 75%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });

  gsap.from(".about-section .section-text", {
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 75%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "power2.out",
  });

  // Aboutセクションでスクロールに合わせて背景色を変える (オプション)
  ScrollTrigger.create({
    trigger: ".about-section",
    start: "top 50%",
    onEnter: () => {
      gsap.to(".hero-section", {
        background: "linear-gradient(135deg, #ffde00 0%, #ff006a 100%)",
        duration: 1,
      });
    },
    onLeaveBack: () => {
      gsap.to(".hero-section", {
        background: "linear-gradient(135deg, #ff006a 0%, #00c9ff 100%)",
        duration: 1,
      });
    },
  });

  // Galleryアイテムをスクロールで拡大＆フェードイン
  const galleryItems = document.querySelectorAll(".gallery-item");
  galleryItems.forEach((item, i) => {
    gsap.to(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
      },
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power2.out",
      delay: i * 0.1,
    });
  });

  // Pinnedセクションを一定区間スクロールでピン留め
  ScrollTrigger.create({
    trigger: ".pinned-section",
    start: "top 80%",
    end: "bottom top", 
    pin: true,         // セクションをピン留め
    pinSpacing: true,  // その分下にスペースを確保
    markers: false,    // デバッグ用: trueでマーカー表示
  });

  // Pinnedセクションの中の要素を順番に表示
  gsap.from(".pinned-content h2", {
    scrollTrigger: {
      trigger: ".pinned-section",
      start: "top 90%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });
  gsap.from(".pinned-content p", {
    scrollTrigger: {
      trigger: ".pinned-section",
      start: "top 90%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "power2.out",
  });
});
