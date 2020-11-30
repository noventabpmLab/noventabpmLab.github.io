// JavaScript Document

$(document).ready(function(){
	$(window).scroll(function(){
		
		if($(this).scrollTop() > 50){
			$("#menuPal").css("position", "fixed");
			$("#menuPal").css("background-color", "rgba(0,0,0,1)");
			$("#menuPal").css("width", "100%");
			
		}
		
	})
	
	
	$("#mujeres").click(function(){
		$("#bannerH").css("display","none");
		$("#bannerM").css("display", "inline");
		$("#hombres img").css("display", "inline");
		$("#mujeres img").css("display", "none");
		
	})
	$("#hombres").click(function(){
		$("#bannerH").css("display","inline");
		$("#bannerM").css("display", "none");
		$("#hombres img").css("display", "none");
		$("#mujeres img").css("display", "inline");
		
	})
})