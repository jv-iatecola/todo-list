const inputElement = document.querySelector("input")
const buttonElement = document.querySelector("button")

let inputResponse = undefined
const editButton = undefined
const deleteButton = undefined

inputElement.addEventListener("input", (event)=>{
   inputResponse = event.target.value
})

buttonElement.addEventListener("click", ()=>{
    const pElement = document.createElement("p")
    pElement.textContent = inputResponse

    const editButton = document.createElement("button")
    editButton.textContent = "Edit"

    const deleteButton = document.createElement("button")
    deleteButton.textContent = "Delete"

    editButton.addEventListener("click", ()=>{
        console.log("Edit Print!")
    })

    deleteButton.addEventListener("click", ()=>{
        document.body.removeChild(pElement)
        document.body.removeChild(deleteButton)
        document.body.removeChild(editButton)
    })

    document.body.prepend(pElement, editButton, deleteButton)

})
