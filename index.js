
// // // let nr1 = 15;
// // // let nr2 = 10;
// // // let str1 = "hi";
// // // let nr3 = 3;
// // // let resultat1 = nr1 * nr2;
// // // let resultat2 = str1 * nr3;
// // // console.log(resultat1,resultat2);

// // // let nr1 = 15
// // // let nr2 = 10
// // // let str1 = "hi";
// // // let nr3 = 3;
// // // let resultat1 = nr1 * nr2;
// // // let resultat2 = str1 * nr3;


// // // Практическое занятие 2.3
// // // let a = window.prompt("Значение 1?");
// // // let b = window.prompt("Значение 2?");
// // // a = Number(a);
// // // b = Number(b);
// // // let hypotenuseVal = ((a * a ) + (b * b))**0.5;
// // // console.log(hypotenuseVal);

// // // Практическое занятие 2.4
// // // let a = 3;
// // // let b = 5;
// // // let c = 2;
// // // a = b + a;
// // // a = a / c;
// // // c = c % b;//Модуляция 
// // // console.log(a,b,c);

// // // Больше и меньше
// // // let y = 7;
// // // let x = 6 ;
// // // console.log(x < y);

// // // Логические операторы
// // // &&//И
// // // let x = 1;
// // // let y = 2;
// // // let z = 3;
// // // console.log(x > y && y < z);
// // // //|| или
// // // let x = 1;
// // // let y = 2;
// // // let z = 3;
// // // console.log(x > y || y < z);
// // //! не 
// // // let x = false;
// // // console.log(!x);

// // // // Массивы
// // // // cars = ["BMW","Volswagen","Reno"];
// // // // // console.log(cars[1]);
// // // // cars [1] = "lada";
// // // //Практическое задание 3.1
// // // let listPay = ["Milk","Bread","Apples","green","blue"];
// // // listPay[1] = "Bananas";
// // // listPay.push("Coca-cola");
// // // listPay[9] = "Pen";
// // // // console.log(listPay.length);
// // // listPay.splice(2,2,"purple","red");//Вставляет певым индексом с определенного значения ,удаляет вторым с введенного значения
// // // let listPay1 = [1,2,3,4];
// // // let listPay2 = listPay.concat(listPay1);//Объединяет два массива
// // // let listPay3 = listPay2.concat(7,"BMW",9);//Добавляет елементы массива в конец
// // // listPay3.pop();//Удаление последнего элемента массива
// // // listPay3.shift();//Удаление первого элемента массива
// // // listPay3.splice(3,5);//удаление элементов с конкретного эелемента массива и кол-тво(сколько, с какого)
// // // delete listPay3[5];//Удаляет опеределенное значаение массива оставляя пустое значение 
// // // //Поиск элемента
// // // let findeIndex = listPay3.indexOf(7);//(8)
// // // let findeIndex2 = listPay3.indexOf('BMWw');//(-1) не найден
// // // let animal = ["dog","horse","horse","cat","platypus","dog"];
// // // let lastHorse = animal.lastIndexOf("horse");//находит последний индекс в массиве 
// // // let names = ["Kit","James","Abe","Dick","Arnold","Ben"];
// // // names.sort();//Сортирует по порядку (Алфавит,числа...)
// // // names.reverse();//Меняет местами первый и последний элемент 

// // // Практическое занятие 3.2
// // // let list1 = ["Milk","Bread","Apples"];
// // // list1.splice(1,1,"Bananas","Eggs");
// // // let deleteLast = list1.pop();
// // // list1.sort();
// // // let findeMilk = list1.indexOf("Milk");
// // // list1.splice(1,0,"Carrots","Lettuce");
// // // let list2 = ["Juice","Pop"];
// // // let list3 = list2.concat(list2);
// // // let list4 = list1.concat(list3);
// // // let lastIndexPop = list4.lastIndexOf("Pop");
// // // console.log(lastIndexPop);

