setInterval(function () {
  const LLH_show = document.querySelector("span[data-show]");
  const LLH_next = LLH_show.nextElementSibling || document.querySelector("span:first-child");
  const LLH_up = document.querySelector("span[data-up]");
  if (LLH_up) {
    LLH_up.removeAttribute("data-up");
  }
  LLH_show.removeAttribute("data-show");
  LLH_show.setAttribute("data-up", "");
  LLH_next.setAttribute("data-show", "");
}, 2000);