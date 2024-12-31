document.addEventListener("DOMContentLoaded", function() {
    const dailyGiftContainer = document.querySelector('#dailyGiftsContainer');

    for (let i = 1; i <= 8; i++) {
        dailyGiftContainer.appendChild(createPremiumCard(i, "Toalha"));
    }
});

function createPremiumCard(level, name) {
    const premiumCardDiv = document.createElement('div');
    premiumCardDiv.className = 'flex';
    premiumCardDiv.innerHTML = `
      
        <div class="mt-10 flex flex-col items-center gap-3">
                
                <div class="bg-zinc-800 p-3 rounded-md locked-card relative border-2 border-black">
                  <h2 class="bg-black rounded-lg text-center">
                    ${name}
                  </h2>
                  <img src="./images/towel.png" alt="">

                  <img class="absolute bottom-2 right-4" src="./images/lock.svg">
                </div>

                <div class="flex gap-1 items-center">
                  <img src="./images/badge-check.svg"></i>
                  <p>
                    Dia ${level}
                  </p>
                </div>
          </div>
    `;
    return premiumCardDiv;
  }