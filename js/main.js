// js function
/* can block comment */

(() => {
	// like print in python (both method calls)
	console.log('loaded!');
	// can see mesage in developer tool
	// 
})();

/* can also long hand like this function()
() => console.log
*/
	// same as aray in python
	
	var choices = ['Rock', 'Paper', 'Scissors'];
	var computer;
	var player = document.querySelector('#weapon');
	var trigger = document.querySelector('#play');
	var status = document.querySelector('.winlose');

	function play_game() {

		console.log('called game function');
	}

	// js event based
	trigger.addeEventListener('click', play_game);

})();