console.log('This is separate file');
// directly set on the HTML element
// option 1:
// <button onclick="console.log(10)">Another Click</button>

// option 2: add onclick function on the HTML
// IMPORTANT: We will use this
// <button onclick="makeRed()">Make Red</button>
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// option 3: 
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// option 3: another
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}

// option 4: 
const pinkBtton = document.getElementById('make-pink')
pinkBtton.addEventListener('click', makePink);
function makePink() {
    document.body.style.backgroundColor = 'pink'
}

// option 4: another
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'green';
});

// option 4: Final
// IMPORTANT: We will use this sometimes
// document.getElementById('make-goldenrod').addEventListener('click', function(){})
document.getElementById('make-goldenrod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod'
});

