$(document).ready(function () {
  $("#mail").blur(checkEmail);
  $("#pwd").blur(checkPass);
  $("#repwd").blur(checkRePass);
  $("input[type='radio']").blur(checkSex);
  $("#birthTime").blur(checkBirth);
  $(".reg-form").submit(function () {
    var LLH_flag = true;
    if (!checkEmail()) LLH_flag = false;
    if (!checkPass()) LLH_flag = false;
    if (!checkRePass()) LLH_flag = false;
    if (!checkSex()) LLH_flag = false;
    if (!checkBirth()) LLH_flag = false;
    if (LLH_flag) {
      alert("恭喜你注册成功！点击确定后跳转主页");
      window.location.href = "./index.js";
    }
    return LLH_flag;
  });
})
function checkEmail () {
  var LLH_mail = $("#mail").val();
  var $LLH_divId = $(".DivMail");
  var LLH_reg = /^\w+@\w+(\.[a-zA-Z]{2,3}){1,2}$/;
  if (LLH_reg.test(LLH_mail) == false) {
    $LLH_divId.html("账号格式不正确，请重新输入。");
    return false;
  }
  $LLH_divId.html("");
  return true;
};
function checkPass () {
  var $LLH_pwd = $("#pwd");
  var $LLH_divId = $(".DivPwd");
  var LLH_reg = /^[a-zA-Z0-9]{3,10}$/;
  if ($LLH_pwd.val() == "") {
    $LLH_divId.html("密码不能为空");
    return false;
  };
  if (LLH_reg.test($LLH_pwd.val()) == false) {
    $LLH_divId.html("密码不能含有非法字符，长度在3-10之间");
    return false;
  };
  $LLH_divId.html("");
  return true;
}
function checkRePass () {
  var LLH_pwd = $("#pwd").val();
  var LLH_rePwd = $("#repwd").val();
  var $LLH_divId = $(".DivRepwd");
  if (LLH_pwd != LLH_rePwd) {
    $LLH_divId.html("两次输入的密码内容不一致！");
    return false;
  };
  $LLH_divId.html("");
  return true;
}

function checkSex () {
  var LLH_sex = document.getElementsByName("sex");
  var LLH_isChecked = false;
  $(".DivSex").html("");
  for (var LLH_i = 0; LLH_i < LLH_sex.length; LLH_i++) {
    if (LLH_sex[LLH_i].checked) {
      LLH_isChecked = true;
      break;
    }
  }
  if (!LLH_isChecked) {
    $(".DivSex").html("请选择性别");
    return false;
  }
  return true;
}

function checkBirth () {
  var LLH_birth = $("#birthTime").val();
  var LLH_reg = /^((19\d{2})|(201\d)|(202[0-3]))-(0?[1-9]|1[0-2])-(0?[1-9]|[1-2]\d|3[0-1])$/;
  if (LLH_reg.test(LLH_birth) == false) {
    $(".DivBirth").html("生日格式不正确，例如1900-1-1或1900-01-01");
    return false;
  }
  $(".DivBirth").html("");
  return true;
}