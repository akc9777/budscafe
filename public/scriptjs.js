let lightBrown = "#8a5d3b",
  darkBrown = "#331a0d",
  snacks = [
    {
      name: "Steam Mo:Mo (Veg/Buff/Chicken)",
      price: "130/140/150",
      category: "snacks",
      subcategory: "Mo:Mo",
    },
    {
      name: "Jhol Mo:Mo (Veg/Buff/chicken)",
      price: "150/160/170",
      category: "snacks",
      subcategory: "Mo:Mo",
    },
    {
      name: "Fried Mo:Mo (Veg/Buff/Chicken)",
      price: "160/170/180",
      category: "snacks",
      subcategory: "Mo:Mo",
    },
    {
      name: "Tandoori Mo:Mo (Veg/Buff/Chicken)",
      price: "200/210/220",
      category: "snacks",
      subcategory: "Mo:Mo",
    },
    {
      name: "Afghani Mo:Mo (Veg/Buff/Chicken)",
      price: "200/210/220",
      category: "snacks",
      subcategory: "Mo:Mo",
    },
    {
      name: "Veg Pizza",
      price: 250,
      category: "snacks",
      subcategory: "Pizza",
    },
    {
      name: "Chicken Pizza",
      price: 280,
      category: "snacks",
      subcategory: "Pizza",
    },
    {
      name: "Cheese Pizza",
      price: 300,
      category: "snacks",
      subcategory: "Pizza",
    },
    {
      name: "French Fries",
      price: "150",
      category: "snacks",
      subcategory: "Fries",
    },
    {
      name: "Bud's fries",
      price: "190",
      category: "snacks",
      subcategory: "Fries",
    },
    {
      name: "Veg Burger",
      price: "140",
      category: "snacks",
      subcategory: "Burger",
    },
    {
      name: "Egg Burger",
      price: "150",
      category: "snacks",
      subcategory: "Burger",
    },
    {
      name: "Chicken Burger",
      price: "160",
      category: "snacks",
      subcategory: "Burger",
    },
    {
      name: "Boilled Sausage (Buff/Chicken)",
      price: "40/50",
      category: "snacks",
      subcategory: "Sausage",
    },
    {
      name: "Sausage Fry (Buff/Chicken)",
      price: "50/60",
      category: "snacks",
      subcategory: "Sausage",
    },
    {
      name: "Veg Sandwich",
      price: "120",
      category: "snacks",
      subcategory: "Sandwich",
    },
    {
      name: "Egg Sandwich",
      price: "140",
      category: "snacks",
      subcategory: "Sandwich",
    },
    {
      name: "Chicken Sandwich",
      price: "160",
      category: "snacks",
      subcategory: "Sandwich",
    },
    {
      name: "Omelette",
      price: "60",
      category: "snacks",
      subcategory: "Omelette",
    },
    {
      name: "Cheese Omelette",
      price: "80",
      category: "snacks",
      subcategory: "Omelette",
    },
    {
      name: "Bread Omelette",
      price: "80",
      category: "snacks",
      subcategory: "Omelette",
    },
    {
      name: "Cheese Bread Omelette",
      price: "100",
      category: "snacks",
      subcategory: "Omelette",
    },
    {
      name: "Bread Toast ",
      price: "20",
      category: "snacks",
      subcategory: "Toast",
    },
    {
      name: "Bread Toast with Butter",
      price: "30",
      category: "snacks",
      subcategory: "Toast",
    },
  ],
  hotBeverages = [
    { name: "French Press Coffee", price: 90, subcategory: "Coffee" },
    { name: "Pour Over Coffee", price: 100, subcategory: "Coffee" },
    { name: "Milk Coffee", price: 120, subcategory: "Coffee" },
    { name: "Hot Lemon", price: 50, subcategory: "Hot Lemon" },
    { name: "Hot Lemon w/ Honey", price: 100, subcategory: "Hot Lemon" },
    {
      name: "Hot Lemon w/ Ginger & Honey",
      price: 110,
      subcategory: "Hot Lemon",
    },
    { name: "Hot Chocolate", price: 150, subcategory: "Hot Lemon" },
    { name: "Black Tea", price: 30, subcategory: "Tea" },
    { name: "Black Masala Tea", price: 35, subcategory: "Tea" },
    { name: "Lemon Tea", price: 40, subcategory: "Tea" },
    { name: "Green Tea", price: 50, subcategory: "Tea" },
    { name: "Milk Tea", price: 50, subcategory: "Tea" },
    { name: "Milk Masala Tea", price: 60, subcategory: "Tea" },
    { name: "Ginger Tea (Milk/Black)", price: "60/40", subcategory: "Tea" },
    { name: "Saffron Milk tea", price: 100, subcategory: "Tea" },
  ],
  coldBeverages = [
    { name: "Cold Drinks (Dew/Coke/Slice)", price: 70 },
    { name: "Fresh Lime", price: 80 },
    { name: "Lemonade", price: 120 },
    { name: "Mint Lemonade", price: 140 },
    { name: "Plain Lassi", price: 120 },
    { name: "Banana Lassi", price: 140 },
    { name: "Iced Americano", price: 120 },
    { name: "Cold Coffee", price: 160 },
    { name: "Cold Chocolate", price: 160 },
    { name: "Peach Iced Tea", price: 120 },
    { name: "Lemon Iced Tea", price: 120 },
  ];

function menuBuilder(menuList) {
  document.querySelector("#content").innerHTML = "";
  let subcategoryList = [
    ...new Set(
      menuList
        .filter(function (item) {
          return null != item.subcategory && "" != item.subcategory;
        })
        .map((item) => item.subcategory)
    ),
  ];
  if (subcategoryList.length) {
    for (let i = 0; i < subcategoryList.length; i++) {
      document
        .querySelector("#content")
        .insertAdjacentHTML(
          "beforeend",
          "<h4 class='sub-category-heading'>" + subcategoryList[i] + "</h4>"
        );
      let subcategoryMenuList = menuList.filter(function (item) {
        return item.subcategory == subcategoryList[i];
      });
      for (let j = 0; j < subcategoryMenuList.length; j++)
        document
          .querySelector("#content")
          .insertAdjacentHTML(
            "beforeend",
            "<div class='card'><h5>" +
              subcategoryMenuList[j].name +
              "</h5><i>" +
              subcategoryMenuList[j].price +
              "</i></div>"
          );
    }
  } else {
    for (let i = 0; i < menuList.length; i++) {
      document
        .querySelector("#content")
        .insertAdjacentHTML(
          "beforeend",
          "<div class='card'><h5>" +
            menuList[i].name +
            "</h5><i>" +
            menuList[i].price +
            "</i></div>"
        );
    }
  }
}
menuBuilder(snacks),
  document.querySelector("#nav-snacks").addEventListener("click", function () {
    document
      .querySelector(".nav-item-selected")
      .classList.remove("nav-item-selected"),
      document.querySelector("#nav-snacks").classList.add("nav-item-selected"),
      menuBuilder(snacks);
  }),
  document.querySelector("#nav-hot").addEventListener("click", function () {
    document
      .querySelector(".nav-item-selected")
      .classList.remove("nav-item-selected"),
      document.querySelector("#nav-hot").classList.add("nav-item-selected"),
      menuBuilder(hotBeverages);
  }),
  document.querySelector("#nav-cold").addEventListener("click", function () {
    document
      .querySelector(".nav-item-selected")
      .classList.remove("nav-item-selected"),
      document.querySelector("#nav-cold").classList.add("nav-item-selected"),
      menuBuilder(coldBeverages);
  });