
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

function printMenu(id, meal){
	$.ajax({
		type: "GET",
    	url:'data/meals.xml',
    	dataType: "xml",
    	success:function(xml) {
        	var result = $(xml).find("cafe[name=" + id +"]").find("meal[name=meal" + meal+"]").childNodes;
        	console.log(result[0]);
    	}
	});
}

function fridayTimes(t){
	if (inRange(t, 7.5, 10)){
		openOne('nch', 10-t);
	}
	if (inRange(t, 8, 10)){
		openOne('mcclelland', 10-t);
	}
	if (inRange(t, 8, 15)){
		openOne('accenture', 15-t);
	}
	if (inRange(t, 8.5, 10.5)){
		openOne('kceh', 10.5-t);
	}
	if (inRange(t, 9, 16)){
		openOne('nchretail', 16-t);
	}
	if (inRange(t, 11, 17)){
		openOne('houston', 17-t);
	}
	if (inRange(t, 11, 20)){
		openOne('frontera', 20-t);
	}
	if (inRange(t, 11, 14)){
		openOne('nch', 14-t);
		openOne('kceh', 14-t);
		openOne('commons', 14-t);
		openOne('mcclelland', 14-t);
	}
	if (inRange(t, 17, 19)){
		openOne('nch', 19-t);
	}
	if (inRange(t, 17, 19.5)){
		openOne('commons', 19.5-t);
	}
	if (inRange(t, 17, 21)){
		openOne('kceh', 21-t);
	}
}

function saturdayTimes(t){
	if (inRange(t, 9, 16)){
		openOne('nchretail', 16-t);
	}
	if (inRange(t, 11, 15)){
		openOne('nch', 15-t);
		openOne('commons', 15-t);
	}
	if (inRange(t, 17, 19)){
		openOne('nch', 19-t);
	}
	if (inRange(t, 17, 19.5)){
		openOne('commons', 19.5-t);
	}
}

function sundayTimes(t){
	if (inRange(t, 11, 15)){
		openOne('nch', 15-t);
		openOne('commons', 15-t);
	}
	if (inRange(t, 11, 22)){
		openOne('frontera', 22-t);
	}
	if (inRange(t, 12, 19)){
		openOne('houston', 19-t);
	}
	if (inRange(t, 17, 20)){
		openOne('nch', 20-t);
		openOne('commons', 20-t);
	}
	if (inRange(t, 20, 23.983)){
		openOne('mcclelland', 23.983-t);
	}
}

function weekdayTimes(t){
	if (inRange(t, 7.5, 10)){
		openOne('nch', 10-t);
	}
	if (inRange(t, 8, 10)){
		openOne('mcclelland', 10-t);
	}
	if (inRange(t, 8, 18)){
		openOne('accenture', 18-t);
	}
	if (inRange(t, 8.5, 10.5)){
		openOne('kceh', 10.5-t);
	}
	if (inRange(t, 9, 22)){
		openOne('nchretail', 22-t);
	}
	if (inRange(t, 11, 19)){
		openOne('houston', 19-t);
	}
	if (inRange(t, 11, 22)){
		openOne('frontera', 22-t);
	}
	if (inRange(t, 11, 14)){
		openOne('nch', 14-t);
		openOne('kceh', 14-t);
		openOne('commons', 14-t);
		openOne('mcclelland', 14-t);
	}
	if (inRange(t, 17, 20)){
		openOne('nch', 20-t);
	}
	if (inRange(t, 17, 21)){
		openOne('kceh', 21-t);
		openOne('commons', 21-t);
	}
	if (inRange(t, 20, 22)){
		openOne('nchmealeq', 22-t);
	}
	if (inRange(t, 20, 23.983)){
		openOne('mcclelland', 23.983-t);
	}
}


window.onload = function (){

	document.getElementById('commons').addEventListener('click', function(){
		toggleElement('commonsmenu');
	}, false);

	document.getElementById('kceh').addEventListener('click', function(){
		toggleElement('kcehmenu');
	}, false);

	document.getElementById('nch').addEventListener('click', function(){
		toggleElement('nchmenu');
	}, false);

	document.getElementById('houston').addEventListener('click', function(){
		toggleElement('houstonmenu');
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

		printMenu("1920-commons", 1);

	} 
});