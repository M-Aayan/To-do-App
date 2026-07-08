const TextBox = document.querySelector("#textbox")
const addBtn = document.querySelector("#addBtn")
const ulTaskList = document.querySelector("#tasklist")
let currentTask = null;


//dark/light mode

const themeBtn = document.querySelector("#themeBtn");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        themeBtn.textContent = "☀️";
    }else{
        themeBtn.textContent = "🌙";
    }
});



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
     if (currentTask !== null) {
        currentTask.textContent = TextBoxValue;

        currentTask = null;
        TextBox.value = "";
        addBtn.textContent = "Add";

        return
     }

        let li = document.createElement("li")
        let taskText = document.createElement("span");
        taskText.textContent = TextBoxValue
        li.appendChild(taskText)

        //Delete task

        const DelBtn = document.createElement("button")
        DelBtn.textContent = " Delete"
        DelBtn.classList.add("delete-btn")
        li.appendChild(DelBtn)
        DelBtn.addEventListener("click" , ()=>{
            li.remove()
        })

        // Done Task 

        const DoneBtn = document.createElement("button")
        DoneBtn.textContent = "Done!"
        DoneBtn.classList.add("done-btn")
        li.appendChild(DoneBtn)
        DoneBtn.addEventListener("click", ()=>{
            li.classList.toggle("completed")
        })

        // Edit Task

        const EditBtn = document.createElement("button");
        EditBtn.textContent = "Edit";
        EditBtn.classList.add("edit-btn")
        li.appendChild(EditBtn);

        EditBtn.addEventListener("click", () => {
        TextBox.value = taskText.textContent;
        currentTask = taskText;
        addBtn.textContent = "Update";
        TextBox.focus();

});
        
    ulTaskList.appendChild(li);
    TextBox.value = ""

addBtn.addEventListener("click", addTask);

}



