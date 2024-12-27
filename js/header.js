$(document).ready(function () {
  // 实现header的li的hover效果
  $(function () {
    $("header nav ul>li:has(ul)").hover(
      function () {
        $(this).find("ul").show();
      },
      function () {
        $(this).find("ul").hide();
      }
    )
  });
})