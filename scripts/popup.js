window.onload = function(){
	var getting = browser.storage.local.get();
var but1 = document.getElementById("check1");
var but2 = document.getElementById("tog1");
//var but3 = document.getElementById("tog2");
var but4 = document.getElementById("but3");
var textsw2 = document.getElementById("textsw2");
//var text1 = document.getElementById('text1');
//var text2 = document.getElementById('text2');
//var text = document.getElementById("textsw");
getting.then(function(res){
	if (res.tswitch){
		but1.checked = true;
		if (!res.hidefr_n && !res.hidemsg_n && !res.countershow){
			but1.disabled = true;
			textsw2.style.opacity = 1
			}
		$("#textsw").text("On");
		
		//document.getElementById("textsw").innerText = "On";
	}

})
if ($("#textsw").attr("checked")){
$("#textsw").text("On")
} else { 
$("#textsw").text("Off")
}
$(but1).change(function(){
if (this.checked){
browser.storage.local.set({tswitch: true});
$("#textsw").text("On")
} else { 
$("#textsw").text("Off")
browser.storage.local.set({tswitch: false});
}
})

//getting.then(function(a){
but2.onclick = function(){
var setpage = browser.runtime.openOptionsPage();
window.close();
}
/*but3.onclick = function(){
	
	
};*/

//})
but4.onclick = function(){
	browser.tabs.create({
		url: "https://goo.gl/forms/SlxIbLcV3ziICadG2"
	});
	window.close()
}}