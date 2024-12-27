$(document).ready(function () {
  // 回顶部功能
  $('.to_top').click(function () {
    // 使用 animate 方法滚动到页面顶部，动画持续时间为 600 毫秒
    $('html, body').animate({
      scrollTop: 0
    }, 600);
    return false;
  });
  // 逐个显示每个.text元素的内容
  $('.text').each(function () {
    var $LLH_this = $(this);
    var LLH_text = $LLH_this.text();
    var LLH_index = 0;
    var LLH_charInterval = setInterval(function () {
      if (LLH_index < LLH_text.length) {
        $LLH_this.text(LLH_text.substring(0, LLH_index));
        LLH_index++;
      } else {
        clearInterval(LLH_charInterval);
      }
    }, 100);
  });
  // 点击添加购物车实现商品卡片添加到购物车的动画效果
  $('.add-to-cart').click(function () {
    var LLH_product = $(this).closest('.card').clone();
    LLH_product.css({
      width: '100px',
      height: '50px',
      position: 'absolute',
      textAlign: 'center',
      top: $(this).closest('.card').offset().top,
      left: $(this).closest('.card').offset().left,
      'z-index': '9999'
    });
    $('body').append(LLH_product);
    var LLH_windowHeight = $(window).height();
    var LLH_windowWidth = $(window).width();
    var LLH_CloneTop = LLH_windowHeight - 50;
    var LLH_CloneLeft = LLH_windowWidth - 100;
    LLH_product.animate({
      top: LLH_CloneTop,
      left: LLH_CloneLeft
    }, 1000, function () {
      $(this).remove();
    })
  });
})