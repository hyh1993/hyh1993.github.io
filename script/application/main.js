//测试案例
$(function(){
	
	$("#getCheckboxVal").click(function(){
		var arr = getSevenCheckboxValue($('.checkboxName_checked'));
		alert(arr);
	});	
	
	$("#getRadioVal").click(function(){
		var arr = getSevenCheckboxValue($('#radioName_checked'));
		alert(arr);
	});	
	
//	$(".s-checkbox").on("click",function(){
//		var arr = getSevenCheckboxValue($('#radioName_checked'));
//		alert(arr);	
//	});
	
	//初始化日历
	laydate({
		elem : '#startDay',
		issure: false, 
		festival: true, 
		min : laydate.now()
	});
	
	laydate({
		elem : '#endDay',
		issure: false, 
		festival: true, 
		min : laydate.now()
	});
	
});
