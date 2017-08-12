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


$(function() {

	var $bastila = $('#bastila');
	var $darthvader = $('#darthvader');
	var $starkiller = $('#starkiller');
	var $bobbafett = $('#bobbafett');



	$('#bastila').click(function() {
		
		$('#bastila').siblings().appendTo('.enemies');
		$('#bastila').appendTo('#character');
		$('#bastila').click(function() {
			$('#bastila').appendTo('#defender');
			

		});
		
	});
	$('#darthvader').click(function() {
		
		$('#darthvader').siblings().appendTo('.enemies');
		$(this).appendTo('#character');
		if ($darthvader === '.enemies') {
			$('#darthvader').appendTo('#defender');
		}

	});

	$('#starkiller').click(function() {
		
		$('#starkiller').siblings().appendTo('.enemies');
		$(this).appendTo('#character');
		if ($starkiller === '.enemies') {
			$('#starkiller').appendTo('#defender');
		}
		
	});

	$('#bobbafett').click(function() {
		
		$('#bobbafett').siblings().appendTo('.enemies');
		$(this).appendTo('#character');
		if ($bobbafett === '.enemies') {
			$('#bobbafett').appendTo('#defender');
		}
	});
	
	


	
});