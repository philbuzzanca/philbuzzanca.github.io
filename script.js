function loadResume(){
	$("#resumeLink").addClass("active");
	$("#homePage").fadeOut(75, function(){
		$("#resumePage").fadeIn(75);
	});
	$("#homeLink").removeClass("active");
}

function loadHome(){
	$("#homeLink").addClass("active");
	$("#resumePage").fadeOut(75, function(){
		$("#homePage").fadeIn(75);
	});
	$("#resumeLink").removeClass("active");
}