let bstorage=browser.storage.local.get(["hidefr_n","hidemsg_n","tswitch"]);
//let hidemsg=browser.storage.local.get("hidemsg_n");
//let hidefr=browser.storage.local.get("hidefr_n");
//let bstorage=browser.storage.local.get("hidemsg_n");
//function onError(error){
	//console.log(`Error: ${error}`);
//}
//bstorage.then(function(res){
//console.log(res)	
//})

bstorage.then(function(res){
	if (res.tswitch){
var msgs_nav = document.getElementById("nav-message");
var friends_nav = document.getElementById("nav-friends");
if (res.hidemsg_n){
if ($(msgs_nav).find(".notification-blue").attr("title") > 1){	
	//console.log($(this))
	$(msgs_nav).find(".notification-blue").hide()
}	
}

if (res.hidefr_n){
if ($(friends_nav).find(".notification-blue").attr("title") > 1){	
	//console.log($(this))
	$(friends_nav).find(".notification-blue").hide()
}	
}
	}});
//console.log(bstorage[0])
//alert(hidefr)
//TODO: Scam  Warning
//TODO: Fading sidebar
			 
//REAL END			 
//}}}