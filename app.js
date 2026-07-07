const TextBox = document.querySelector("#textbox")
const addBtn = document.querySelector("#addBtn")
const ulElement = document.createElement("ul")


addBtn.addEventListener("click", () => {
    let TextBoxValue = TextBox.value.trim()
    if (TextBoxValue === "") {
        TextBox.value = alert("You must write something!")
        TextBox.value = ""
        return
    }
        let li = document.createElement("li")
        li.textContent = TextBoxValue
        ulElement.appendChild(li)


        TextBox.value = ""

})
document.body.appendChild(ulElement)
