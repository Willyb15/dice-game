	var randomDie = Math.round(Math.random()*5)+1;
	var randomDie2 = Math.round(Math.random()*5)+1; 
	var total = randomDie + randomDie2;
	document.getElementById("total").style.display = "hidden";
	

	// Dice roller.
	function throwDice(){
		var begin = alert("You must roll a 9 or higher to not be burnt to a crisp. Good Luck!");
		var randomDie = Math.round(Math.random()*5)+1; //This will produce a number between 1 - 6.
		var imageName = "d" + randomDie + ".gif";
		document.images['myDie1'].src = imageName;
		//Get another number
		randomDie2 = Math.round(Math.random()*5)+1; 
		var imageName2 = "d" + randomDie2 + ".gif";
		document.images['myDie2'].src = imageName2;
		var total = randomDie + randomDie2;
		// console.log (total);
		document.getElementById("total").innerHTML = total;
		// document.getElementById("total").style.visibility = "visible";
		
		if(total>=9){
			alert("You beat the Dragon!");
		}else{
			alert("You died!");
		}
	}

	 document.getElementById("message").innerHTML = "You have encountered a dragon...";
	 // document.getElementById("message2").innerHTML = "You have encountered a dragon too...";


	 //Function to switch image when Run option is clicked
	function run(){
		var image = "fleeing.png";
		document.images["dragon"].src = image;
		document.getElementById("message").innerHTML = "You ran away! You coward!!!";
		// document.getElementById("message").style.visibility = "hidden";
		document.getElementById("dice").style.visibility = "hidden";
		document.getElementById("dice").style.visibility = "hidden";
		document.getElementById("the-decision").style.display = "none";
	}

