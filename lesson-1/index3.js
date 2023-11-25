//Objects

let student = {
    info: {
        firstName: 'Andrey',
        lastName: 'Zaytsev'
    },
    address: {
        country: 'Russia',
        city: 'Moscow'
    }
}

document.write('<b>Имя студента:</b> ', student.info.firstName, '<br>')
document.write('<b>Фамилия студента:</b> ', student.info.lastName, '<br>')
document.write('<b>Адрес студента:</b> ', student.address.city, '<br>')
