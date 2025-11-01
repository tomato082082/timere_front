// ↓↓↓ ドキュメント ↓↓↓
https://ja.splidejs.com/documents/

window.addEventListener('DOMContentLoaded', () => {
  /**
   * MVスライダー実行関数
   */
  function mvSplide() {
    new Splide('.js-mv-splide', {
      // ループ表示
      type: "loop",
      // 自動再生を有効にする
      autoplay: true,
      // 何秒間で切り替えるか（1秒）
      interval: 3000,
      // 何秒間で切り替えるか（1秒）
      speed: 1500
    }).mount();
  }

  /**
   * ヘアスタイルスライダー実行関数
   */
  function scrollSplide() {
    new Splide('.js-scroll-splide', {
      type: 'loop', // スライドのループ
      drag: false, //　ドラッグが自由にできるように設定
      pagination: false, // ページネーション非表示
      arrows: false,
      perPage: 5,
      gap: 16, // スライド間の余白（px）
      autoScroll: { // 自動スクロール設定
        speed: 0.5, //スクロールの速度
        pauseOnHover: false, // マウスホバー時に一時停止するかの設定
        pauseOnFocus: false, // フォーカス時に一時停止するかの設定
      },
      // 768px 以下で
      breakpoints: {
        768: {
          destroy: true
        },
      }

    }).mount(window.splide.Extensions);
  }

  mvSplide();
  scrollSplide();
})