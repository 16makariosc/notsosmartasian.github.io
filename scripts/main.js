
function closeall(){

	$(document).ready(function(){
    	$('.open').toggleClass('open closed');
    	$(".status").html("CLOSED");
	});
//	var elements = document.querySelectorAll(".open");
//	var status = document.getElementsByClassName(".status");
//	$(".open").removeClass("open").addClass("closed");
//	for(i = 0; i < elements.length; i++){
//		elements[i].classList.remove("open");
//	    elements[i].classList.add("closed");
//	    }
	}

function openall(){

	$(document).ready(function(){
		$(".closed").toggleClass('closed open');
		$(".status").html("OPEN");
	})
//	var elements = document.querySelectorAll(".closed");
//	var status = document.querySelectorAll(".status");
//	for(i = 0; i < elements.length; i++){
//		elements[i].classList.remove("closed");
//		elements[i].classList.add("open");
//		status[i].classList.innerHTML = "OPEN";
//	}
}

function openSpecific(id){

	$(document).ready(function(){
		$("#"+id).toggleClass('closed open');
		$("#"+id+" .status").html("OPEN");
	})
}