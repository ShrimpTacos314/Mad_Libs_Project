var runMadLib = function()
{
    let place1 = document.querySelector("#place1").value;
    let pluralNoun1 = document.querySelector("#plural-noun1").value;
    let place2 = document.querySelector("#place2").value;
    let animalPlural1 = document.querySelector("#animal-plural1").value;
    let celebrity1 = document.querySelector("#celebrity1").value;
    let pluralNoun2 = document.querySelector("#plural-noun2").value.toLowerCase();
    let adjective1 = document.querySelector("#adjective1").value.toLowerCase();
    let personInRoom1 = document.querySelector("#person-in-room1").value;
    let celebrity2 = document.querySelector("#celebrity2").value;
    let ingWord1 = document.querySelector("#ing-word1").value.toLowerCase();
    let personInRoom2 = document.querySelector("#person-in-room2").value;
    let number1 = document.querySelector("#number1").value;
    let number2 = document.querySelector("#number2").value;
    let adverb1 = document.querySelector("#adverb1").value.toLowerCase();
    let pluralNoun3 = document.querySelector("#plural-noun3").value.toLowerCase();
    let number3 = document.querySelector("#number3").value;
    let boysName1 = document.querySelector("#boys-name1").value;
    let lastName1 = document.querySelector("#last-name1").value;
    let number4 = document.querySelector("#number4").value;
    let pluralNoun4 = document.querySelector("#plural-noun4").value.toLowerCase();
    let noun1 = document.querySelector("#noun1").value.toLowerCase();

    let responseWrapper = document.querySelector("#response-wrapper");

    responseWrapper.hidden = false;
    responseWrapper.innerHTML = `<div class="title-text">The Big Game</div>\nWhen the <span class="inputted-text">${place1} ${pluralNoun1}</span> took the field against the <span class="inputted-text">${place2} ${animalPlural1}</span>, everyone was expecting a blowout. The <span class="inputted-text">${animalPlural1}</span> had been at the bottom of the league for the entire season. Their quarterback, <span class="inputted-text">${celebrity1}</span>, had thrown nine interceptions and only six <span class="inputted-text">${pluralNoun2}</span> in just seven games. In contrast, <span class="inputted-text">${place1}</span> were at the head of their division and almost their conference, driven by <span class="inputted-text">${adjective1}</span> stars like <span class="inputted-text">${personInRoom1}</span> and <span class="inputted-text">${celebrity2}</span>. Initially, the predictions seemed to be right as <span class="inputted-text">${place1}</span>'s <span class="inputted-text">${ingWord1}</span>-back, <span class="inputted-text">${personInRoom2}</span>, ran for a <span class="inputted-text">${number1}</span>-yard touchdown in the first quarter. At the half the <span class="inputted-text">${animalPlural1}</span> were behind <span class="inputted-text">${number2}</span>-6. However, they performed <span class="inputted-text">${adverb1}</span> in the second half. Their defense recovered two <span class="inputted-text">${pluralNoun3}</span>, both resulting in touchdowns. Finally, with <span class="inputted-text">${number3}</span> seconds left to play, the <span class="inputted-text">${animalPlural1}</span>'s kicker, <span class="inputted-text">${boysName1} ${lastName1}</span>, stepped up to kick a <span class="inputted-text">${number4}</span>-yard field goal to win the game. The holder received the snap and <span class="inputted-text">${lastName1}</span> put the ball right through the <span class="inputted-text">${pluralNoun4}</span>, giving <span class="inputted-text">${place2}</span> a 33-<span class="inputted-text">${number2}</span> victory. "It feels great to be on the way to the top," <span class="inputted-text">${celebrity1}</span> said after the game. "But none of us could have done it alone. I'm really grateful for the backing from my <span class="inputted-text">${noun1}</span> and we couldn't have done it without them.`; //I regret this.
};
