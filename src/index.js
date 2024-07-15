const inputElement = document.querySelector("input")
const buttonElement = document.querySelector("button")
const groupElement = document.createElement("div")

let inputResponse = ''
let todoList = []
let indexResult = null

inputElement.addEventListener("input", (event) => {
    inputResponse = event.target.value
})

function editHandler(){
    buttonElement.textContent = "Confirm"
    inputElement.value = item.value
    indexResult = todoList.findIndex((element) => {
        return element.id === item.id
    })
}

function deleteHandler(){
    todoList = todoList.filter((item2) => {
        return item2.id !== item.id
    })
    renderDOM()
}

function renderDOM() {
    groupElement.innerHTML = ''

    todoList.forEach((item) => {
        const textElement = document.createElement("p")
        textElement.textContent = item.value

        const editButton = document.createElement("button")
        editButton.textContent = "Edit"

        const deleteButton = document.createElement("button")
        deleteButton.textContent = "Delete"


        editButton.addEventListener("click", editHandler)

        deleteButton.addEventListener("click", deleteHandler)

        groupElement.append(textElement, editButton, deleteButton)

        buttonElement.textContent = "add"

        document.body.prepend(groupElement)
    })
}

buttonElement.addEventListener("click", () => {

    if (buttonElement.textContent === "add") {

        todoList.push({
            value: inputResponse,
            id: Math.random()
        })

        renderDOM()

    } else {
        todoList[indexResult].value = inputResponse

        renderDOM()
    }
})
