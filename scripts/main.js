
$(document).ready(function(){

function closeall(){

    $('.open').toggleClass('open closed');
    $(".status").html("CLOSED");

//	var elements = document.querySelectorAll(".open");
//	var status = document.getElementsByClassName(".status");
//	$(".open").removeClass("open").addClass("closed");
//	for(i = 0; i < elements.length; i++){
//		elements[i].classList.remove("open");
//	    elements[i].classList.add("closed");
//	    }
	}

function openall(){


	$(".closed").toggleClass('closed open');
	$(".status").html("OPEN");

//	var elements = document.querySelectorAll(".closed");
//	var status = document.querySelectorAll(".status");
//	for(i = 0; i < elements.length; i++){
//		elements[i].classList.remove("closed");
//		elements[i].classList.add("open");
//		status[i].classList.innerHTML = "OPEN";
//	}
}

function openOne(id){
	if ($("#"+id).hasClass('closed')){
		$("#"+id).toggleClass('closed open');
		$("#"+id+" .status").html("OPEN");
		console.log(id+' has opened')
	}
}

function closeOne(id){
	if ($("#"+id).hasClass('open')){
		$("#"+id).toggleClass('open closed');
		$("#"+id+" .status").html("CLOSED");
	}	
}

function inRange(x, min, max){
	return (x > min && x < max);
}

function fridayTimes(t){
	if (inRange(t, 7.5, 10)){
		openOne('nch');
	}
	if (inRange(t, 8.5, 10.5)){
		openOne('kceh');
	}
	if (inRange(t, 11, 17)){
		openOne('houston');
	}
	if (inRange(t, 11, 14)){
		openOne('nch');
		openOne('kceh');
		openOne('commons');
	}
	if (inRange(t, 17, 19)){
		openOne('nch');
	}
	if (inRange(t, 17, 19.5)){
		openOne('commons');
	}
	if (inRange(t, 17, 21)){
		openOne('kceh');
	}
}

function saturdayTimes(t){
	if (inRange(t, 11, 15)){
		openOne('nch');
		openOne('commons');
	}
	if (inRange(t, 17, 19)){
		openOne('nch');
	}
	if (inRange(t, 17, 19.5)){
		openOne('commons');
	}
}

function sundayTimes(t){
	if (inRange(t, 11, 15)){
		openOne('nch');
		openOne('commons');
	}
	if (inRange(t, 12, 19)){
		openOne('houston');
	}
	if (inRange(t, 17, 20)){
		openOne('nch');
		openOne('commons');
	}
}

function weekdayTimes(t){
	if (inRange(t, 7.5, 10)){
		openOne('nch');
	}
	if (inRange(t, 8.5, 10.5)){
		openOne('kceh');
	}
	if (inRange(t, 11, 19)){
		openOne('houston');
	}
	if (inRange(t, 11, 14)){
		openOne('nch');
		openOne('kceh');
		openOne('commons');
	}
	if (inRange(t, 17, 20)){
		openOne('nch');
	}
	if (inRange(t, 17, 21)){
		openOne('kceh');
		openOne('commons');
	}
}


window.onload = function () {

	var d = new Date();
    var m = d.getMinutes();
    var t = d.getHours();
    var w = d.getDay();

	console.log (inRange(3.877, 2, 5));
    console.log('w'+w);
    console.log(t);
    console.log(m);

	t = t+(m/60);

	console.log(t);

	switch(w){
		case 0 : sundayTimes(t);
		case 1 : weekdayTimes(t);
		case 2 : weekdayTimes(t);
		case 3 : weekdayTimes(t);
		case 4 : weekdayTimes(t);
		case 5 : fridayTimes(t);
		case 6 : saturdayTimes(t);
		}
	} 


});