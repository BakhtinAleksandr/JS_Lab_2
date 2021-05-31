/*
Работу выполнил Бахтин Алексндр Юрьевич(2 курс, 10 группа)
А-вставка элементов в таблицу (есть внизу поля input для ввода данных по каждому столбцу и кнопка "добавить", пустой ввод не осуществляется, все поля обязательны)
В-сортировка таблицы по любому столбцу по возрастанию (нажатие на строку-заголовок сортирует данные в таблице по определенному столбцу)

*/
var tds = document.querySelectorAll('td');

//Выполнение первого задания
button1.addEventListener('click', function(){
  let name = "elem1";
  count = 1;
  for (var i = 4; i < tds.length; i++) {
    let text = document.getElementById(name);
    if (text.value !== ''){
      tds[i].innerHTML = text.value;
      name = name.substring(0,name.length - 1);
      count += 1;
      name += count;
    }
    else {
      alert('Заполните все поля');
      break;
    }
  }
})

//Выполнение второго задания
field1.addEventListener('click', function(){
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
})

field2.addEventListener('click', function(){
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
})

field3.addEventListener('click', function(){
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
})

field4.addEventListener('click', function(){
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
})
