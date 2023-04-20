let Hello = 'Go Away'
// console.log(Hello)

// document.getElementById('one').innerHTML = '<h1>Hello!</h1>'  // Ищет по ID напрямую
// document.getElementById('two').innerHTML = '<h2>How are you?</h2>'

// document.querySelector('#one').innerHTML = '<h1>Мы взаимодействуем с Html через JS</h1>' // Ищет по классу, селектору, чему угодно. Искомое нужно указать в скобках
// document.querySelector('p').innerHTML = '<h2>В процессе обучения я многому учусь</h2>'

// let input = document.querySelector('.text') // вывод поля ввода
// let btn = document.querySelector('.check-in') // вывод кнопки
// let div = document.querySelector('.out') // 

// btn.onclick = function (){ // буквально помещаем функцию в функцию, добавляем к кнопке свойство онклик. При клике на кнопку создаётся функция inPut.value
//         // console.log('Мы что-то добавили по клику') // тут мы задаём вывод в консоль информации при нажатии кнопки
//         // console.log(input.value) // если добавить + перед инпутом, то он будет выводить все введённые значения из поля в консоль как числовые
//         let e = input.value // Пусть e будет введёнными значениями
//         div.innerHTML = e // Пусть эти введённые значения формата е отправятся на страницу

//     }; 

// let myHappy = prompt('Укажите ваш возраст') // аналог команды Alert с полем для ввода
// console.log(myHappy) // вывод введённого в поле ввода в консоль

// if(условие){
//     Действие, что должно произойти
// }

// if(myHappy > 18){
//     alert('Доступ разрешён')
// }else{
//     alert('Неккоректный возраст')
// }


// if(myHappy < 18){
//     alert('Доступ запрещён')
// }else{
//     alert('Коректный возраст')
// }

// if (myHappy < 22&& myHappy!=''){ // производит проверку, что myhappy не более 22 И НЕ РАВЕН ПУСТОЙ СТРОКЕ
//     alert('Недостаточный возраст')
// }
// else if(myHappy == 23){ // их может быть сколько угодно
//     alert('Ты топчик')
// }
// else{
//     alert('Неизвестный возраст')
// }

// ДОМАШНЕЕ ЗАДАНИЕ:

let homework =prompt('Введите число')

if (homework < 100){
    console.log(homework)
}
else {
    document.write(homework)
}
