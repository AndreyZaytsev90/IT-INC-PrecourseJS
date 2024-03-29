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

let notifySubscriber = () => {} //в этом модуле у нас остается notifySubscriber и у нас есть возможность вызвать ее
export function subscribe(callback) {  //сюда функция refreshUI попадает под именем callback
    notifySubscriber = callback // далее эту функцию мы присваиваем notifySubscriber
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

export function addTask() {
    const newTask = {
        id: generateId(),
        title: "--------",
    }
    console.log(data)
    data.todolist.tasks.push(newTask)

    notifySubscriber() // вызывая notifySubscriber здесь, мы вызываем функцию refreshUI в index.js
}

export function removeTask(id){
    data.todolist.tasks = data.todolist.tasks.filter(el=>el.id !== id)
    notifySubscriber()
}
