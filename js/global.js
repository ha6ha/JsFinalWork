$(document).ready(function () {
  // 创建监听器，实现header的动态转换
  var $LLH_header = $("#globalHeader");
  // console.log($LLH_header);
  // 检查后发现上一步可以获取
  var LLH_isScrolled = false;
  var LLH_HeaderInitStyle = {
    position: $LLH_header.css("position"),
  };
  // 获取header的<iframe>里面的.top<div>,为后面隐藏它做准备
  // var $LLH_HeaderIframe = $('.tou');
  // var LLH_iframeDoc = $LLH_HeaderIframe[0].contentDocument || $LLH_HeaderIframe[0].contentWindow.document;
  // var $LLH_topDiv = $(LLH_iframeDoc).find('.top');
  // 获取#banner，为后面弥补它突然上蹿的行为
  var $LLH_banner = $("#banner");
  // 获取二级界面的中心内容
  var $LLH_main = $("#desc");

  $(window).scroll(function () {
    var LLH_scrollTop = $(this).scrollTop();
    if (LLH_scrollTop > 72) { // 当滚动超过72px时切换样式
      if (!LLH_isScrolled) {
        // 移除原本样式
        $LLH_header.removeAttr('style');
        // 应用新fixed的CSS类
        $LLH_header.addClass('scrolled');
        // $LLH_topDiv.hide();
        $LLH_banner.css('margin', '150px auto 0px');
        $LLH_main.css('margin', '150px auto 0px');
        LLH_isScrolled = true;
      }
    } else {
      if (LLH_isScrolled) {
        // 恢复初始的样式
        $LLH_header.css(LLH_HeaderInitStyle);
        // 移除新fixed的CSS类
        $LLH_header.removeClass('scrolled');
        // $LLH_topDiv.show();
        $LLH_banner.css('margin', '-200px auto 0');
        $LLH_main.css('margin', '-200px auto 0px');
        LLH_isScrolled = false;
      }
    }
  });
  // 监听header的iframe是否加载完毕：完毕则形成若滚动72px就隐藏.top和改变#banner的margin-top的效果
})