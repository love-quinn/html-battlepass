// script.js
document.addEventListener("DOMContentLoaded", function() {
    // alert("carreguei")
    const cardContainer = document.querySelector('.regular-flex');

    // Function to create a card
    function createCard(type, level) {
        const cardDiv = document.createElement('div');
        cardDiv.className = type === 'regular' ? 'regular-card flex' : 'premium-card flex';
        cardDiv.innerHTML = `
            <div class="mt-10 flex flex-col items-center gap-3">
                    
                    <div class="bg-zinc-800 p-3 rounded-lg regular-card">
                      <img src="./images/towel.png" alt="">
                    </div>

                    <div class="flex gap-2 items-center">
                      <i data-lucide="check" height="18" width="18" stroke-width="1.4"></i>
                      <p>
                        Level ${level}
                      </p>
                    </div>

                </div>
        `;
        return cardDiv;
    }

    // Add 10 regular cards
    for (let i = 1; i <= 8; i++) {
        cardContainer.appendChild(createCard('regular', i));
    }

    // Add 10 premium cards
    // for (let i = 1; i <= 10; i++) {
    //     cardContainer.appendChild(createCard('premium', i));
    // }
});