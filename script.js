// フェードイン要素をウィンドウスクロール時に表示する
window.addEventListener("scroll", function() {
  const fadeElements = document.querySelectorAll(".fade-in");
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    // 要素がある程度表示領域に近づいたら
    if (rect.top < windowHeight - 100) {
      el.classList.add("visible");
    }
  });
});

// パララックス背景などを簡易的に実装（スクロール速度に応じて背景を動かす）
window.addEventListener("scroll", function() {
  const scrolled = window.pageYOffset;
  const heroSection = document.querySelector(".hero-section");
  // heroSection の背景画像をゆっくり動かす
  heroSection.style.backgroundPositionY = -(scrolled * 0.3) + "px";
});
