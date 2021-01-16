// main.js
let fragments = [];

function runProgram() {
    console.info("Cały dokument został załadowany.");
    timer()
}

window.addEventListener("load", runProgram);

function onClick() {
    alert("Help!");
}

let onClick2 = () => {
    let frag = document.createDocumentFragment();
    let header2 = document.createElement("h2");
    header2.innerText = "This is header 2";
    let button3 = document.createElement("button");
    button3.innerText = "try it!";
    button3.addEventListener("click", onClick2);
    
    frag.append(header2);
    frag.append(button3);
    document.body.append(frag);
    fragments.push(frag)

}

/*
 * doesn't work
 */
function onClick3() {
    let fragment = fragments.pop();
    console.log(fragment);
    fragment.remove();
}


// Timer
function timer() {
    var timerSection = document.getElementById('timer');
    var timerForm = timerSection.querySelector('form');

    var minutes = timerForm.querySelector('[name="minutes"]');
    var seconds = timerForm.querySelector('[name="seconds"]');
    
    minutes.value = 0;
    seconds.value = 0;

    // TODO: handle 'click' event on <button>
}
