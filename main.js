// Select elements using different DOM selectors

// 1. Selecting an element by ID
const mainTitle = document.getElementById('main-title');
console.log('getElementById:', mainTitle.innerText);

// 2. Selecting elements by class name
const descriptions = document.getElementsByClassName('description');
Array.from(descriptions).forEach(desc => console.log('getElementsByClassName:', desc.innerText));

// 3. Selecting elements by tag name
const listItems = document.getElementsByTagName('li');
Array.from(listItems).forEach(item => console.log('getElementsByTagName:', item.innerText));

// 4. Selecting elements using querySelector (single element)

const container = document.querySelector('#container');
console.log('querySelector:', container);

// 5. Selecting elements using querySelectorAll (multiple elements)
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => console.log('querySelectorAll:', button));

// Manipulate elements
function changeTitle() {
    mainTitle.innerText = 'Title Changed!';
}

// Access attributes, values, links, and form elements
const externalLink = document.querySelector('.external-link');
console.log('Link href:', externalLink.href);

const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameInput = document.getElementById('name');
    console.log('Form Submitted. Name:', nameInput.value);
});
