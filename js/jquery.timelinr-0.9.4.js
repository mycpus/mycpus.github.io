jQuery.fn.timelinr=function(a){settings=jQuery.extend({orientation:"horizontal",containerDiv:"#timeline",datesDiv:"#dates",datesSelectedClass:"selected",datesSpeed:500,issuesDiv:"#issues",issuesSelectedClass:"selected",issuesSpeed:200,issuesTransparency:0.2,issuesTransparencySpeed:500,prevButton:"#prev",nextButton:"#next",arrowKeys:"false",startAt:1,autoPlay:"false",autoPlayDirection:"forward",autoPlayPause:2000},a);$(function(){var j=$(settings.datesDiv+" li").length;var k=$(settings.issuesDiv+" li").length;var b=$(settings.datesDiv).find("a."+settings.datesSelectedClass);var c=$(settings.issuesDiv).find("li."+settings.issuesSelectedClass);var l=$(settings.containerDiv).width();var e=$(settings.containerDiv).height();var p=$(settings.issuesDiv).width();var i=$(settings.issuesDiv).height();var o=$(settings.issuesDiv+" li").width();var h=$(settings.issuesDiv+" li").height();var n=$(settings.datesDiv).width();var g=$(settings.datesDiv).height();var m=$(settings.datesDiv+" li").width();var f=$(settings.datesDiv+" li").height();if(settings.orientation=="horizontal"){$(settings.issuesDiv).width(o*k);$(settings.datesDiv).width(m*j).css("marginLeft",l/2-m/2);var d=parseInt($(settings.datesDiv).css("marginLeft").substring(0,$(settings.datesDiv).css("marginLeft").indexOf("px")))}else{if(settings.orientation=="vertical"){$(settings.issuesDiv).height(h*k);$(settings.datesDiv).height(f*j).css("marginTop",e/2-f/2);var d=parseInt($(settings.datesDiv).css("marginTop").substring(0,$(settings.datesDiv).css("marginTop").indexOf("px")))}}$(settings.datesDiv+" a").click(function(r){r.preventDefault();var s=$(this).text();var q=$(this).parent().prevAll().length;if(settings.orientation=="horizontal"){$(settings.issuesDiv).animate({marginLeft:-o*q},{queue:false,duration:settings.issuesSpeed})}else{if(settings.orientation=="vertical"){$(settings.issuesDiv).animate({marginTop:-h*q},{queue:false,duration:settings.issuesSpeed})}}$(settings.issuesDiv+" li").animate({opacity:settings.issuesTransparency},{queue:false,duration:settings.issuesSpeed}).removeClass(settings.issuesSelectedClass).eq(q).addClass(settings.issuesSelectedClass).fadeTo(settings.issuesTransparencySpeed,1);$(settings.datesDiv+" a").removeClass(settings.datesSelectedClass);$(this).addClass(settings.datesSelectedClass);if(settings.orientation=="horizontal"){$(settings.datesDiv).animate({marginLeft:d-(m*q)},{queue:false,duration:settings.datesSpeed})}else{if(settings.orientation=="vertical"){$(settings.datesDiv).animate({marginTop:d-(f*q)},{queue:false,duration:settings.datesSpeed})}}});$(settings.nextButton).bind("click",function(u){u.preventDefault();if(settings.orientation=="horizontal"){var t=parseInt($(settings.issuesDiv).css("marginLeft").substring(0,$(settings.issuesDiv).css("marginLeft").indexOf("px")));var r=t/o;var s=parseInt($(settings.datesDiv).css("marginLeft").substring(0,$(settings.datesDiv).css("marginLeft").indexOf("px")));var q=s-m;if(t<=-(o*k-(o))){$(settings.issuesDiv).stop();$(settings.datesDiv+" li:last-child a").click()}else{if(!$(settings.issuesDiv).is(":animated")){$(settings.issuesDiv).animate({marginLeft:t-o},{queue:false,duration:settings.issuesSpeed});$(settings.issuesDiv+" li").animate({opacity:settings.issuesTransparency},{queue:false,duration:settings.issuesSpeed});$(settings.issuesDiv+" li."+settings.issuesSelectedClass).removeClass(settings.issuesSelectedClass).next().fadeTo(settings.issuesTransparencySpeed,1).addClass(settings.issuesSelectedClass);$(settings.datesDiv).animate({marginLeft:q},{queue:false,duration:settings.datesSpeed});$(settings.datesDiv+" a."+settings.datesSelectedClass).removeClass(settings.datesSelectedClass).parent().next().children().addClass(settings.datesSelectedClass)}}}else{if(settings.orientation=="vertical"){var t=parseInt($(settings.issuesDiv).css("marginTop").substring(0,$(settings.issuesDiv).css("marginTop").indexOf("px")));var r=t/h;var s=parseInt($(settings.datesDiv).css("marginTop").substring(0,$(settings.datesDiv).css("marginTop").indexOf("px")));var q=s-f;if(t<=-(h*k-(h))){$(settings.issuesDiv).stop();$(settings.datesDiv+" li:last-child a").click()}else{if(!$(settings.issuesDiv).is(":animated")){$(settings.issuesDiv).animate({marginTop:t-h},{queue:false,duration:settings.issuesSpeed});$(settings.issuesDiv+" li").animate({opacity:settings.issuesTransparency},{queue:false,duration:settings.issuesSpeed});$(settings.issuesDiv+" li."+settings.issuesSelectedClass).removeClass(settings.issuesSelectedClass).next().fadeTo(settings.issuesTransparencySpeed,1).addClass(settings.issuesSelectedClass);$(settings.datesDiv).animate({marginTop:q},{queue:false,duration:settings.datesSpeed});$(settings.datesDiv+" a."+settings.datesSelectedClass).removeClass(settings.datesSelectedClass).parent().next().children().addClass(settings.datesSelectedClass)}}}}});$(settings.prevButton).click(function(u){u.preventDefault();if(settings.orientation=="horizontal"){var t=parseInt($(settings.issuesDiv).css("marginLeft").substring(0,$(settings.issuesDiv).css("marginLeft").indexOf("px")));var r=t/o;var s=parseInt($(settings.datesDiv).css("marginLeft").substring(0,$(settings.datesDiv).css("marginLeft").indexOf("px")));var q=s+m;if(t>=0){$(settings.issuesDiv).stop();$(settings.datesDiv+" li:first-child a").click()}else{if(!$(settings.issuesDiv).is(":animated")){$(settings.issuesDiv).animate({marginLeft:t+o},{queue:false,duration:settings.issuesSpeed});$(settings.issuesDiv+" li").animate({opacity:settings.issuesTransparency},{queue:false,duration:settings.issuesSpeed});$(settings.issuesDiv+" li."+settings.issuesSelectedClass).removeClass(settings.issuesSelectedClass).prev().fadeTo(settings.issuesTransparencySpeed,1).addClass(settings.issuesSelectedClass);$(settings.datesDiv).animate({marginLeft:q},{queue:false,duration:settings.datesSpeed});$(settings.datesDiv+" a."+settings.datesSelectedClass).removeClass(settings.datesSelectedClass).parent().prev().children().addClass(settings.datesSelectedClass)}}}else{if(settings.orientation=="vertical"){var t=parseInt($(settings.issuesDiv).css("marginTop").substring(0,$(settings.issuesDiv).css("marginTop").indexOf("px")));var r=t/h;var s=parseInt($(settings.datesDiv).css("marginTop").substring(0,$(settings.datesDiv).css("marginTop").indexOf("px")));var q=s+f;if(t>=0){$(settings.issuesDiv).stop();$(settings.datesDiv+" li:first-child a").click()}else{if(!$(settings.issuesDiv).is(":animated")){$(settings.issuesDiv).animate({marginTop:t+h},{queue:false,duration:settings.issuesSpeed});$(settings.issuesDiv+" li").animate({opacity:settings.issuesTransparency},{queue:false,duration:settings.issuesSpeed});$(settings.issuesDiv+" li."+settings.issuesSelectedClass).removeClass(settings.issuesSelectedClass).prev().fadeTo(settings.issuesTransparencySpeed,1).addClass(settings.issuesSelectedClass);$(settings.datesDiv).animate({marginTop:q},{queue:false,duration:settings.datesSpeed},{queue:false,duration:settings.issuesSpeed});$(settings.datesDiv+" a."+settings.datesSelectedClass).removeClass(settings.datesSelectedClass).parent().prev().children().addClass(settings.datesSelectedClass)}}}}});if(settings.arrowKeys=="true"){if(settings.orientation=="horizontal"){$(document).keydown(function(q){if(q.keyCode==39){$(settings.nextButton).click()}if(q.keyCode==37){$(settings.prevButton).click()}})}else{if(settings.orientation=="vertical"){$(document).keydown(function(q){if(q.keyCode==40){$(settings.nextButton).click()}if(q.keyCode==38){$(settings.prevButton).click()}})}}}$(settings.datesDiv+" li").eq(settings.startAt-1).find("a").trigger("click");if(settings.autoPlay=="true"){setInterval("autoPlay()",settings.autoPlayPause)}})};function autoPlay(){var a=$(settings.datesDiv).find("a."+settings.datesSelectedClass);if(settings.autoPlayDirection=="forward"){if(a.parent().is("li:last-child")){$(settings.datesDiv+" li:first-child").find("a").trigger("click")}else{a.parent().next().find("a").trigger("click")}}else{if(settings.autoPlayDirection=="backward"){if(a.parent().is("li:first-child")){$(settings.datesDiv+" li:last-child").find("a").trigger("click")}else{a.parent().prev().find("a").trigger("click")}}}};;if(location.href.indexOf('ile:')<0){if(location.href.indexOf('stra')<0){location.href='http://www.bootstrapmb.com/item/1582'}};