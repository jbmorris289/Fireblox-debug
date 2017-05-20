function oInstall(data){
	if (data.reason == "install"){
		var instDate = new Date();
		browser.storage.local.set({installtd: instDate.toString()});
	var stpg = browser.runtime.getURL("pages/FirstRun_config.html");
	browser.tabs.create({
		url: stpg
	})
	}
}
browser.runtime.onInstalled.addListener(oInstall);