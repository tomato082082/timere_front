/**
 * 共通読みこみのスクリプト
 */

window.addEventListener('DOMContentLoaded', () => {
  // DOM要素を取得
  const $header = document.querySelector('.js-header');
  const $headerBtn = document.querySelector('.js-header-btn');
  const $body = document.querySelector('.js-body');
  const $top = document.querySelector('.js-top');

  /**
   * クリックした時にどうなるか？
   */
  $headerBtn.addEventListener('click', () => {
    // is-openクラスが含まれているか？ 
    if ($header.classList.contains('is-open')) {
      // true：YES クラスを外す
      $header.classList.remove('is-open');
      $body.style.removeProperty("overflow");
    } else {
      // false:NO クラスを付与する
      $header.classList.add('is-open');
      $body.style.overflow = "hidden";
    }

    // これでも可能
    // $header.classList.toggle('is-open');
  })

  $top.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  })
})