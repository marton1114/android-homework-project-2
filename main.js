const uzenet = document.querySelector(".uzenet");

var disableButtons = false

var winek = 0;
var drawok = 0;
var loseok = 0;

uzenet.textContent = ' ';
const AiImg = document.getElementById("Ai");


const button = document.getElementById("btn");
button.addEventListener('click', event => {
    reset();
});

function reset() {
    disableButtons = false;
    AiImg.src = "Assets/Pictures/waiting.gif";

    userStoneImg.style.opacity = "100%";
    userPaperImg.style.opacity = "100%";
    userScrissorsImg.style.opacity = "100%";

    uzenet.textContent = ' ';
    uzenet.style.backgroundColor = "rgba(0, 0, 0, 0)";
}

const userStoneImg = document.getElementById("userStone");
const userPaperImg = document.getElementById("userPaper");
const userScrissorsImg = document.getElementById("userScrissors");

userStoneImg.addEventListener('mouseover', (ev) => {
	userStoneImg.src = "Assets/Pictures/ko2.png";
});

userStoneImg.addEventListener('mouseout', (ev) => {
	userStoneImg.src="Assets/Pictures/ko.png"
});

userPaperImg.addEventListener('mouseover', (ev) => {
	userPaperImg.src="Assets/Pictures/papir2.png"
});

userPaperImg.addEventListener('mouseout', (ev) => {
	userPaperImg.src="Assets/Pictures/papir.png"
});

userScrissorsImg.addEventListener('mouseover', (ev) => {
    userScrissorsImg.src="Assets/Pictures/ollo2.png"
});

userScrissorsImg.addEventListener('mouseout', (ev) => {
	userScrissorsImg.src="Assets/Pictures/ollo.png"
});


userStoneImg.addEventListener('click', (ev) => {
    ev.preventDefault();
    if (disableButtons != true) {
        generate(0);
    }
});


userPaperImg.addEventListener('click', (ev) => {
    ev.preventDefault();
    if (disableButtons != true) {
        generate(1);
    }
});


userScrissorsImg.addEventListener('click', (ev) => {
    ev.preventDefault();
    if (disableButtons != true) {
        generate(2);
    }
});




function generate(value) {

    var AiValue = Math.floor(Math.random() * 3);

    if (AiValue == 0) {
        AiImg.src="Assets/Pictures/aiKo.png";
        if (value == 0) {
            draw(value);
        }
        else if (value == 1) {
            win(value);
        }
        else {
            lose(value);
        }
    }
    else if (AiValue == 1) {
        AiImg.src="Assets/Pictures/aiPapir.png";
        if (value == 1) {
            draw(value);
        }
        else if (value == 0) {
            lose(value);
        }
        else {
            win(value);
        }
    }
    else if (AiValue == 2) {
        AiImg.src="Assets/Pictures/aiOllo.png";
        if (value == 2) {
            draw(value);
        }
        else if (value == 1) {
            lose(value);
        }
        else {
            win(value);
        }
    }


}

winLabel = document.getElementById("win");
drawLabel = document.getElementById("draw");
loseLabel = document.getElementById("lose");

function win(value) {
    winek += 1;
    uzenet.style.backgroundColor = "rgba(70, 255, 0, 0.4)";
    uzenet.textContent = 'Győztél!';
    winLabel.textContent = 'Győzelmek:   ' + winek;
    handleDisables(value);
}

function draw(value) {
    drawok += 1;
    uzenet.style.backgroundColor = "rgba(0, 70, 255, 0.4)";
    uzenet.textContent = 'Döntetlen';
    drawLabel.textContent = 'Döntetlenek: ' + drawok;
    handleDisables(value);
}

function lose(value) {
    loseok += 1;
    uzenet.style.backgroundColor = "rgba(255, 0, 70, 0.4)";
    uzenet.textContent = 'Vesztettél!';
    loseLabel.textContent = 'Vereségek:   ' + loseok;
    handleDisables(value);
}

function handleDisables(value) {

    if (value == 0) {
        userPaperImg.style.opacity = "30%";
        userScrissorsImg.style.opacity = "30%";
    }
    else if (value == 1) {
        userStoneImg.style.opacity = "30%";
        userScrissorsImg.style.opacity = "30%";
    }
    else {
        userStoneImg.style.opacity = "30%";
        userPaperImg.style.opacity = "30%";
    }

    disableButtons = true
}