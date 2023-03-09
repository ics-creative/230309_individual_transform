document.addEventListener("DOMContentLoaded", () => {
  // マウスストーカー
  const stalker = document.querySelector(".mouseStalker_cursor");
  // マウス右下になるよう24pxのオフセット
  const OFFSET = 24;
  document.addEventListener("mousemove", (e) => {
    // 位置をセット
    stalker.style.translate = `${e.clientX + OFFSET}px ${e.clientY + OFFSET}px`;
  });
  const interactive = document.querySelectorAll("a,button");
  interactive.forEach((element) => {
    // インタラクティブなコンテンツにホバーしたときにアクティブクラスを付与する
    element.addEventListener("mouseenter", () => {
      stalker.classList.add("active");
    });
    element.addEventListener("mouseleave", () => {
      stalker.classList.remove("active");
    });
  });
});
