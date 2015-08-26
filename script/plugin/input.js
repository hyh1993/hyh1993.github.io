/**
* 2015-01-29 去兜风 - 馒头
* 表单组件 1.0 版本
*/
//表单验证
var validateRegExp = {
    decmal: "^([+-]?)\\d*\\.\\d+$",// 浮点数
    decmal1: "^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*$",// 正浮点数
    decmal2: "^-([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*)$",// 负浮点数
    decmal3: "^-?([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0)$",// 浮点数
    decmal4: "^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0$",// 非负浮点数（正浮点数 + 0）
    decmal5: "^(-([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*))|0?.0+|0$",// 非正浮点数（负浮点数 +0
    intege: "^-?[1-9]\\d*$",// 整数
    intege1: "^[1-9]\\d*$", // 正整数
    intege2: "^-[1-9]\\d*$",// 负整数
    num: "^([+-]?)\\d*\\.?\\d+$",// 数字
    num1: "^[1-9]\\d*|0$",// 正数（正整数 + 0）
    num2: "^-[1-9]\\d*|0$",// 负数（负整数 + 0）
    ascii: "^[\\x00-\\xFF]+$",// 仅ACSII字符
    chinese: "^[\\u4e00-\\u9fa5]+$",// 仅中文
    color: "^[a-fA-F0-9]{6}$",// 颜色
    date: "^\\d{4}(\\-|\\/|\.)\\d{1,2}\\1\\d{1,2}$",// 日期
    email: "^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$",// 邮件
    idcard: "^[1-9]([0-9]{14}|[0-9]{17})$",// 身份证
    ip4: "^(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)$",// ip地址
    letter: "^[A-Za-z]+$",// 字母
    letter_l: "^[a-z]+$",// 小写字母
    letter_u: "^[A-Z]+$",// 大写字母
    mobile: "^0?(13|15|18|14|17)[0-9]{9}$",// 手机
    notempty: "^\\S+$",// 非空
    password: "^.*[A-Za-z0-9\\w_-]+.*$",// 密码
    fullNumber: "^[0-9]+$",// 数字
    picture: "(.*)\\.(jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga)$",// 图片
    qq: "^[1-9]*[1-9][0-9]*$",// QQ号码
    rar: "(.*)\\.(rar|zip|7zip|tgz)$",// 压缩文件
    tel: "^[0-9\-()（）]{7,18}$",// 电话号码的函数(包括验证国内区号,国际区号,分机号)
    url: "^http[s]?:\\/\\/([\\w-]+\\.)+[\\w-]+([\\w-./?%&=]*)?$",// url
    username: "^[A-Za-z0-9_\\-\\u4e00-\\u9fa5]+$",// 户名
    deptname: "^[A-Za-z0-9_()（）\\-\\u4e00-\\u9fa5]+$",// 单位名
    zipcode: "^\\d{6}$",// 邮编
    realname: "^[A-Za-z\\u4e00-\\u9fa5]+$",// 真实姓名
    companyname: "^[A-Za-z0-9_()（）\\-\\u4e00-\\u9fa5]+$",
    companyaddr: "^[A-Za-z0-9_()（）\\#\\-\\u4e00-\\u9fa5]+$",
    companysite: "^http[s]?:\\/\\/([\\w-]+\\.)+[\\w-]+([\\w-./?%&#=]*)?$"
};

