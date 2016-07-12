$(document).ready(function(){
	clear()
	
	$("#9").on("click", function(){
		addOutput("9")

	})
	
	$("#8").on("click", function(){
		addOutput("8")

	})
	
	$("#7").on("click", function(){
		addOutput("7")

	})
	
	$("#6").on("click", function(){
		addOutput("6")

	})
	
	$("#5").on("click", function(){
		addOutput("5")

	})
	
	$("#4").on("click", function(){
		addOutput("4")

	})
	
	$("#3").on("click", function(){
		addOutput("3")

	})
	
	$("#2").on("click", function(){
		addOutput("2")

	})
	
	$("#1").on("click", function(){
		addOutput("1")

	})
	
	$("#0").on("click", function(){
		addOutput("0")

	})
	
	$("#decimal").on("click", function(){
		addOutput(".")

	})
	
	$("#divide").on("click", function(){
		addOutput("÷")

	})
	
	$("#multiply").on("click", function(){
		addOutput("x")

	})
	
	$("#subtract").on("click", function(){
		addOutput("-")

	})
	
	$("#add").on("click", function(){
		addOutput("+")

	})
	
	$("#equal").on("click", function(){
		var equation = $("#output").html()
		
		var x = equation.replace("x", "*").replace("÷", "/")
		
		$("#output").html(eval(x))
		calculating = false
	})
	
	$("#clear").on("click", function(){
		clear()

	})
	
})

var calculating = true;


function addOutput(message){
	if (calculating == true){
		var a = $("#output").html() 
		$("#output").html(a + message)
	}
	else{
		clear()
		$("#output").html(message)
		calculating = true
	}
}

function clear(){
	$("#output").html("")
}


