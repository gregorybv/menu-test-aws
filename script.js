import data from "./menu.json" assert {type: "json"}

const root = document.querySelector("#app")

const createMenuItems = (obj, rootDiv) => {
  obj.forEach((item) => {

    const itemBlock = document.createElement('div');

    const countNumber = document.createElement('div')
    const imageBlock = document.createElement('div');
    const img = document.createElement('img');

    const name = document.createElement('span');
    const desc = document.createElement('span');

    const labelWeight = document.createElement('label')
    const weight = document.createElement('span');

    const priceBlock = document.createElement('div')
    const buttonDel = document.createElement('button')
    const labelPrice = document.createElement('label')
    const price = document.createElement('div');
    const buttonAdd = document.createElement('button')


    countNumber.innerText = "1";
    img.innerText = item.url;
    name.innerText = item.itemName;
    desc.innerText = item.itemDescription;
    weight.innerText = item.itemWeight;
    price.innerText = item.itemPrice;
    labelPrice.innerText = '₽'
    labelWeight.innerText = 'гр'

    img.setAttribute('src', `https://smartapp.acs-cis.ru/assets/img/Menu/${item.url}`);

    //присваиваем классы

    itemBlock.className = 'item-div';

    imageBlock.className = 'item-image';
    countNumber.className = 'item-image_count';
    img.className = 'item-image_img';

    name.className = 'item-name';
    desc.className = 'item-description';

    labelWeight.className = 'item-label';
    weight.className = 'item-weight';


    priceBlock.className = 'item-price'
    buttonAdd.className = 'item-price_button button-add'
    labelPrice.className = 'item-price_label';
    price.className = 'item-price_number';
    buttonDel.className = 'item-price_button button-del'

    imageBlock.appendChild(countNumber);
    imageBlock.appendChild(img);
    itemBlock.appendChild(imageBlock);
    itemBlock.appendChild(name);
    itemBlock.appendChild(desc);
    labelWeight.appendChild(weight)
    itemBlock.appendChild(labelWeight)

    priceBlock.appendChild(buttonDel);
    priceBlock.appendChild(labelPrice);
    labelPrice.appendChild(price);
    priceBlock.appendChild(buttonAdd);
    itemBlock.appendChild(priceBlock)
    rootDiv.appendChild(itemBlock);
    root.appendChild(rootDiv)
  })
}

const createMenuCategories = ({catName, catCode, menuItems}) => {
  const rootDiv = document.createElement("div");
  const span = document.createElement("span");
  root.appendChild(span);
  span.innerText = catName;
  rootDiv.className = 'root-div';
  span.className = 'title';

  createMenuItems(menuItems, rootDiv);
  return rootDiv;
}

const menuCategories = Object.entries(data.serviceTimes).map((index) => {
  const [i, obj] = index
  return obj.menuCategories
})

menuCategories[0].forEach((element) => {
  root.appendChild(createMenuCategories(element))
})

// counter
const counters = document.querySelectorAll(".item-div")

counters.forEach((counter) => {
  const plusBtn = counter.querySelector(".button-add")
  const minusBtn = counter.querySelector(".button-del")
  const number = counter.querySelector(".item-image_count")
  const calculation = counter.querySelector(".item-price_number")
  const calculatValue = +calculation.innerText

  plusBtn.addEventListener("click", () => {
    const numberValue = +number.innerText
    number.innerText = numberValue + 1
    calculation.innerText = number.innerText * calculatValue
  })

  minusBtn.addEventListener("click", () => {
    const numberValue = +number.innerText
    if (numberValue > 1) {
      number.innerText = numberValue - 1
      calculation.innerText = number.innerText * calculatValue
    }
  })
})
