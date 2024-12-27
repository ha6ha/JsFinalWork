$(document).ready(function () {
  let LLH_images = $("#banner .images>a");
  let LLH_prev = $(".arrow_left");
  // console.log(LLH_prev);
  // console.log("我获取到了左箭头");
  let LLH_next = $(".arrow_right");
  // console.log("我获取到了右箭头");
  // console.log(LLH_next);
  let LLH_dot = $("#banner .btnlist>span");
  let LLH_CurrentIndex = 0;
  let LLH_time;
  autoplay();
  dotClick();
  // 自动轮播
  function autoplay () {
    LLH_time = setInterval(() => {
      if (LLH_CurrentIndex == LLH_images.length - 1) {
        LLH_CurrentIndex = 0;
      } else {
        LLH_CurrentIndex++;
      }
      public();
    }, 3000);
  }
  // 左右切换
  LLH_prev.on("click", function () {
    // console.log("左边按钮被点击了");
    clearInterval(LLH_time);
    if (LLH_CurrentIndex == 0) {
      LLH_CurrentIndex = LLH_images.length - 1;
    } else {
      LLH_CurrentIndex--;
    }
    public();
    autoplay();
  });
  // LLH_prev 是一个 jQuery 对象，而不是一个原生的 DOM 元素。jQuery 对象不使用原生的 .onclick 属性来绑定事件处理器；相反，它们使用 .on() 方法或 .click() 方法来绑定事件。
  // 当你尝试使用 .onclick 属性时，你实际上是在尝试访问一个未定义的属性，因为它不存在于 jQuery 对象上。这就是为什么你的事件处理器没有起作用的原因。
  LLH_next.on("click", function () {
    console.log("右边按钮被点击了");
    clearInterval(LLH_time);
    LLH_CurrentIndex == LLH_images.length - 1 ? LLH_CurrentIndex = 0 : LLH_CurrentIndex++;
    public();
    autoplay();
  });
  // 切换图片可见性及index小圆点的高亮序列
  function public () {
    for (let LLH_i = 0; LLH_i < LLH_images.length; LLH_i++) {
      LLH_images[LLH_i].classList.remove("show");
      LLH_dot[LLH_i].classList.remove("active");
      LLH_images[LLH_CurrentIndex].classList.add("show");
      LLH_dot[LLH_CurrentIndex].classList.add("active");
    }
  }
  // 底部dot点击事件
  function dotClick () {
    // console.log("底部dot被触发了");

    for (let LLH_i = 0; LLH_i < LLH_dot.length; LLH_i++) {
      LLH_dot[LLH_i].onclick = function () {
        LLH_CurrentIndex = LLH_i;
        public();
        autoplay();
      }
    }
  }
})