var qdf_check=function(type,value){
	var $qdf=value.replace(/(^\s*)|(\s*$)/g, "");
	switch(type){
		case "decmal": return RegExp(validateRegExp.decmal).test($qdf); break;// 浮点数
		case "decmal1": return RegExp(validateRegExp.decmal1).test($qdf); break;// 正浮点数
		case "decmal2": return RegExp(validateRegExp.decmal2).test($qdf); break;// 负浮点数
		case "decmal3": return RegExp(validateRegExp.decmal3).test($qdf); break;// 浮点数
		case "decmal4": return RegExp(validateRegExp.decmal4).test($qdf); break;// 非负浮点数（正浮点数 + 0）
		case "decmal5": return RegExp(validateRegExp.decmal5).test($qdf); break;// 非正浮点数（负浮点数 +0
		case "intege": return RegExp(validateRegExp.intege).test($qdf); break;// 整数
		case "intege1": return RegExp(validateRegExp.intege1).test($qdf); break; // 正整数
		case "intege2": return RegExp(validateRegExp.intege2).test($qdf); break;// 负整数
		case "num": return RegExp(validateRegExp.num).test($qdf); break;// 数字
		case "num1": return RegExp(validateRegExp.num1).test($qdf); break;// 正数（正整数 + 0）
		case "num2": return RegExp(validateRegExp.num2).test($qdf); break;// 负数（负整数 + 0）
		case "ascii": return RegExp(validateRegExp.ascii).test($qdf); break;// 仅ACSII字符
		case "chinese": return RegExp(validateRegExp.chinese).test($qdf); break;// 仅中文
		case "color": return RegExp(validateRegExp.color).test($qdf); break;// 颜色
		case "date": return RegExp(validateRegExp.date).test($qdf); break;// 日期
		case "email": return RegExp(validateRegExp.email).test($qdf); break;// 邮件
		case "idcard": return RegExp(validateRegExp.idcard).test($qdf); break;// 身份证
		case "ip4": return RegExp(validateRegExp.ip4).test($qdf); break;// ip地址
		case "letter": return RegExp(validateRegExp.letter).test($qdf); break;// 字母
		case "letter_l": return RegExp(validateRegExp.letter_l).test($qdf); break;// 小写字母
		case "letter_u": return RegExp(validateRegExp.letter_u).test($qdf); break;// 大写字母
		case "mobile": return RegExp(validateRegExp.mobile).test($qdf); break;// 手机
		case "notempty": return RegExp(validateRegExp.notempty).test($qdf); break;// 非空
		case "password": return RegExp(validateRegExp.password).test($qdf); break;// 密码
		case "fullNumber": return RegExp(validateRegExp.fullNumber).test($qdf); break;// 数字
		case "picture": return RegExp(validateRegExp.picture).test($qdf); break;// 图片
		case "qq": return RegExp(validateRegExp.qq).test($qdf); break;// QQ号码
		case "rar": return RegExp(validateRegExp.rar).test($qdf); break;// 压缩文件
		case "tel": return RegExp(validateRegExp.tel).test($qdf); break;// 电话号码的函数(包括验证国内区号,国际区号,分机号)
		case "url": return RegExp(validateRegExp.url).test($qdf); break;// url
		case "username": return RegExp(validateRegExp.username).test($qdf); break;// 户名
		case "deptname": return RegExp(validateRegExp.deptname).test($qdf); break;// 单位名
		case "zipcode": return RegExp(validateRegExp.zipcode).test($qdf); break;// 邮编
		case "realname": return RegExp(validateRegExp.realname).test($qdf); break;// 真实姓名
		case "companyname": return RegExp(validateRegExp.companyname).test($qdf); break;
		case "companyaddr": return RegExp(validateRegExp.companyaddr).test($qdf); break;
		case "companysite": return RegExp(validateRegExp.companysite).test($qdf); break;
	}
};

