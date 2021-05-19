/*
Работу выполнил Бахтин Алексндр Юрьевич(2 курс, 10 группа)
А-вставка элементов в таблицу (есть внизу поля input для ввода данных по каждому столбцу и кнопка "добавить", пустой ввод не осуществляется, все поля обязательны)
В-сортировка таблицы по любому столбцу по возрастанию (нажатие на строку-заголовок сортирует данные в таблице по определенному столбцу)

*/
var tds = document.querySelectorAll('td');

//Выполнение первого задания
document.querySelector('#button1').onclick = () =>{
  let text = document.querySelector('#first1');
  if (text.value !== ''){
    tds[4].innerHTML = text.value;
  }
  else {
    alert('Заполните поле для первого блюда');
  }
}
document.querySelector('#button2').onclick = () =>{
  let text = document.querySelector('#second1');
  if (text.value !== ''){
    tds[5].innerHTML = text.value;
  }
  else {
    alert('Заполните поле для второго блюда');
  }
}
document.querySelector('#button3').onclick = () =>{
  let text = document.querySelector('#des1');
  if (text.value !== ''){
    tds[6].innerHTML = text.value;
  }
  else {
    alert('Заполните поле для десерта');
  }
}
document.querySelector('#button4').onclick = () =>{
  let text = document.querySelector('#drink1');
  if (text.value !== ''){
    tds[7].innerHTML = text.value;
  }
  else {
    alert('Заполните поле для напитка');
  }
}
document.querySelector('#button5').onclick = () =>{
  let text = document.querySelector('#first2');
  if (text.value !== ''){
    tds[8].innerHTML = text.value;
  }
  else {
    alert('Заполните второе поле для первого блюда');
  }
}
document.querySelector('#button6').onclick = () =>{
  let text = document.querySelector('#second2');
  if (text.value !== ''){
    tds[9].innerHTML = text.value;
  }
  else {
    alert('Заполните второе поле для второго блюда');
  }
}
document.querySelector('#button7').onclick = () =>{
  let text = document.querySelector('#des2');
  if (text.value !== ''){
    tds[10].innerHTML = text.value;
  }
  else {
    alert('Заполните второе поле для десерта');
  }
}
document.querySelector('#button8').onclick = () =>{
  let text = document.querySelector('#drink2');
  if (text.value !== ''){
    tds[11].innerHTML = text.value;
  }
  else {
    alert('Заполните второе поле для напитка');
  }
}
//Выполнение второго задания
document.querySelector('#field1').onclick = () =>{
  if((tds[4].innerHTML == "") || (tds[8].innerHTML == "")){
    alert('ячейки пустые');
}
  else{
    if(tds[4].innerHTML > tds[8].innerHTML){
      let tmp = "";
      for(let i = 4; i < 8; i++){
        tmp = tds[i].innerHTML;
        tds[i].innerHTML = tds[i+4].innerHTML;
        tds[i+4].innerHTML = tmp;
      }
    }
  }
}

document.querySelector('#field2').onclick = () =>{
  if((tds[5].innerHTML == "") || (tds[9].innerHTML == "")){
    alert('ячейки пустые');
}
  else{
    if(tds[5].innerHTML > tds[9].innerHTML){
      let tmp = "";
      for(let i = 4; i < 8; i++){
        tmp = tds[i].innerHTML;
        tds[i].innerHTML = tds[i+4].innerHTML;
        tds[i+4].innerHTML = tmp;
      }
    }
  }
}

document.querySelector('#field3').onclick = () =>{
  if((tds[6].innerHTML == "") || (tds[10].innerHTML == "")){
    alert('ячейки пустые');
}
  else{
    if(tds[6].innerHTML > tds[10].innerHTML){
      let tmp = "";
      for(let i = 4; i < 8; i++){
        tmp = tds[i].innerHTML;
        tds[i].innerHTML = tds[i+4].innerHTML;
        tds[i+4].innerHTML = tmp;
      }
    }
  }
}

document.querySelector('#field4').onclick = () =>{
  if((tds[7].innerHTML == "") || (tds[11].innerHTML == "")){
    alert('ячейки пустые');
}
  else{
    if(tds[7].innerHTML > tds[11].innerHTML){
      let tmp = "";
      for(let i =4; i < 8; i++){
        tmp = tds[i].innerHTML;
        tds[i].innerHTML = tds[i+4].innerHTML;
        tds[i+4].innerHTML = tmp;
      }
    }
  }
}
