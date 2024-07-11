let inputElement = document.querySelector("input")
const buttonElement = document.querySelector("button")

let inputResponse = ''
const todoList = []

inputElement.addEventListener("input", (event)=>{
    inputResponse = event.target.value
})  

let selectedItem = null

buttonElement.addEventListener("click", ()=>{

    if (buttonElement.textContent === "add"){
        const textElement = document.createElement("p")
        
        // todoList.push({
        //     value: inputResponse,
        //     id: Math.random()   
        // })
            
        textElement.textContent = inputResponse
        textElement.id = Math.random()

        const editButton = document.createElement("button")
        editButton.textContent = "Edit"
        
        const deleteButton = document.createElement("button")
        deleteButton.textContent = "Delete"
               
        editButton.addEventListener("click", ()=>{
            console.log(textElement.id)
            buttonElement.textContent = "Confirm"
            inputElement.value = textElement.textContent
            selectedItem = textElement.id
        })
        
        deleteButton.addEventListener("click", ()=>{
            document.body.removeChild(textElement)
            document.body.removeChild(deleteButton)
            document.body.removeChild(editButton)
        })
        
        document.body.prepend(textElement, editButton, deleteButton)
    }else{
        const textElement = document.getElementById(selectedItem)
        textElement.textContent = inputResponse

        buttonElement.textContent = "add"
    }
    
    // textElement.textContent = inputResponse
     
})
