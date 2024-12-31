
// script.js
document.addEventListener("DOMContentLoaded", function() {
    // alert("carreguei")
    const regularCardsContainer = document.querySelector('#regular-cards-container');
    const premiumCardsContainer = document.querySelector('#premium-cards-container');

    const cardsRoulette = document.querySelector('#cards-roulette');
    const leftButton = document.querySelector("#left-button");
    const rightButton = document.querySelector("#right-button");


    // Function to create a card
    function createCard(type, level) {
        const cardDiv = document.createElement('div');
        cardDiv.className = type === 'regular' ? 'regular-card flex' : 'premium-card flex';
        cardDiv.innerHTML = `
          
            <div class="mt-10 flex flex-col items-center gap-3">
                    
                    <div class="bg-zinc-800 p-3 rounded-lg regular-card">
                      <img src="./images/towel.png" alt="">
                    </div>

                    <div class="flex gap-1 items-center">
                      <img src="./images/check.svg"></i>
                      <p>
                        Level ${level}
                      </p>
                    </div>

                </div>
        `;
        return cardDiv;
    }

    function createPremiumCard(level) {
      const premiumCardDiv = document.createElement('div');
      premiumCardDiv.className = 'flex';
      premiumCardDiv.innerHTML = `
        
          <div class="mt-10 flex flex-col items-center gap-3">
                  
                  <div class="bg-zinc-800 p-3 rounded-md premium-card relative border-2 border-black">
                    <h2 class="bg-black rounded-lg text-center">
                      Premium
                    </h2>
                    <img src="./images/towel.png" alt="">
                  </div>

                  <div class="flex gap-1 items-center">
                    <img src="./images/badge-check.svg"></i>
                    <p>
                      Level ${level}
                    </p>
                  </div>
            </div>
      `;
      return premiumCardDiv;
    }

    // Add 10 regular cards
    for (let i = 1; i <= 8; i++) {
        regularCardsContainer.appendChild(createCard('regular', i));
        premiumCardsContainer.appendChild(createPremiumCard(i));
    }

    leftButton.addEventListener('click', function() {
      cardsRoulette.scrollBy({ left: -200, behavior: 'smooth' });
    });

    rightButton.addEventListener('click', function() {
      cardsRoulette.scrollBy({ left: 200, behavior: 'smooth' });
    });
});