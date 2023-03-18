// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число


for (let i = 0; i <= 10; i++) {
    const element = i;
  if (element === 0) {
    console.log(`${element} - это ноль`);
  } else if (element % 2 === 0) {
    console.log(`${element} - четное число`);
  } else {
    console.log(`${element} - нечетное число`);
  }
}


// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);
const arr1 = arr.slice(0, 3);
const arr2 = arr.slice(5, 7);
Array.prototype.push.apply(arr1, arr2);
console.log(arr1);


// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const arr = new Array(5);

for (let i = 0; i < arr.length; i++) {
  arr[i] = getRndInteger(0, 9);
}

console.log(arr);

// 1. Сумма элементов массива

let summArr = 0;
arr.forEach((element) => {
  summArr = element + summArr;
});
console.log(`Сумма элементов массиа = ${summArr}`);

//  2. Найти минимальное число

// console.log("Минимальное число массива = ", Math.min.apply(null, arr));

    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) min = arr[i];
    }
   
console.log(`Минимальное число массива = ${min}`);


// 3. Найти есть ли в этом массиве число 3

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  if (element === 3) {
    console.log(`Элемент с индексом ${i} равен 3`);
  } else {
    continue;
  }
}
