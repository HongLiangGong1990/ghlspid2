var blockUrl = [
	// "*://*/*.css*",
	"*://*/*.gif*",
	"*://*/*.png*",
	"*://*/*.jpg*",
	//"*://*/*sufei-min.js*",
	//"*://*/*tdog.js",
	//"*://*/*tstart.js",
	//"*://*/*.js",
	// "*://*/*.mp4?*"
	"*://*/*.ico*"
]
chrome.webRequest.onBeforeRequest.addListener(
	function(details){
		console.log("request");
		return {cancel:true};
	},
	{urls:blockUrl},
	["blocking"]
);