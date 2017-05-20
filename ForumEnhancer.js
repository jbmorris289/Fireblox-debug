//style="color:Grey"
var counter;
//var acknow=browser.storage.local.get("acknow");
let setting=browser.storage.local.get(["countershow","tswitch"]);
settings.then(function(res){
	if (res.tswitch){
if (res.countershow){
var dest = document.getElementById("ctl00_cphRoblox_Createeditpost1").childNodes[6].childNodes[1].childNodes[0].childNodes[1].childNodes[1].childNodes[1].childNodes[0].childNodes[3]; //TODO: "Smart" find
var inputsub=document.getElementById("ctl00_cphRoblox_Createeditpost1_PostForm_NewPostSubject");
if (window.location.pathname=="/Forum/AddPost.aspx"){
	counter = document.createElement("span");
	//var thebr=document.createElement('br');
	//counter.appendChild(thebr);
	counter.style="color:Grey;";
	counter.innerHTML="-- characters left";
		//console.log("dd");
	dest.appendChild(counter);


var subjmax=60;
var curchar;
counter.innerHTML = (subjmax) + " characters left";
//if (acknow == "true"){
//setTimeout(function(){alertify.notify('FireBlox: The character counter for the body is not yet implemented yet. Just a notice!','message',7)},3000)
//browser.storage.local.set({
//	acknow: true
//});
//}
$(inputsub).on('input',function(){
	//console.log("CHANGED")
	curchar	= ($(this).val()).length;
	//console.log(curchar)
	//var charsused = (60 - curchar);
	//console.log(parseFloat(charsused))
	if (curchar>60){
		counter.innerHTML = "Too many characters in your message!"
	} else {
	counter.innerHTML = curchar + " / " + subjmax + " characters" //(charsused) + " characters left"
	}

	});
$(inputsub).trigger("input");
};
}
	)}}