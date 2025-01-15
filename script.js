// ページ読み込み時にコンソールで確認
console.log("JavaScriptファイルが正常に読み込まれました。");

// スクロール時の簡易パララックス例 (オプション)
window.addEventListener("scroll", function() {
  const scrolled = window.pageYOffset;
  const heroSection = document.querySelector(".hero-section");
  // 背景をゆっくり動かしてパララックスっぽく演出
  heroSection.style.backgroundPositionY = -(scrolled * 0.2) + "px";
});
