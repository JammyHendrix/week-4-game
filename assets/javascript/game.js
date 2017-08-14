//Click a character and they append to the "Your character ID"
//Once character is clicked, the remaining charcters go into the "Enemies avalable to attack" section
//Clicking on a button that is in the "enemies available to attack" field will move it to the "defender" area
//Start the fight by clicking the "attack" button.
var bastila = {
	name: "Bastila",
	healthPoints: 100,
	attackPower: 8,
	counterAttackPower: 25

};

var darthVader = {
	name: "Darth Vader",
	healthPoints: 150,
	attackPower: 12,
	counterAttackPower: 50
};

var starKiller = {
	name: "Starkiller",
	healthPoints: 120,
	attackPower: 10,
	counterAttackPower: 35
};

var bobbaFett = {
	name: "Bobba Fett",
	healthPoints: 80,
	attackPower: 6,
	counterAttackPower: 15,
};

var charSelected = false;
var battleReady = false;
var gameOver = false;
var enemeySelected = false;


$(function() {

	$('#bastila').click(function() {
		charSelected = true;
		$('#bastila').siblings().appendTo('.enemies');
		$('#bastila').appendTo('#character');
		$('#bastila').click(function() {
			if (charSelected===true) {
				return;
			}
			

		});
		
	});
	$('#darthvader').click(function() {
		charSelected = true;
		$('#darthvader').siblings().appendTo('.enemies');
		$(this).appendTo('#character');
		if (charSelected===true) {
			$('#darthvader').appendTo('#defender');
		}

	});

	$('#starkiller').click(function() {
		charSelected = true;
		$('#starkiller').siblings().appendTo('.enemies');
		$(this).appendTo('#character');
		if (charSelected === true) {
			$('#starkiller').appendTo('#defender');
		}
		
	});

	$('#bobbafett').click(function() {
		charSelected = true;
		$('#bobbafett').siblings().appendTo('.enemies');
		$(this).appendTo('#character');
		if (charSelected === true) {
			$('#bobbafett').appendTo('#defender');
		}
	});
	
	


	
});