$(document).ready(function () {
  getPriceSum();

  $(".select-all input").change(function () {
    var LLH_check = $(this).prop('checked');
    $(".item input,.select-all input").prop('checked', LLH_check);
    if (LLH_check) {
      $('.item').addClass('current');
    } else {
      $('.item').removeClass('current');
    }
    getPriceSum();
  });

  $(".item input").change(function () {
    var LLH_itemChecked = $(".item input:checked").length;
    var LLH_itemTotal = $(".item").length;
    $(".select-all input").prop('checked', LLH_itemChecked === LLH_itemTotal);

    var LLH_check = $(this).prop('checked');
    if (LLH_check) {
      $(this).parents('.item').addClass('current');
    } else {
      $(this).parents('.item').removeClass('current');
    }
    getPriceSum();
  });

  $(".item #right").click(function () {
    var LLH_num = parseInt($(this).siblings('.nums').val()) || 0;
    LLH_num++;
    $(this).siblings('.nums').val(LLH_num);
    var LLH_price = parseFloat($(this).parents('.item-num').siblings('.item-price').text().substr(1));
    var LLH_sum = (LLH_price * LLH_num).toFixed(2);
    $(this).parents('.item-num').siblings('.item-sum').text("￥" + LLH_sum);
    getPriceSum();
  });

  $(".item #left").click(function () {
    var LLH_num = parseInt($(this).siblings('.nums').val()) || 0;
    if (LLH_num <= 1) {
      alert("数量最小值为1");
      return false;
    }
    LLH_num--;
    $(this).siblings('.nums').val(LLH_num);
    var LLH_price = parseFloat($(this).parents('.item-num').siblings('.item-price').text().substr(1));
    var LLH_sum = (LLH_price * LLH_num).toFixed(2);
    $(this).parents('.item-num').siblings('.item-sum').text("￥" + LLH_sum);
    getPriceSum();
  });

  $(".item .nums").change(function () {
    var LLH_num = parseInt($(this).val()) || 0;
    if (LLH_num < 1) {
      $(this).val(1);
      var LLH_price = parseFloat($(this).parents('.item-num').siblings('.item-price').text().substr(1));
      $(this).parents('.item-num').siblings('.item-sum').text("￥" + LLH_price.toFixed(2));
      getPriceSum();
      return false;
    }
    var LLH_price = parseFloat($(this).parents('.item-num').siblings('.item-price').text().substr(1));
    var LLH_sum = (LLH_price * LLH_num).toFixed(2);
    $(this).parents('.item-num').siblings('.item-sum').text("￥" + LLH_sum);
    getPriceSum();
  });

  function getPriceSum () {
    var LLH_priceSum = 0;
    var LLH_itemCount = 0; // 用于统计选中商品的总数量
    $(".item input:checked").each(function () {
      var LLH_num = parseInt($(this).parents('.item').find('.nums').val()) || 0;
      var LLH_price = parseFloat($(this).parents('.item').find('.item-price').text().substr(1));
      LLH_priceSum += (LLH_num * LLH_price);
      LLH_itemCount += LLH_num; // 累加选中商品的数量
    });
    LLH_priceSum = LLH_priceSum.toFixed(2);
    $(".footer-sum").text('￥' + LLH_priceSum);
    $(".footer-num span").text(LLH_itemCount);
  }

  $(".addAll").click(function () {
    var LLH_orderDetails = [];
    $(".item input:checked").each(function () {
      var LLH_itemName = $(this).parents('.item').find('p').text();
      var LLH_itemNum = $(this).parents('.item').find('input[type="text"]').val();
      LLH_orderDetails.push(LLH_itemName + '：' + LLH_itemNum + '个');
    });
    var LLH_orderSummary = '选中的商品：\n' + LLH_orderDetails.join("\n") + "\n" + '总价：' + $(".footer-sum").text() + "\n" + "请确认以上信息无误后，再点击确定！";
    if (confirm(LLH_orderSummary) == true) {
      window.location.reload(); // 用户点击确定则刷新页面
    } else {
      return false; // 用户点击取消则不刷新页面,返回修改商品信息
    }
  });

  $(".item .item-opration").click(function () {
    $(this).parents(".item").remove();
    alert("确认删除该商品吗？");
    getPriceSum();
  });
});
