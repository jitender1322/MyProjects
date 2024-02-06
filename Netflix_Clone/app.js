function up(a, spnid) {
  if (a.value == "") {
    document.getElementById(spnid).style.top = "17px";
    document.getElementById(spnid).style.fontSize = "14px";
  } else {
    document.getElementById(spnid).style.top = "5px";
    document.getElementById(spnid).style.fontSize = "12px";
    document.getElementById(spnid).style.paddingBottom = "27px";
  }
}

function checkmail() {
  let a = document.getElementById("uname").value;
  let rem = /^([a-zA-Z0-9_\.\+\-])+\@(([a-zA-z0-9\-])+\.)+([a-zA-Z0-9]{2,4})$/;
  if (rem.test(a)) {
    document.getElementById("uname").style.border =
      "1px solid rgba(128, 128, 128, 0.7)";
    document.getElementById("warning").innerText = "";
  } else {
    document.getElementById("uname").style.border = "solid 1px red";
    document.getElementById("warning").innerText = "Email is required";
    document.getElementById("warning").style.color = "red";
    document.getElementById("warning").style.fontSize = "12px";
    document.getElementById("warning").style.position = "absolute";
    document.getElementById("warning").style.top = "100%";
    document.getElementById("warning").style.left = "22%";
  }
}
function checkmail2() {
  let a = document.getElementById("uname2").value;
  let rem = /^([a-zA-Z0-9_\.\+\-])+\@(([a-zA-z0-9\-])+\.)+([a-zA-Z0-9]{2,4})$/;
  console.log(a);
  if (rem.test(a)) {
    document.getElementById("uname2").style.border =
      "1px solid rgba(128, 128, 128, 0.7)";
    document.getElementById("warning").innerText = "";
  } else {
    document.getElementById("uname2").style.border = "solid 1px red";
    document.getElementById("warning2").innerText = "Email is required";
    document.getElementById("warning2").style.color = "red";
    document.getElementById("warning2").style.fontSize = "12px";
    document.getElementById("warning2").style.position = "absolute";
    document.getElementById("warning2").style.top = "100%";
    document.getElementById("warning2").style.left = "20%";
  }
}
