/*alert("Hello")*/

// Создание элемента заголовка (h1) и добавление текста к этому элементу
const titleElement = document.createElement('h1');
titleElement.append('Hello from it-incubator');

// Добавление элемента заголовка в тело документа
document.body.append(titleElement);

// Создание выпадающего списка (select)
const techSelectElement = document.createElement('select');

// Создание первого варианта (option) для выпадающего списка
const techSelectOption0Element = document.createElement('option');
techSelectOption0Element.value = 1;
techSelectOption0Element.append('JS'); // Добавление текста 'JS' к первому варианту
techSelectElement.append(techSelectOption0Element); // Добавление первого варианта в выпадающий список

// Создание второго варианта (option) для выпадающего списка
const techSelectOption1Element = document.createElement('option');
techSelectOption1Element.value = 2;
techSelectOption1Element.append('HTML'); // Добавление текста 'HTML' ко второму варианту
techSelectElement.append(techSelectOption1Element); // Добавление второго варианта в выпадающий список

// Добавление второго варианта в тело документа (вместо этого, вероятно, предполагалось добавить сам выпадающий список)
document.body.append(techSelectElement);

/*---------------------------------------------------------------------------*/
// data
/*const title = 'it-incubator';
const graduatesCount = 203434300;
const areYouChampion = false;
// render
let pageTitleElement = document.createElement('h1');
pageTitleElement.innerText = title;
document.body.append(pageTitleElement);

let graduatesCountElement = document.createElement('input');
graduatesCountElement.value = graduatesCount;
document.body.append(graduatesCountElement);

let areYouChampionElement = document.createElement('input');
areYouChampionElement.type = 'checkbox';
areYouChampionElement.checked = areYouChampion;
document.body.append(areYouChampionElement);*/

/*-------------------------------------------------------------------------------*/


// data
const info = {
    title: 'it-incubator',
    graduatesCount: 2000,
    areYouChampion: true,
    technologies: [
        {id: 1, title: 'Front'},
        {id: 2, title: 'Back'},
        {id: 3, title: 'DevOps'},
        {id: 4, title: 'JS'},
    ]
}


// render
let pageTitleElement = document.createElement('h1');
pageTitleElement.innerText = info.title;
document.body.append(pageTitleElement);

let graduatesCountElement = document.createElement('input');
graduatesCountElement.value = info.graduatesCount;
document.body.append(graduatesCountElement);

let areYouChampionElement = document.createElement('input');
areYouChampionElement.type = 'checkbox';
areYouChampionElement.checked = info.areYouChampion;
document.body.append(areYouChampionElement);

/*let technologies = document.createElement('select')*/
/*let technologiesElement1 = document.createElement('option')
technologiesElement1.value = 1
technologiesElement1.append(info.technologies[0])
technologies.append(technologiesElement1)
document.body.append(technologies)*/
let technologies = document.createElement('select')
for (let i = 0; i < info.technologies.length; i++) {
    let technologiesElement = document.createElement('option')
    technologiesElement.text = info.technologies[i].title
    technologies.append(technologiesElement)
}

/*let technologiesElement1 = document.createElement('option')
technologiesElement1.value = 1
technologiesElement1.append(info.technologies[0].title)

let technologiesElement2 = document.createElement('option')
technologiesElement2.value = 2
technologiesElement2.append(info.technologies[1].title)

let technologiesElement3 = document.createElement('option')
technologiesElement3.value = 3
technologiesElement3.append(info.technologies[2].title)

technologies.append(technologiesElement1, technologiesElement2, technologiesElement3)*/

document.body.append(technologies)
/*--------------------------------------------------------------------------------*/