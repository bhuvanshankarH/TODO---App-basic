let input = document.getElementById('inputfield');
let button = document.getElementById('addbutton')
button.addEventListener('click', () => {
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragragh-styling')
    paragraph.innerText = input.value;
    let element = document.getElementById('addelement');
    element.appendChild(paragraph);
    input.value = '';
    paragraph.addEventListener('click', () => {
        paragraph.style.textDecoration = "line-through"
        // paragraph.style.cursor = "pointer"
    })
    paragraph.addEventListener('dblclick', () => {
        element.removeChild(paragraph);
    })

})