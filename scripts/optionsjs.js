function saveOptions(e){
	e.preventDefault();
	browser.storage.local.set({hidefr_n: document.querySelector("#set1").checked, hidemsg_n: document.querySelector("#set2").checked, countershow: document.querySelector("#set3").checked});
}

window.addEventListener("DOMContentLoaded", restoreOptions);
	
	function restoreOptions(){
		document.querySelector("form").addEventListener("submit", saveOptions);
		
		function setCurrentChoice(result){
			document.querySelector("#set1").checked = result.checked || true;
			document.querySelector("#set2").checked = result.checked || true;
			document.querySelector("#set3").checked = result.checked || true;
		}
		function onError(error){
			alert('Error: ${error}');
		}
		
		var getting = browser.storage.local.get("hidefr_n");
		var getting2 = browser.storage.local.get("hidemsg_n");
		var getting3 = browser.storage.local.get("countershow");
		getting.then(setCurrentChoice, onError);
		getting2.then(setCurrentChoice, onError);
		getting3.then(setCurrentChoice, onError);
		
	}
