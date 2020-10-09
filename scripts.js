const slicesPerPizza = document.querySelector('#slices-per-pizza')
const peopleInput = document.querySelector('#input-people')
const pizzaInput = document.querySelector('#pizza-input')

const displaySlicePerPerson = document.querySelector('#display-slice-per-person')

slicesPerPizza.addEventListener('input', calculatePizza) 
peopleInput.addEventListener('input', calculatePizza)
pizzaInput.addEventListener('input', calculatePizza)


function calculatePizza() {

    const amtSlicesPerPizza = parseInt(slicesPerPizza.value)
    const pizza = parseInt(pizzaInput.value)
    const people = parseInt(peopleInput.value)

    
    const total = (pizza * amtSlicesPerPizza) / people

    
    displaySlicePerPerson.innerHTML = total

}

calculatePizza()

