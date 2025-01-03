$(document).ready(function() {
	//setup multiple rows of colours, can also add and remove while spinning but overall this is easier.
	initWheel();
 
 	$('button').on('click', function(){
		// var outcome = parseInt($('input').val()) //Original line;
    var outcome = Math.floor(Math.random() * 15);

    // Update the outcome display
    $('#outcome p').text(outcome);

    spinWheel(outcome);
  });
});

function initWheel(){
	var $wheel = $('.roulette-wrapper .wheel'),
  		row = "";

	// Define card data
	const cards = [
		{ id: 1, name: '1', color: 'red', img: './images/towel.png' },
		{ id: 14, name: '14', color: 'black', img: './images/phone.png' },
		{ id: 2, name: '2', color: 'red', img: './images/towel.png' },
		{ id: 13, name: '13', color: 'black', img: './images/phone.png' },
		{ id: 3, name: '3', color: 'red', img: './images/towel.png' },
		{ id: 12, name: '12', color: 'black', img: './images/phone.png' },
		{ id: 4, name: '4', color: 'red', img: './images/towel.png' },
		{ id: 0, name: '0', color: 'green', img: './images/towel.png' },
		{ id: 11, name: '11', color: 'black', img: './images/phone.png' },
		{ id: 5, name: '5', color: 'red', img: './images/towel.png' },
		{ id: 10, name: '10', color: 'black', img: './images/phone.png' },
		{ id: 6, name: '6', color: 'red', img: './images/towel.png' },
		{ id: 9, name: '9', color: 'black', img: './images/phone.png' },
		{ id: 7, name: '7', color: 'red', img: './images/towel.png' },
		{ id: 8, name: '8', color: 'black', img: './images/phone.png' }
	];

	// Generate rows dynamically
	cards.forEach(card => {
		row += `<div class='flex flex-col justify-center items-center'>
					<div class='card ${card.color} flex flex-col gap-0'>
						<img class='w-2/3' src='${card.img}'></img>
					</div>
					<p class='text-2xl'>${card.name}</p>
				</div>`;
	});

	row = `<div class='row'>${row}</div>`;
  
	for(var x = 0; x < 29; x++){
  	$wheel.append(row);
  }
}

function spinWheel(roll){
  //Deactivate button to start running
  $('button').prop('disabled', true);

  //Add audio element
  var audio = new Audio('./mp3/spinning-wheel.mp3');
  audio.play();

  var $wheel = $('.roulette-wrapper .wheel'),
  		order = [0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4],
      position = order.indexOf(roll);
            
  //determine position where to land
  var cardSizeInPixels = Number(120);
  var rows = 12,
  		card = cardSizeInPixels + 3 * 2,
      landingPosition = (rows * 15 * card) + (position * card);
  	
  var randomize = Math.floor(Math.random() * cardSizeInPixels) - (cardSizeInPixels/2);
    
  landingPosition = landingPosition + randomize;
    
  var object = {
		x: Math.floor(Math.random() * 50) / 100,
    y: Math.floor(Math.random() * 20) / 100
	};
  
  $wheel.css({
		'transition-timing-function':'cubic-bezier(0,'+ object.x +','+ object.y + ',1)',
		'transition-duration':'9s',
		'transform':'translate3d(-'+landingPosition+'px, 0px, 0px)'
	});
  
  setTimeout(function(){
		$wheel.css({
			'transition-timing-function':'',
			'transition-duration':'',
		});
    
    var resetTo = -(position * card + randomize);
		$wheel.css('transform', 'translate3d('+resetTo+'px, 0px, 0px)');

    // Re-enable the button after the spin is over
    $('button').prop('disabled', false);
  }, 9 * 1000);
}