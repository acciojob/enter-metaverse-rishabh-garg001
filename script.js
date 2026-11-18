//your JS code here. If required.
let changeHeading = document.querySelector("#status")

let btn = document.querySelector("#enterBtn")

btn.addEventListener("click", function(){
	changeHeading.outerHTML = "<h1>Entered Metaverse</h1>"
	
})