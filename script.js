window.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // -----------------------------
  // ヒーローセクション：ページ読み込み時にフェードイン
  // -----------------------------
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

  // -----------------------------
  // ABOUTセクション：スクロール時フェードイン
  // -----------------------------
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

  // -----------------------------
  // Featuresセクション：カードをフェードイン
  // -----------------------------
  const featureCards = document.querySelectorAll("#features .group");
  featureCards.forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: "#features",
        start: "top 80%",
      },
      y: 30,
      opacity: 0,
      duration: 1,
      delay: i * 0.2,
      ease: "power2.out",
    });
  });

  // -----------------------------
  // Showcaseセクション：画像アイテムを順番にフェードアップ
  // -----------------------------
  const showcaseItems = document.querySelectorAll(".showcase-item");
  showcaseItems.forEach((item, i) => {
    gsap.to(item, {
      scrollTrigger: {
        trigger: ".showcase-section",
        start: "top 80%",
      },
      y: 0,
      opacity: 1,
      duration: 1,
      delay: i * 0.2,
      ease: "power2.out",
    });
  });

  // -----------------------------
  // Galleryセクション：拡大＆フェードイン
  // -----------------------------
  const galleryItems = document.querySelectorAll(".gallery-item");
  galleryItems.forEach((item, i) => {
    gsap.to(item, {
      scrollTrigger: {
        trigger: ".gallery-section",
        start: "top 80%",
      },
      opacity: 1,
      scale: 1,
      duration: 1,
      delay: i * 0.1,
      ease: "power2.out",
    });
  });

  // -----------------------------
  // 左側のカラフルバーを、ABOUT開始～フッター直前までピン留め
  // -----------------------------
  ScrollTrigger.create({
    trigger: "#about",       // ここから
    start: "top top",
    endTrigger: "#footer",   // ここまでの範囲で
    end: "top bottom",
    pin: ".colorful-bar",    // この要素を固定
    pinSpacing: false,       // コンテンツの高さをそのままに
  });

  // -----------------------------
  // 左側カラフルバーにアニメーション（色を変化させる例）
  // -----------------------------
  // スクロール区間に応じてグラデーションを変化させる
  ScrollTrigger.create({
    trigger: "#showcase",
    start: "top 80%",
    onEnter: () => {
      gsap.to(".colorful-bar", {
        background: "linear-gradient(180deg, #00ff88 0%, #ff006a 100%)",
        duration: 1
      });
    },
    onLeaveBack: () => {
      gsap.to(".colorful-bar", {
        background: "linear-gradient(180deg, #ff006a 0%, #ffde00 100%)",
        duration: 1
      });
    }
  });

  ScrollTrigger.create({
    trigger: "#gallery",
    start: "top 80%",
    onEnter: () => {
      gsap.to(".colorful-bar", {
        background: "linear-gradient(180deg, #ff6ad5 0%, #ffde00 100%)",
        duration: 1
      });
    },
    onLeaveBack: () => {
      gsap.to(".colorful-bar", {
        background: "linear-gradient(180deg, #00ff88 0%, #ff006a 100%)",
        duration: 1
      });
    }
  });
});
