// 背景に「Takuto Sugawara」を敷き詰める
(function() {
  // 背景用のdiv要素を作成
  const bgDiv = document.createElement('div');
  bgDiv.id = 'background-text';
  bgDiv.style.cssText = `
    position: fixed;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    z-index: 0;
    pointer-events: none;
    overflow: hidden;
    line-height: 1.5;
    font-size: 40px;
    color: #00aa00;
    opacity: 0.25;
    font-family: "Times New Roman", Times, serif;
    word-spacing: 10px;
    transform: rotate(-15deg);
    transform-origin: center center;
  `;

  // 画面サイズに応じて必要な繰り返し回数を計算
  function fillBackground() {
    const text = 'Takuto Sugawara ';
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    // 1行あたりの文字数を計算（概算）
    // 回転を考慮して200%のサイズで計算
    const charsPerLine = Math.ceil(windowWidth * 2 / 24); // 40pxフォントで約24px/文字
    const lines = Math.ceil(windowHeight * 2 / 60); // 行間60px

    // 必要なテキスト量を計算
    const totalChars = charsPerLine * lines * 2; // 余裕をもって2倍
    const repeatCount = Math.ceil(totalChars / text.length);

    bgDiv.textContent = text.repeat(repeatCount);
  }

  // 初期表示
  document.body.insertBefore(bgDiv, document.body.firstChild);
  fillBackground();

  // ウィンドウサイズ変更時に再計算
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(fillBackground, 250);
  });
})();
