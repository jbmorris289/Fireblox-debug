function saveOptions(e){
	e.preventDefault();
	browser.storage.local.set({hidefr_n: document.querySelector("#set1").checked, hidemsg_n: document.querySelector("#set2").checked, countershow: document.querySelector("#set3").checked});
}


	
	function restoreOptions(){
		document.querySelector("form").addEventListener("submit", saveOptions);
		
		function setCurrentChoice(result){
			document.querySelector("#set1").checked = result.hidefr_n;
			document.querySelector("#set2").checked = result.hidemsg_n;
			document.querySelector("#set3").checked = result.countershow;
		}
		function onError(error){
			alert('Error: ${error}');
		}
		
		var getting = browser.storage.local.get();
		getting.then(setCurrentChoice, onError);
		
	}
	
window.addEventListener("DOMContentLoaded", restoreOptions);