
var commonsTimes = new Map();
var kcehTimes = new Map();
var mcclellandTimes = new Map();
var nchTimes = new Map();
var nccmealeqTimes = new Map();
var houstonTimes = new Map();
var fronteraTimes = new Map();
var accentureTimes = new Map();

$(document).ready(function(){

function closeall(){
    $('.open').toggleClass('open closed');
    $(".status").html("CLOSED");
	}

function openall(){
	$(".closed").toggleClass('closed open');
	$(".status").html("OPEN");
}

function openOne(id, openUntil){
	if ($("#"+id).hasClass('closed')){
		$("#"+id).toggleClass('closed open');
//		$("#"+id).prependTo($("ul li:first"));
		min = parseInt((openUntil - parseInt(openUntil))*60);
        $("#"+id+" .status").html("OPEN <span class = 'small'> for </span> " + parseInt(openUntil) + "H " + ("0" + min).slice(-2)+"M");
	}
}

function addToMenu(id, item){
	$("#"+id+"menu").append('<li class = "menu">'+item+'</li>');
}

function closeOne(id, closedUntil){
	if ($("#"+id).hasClass('open')){
		$("#"+id).toggleClass('open closed');
		$("#"+id+" .status").html("CLOSED");
	}	
}

function toggleElement(id){
	$('#'+id).slideToggle(175);
}

function hideElement(id){
	$('#'+id).hide();
}


function inRange(x, min, max){
	return (x > min && x < max);
}

function loadMenu(id, meal){
	$.ajax({
		type: "GET",
    	url:'data/meals.xml',
    	dataType: "xml",
    	success:function(xml) {
        	var result = $(xml).find("cafe[name=" + id +"]").find("meal[name=meal" + meal+"]").children();
        	result.each(function(){
        		addToMenu(id, $(this).text());
        	});
    	}
	});
}

function fridayTimes(t){
	if (inRange(t, 7.5, 10)){						//breakfast
		openOne('new-college-house', 10-t);
		loadMenu('new-college-house', 1);
	}
	if (inRange(t, 8, 10)){
		openOne('mcclelland', 10-t);
		loadMenu('ncclelland', 1);
	}
	if (inRange(t, 8, 15)){
		openOne('accenture', 15-t);
	}
	if (inRange(t, 8.5, 10.5)){
		openOne('kings-court-english-house', 10.5-t);
		loadMenu('kings-court-english-house', 1);
	}
	if (inRange(t, 9, 16)){
		openOne('new-college-houseretail', 16-t);
	}
	if (inRange(t, 11, 17)){					//lunch
		openOne('houston-market', 17-t);
	}
	if (inRange(t, 11, 20)){
		openOne('frontera', 20-t);
	}
	if (inRange(t, 11, 14)){
		openOne('new-college-house', 14-t);
		openOne('kings-court-english-house', 14-t);
		openOne('1920-commons', 14-t);
		openOne('mcclelland', 14-t);
		loadMenu('new-college-house', 2);
		loadMenu('kings-court-english-house', 2);
		loadMenu('1920-commons', 1);
		loadMenu('mcclelland', 2);
	}
	if (inRange(t, 11.5, 14)){
		openOne('falk-dining-commons', 14-t);
		loadMenu('falk-dining-commons', 1);
	}
	if (inRange(t, 17, 19)){ 					//dinner
		openOne('new-college-house', 19-t);
		loadMenu('new-college-house', 3);
	}
	if (inRange(t, 17, 19.5)){
		openOne('1920-commons', 19.5-t);
		loadMenu('1920-commons', 2);
	}
	if (inRange(t, 17, 21)){
		openOne('kings-court-english-house', 21-t);
		loadMenu('kings-court-english-house', 3);
	}
	if (inRange(t, 20, 22)){
		openOne('falk-dining-commons', 22-t);
		loadMenu('falk-dining-commons', 2);
	}
}

function saturdayTimes(t){
	if (inRange(t, 9, 16)){				//brunch AKA meal 1
		openOne('new-college-houseretail', 16-t);
	}
	if (inRange(t, 11, 15)){
		openOne('new-college-house', 15-t);
		openOne('1920-commons', 15-t);
		loadMenu('new-college-house', 1);
		loadMenu('1920-commons', 1);
	}
	if (inRange(t, 11.5, 14)){
		openOne('falk-dining-commons', 14-t);
		loadMenu('falk-dining-commons', 1);
	}
	if (inRange(t, 17, 19)){			//dinner AKA meal 2
		openOne('new-college-house', 19-t);
		loadMenu('new-college-house', 2);
	}
	if (inRange(t, 17, 19.5)){
		openOne('1920-commons', 19.5-t);
		loadMenu('1920-commons', 2);
	}
}

function sundayTimes(t){
	if (inRange(t, 11, 15)){			//brunch
		openOne('new-college-house', 15-t);
		openOne('1920-commons', 15-t);
		loadMenu('new-college-house', 1);
		loadMenu('1920-commons', 1);
	}
	if (inRange(t, 11, 22)){
		openOne('frontera', 22-t);
	}
	if (inRange(t, 12, 19)){
		openOne('houston-market', 19-t);
	}
	if (inRange(t, 17, 20)){			//dinner 
		openOne('new-college-house', 20-t);
		openOne('1920-commons', 20-t);
		loadMenu('new-college-house', 2);
		loadMenu('1920-commons', 2);
	}
	if (inRange(t, 20, 23.983)){
		openOne('mcclelland', 23.983-t);
		loadMenu('mcclelland', 3);
	}
}

function weekdayTimes(t){
	if (inRange(t, 7.5, 10)){			//breakfast
		openOne('new-college-house', 10-t);
		loadMenu('new-college-house', 1);
	}
	if (inRange(t, 8, 10)){
		openOne('mcclelland', 10-t);
		loadMenu('mcclelland', 1);
	}
	if (inRange(t, 8, 18)){
		openOne('accenture', 18-t);
	}
	if (inRange(t, 8.5, 10.5)){
		openOne('kings-court-english-house', 10.5-t);
		loadMenu('kings-court-english-house', 1);
	}
	if (inRange(t, 9, 22)){
		openOne('new-college-houseretail', 22-t);
	}
	if (inRange(t, 11, 19)){
		openOne('houston-market', 19-t);
	}
	if (inRange(t, 11, 22)){
		openOne('frontera', 22-t);
	}
	if (inRange(t, 11, 14)){			//lunch
		openOne('new-college-house', 14-t);
		openOne('kings-court-english-house', 14-t);
		openOne('1920-commons', 14-t);
		openOne('mcclelland', 14-t);
		loadMenu('new-college-house', 2);
		loadMenu('kings-court-english-house', 2);
		loadMenu('1920-commons', 1);
		loadMenu('mcclelland', 2);
	}
	if (inRange(t, 11.5, 14)){
		openOne('falk-dining-commons', 14-t);
		loadMenu('falk-dining-commons', 1);
	}
	if (inRange(t, 17, 20)){			//dinner
		openOne('new-college-house', 20-t);
		loadMenu('new-college-house', 3);
	}
	if (inRange(t, 17, 21)){
		openOne('kings-court-english-house', 21-t);
		openOne('1920-commons', 21-t);
		loadMenu('kings-court-english-house', 3);
		loadMenu('1920-commons', 2);
	}
	if (inRange(t, 17.5, 19.5)){
		openOne('falk-dining-commons', 19.5-t);
		loadMenu('falk-dining-commons', 2);
	}
	if (inRange(t, 20, 22)){
		openOne('new-college-housemealeq', 22-t);
	}
	if (inRange(t, 20, 23.983)){
		openOne('mcclelland', 23.983-t);
		loadMenu('mcclelland', 3);
	}
}


window.onload = function (){

	document.getElementById('1920-commons').addEventListener('click', function(){
		toggleElement('1920-commonsmenu');
	}, false);

	document.getElementById('kings-court-english-house').addEventListener('click', function(){
		toggleElement('kings-court-english-housemenu');
	}, false);

	document.getElementById('new-college-house').addEventListener('click', function(){
		toggleElement('new-college-housemenu');
	}, false);

	document.getElementById('houston-market').addEventListener('click', function(){
		toggleElement('houston-marketmenu');
	}, false);

	document.getElementById('falk-dining-commons').addEventListener('click', function(){
		toggleElement('falk-dining-commonsmenu');
	}, false);

	document.getElementById('mcclelland').addEventListener('click', function(){
		toggleElement('mcclellandmenu');
	}, false);

	document.getElementById('frontera').addEventListener('click', function(){
		toggleElement('fronteramenu');
	}, false);

	document.getElementById('accenture').addEventListener('click', function(){
		toggleElement('accenturemenu');
	}, false);

	var d = new Date();
    var m = d.getMinutes();
    var t = d.getHours();
    var w = d.getDay();

	t = t+(m/60);

//	console.log(t);

	switch(w){
		case 0 : sundayTimes(t); break;
		case 1 : weekdayTimes(t); break;
		case 2 : weekdayTimes(t); break;
		case 3 : weekdayTimes(t); break;
		case 4 : weekdayTimes(t); break;
		case 5 : fridayTimes(t); break;
		case 6 : saturdayTimes(t);
		}

	} 
});