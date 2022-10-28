//Fn to handle the choice selection
function getSelectedItem(e) {

    const selectedItem = e.target.innerText
    const li = document.createElement('li')
    const innerDiv =  document.createElement('div')
    const p = document.createElement('p')

    p.innerText = selectedItem
    innerDiv.innerText = 'x'
    innerDiv.addEventListener('click',deleteChoice)

    li.append(p,innerDiv)
    chosen_choices.appendChild(li)

    hideDropDown()
    

}

//Fn to show the dropdown
function toggleChoiceList() {
    
    choice_box.classList.add('show')
    
}
//Fn to hide the dropdown
function hideDropDown() {
    
    choice_box.classList.remove('show')
}
//Fn to handle and delete a choice
function deleteChoice(e) {
    e.stopPropagation()
    e.target.parentNode.remove()
}
//Fn that returns a html element
//for creating a choice
function makeTemplate(value) {
    return `
    <li>
        <p>${value}</p>
        <div>x</div>
    </li>
    `
}
//Fn that loads the dropdown on page load
function loadChoices() {
    console.log('choices loaded')
    filtered_choice_values.forEach( (choice) => {
        const li = document.createElement('li')
        li.addEventListener('click',getSelectedItem)
        li.innerText = choice
        
        choices_list.append(li)
    } )
}
//Fn to set filtered choices
function filterChoices(e) {
    let new_choices = choices_list_values.filter( (choice) => {
        return choice.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())

    })
    choices_list.innerHTML = ''
    filtered_choice_values = [...new_choices]
    console.log(filtered_choice_values)
    loadChoices()
}



let choices_list_values = ['HTML','CSS','JS','REACT JS', 'JAVA']; 
let filtered_choice_values = [...choices_list_values]
const filter_box = document.querySelector('.filter-box')
const filter_input = document.querySelector('#filter-input')
const choices_list = document.querySelector('.choices-list')
loadChoices()
const choices = document.querySelectorAll('.choices-list li')
const choice_box = document.querySelector('.choices-box')
const chosen_choices = document.querySelector('.chosen-choices')


//Adding event listener for filter box
filter_box.addEventListener('click',() => filter_input.focus())
//Adding event listeners for list items
choices.forEach( (choice) => {
    choice.addEventListener('click',getSelectedItem)
})
filter_input.addEventListener('focusin',toggleChoiceList)
// filter_input.addEventListener('blur', hideDropDown)
filter_input.addEventListener('input',filterChoices) 

