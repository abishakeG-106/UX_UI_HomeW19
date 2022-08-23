
console.log("Your index.js file is loaded correctly!");

$("button").on("touchstart mousedown", function () {
    $(this).addClass("clicked");
});

console.log("You click on a button");

$("button").on("touchend mouseup", function () {
	$(this).removeClass("clicked");
	$(this).blur();
});

