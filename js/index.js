$(document).ready(function(){
	$("#menu ul.sub").hide();
	$("#menu ul.click li").click(function(){
		$("ul",this).slideToggle("fast");
	});
});