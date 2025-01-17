window.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // -----------------------------
  // Heroセクション：ページ読み込み時にフェードイン
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
  // Aboutセクション：スクロール時フェードイン
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
  // カラフルな背景変化: About→Showcase→Gallery→Pinnedセクションで変化
  // -----------------------------
  // 1) Aboutセクション通過時にヒーロー背景を変化
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

  // 2) Showcaseセクションの途中でさらに別の背景へ
  ScrollTrigger.create({
    trigger: ".showcase-section",
    start: "top 50%",
    onEnter: () => {
      gsap.to(".hero-section", {
        background: "linear-gradient(135deg, #00ff88 0%, #ff006a 100%)",
        duration: 1,
      });
    },
    onLeaveBack: () => {
      gsap.to(".hero-section", {
        background: "linear-gradient(135deg, #ffde00 0%, #ff006a 100%)",
        duration: 1,
      });
    },
  });

  // 3) Galleryセクションでさらに変化 (例)
  ScrollTrigger.create({
    trigger: ".gallery-section",
    start: "top 50%",
    onEnter: () => {
      gsap.to(".hero-section", {
        background: "linear-gradient(135deg, #ff6ad5 0%, #ffde00 100%)",
        duration: 1,
      });
    },
    onLeaveBack: () => {
      gsap.to(".hero-section", {
        background: "linear-gradient(135deg, #00ff88 0%, #ff006a 100%)",
        duration: 1,
      });
    },
  });

  // -----------------------------
  // ピン留めセクション
  // -----------------------------
  ScrollTrigger.create({
    trigger: ".pinned-section",
    start: "top 80%",
    end: "bottom top",
    pin: true,         // セクションをピン留め
    pinSpacing: true,  
    markers: false,    
  });

  // Pinnedセクション内の要素を順番に表示
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

  // -----------------------------
  // おまけ: 画面全体に浮遊する要素をランダム生成 (カラフルな円など)
  // -----------------------------
  for (let i = 0; i < 15; i++) {
    createFloatingShape();
  }

  function createFloatingShape() {
    const shape = document.createElement("div");
    shape.classList.add("floating-shape");
    document.body.appendChild(shape);
    
    // ランダムなサイズ・色・位置
    const size = Math.random() * 50 + 50; // 50px～100px
    const colorList = ["#ff006a", "#00c9ff", "#ffde00", "#ff6ad5", "#00ff88"];
    const color = colorList[Math.floor(Math.random() * colorList.length)];
    shape.style.width = `${size}px`;
    shape.style.height = `${size}px`;
    shape.style.backgroundColor = color;
    shape.style.left = `${Math.random() * 100}vw`;
    shape.style.top = `${Math.random() * 100}vh`;

    // ランダムに浮遊アニメ (y軸移動)
    const duration = Math.random() * 4 + 2; // 2～6秒
    gsap.to(shape, {
      y: -200,
      repeat: -1,
      yoyo: true,
      duration: duration,
      ease: "sine.inOut",
    });
  }
});
