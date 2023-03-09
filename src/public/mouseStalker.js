document.addEventListener("DOMContentLoaded", () => {
  // マウスストーカーの要素
  const stalkerElement = document.querySelector(".mouseStalker_cursor");
  // マウス右下になるよう24pxのオフセット
  const OFFSET = 24;
  document.addEventListener("mousemove", (e) => {
    // 位置をセット
    stalkerElement.style.translate = `${e.clientX + OFFSET}px ${e.clientY + OFFSET}px`;
  });
  const interactiveElements = document.querySelectorAll("a,button");
  interactiveElements.forEach((element) => {
    // インタラクティブなコンテンツにホバーしたときにアクティブクラスを付与する
    element.addEventListener("mouseenter", () => {
      stalkerElement.classList.add("active");
    });
    // インタラクティブなコンテンツから出たときにアクティブクラスを削除する
    element.addEventListener("mouseleave", () => {
      stalkerElement.classList.remove("active");
    });
  });
});
