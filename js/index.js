
console.log("Your index.js file is loaded correctly!");

$("DownloadResume").on("click", function () {
    
    console.log("You clicked on #DownloadResume");
});

$("button").on("touchsart mousedown", function () {
	$(this).addClass("clicked");
});

$("button").on("touchend mouseup", function () {
	$(this).removeClass("clicked");
	$(this).blur();
});

