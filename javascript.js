/*alert('This code is from another file')
let n = 48; //Тип данных - число
let b = "48"; //Тип данных - строка*/

/*let age = prompt('Сколько тебе лет?', 100);

alert(`Тебе ${age} лет!`); // Тебе 100 лет!

age = prompt('Сколько тебе лет?', 100);

alert("Тебе " + age + " лет!"); // Тебе 100 лет!*/

/*let isBoss = confirm("Ты здесь главный?");

alert( isBoss ); // true, если нажата OK*/

let year = prompt('В каком году было ЭКСПО?', '');

if (year == 2017) {
  alert( 'Вы правы!' );
} else {
  alert( 'А вот и неправильно!' ); // любое значение, кроме 2017
}
