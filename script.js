const items = [
  {
    title: "Игрушка мячик",
    description: "Ваш питомец будет счастлив!",
    tags: ["cat", "dog"],
    price: 500,
    img: "./img/1.jpeg",
  },
  {
    title: "Игрушка лабиринт",
    description: "Поможет в развитии интеллекта!",
    tags: ["cat", "dog"],
    price: 900,
    img: "./img/2.jpeg",
  },
  {
    title: "Игрушка для котят",
    description: "Отвлечет вашего питомца!",
    tags: ["cat"],
    price: 300,
    img: "./img/3.jpeg",
  },
  {
    title: "Миска «Котик»",
    description: "Подойдет и для собак!",
    tags: ["cat", "dog"],
    price: 660,
    img: "./img/4.jpeg",
  },
  {
    title: "Лоток розовый",
    description: "Теперь вы можете забыть о проблемах с туалетом",
    tags: ["cat"],
    price: 400,
    img: "./img/5.jpeg",
  },
  {
    title: "Сухой корм для кошек",
    description: "Специальная формула для милых усатиков!",
    tags: ["cat"],
    price: 200,
    img: "./img/6.jpeg",
  },
  {
    title: "Сухой корм для собак",
    description: "Содержит полный комплекс витаминов",
    tags: ["dog"],
    price: 300,
    img: "./img/7.jpeg",
  },
  {
    title: "Игрушка для собак",
    description: "Теперь вы можете не переживать за личные вещи",
    tags: ["dog"],
    price: 500,
    img: "./img/8.jpeg",
  },
  {
    title: "Лежанка",
    description: "Идеальное место для отдыха!",
    tags: ["cat", "dog"],
    price: 1500,
    img: "./img/9.jpeg",
  },
  {
    title: "Поилка для собак",
    description: "Возьмите с собой в путешествие",
    tags: ["dog"],
    price: 800,
    img: "./img/10.jpeg",
  },
  {
    title: "Переноска",
    description: "Путешествуйте с комфортом!",
    tags: ["cat", "dog"],
    price: 3500,
    img: "./img/11.jpeg",
  },
  {
    title: "Поводок для собак",
    description: "Для чудесных прогулок вместе",
    tags: ["dog"],
    price: 800,
    img: "./img/12.jpeg",
  },
];

const template = document.querySelector('#item-template');
const shopItem = document.querySelector('#shop-items');
const searchBtn = document.querySelector('#search-btn');
const searchInput = document.querySelector('#search-input');
const textNotFound = document.querySelector('#nothing-found');


function prepareTags(tag) {
  const element = document.createElement('span');
  element.classList.add('tag');
  element.textContent = tag;
  return element;
}

function prepareItem(item) {
  const clone = template.content.cloneNode(true);
  clone.querySelector('h1').textContent = item.title;
  clone.querySelector('p').textContent = item.description;
  clone.querySelector('span').textContent = `${item.price}Р`;
  clone.querySelector('img').src = item.img;

  const allTags = clone.querySelector('.tags');

  item.tags.forEach((tag) => {
    allTags.append(prepareTags(tag));
  });

  return clone;
}

function searchItem(items, searchInput, textNotFound) {
  shopItem.innerHTML = '';
  textNotFound.textContent = '';

  let search = searchInput.value;
  search = search.trim().toLowerCase();

  for (let item of items) {
    let description = item.title;
    description = description.toLowerCase();
    if (description.includes(search)) {
      shopItem.append(prepareItem(item));
    }
  }
  if (shopItem.textContent == '') {

    textNotFound.textContent = 'Ничего не найдено';
  }
  searchInput.value = '';

}

for (let item of items) {
  shopItem.append(prepareItem(item));
}

searchBtn.addEventListener('click', () => searchItem(items, searchInput, textNotFound));
