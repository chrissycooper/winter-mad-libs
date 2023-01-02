var button = document.querySelector('button');
var story = document.querySelector('.story');
var form = document.querySelector('form');

var noun1 = document.querySelector('#noun1Text');
var noun1Input = document.querySelector('#noun1');

var place1 = document.querySelector('#place1Text');
var place1Input = document.querySelector('#place1');

var num1 = document.querySelector('#num1Text');
var num1Input = document.querySelector('#num1');

var noun2 = document.querySelector('#noun2Text');
var noun2Input = document.querySelector('#noun2');

var verb1 = document.querySelector('#verb1Text');
var verb1Input = document.querySelector('#verb1');

var clothing1 = document.querySelector('#clothing1Text');
var clothing1Input = document.querySelector('#clothing1');

var clothing2 = document.querySelector('#clothing2Text');
var clothing2Input = document.querySelector('#clothing2');

var beverage1 = document.querySelector('#beverage1Text');
var bev1Input = document.querySelector('#beverage1');

var food1 = document.querySelector('#food1Text');
var food1Input = document.querySelector('#food1');


form.addEventListener('submit', createStory);

function createStory(event) {
    event.preventDefault();
    story.classList.remove('hidden');
    form.classList.add('hidden');
    noun1.innerText = noun1Input.value;
    place1.innerText = place1Input.value;
    num1.innerText = num1Input.value;
    noun2.innerText = noun2Input.value;
    verb1.innerText = verb1Input.value;
    clothing1.innerText = clothing1Input.value;
    clothing2.innerText = clothing2Input.value;
    beverage1.innerText = bev1Input.value;
    food1.innerText = food1Input.value;
    resetForm();
}

function resetForm() {
    noun1Input.value = '';
    place1Input.value = '';
    num1Input.value = '';
    noun2Input.value = '';
    verb1Input.value = '';
    clothing1Input.value = '';
    clothing2Input.value = '';
    bev1Input.value = '';
    food1Input.value = '';
}