$(function(){
	
	//表单验证
	$(document).on("focusin focusout",".s-validate",function(e) {
		var $this = $(this);
		var data = {
			tips : $this.attr("placeholder"),
			validate : eval( "({" + $this.data("validate") + "})" ),
			error : "", //错误提示
			left : $this.position().left + $this.width() + 10,
			top : $this.position().top + 3,
			zIndex : 20000,
			$field : $this.parent()
		};
		
		//如果失去焦点
		if(e.type == "focusout"){
			
			//关闭气泡
			data.$field.find(".s-validate-info").remove();
			
			//错误提示
			for(i in data.validate){
				if(!qdf_check(i,$this.val())){
					data.error+=data.validate[i];
				}
			};//END for
	
			if(data.error != "" && !data.$field.find(".s-validate-error")[0]){
				data.$field.append('<div class="s-validate-error" style="position: absolute; background: #fff; font-size:12px; color:#F00; border:1px solid #F00; padding:4px 6px; border-radius:3px; top:'+data.top+'px; left:'+data.left+'px; "><i class="s-ico s-ico-arw"></i><i class="s-ico s-ico-ix"></i> '+data.error+'</div>');
				data.$field.find(".s-validate-correct").remove();
			}else if( data.error == "" && !data.$field.find(".s-validate-correct")[0] ){
				data.$field.append('<div class="s-validate-correct" style="position: absolute; background: #fff; padding:4px 6px; border-radius:3px; top:'+data.top+'px; left:'+data.left+'px; "><i class="s-ico s-ico-iv"></i></div>');	
			}
			
		}else{
			
			//气泡提示信息
			data.$field.append('<div class="s-validate-info" style="position: absolute; color:#ff9c00; font-size:12px; border:1px solid #ff9c00; background: #fff; padding:4px 6px; border-radius:3px; top:'+data.top+'px; left:'+data.left+'px; ">'+data.tips+'</div>');	
			data.$field.find(".s-validate-error").remove();
		}
		
	}).on("submit",".s-form",function(){
		//提交表单的时候，验证数据
		$(this).find(".s-validate").trigger("focusout");
		if($(this).find(".s-validate-error")[0]){
			return false;
		}
	});
	
});

