const TextBox = document.querySelector("#textbox")
const addBtn = document.querySelector("#addBtn")
const ulTaskList = document.querySelector("#tasklist")
let currentTask = null;
let Task = []

//dark/light mode

const themeBtn = document.querySelector("#themeBtn");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }

    saveTheme()
});



//save theme
const saveTheme = ()=>{
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark")
    } else {
        localStorage.setItem("theme", "light")
    }
}

//load theme

const loadTheme = ()=>{
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        document.body.classList.add("dark");
        themeBtn.textContent = "☀️";
    } else {
        document.body.classList.remove("dark");
        themeBtn.textContent = "🌙";
    }
}




//Enter Key

TextBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        return addTask()
    }
})

//Add Task

const addTask = () => {
    let TextBoxValue = TextBox.value.trim()
    if (TextBoxValue === "") {
        TextBox.value = alert("You must write something!");
        TextBox.focus();
        return;
    }
    if (currentTask !== null) {
        Task[currentTask].text = TextBoxValue;
        saveTask();
        renderTasks();
        currentTask = null;
        addBtn.textContent = "Add";
        TextBox.value = "";
        return;
    }

    Task.push({
        text: TextBoxValue,
        completed: false
    });
    saveTask()
    renderTasks();
    TextBox.value = "";
}

// Save Task

const saveTask = () => {
    localStorage.setItem("Task", JSON.stringify(Task))
}


// Create task

const createTaskElement = (task, index) => {

    let li = document.createElement("li")
    if (task.completed) {
        li.classList.add("completed");
    }
    let taskText = document.createElement("span");
    taskText.textContent = task.text
    li.appendChild(taskText)

    //Delete task

    const DelBtn = document.createElement("button")
    DelBtn.textContent = " Delete"
    DelBtn.classList.add("delete-btn")
    DelBtn.addEventListener("click", () => {
        Task.splice(index, 1)
        saveTask()
        renderTasks();
    })
    li.appendChild(DelBtn)

    // Done Task 

    const DoneBtn = document.createElement("button")
    DoneBtn.textContent = "Done!"
    DoneBtn.classList.add("done-btn")
    DoneBtn.addEventListener("click", () => {
        Task[index].completed = !Task[index].completed;

        saveTask();
        renderTasks();
    })
    li.appendChild(DoneBtn)

    // Edit Task

    const EditBtn = document.createElement("button");
    EditBtn.textContent = "Edit";
    EditBtn.classList.add("edit-btn")

    EditBtn.addEventListener("click", () => {
        TextBox.value = Task[index].text;
        currentTask = index;
        addBtn.textContent = "Update";
        TextBox.focus();
    });

    li.appendChild(EditBtn);
    ulTaskList.appendChild(li);
}

addBtn.addEventListener("click", addTask);

//render task
const renderTasks = () => {
    ulTaskList.innerHTML = "";
    Task.forEach((task, index) => {
        createTaskElement(task, index);
    });

}


//Load Task
const loadTask = () => {
    Task = JSON.parse(localStorage.getItem("Task")) || []
    renderTasks();
}
loadTask()
loadTheme();
loadTask();