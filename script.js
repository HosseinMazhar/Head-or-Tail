function flip()
{
    var randomnumber = Math.random();
    randomnumber = randomnumber*10;
    return randomnumber;
}


var coinsides = document.getElementById('coin-sides');
var correctAnswer=0;
var wrongAnswer=0;


var playerscoreplace = document.getElementById('player-score');
var playerscoreparagraph = document.createElement("p");
playerscoreparagraph.innerHTML=correctAnswer;
playerscoreplace.appendChild(playerscoreparagraph);


var pcscoreplace = document.getElementById('pc-score');
var pcscoreparagraph = document.createElement("p");
pcscoreparagraph.innerHTML=wrongAnswer;
pcscoreplace.appendChild(pcscoreparagraph);


function itshead()
{
    randomnumber = flip();
    if(randomnumber<5)
    {
        coinsides.style.animation= 'none';
        coinsides.offsetWidth;
        coinsides.style.animation= "flip-to-head 3s";
        correctAnswer++
        playerscoreparagraph.innerHTML=correctAnswer;
    }else
    {
        coinsides.style.animation= 'none';
        coinsides.offsetWidth;
        coinsides.style.animation= "flip-to-tail 3s";
        wrongAnswer++
        pcscoreparagraph.innerHTML=wrongAnswer;
    }
}

function itstail()
{
    randomnumber = flip();
    if(randomnumber<5)
    {
        coinsides.style.animation= 'none';
        coinsides.offsetWidth;
        coinsides.style.animation= "flip-to-head 3s";
        wrongAnswer++
        pcscoreparagraph.innerHTML=wrongAnswer;
    }else
    {
        coinsides.style.animation= 'none';
        coinsides.offsetWidth;
        coinsides.style.animation= "flip-to-tail 3s";
        correctAnswer++
        playerscoreparagraph.innerHTML=correctAnswer;
    }
}


function reset()
{
    tailcounter=0;
    headcounter=0;
    correctAnswer=0;
    wrongAnswer=0;
    playerscoreparagraph.innerHTML=correctAnswer;
    pcscoreparagraph.innerHTML=wrongAnswer;
}