var qdf_self_input = {
	
	/**
	*	输入框光标事件初始化
	*/
	iniFocus : function(){
		//输入框 - 组件光标
		$("input.s-input").on("focusin",function(){
			$(this).css({
				"border" : "1px solid #ee6356"	
			});	
		}).on("focusout",function(){
			$(this).css({
				"border" : "1px solid #cccccc"	
			});	
		});	
	}, //iniFocus();
	
	/**
	*	自定义下拉选择 , callback 回调
	*/
	sevenSelect : function(callback){
		
		var $allSelect = $(".s-select");
		
		//初始化高度
		var iniHeight = function(){
			$allSelect.each(function(index, element) {
				$(this).data("height",$(this).find("ul").height());
			});	
		};
		
		//select展开
		var openSelect = function(sel){
			$allSelect.find("ul").css({
				"display":"none"
				//"height":0	
			});
			$allSelect.css("z-index",0);
			sel.$this.css("z-index",9999);
			
			sel.$ul.css({
				"display":"block"
				//"height":0
			});
//			sel.$ul.animate({
//				"height" : sel.height
//			},sel.delay);
		};
		
		//select关闭
		var closeSelect = function(sel){
			$(document).off('click.'+sel.spanId);
			if(sel.delay == 0){
				sel.$ul.css({
					"display":"none"
					//"height":0
				});	
				$allSelect.css("z-index",0);
				sel.$this.removeAttr("style");
			}
			else {
				sel.$ul.animate({
					//"height" : 0
				},sel.delay,function(){
					sel.$ul.css({
						"display":"none"
						//"height":0
					});	
					sel.$this.removeAttr("style");
				});	
			}
		};
		
		var bindEvent = function(){
			//自定义select框
			$allSelect.each(function(){
				
				var sel = {
					spanId : null,
					$this : null,
					$ul : null,
					height : null,
					delay : 0 //单位毫秒	
				};
				
				var $this = $(this).find("span");
				
				//如果span里面的内容为空，初始placeholder参数
				if($this.html() == ""){
					$this.html($this.attr("placeholder"));	
				}
				
				//绑定点击事件
				$this.on("click.bindEvent",function(e){
					//iniHeight();
					e.stopPropagation();
					sel.$this = $this.parent();
					sel.spanId = $this.attr("id");
					sel.$ul = sel.$this.find("ul");
					//sel.height = sel.$this.data("height");
					sel.height = sel.$ul.find("li").length * 29;
					
					//如果隐藏才显示
					if(sel.$ul.css("display") == "none"){

						openSelect(sel);	
						
						//动态绑定
						sel.$ul.on("click.bindEventUl","li",function(){
							$this.html($(this).html());
							$this.attr("data",$(this).attr("data"));
							returnSelectVal(sel.spanId);
							//closeSelect(sel);
							sel.$ul.off("click.bindEventUl");
						});
						
					}
					else{
						closeSelect(sel);
					}
					
					//点击span区域外的区域 - 缩回菜单
					$(document).on('click.'+sel.spanId,function(e){
						var e = e || window.event; //浏览器兼容性
						var elem = e.target || e.srcElement;
						//console.log("====",elem.id);
						if(elem.id == sel.spanId){
							return;
						}
						closeSelect(sel);
					});
					
				});	//end click
			});
		};
		iniHeight();
		bindEvent();
		//初始化 - 选择框
	}, //sevenSelect();
	
	/**
	*	自定义radio - 单选
	*/
	sevenRadio : function(){
		$(".s-radio").each(function(){
			var $this = $(this);
			var _obj = {
				$cthis : null,
				$state : $this.find(".s-radio-state"),
				className : null,
				$group : null,
				radioOff : '<i class="s-ico s-ico-radioOff"></i>',
				radioOn : '<i class="s-ico s-ico-radioOn"></i>'
			};
			_obj.className = _obj.$state.attr("class").replace("s-radio-state","").replace(" ","");
			_obj.$group = $("." + _obj.className);
			
			//初始化状态
			var iniRadioState = function(){
				if(_obj.$state.attr("id") != _obj.className + "_checked"){
					_obj.$state.html(_obj.radioOff);
				}
				else{
					_obj.$state.html(_obj.radioOn);	
				}
			};iniRadioState();
			
			//选择
			$this.on("click",function(){
				_obj.$group.html(_obj.radioOff).removeAttr("id");
				_obj.$state.html(_obj.radioOn).attr("id",_obj.className + "_checked");
			});
			
		});
	}, //sevenRadio();
	
	/**
	*	自定义checkbox - 多选
	*/
	sevenCheckbox : function(){
		$(".s-checkbox").each(function(){
			var $this = $(this);
			var _obj = {
				$cthis : null,
				$state : $this.find(".s-checkbox-state"),
				className : null,
				$group : null,
				checkboxOff : '<i class="s-ico s-ico-checkboxOff"></i>',
				checkboxOn : '<i class="s-ico s-ico-checkboxOn"></i>',
				checkdiabled : '<i class="s-ico s-ico-checkboxdisabled"></i>'
			};
			_obj.className = _obj.$state.attr("class").replace("s-checkbox-state","").replace("_checked","").replace(" ","").split(" ")[0];
			_obj.$group = $("." + _obj.className);
			
			//初始化状态
			var iniRadioState = function(){
				if(_obj.$state.attr("class").indexOf("_checked") == -1){
					_obj.$state.html(_obj.checkboxOff);
				}
				else{
					_obj.$state.html(_obj.checkboxOn);
				}
				
				if($this.attr("disabled") != undefined){
					_obj.$state.html(_obj.checkdiabled);	
				}
				
			};iniRadioState();
			
			//选择
			$this.on("click",function(){
				if($(this).attr("disabled") != undefined){
					return ;
				}
				if(_obj.$state.attr("class").indexOf(_obj.className + "_checked") == -1){
					_obj.$state.html(_obj.checkboxOn);
					_obj.$state.html(_obj.checkboxOn).addClass(_obj.className + "_checked");
					returnCheckBoxVal(_obj.className + "_checked");
				}
				else{
					_obj.$state.html(_obj.checkboxOff).removeClass(_obj.className + "_checked")
					_obj.$state.html(_obj.checkboxOff);	
					returnCheckBoxVal(_obj.className + "_checked");
				}
			});
			
		});
	}, //sevenCheckbox();
	
	/**
	*	自定义s-slider 滑块插件
	*/
	sevenSlider : function(){
		$(".s-slider").each(function(index, element) {
            var $this = $(this);
			var _obj = {
				$tips : $this.find("span.s-slider-tips"),
				$bar : $this.find("em.s-slider-bar"),
				$btn : $this.find("i.s-ico-slider"),
				data : null,//返回是 maxData:xx,minData:xx,iniData:xx
				width : null,//slider的宽
				value : null, //区间的值
				padding : 10 //滑块偏移
			};
			
			_obj.width = parseFloat($this.width());
			_obj.data = eval( "({" + $this.attr("data") + "})" );
			//数值转换
			_obj.data.minData = parseFloat(_obj.data.minData);
			_obj.data.maxData = parseFloat(_obj.data.maxData);
			_obj.data.iniData = parseFloat(_obj.data.iniData);
			_obj.value = _obj.data.maxData - _obj.data.minData;

			//初始化参数
			var iniSliderEmPosition = function(){
				var width = (_obj.data.iniData - _obj.data.minData)/_obj.value*_obj.width;
				_obj.$bar.width(width);
				_obj.$btn.css("left" , width - _obj.padding);
				_obj.$tips.html("<i class='minData'>" + _obj.data.minData + "</i> - <i class='endData'>" + _obj.data.iniData + "</i>");
			};iniSliderEmPosition();
			
			//点击事件
			_obj.$btn.on("mousedown",function(e){
				var ev = {
					x_start : null,
					x_move : null,
					x_end : null,
					left_start : null,
					moveWidth :　null
				};
				ev.x_start = e.pageX;
				ev.left_start = _obj.$btn.position().left;
				
				var pData = null;
				var mData = null;
				$(document).on("mousemove.sevenSlider",function(e){
					ev.x_move = e.pageX - ev.x_start;
					ev.moveWidth = ev.x_move + ev.left_start;
					if( ev.moveWidth >= - _obj.padding && ev.moveWidth <= _obj.width - _obj.padding){
						_obj.$btn.css({
							"left" : ev.moveWidth
						});
						_obj.$bar.width( ev.moveWidth + _obj.padding);
					}
					
					//设置值
					pData = ((_obj.$btn.position().left + _obj.padding)/_obj.width).toFixed(2);
					mData = null ;
					if(pData <= 0.02){
						pData = 0;
					}
					if(pData >=0.98){
						pData = 1.0	
					}
					mData = parseFloat(((_obj.data.maxData - _obj.data.minData)*pData).toFixed(0)) + _obj.data.minData;
					_obj.$tips.html( "<i class='minData'>" + _obj.data.minData + "</i> - <i class='endData'>" + mData + "</i>");
					
				}).on("mouseup.sevenSlider",function(e){
					$(document).off("mousemove.sevenSlider mouseup.sevenSlider");
				});
			});
			
        });	
	} //sevenSlider();	
};

//初始化全局函数
$(function(){
	qdf_self_input.iniFocus();
	qdf_self_input.sevenCheckbox();
	qdf_self_input.sevenRadio();
	qdf_self_input.sevenSelect();
	qdf_self_input.sevenSlider();
});

/**
*	获取多选的值,return arr数组
*/
function getSevenCheckboxValue($className){
	var arr = [];
	$className.each(function(){
		arr.push($(this).attr("data"));
	});
	return arr;
};

//默认回调函数为空
function returnCheckBoxVal(checkedClass){
	//console.log(checkedClass);
};

//默认回调函数为空
function returnSelectVal(spanId){
	//console.log(spanId);
};

/**
*	点击多选的时候，获取所有多选的值,回调函数 ， 写法如下， 多选的时候使用 switch 判断 className
*/
//function returnCheckBoxVal(checkedClass){
//	var arr = [];
//	$("."+checkedClass).each(function(index, element) {
//        arr.push($(this).attr("data"));
//    });
//	console.log(arr);
//};

