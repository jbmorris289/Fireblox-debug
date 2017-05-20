window.onload = function(){
var div = document.getElementById("top");
var ch1 = document.getElementById("set1");
var ch2 = document.getElementById("set2");
var ch3 = document.getElementById("set3");
var button1 = document.getElementsByClassName("button1")[0];
browser.storage.local.set({hidefr_n: ch1.checked, hidemsg_n: ch2.checked, countershow: ch3.checked, tswitch: true});

function ocl(){
var stattext = document.getElementById("textstat");
button1.disabled=true;
stattext.style.opacity=1;
browser.storage.local.set({hidefr_n: ch1.checked, hidemsg_n: ch2.checked, countershow: ch3.checked});
div.style.opacity=0
};

button1.onclick = ocl
}