// // // Многомерные массивы
// // // let someValues1 = [1,2,3];
// // // let someValues2 = [4,5,6];
// // // let someValues3 = [7,8,9];
// // // let arrOfArrayes = [someValues1,someValues2,someValues3];
// // // let arrOfArrayes2 = [[1,2,3],[4,5,6],[7,8,9]];
// // // let value1 = arrOfArrayes[2][1];
// // // console.log(value1);
// // // let arrOfArrayesOfArrayes = [arrOfArrayes,arrOfArrayes,arrOfArrayes];
// // // let middleValue = arrOfArrayesOfArrayes[1][1][1];
// // // console.log(middleValue);

// // //Практическое занятие 3.3
// // let number = [1,2,3];
// // let nunberNumber = [number,number,number];
// // let index2 = nunberNumber[0][1];
// // console.log(index2)

// // //Объекты в JavaScript

// // let cat = {
// // catName: "Leo",
// // weight: 3.5,
// // color: "gold",
// // breed: "golden chinchilla",
// // age: 2.3,
// // burglarBiter: true
// // };
// // let catColor1 = cat["color"];// let catColor1 = cat.color;
// // cat["color"] = "blue";
// // cat.weight = 3.4;
// // cat ["age"] = "three";
// // let variable = "age";
// // console.log(cat[variable]);
// // variable = "breed";
// // console.log(cat["breed"]);
// // cat[variable] = "british";
// // console.log(cat["breed"]);

// // //Практическое занятие 3.4

// // // let myCar = {
// // // make: "lada",
// // // model: "priora",
// // // color: "red",
// // // nameCar: "Lastochka" 
// // // };

// // // myCar["color"] = "blue";
// // // myCar["status"] = "forSale";
// // // let makeModel = myCar["make"]+" "+myCar["model"]
// // // console.log(makeModel)
// // // console.log(myCar.status)

// // // Практическое задание 3.5
// // const people = {
// //     friends:[]
// // };
// // let friend1= { 
// //     name: "joe",
// //     lastname: "black",
// //     id: 1
// // };
// // let friend2= { 
// //     name: "jim",
// //     lastname: "brown",
// //     id: 2
// // };
// // let friend3= { 
// //     name: "jared",
// //     lastname: "padalecki",
// //     id: 3
// // };
// // people.friends.push(friend1,friend2,friend3);
// // console.log(people.friends);


// // let myArr = [1,3,5,6,8,9,15];
// // myArr.splice(1,1,4);
// // console.log(myArr);

// // // Логические операторы
// // // практическое занятие 4.1
// // let number1 = false;
// // console.log(number1);
// // if(number1){
// //     console.log("**Ура**")
// // }
// // else{
// // console.log("**не ура!**")
// // }
// // //или так
// // // if(!number1){
// // // console.log("**не ура!**")
// // // };


// // // //Практическое занятие 4.2
// // // let age = prompt("Введите ваш возраст");
// // // let messeage;
// // // if (age >= 21){
// // //     messeage = "разрешить вход в заведение и покупку алкоголя"
// // // } else if(age >= 19){
// // //     messeage = "разрешить вход в заведение и покупку алкоголя"
// // // }else{
// // //     messeage = "Вход запрещен"
// // // };
// // // console.log(messeage)
// // Тернарные операторы
// //если(if) операнд1, тогда(then) операнд2, иначе (else) операнд3.
// // //let access = 18 < ? "заперещено" : "разрешенно" 
// // // Практическое занятие 4.3
// // const id = false;
// // const messeage = (id) ? "Доступ разрешен" : "Доступ запрещен";
// // console.log(messeage);
// // // Операторы SWITCH
// // switch(expression){
// //     case value1:
// //         //исполняемый код
// //         break;
// //     case value2:
// //         //исполняемый код
// //         break;
// //     case value3:
// //         //исполняемый код
// //         break;
// //     default:// если не нашел делает по умолчанию 
// //         //исполняемый код
// //         break;    
// //     };
// // // Практическое занятие 4.4

