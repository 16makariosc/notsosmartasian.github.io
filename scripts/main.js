
$(document).ready(function(){

var d = new Date();
var m = d.getMinutes();
var t = d.getHours();
var w = d.getDay();

console.log(w);
console.log(t);
console.log(m);

t = t+(m/60);

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
	}
}

function closeOne(id){
	if ($("#"+id).hasClass('open')){
		$("#"+id).toggleClass('open closed');
		$("#"+id+" .status").html("CLOSED");
	}	
}

window.onload = function () {

	switch(w){
		case 0: switch (true){
					case (t < 11):
						 break;
					case (t > 11 && x < 3):
						 openOne('nch');
						 openOne('commons');
					case (t > 12 && x < 19):
						 openOne('houston');
					case (t > 17 && x < 20):
						 openOne('nch');
						 openOne('commons');
					}
		case 4: switch (true){
					case (t < 7.5):
						break;
					case (t >= 7.5 && t < 10):
						 openOne('nch');
					case (t >= 8.5 && t < 10):
						 openOne('kceh');
					case (t >= 11 && t < 19):
						 openOne('houston')
					case (t >= 11 && t < 14):
						 openOne('nch');
						 openOne('kceh');
						 openOne('commons');
					case (t >= 17 && t < 20):
						 openOne('nch');
					case (t >= 17 && t < 21):
						 openOne('kceh');
						 openOne('commons');
					}
			}
		} 


});