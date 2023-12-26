const button = document.getElementById('all');
// const pic = document.querySelector('.menu__item-block-pic img');
// const tittle = document.querySelector('.menu__item-text-name');



// button.addEventListener('click', function () {
//   pic.setAttribute('src', 'img/item2.jpg');
//   // tittle.setAttribute

//   console.log("f");
// })



// нужно сделать обьекты ну эгземпляры класса и кадый эгземпляр будеть содержать новую ссылку и название блюда и описание 
// (и по и де у нас массив таких эгземпляров но это не точно !!)
//гдето внутри должен быть массив ооп


document.querySelectorAll('.fastpanel__tabs-item')

// item.addEventListener('click', () => {
//   item.style.backgroundColor = "red";
// });


// Получаем все элементы с классом "menu__item-block"
let menuItems = document.getElementsByClassName("menu__item-block");

for (let i = 0; i < menuItems.length; i++) {
  let menuItem = menuItems[i];
  console.log(menuItem);

  let dishName = menuItem.querySelector(".menu__item-text-name");
  // dishName.textContent = "";
  console.log(dishName);

  let dishCalori = menuItem.querySelector(".menu__item-cal-count");
  // dishCalori.textContent = "";
  console.log(dishCalori);

  let dishTime = menuItem.querySelector(".menu__item-hour-count");
  // dishTime.textContent = "";
  console.log(dishTime);

  let pic = menuItem.querySelector('.menu__item-block-pic img');
  pic.setAttribute('src', 'img/item2.jpg');
  console.log(pic)


  if (i == 9) {
    //вот как можно убоать блюдо если это нужно главное прописать в обьекте пустые данные и все
    let calImg = menuItem.querySelector(".menu__item-cal");
    calImg.textContent = "";

    let hoursImg = menuItem.querySelector(".menu__item-hours");
    hoursImg.textContent = "";

    dishName.textContent = "";
    dishCalori.textContent = "";
    dishTime.textContent = "";
    pic.setAttribute('src', 'img/item.jpg');
  }
}



let all = [
  [
    {
      dishName: "Омлет с сырной начинкой",
      dishCalori: "678 ккал ",
      dishTime: "2час 5 мин",
      pic: "img/item1.jpg",
      calImg: "",
      hoursImg: ""
    }
  ],

  [
    {
      dishName: "Панкейки",
      dishCalori: "678 ккал ",
      dishTime: "2час 5 мин",
      pic: "img/item2.jpg"
    }
  ],

  [
    {
      dishName: "А-ля хачапури на завтрак",
      dishCalori: "678 ккал ",
      dishTime: "2час 5 мин",
      pic: "img/item3.jpg"
    }
  ],

  [
    {
      dishName: "Воздушные японские панкейки",
      dishCalori: "678 ккал ",
      dishTime: "2час 5 мин",
      pic: "img/item4.jpg"
    }
  ],

  [
    {
      dishName: "Гренки с картофелем",
      dishCalori: "678 ккал ",
      dishTime: "2час 5 мин",
      pic: "img/item4.jpg"
    }
  ],
]

console.log(all)