// // let randomeNumber = Math.random();
// // randomeNumber = randomeNumber * 6;
// // randomeNumber = Math.floor(randomeNumber);
// // let answer = "Я ничего не знаю";
// // let question = prompt("что ты хочешь?");
// // // switch(randomeNumber){
// //     case 0:
// //         answer = "может или никто не может"
// //         break;
// //     case 1:
// //         answer = "может быть"
// //         break;
// //     case 2:
// //         answer = "возможно"
// //         break;
// //     case 3:
// //         answer = "быть может или нет "
// //         break;
// //     case 4:
// //         answer = "может или не может быть"
// //         break;            
// //     case 5:
// //         answer = "может я ,а может быть"
// //         break;
// //     default:
// //         answer = "пошел вон"
// //         break;
// // // };
// // // let output = "ты спросил у меня " + question + ".Я думаю " + answer;
// // // console.log(output);

// // //Практическое занятие 4.5
// // let prize = prompt("Выберете значение от 0-10. Спасибо!");
// // prize = Number(prize);
// // let output = "Ваш выбор:";
// // switch(prize){
// //     case 0:
// //         output+= "машина"
// //         break;
// //     case 1:
// //         output+= "верталет"
// //         break;
// //     case 2:
// //     case 7:
// //         output+= "100000 денег"
// //         break;
// //     case 3:
// //         output+= "кусок камня"
// //         break;
// //     case 4:
// //         output+= "хлеб"
// //         break;            
// //     case 5:
// //     case 8:
// //         output+= "мелочь"
// //         break;
// //     case 6:
// //     case 9:
// //     case 10:
// //         output+= "телефон"
// //         break;
// //     default:
// //         output+= "Извини выбери в диапозоне 0-10"
// //         break;
// // };
// // console.log(output);
// //
// //Циклы
// // while;
// // do while;
// // for;
// // for in;
// // for of;

// // let i = 22;
// // while (i >= 13) {
// // console.log(i);
// // i--;
// // }

// // fibonacciaArray = [];
// // let nr1 = [1,1,1,3,1,1,1,1,1,1,1,1];

// // fibonacciaArray.push(nr1);
// // console.log(fibonacciaArray[0][3])
// const max = 6;
// const randomeNumber = Math.floor(Math.random() * max) + 1;
// let variable = false;
// while (!variable) {
// let option = prompt("Угадай от  1-" + max);
// option = Number(option);
// if (option === randomeNumber){
// variable = true;
// console.log("УРААА! угадал число - " + randomeNumber );
// }
// else if (option > randomeNumber){
// console.log("Введи значение ниже чем - " + option);
// }
// else {
// console.log("Введи значение выше чем - "+ option);
// }
// };
// Практическое занятие 5.2
//DO WHILE
// counter = 0;
// step = 10;
// do{
//     console.log(counter);
//     counter += step;
// } while (counter <= 100);
// // FOR
// for (инициализируемая переменная; условие; опператор;);
// // {
// //     // исполняемый код
// // };

//  let arr = [];
//  for (let i = 0; i < 120; i = i + 2) {
//     arr.push(i);
//  };
//  console.log(arr);

//  // Практическое занятие 5.3
//  const myWork = [];
//  for (let x = 1; x < 10; x++) {
//     let stat = x % 2 ? true : false;
//     let temp = {
//         name : `lessone ${x}`, status: stat 
//     };
//     myWork.push(temp);
//  };
//  console.log(myWork);
  // Практическое занятие 5.4
  let myTable = [];
  let rows = 3;
  let cols = 8;
  let counter = 0;
  for (y = 0;y < rows; y++){
    tempTable = [];
    for (x = 0;x < cols;x++){
        counter++;
        tempTable.push(counter);
    }
    myTable.push(tempTable);
  }
console.table(myTable);
