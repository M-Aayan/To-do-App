const TextBox = document.querySelector("#textbox")
const addBtn = document.querySelector("#addBtn")
const ulTaskList = document.querySelector("#tasklist")




TextBox.addEventListener("keydown", (event)=>{
    if (event.key === "Enter") {
        return addTask()
    }
})


const addTask = () => {
    let TextBoxValue = TextBox.value.trim()
    if (TextBoxValue === "") {
        TextBox.value = alert("You must write something!")
        TextBox.value = ""
        return
    }
        let li = document.createElement("li")
        li.textContent = TextBoxValue
        ulTaskList.appendChild(li)
        TextBox.value = ""

        //Delete task

        const DelBtn = document.createElement("button")
        DelBtn.textContent = " Delete"
        DelBtn.classList.add
        li.appendChild(DelBtn)
        DelBtn.addEventListener("click" , ()=>{
            li.remove()
        })
}



