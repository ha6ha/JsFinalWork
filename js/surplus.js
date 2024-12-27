function addNewLi () {
  var LLH_List = document.getElementById("specialNav");
  var LLH_NewLi = document.createElement("li");
  // var LLH_Slect = document.getElementsByClassName("nong");
  var LLH_newLink = document.createElement("a");
  // LLH_NewLi.textContent = '>>农产品';
  LLH_newLink.textContent = '>>农产品';
  LLH_NewLi.setAttribute("display", "inline-block");
  // LLH_NewLi.setAttribute("color", "#fff");
  LLH_NewLi.appendChild(LLH_newLink);
  LLH_List.appendChild(LLH_NewLi);
}