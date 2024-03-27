export const data = {
    todolist: {
        id: generateId(),
        title: "Want to Learn",
        tasks: [
            {
                id: generateId(),
                title: "Learn HTML",
            },
            {
                id: generateId(),
                title: "Learn CSS",
            },
        ]
    }
}

function generateId() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charsLength = chars.length;
    const sections = [8, 4, 4, 4, 12]; // Длины каждой секции ID

    let id = '';

    for (let i = 0; i < sections.length; i++) {
        for (let j = 0; j < sections[i]; j++) {
            id += chars.charAt(Math.floor(Math.random() * charsLength));
        }
        if (i < sections.length - 1) {
            id += '-';
        }
    }

    return id;
}

function addTask(data) {
   const newTask = {
       id: generateId(),
       title: "--------",
   }
   data.todolist.tasks.push(newTask)
}
