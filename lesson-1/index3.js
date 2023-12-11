//Objects
//data
let student = {
    personalData: {
        firstName: 'Andrey',
        lastName: 'Zaytsev'
    },
    address: {
        country: 'Russia',
        city: 'Moscow'
    }
}
student.personalData.firstName = 'Olga'
student.personalData.firstName = 'Andrey'

//render
document.write('<h1>Personal DATA:</h1>')
document.write('<b>Имя студента:</b> ', student.personalData.firstName, '<br>')
document.write('<b>Фамилия студента:</b> ', student.personalData.lastName, '<br>')
document.write('<b>Адрес студента:</b> ', student.address.city, '<br>')

console.log(student.personalData.firstName)