
var len = document.querySelectorAll("button").length;
for (let key =0; key < len; key++) {
    //When key is clicked.
    document.querySelectorAll("button")[key].addEventListener('click', function () {
        makeSound(this.textContent)
        animation(this.textContent);
    });
    //When a button is pressed corresponding to our key.
    document.querySelectorAll("button")[key].addEventListener("keydown", function (event) {
        makeSound(event.key);
        animation(event.key);
    });
}

function makeSound(key) {
    let beat = new Audio(`sounds/${key}.mp3`);
    beat.play();
}

function animation(keyPressed) {
    var activeButton = document.querySelector(`.${keyPressed}`)
    activeButton.classList.add('pressed');
    setTimeout( function(){activeButton.classList.remove('pressed')},100);
}