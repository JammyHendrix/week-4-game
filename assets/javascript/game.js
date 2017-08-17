//Click a character and they append to the "Your character ID"
//Once character is clicked, the remaining charcters go into the "Enemies avalable to attack" section
//Clicking on a button that is in the "enemies available to attack" field will move it to the "defender" area
//Start the fight by clicking the "attack" button.
$(document).ready(function() {
	var charSelected;
	var enemySelected;
	var myChar;
	var matches;
	var opponentChar;
	var enemiesLeft;
	var enemyArray;
	var picks;

	function gameSet() {
		myChar;
		opponentChar;

		picks = [];
		enemyArray = [ {
			position: 0,
			name: "Bastila",
			healthPoints: 100,
			attackPower: 8,
			counterAttackPower: 25
		}, {
			position: 1,
			name: "Darth Vader",
			healthPoints: 150,
			attackPower: 12,
			counterAttackPower: 50
		}, {
			position: 2,
			name: "Starkiller",
			healthPoints: 120,
			attackPower: 10,
			counterAttackPower: 35

		}, {
			position: 3,
			name: "Bobba Fett",
			healthPoints: 80,
			attackPower: 6,
			counterAttackPower: 15,

		}];

		charSelected = false;
		enemySelected = false;
		enemiesLeft = 3;

		for (var i = 0; i < enemyArray.length; i++) {
			picks += 'div id=' + enemyArray[i].id + enemyArray[i].id + enemyArray[i].name + '<br> HP: ' + enemyArray[i].healthPoints +
			'<br> AP: ' + enemyArray[i].attackPower + '</div>' + '<br> CAP: ' + enemyArray[i].counterAttackPower + '</div>';		
		}

		$('#fight').html(picks);
		$('#character').remove();
		$('#enemies').remove();

		attachCharacterOnClick();

}
	function displayCharacters() {

	var jedi = 'div id=' + enemyArray[myChar].id + enemyArray[myChar].id + enemyArray[myChar].name + '<br> HP: ' + enemyArray[myChar].healthPoints +
			'<br> AP: ' + enemyArray[myChar].attackPower + '</div>' + '<br> CAP: ' + enemyArray[myChar].counterAttackPower + '</div>';		
	
	var sith = 'div id=' + enemyArray[opponentChar].id + enemyArray[opponentChar].id + enemyArray[opponentChar].name + '<br> HP: ' + enemyArray[opponentChar].healthPoints +
			'<br> AP: ' + enemyArray[opponentChar].attackPower + '</div>' + '<br> CAP: ' + enemyArray[opponentChar].counterAttackPower + '</div>';		
	

			$('#character').html(jedi);
			$('#defender').html(sith);
}



function gameMessage() {

	var details = 'You attack ' + enemyArray[opponentChar].name + ' for ' + enemyArray[myChar].attackPower + ' damage!<br>' + enemyArray[opponentChar].name + ' counter attacks for ' + enemyArray[opponentChar].attackPower + ' damage!<br>' + 'Attack Power has increased by ' + matches + '!';


	$('#gamemessage').html(details);


}

function attachCharacterOnClick() {

	$('.character').on('click', functionz() {
		if (!charSelected) {
			myChar = $(this).attr('id');
			$('#character').append(this);
			$(this).addClass('jedi');

			charSelected = true;
			$('#gamemessage').html('');

		}

		else if (!enemySelected && charSelected && myChar !== $(this).attr('id')) {

			opponentChar = $(this).attr('id');
			$('#defender').append(this);
			$(this).addClass('fighting');

			enemySelected = true;
			$('#gamemessage').html('');

		}
	}


}
$('#attack-button').on('click', function() {
	if (!charSelected) {
		$('#gamemessage').html('You need to pick a fighter first!');
	}
	else if (!enemySelected) {
		$('#gamemessage').html('Pick your enemy');
	}
	else if (charSelected && enemySelected) {
		matches++;
		enemyArray[opponentChar].healthPoints = enemyArray[opponentChar].healthPoints - enemyArray[myChar].attackPower;
		
	}
}






	$('#bastila').click(function() {
		charSelected = true;
		enemySelected = true;
		$('#bastila').siblings().appendTo('.enemies');
		$('#bastila').appendTo('#character');
		$('#bastila').click(function() {
		$('#bastila').appendTo('defender');	
			enemySelected = true;
			if (charSelected && enemySelected===true) {
				return;
			}
			

		});
		
	});
	$('#darthvader').click(function() {
		charSelected = true;
		$('#darthvader').siblings().appendTo('.enemies');
		$('#darthvader').appendTo('#character');
		$('#darthvader').click(function() {
		$('#darthvader').appendTo('#defender');
			enemySelected = true;
			if (charSelected && enemySelected===true) {
		
			return;
			}
		
		
			
		});
		

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