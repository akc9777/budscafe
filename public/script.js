let lightBrown = "#8a5d3b",
  darkBrown = "#331a0d",
  snacks = [
    {
      n: "Steam Mo:Mo (🌿/🐃/🐔)",
      p: "130/140/150",
      category: "snacks",
      subcategory: "Mo:Mo",
    },
    {
      n: "Jhol Mo:Mo (🌿/🐃/🐔)",
      p: "150/160/170",
      category: "snacks",
      subcategory: "Mo:Mo",
    },
    {
      n: "Fried Mo:Mo (🌿/🐃/🐔)",
      p: "160/170/180",
      category: "snacks",
      subcategory: "Mo:Mo",
    },
    {
      n: "Tandoori Mo:Mo (🌿/🐃/🐔)",
      p: "200/210/220",
      category: "snacks",
      subcategory: "Mo:Mo",
    },
    {
      n: "Afghani Mo:Mo (🌿/🐃/🐔)",
      p: "200/210/220",
      category: "snacks",
      subcategory: "Mo:Mo",
    },
    {
      n: "Veg Pizza",
      p: 250,
      category: "snacks",
      subcategory: "Pizza",
    },
    {
      n: "Chicken Pizza",
      p: 280,
      category: "snacks",
      subcategory: "Pizza",
    },
    {
      n: "Cheese Pizza",
      p: 300,
      category: "snacks",
      subcategory: "Pizza",
    },
    {
      n: "French Fries",
      p: "150",
      category: "snacks",
      subcategory: "Fries",
    },
    {
      n: "Bud's fries",
      p: "190",
      category: "snacks",
      subcategory: "Fries",
    },
    {
      n: "Veg Burger",
      p: "140",
      category: "snacks",
      subcategory: "Burger",
    },
    {
      n: "Egg Burger",
      p: "150",
      category: "snacks",
      subcategory: "Burger",
    },
    {
      n: "Chicken Burger",
      p: "160",
      category: "snacks",
      subcategory: "Burger",
    },
    {
      n: "Boiled Sausage (🐃/🐔)",
      p: "40/50",
      category: "snacks",
      subcategory: "Sausage",
    },
    {
      n: "Sausage Fry (🐃/🐔)",
      p: "50/60",
      category: "snacks",
      subcategory: "Sausage",
    },
    {
      n: "Veg Sandwich",
      p: "120",
      category: "snacks",
      subcategory: "Sandwich",
    },
    {
      n: "Egg Sandwich",
      p: "140",
      category: "snacks",
      subcategory: "Sandwich",
    },
    {
      n: "Chicken Sandwich",
      p: "160",
      category: "snacks",
      subcategory: "Sandwich",
    },
    {
      n: "Omelette",
      p: "60",
      category: "snacks",
      subcategory: "Omelette",
    },
    {
      n: "Cheese Omelette",
      p: "80",
      category: "snacks",
      subcategory: "Omelette",
    },
    {
      n: "Bread Omelette",
      p: "80",
      category: "snacks",
      subcategory: "Omelette",
    },
    {
      n: "Cheese Bread Omelette",
      p: "100",
      category: "snacks",
      subcategory: "Omelette",
    },
    {
      n: "Bread Toast ",
      p: "20",
      category: "snacks",
      subcategory: "Toast",
    },
    {
      n: "Bread Toast with Butter",
      p: "30",
      category: "snacks",
      subcategory: "Toast",
    },
  ],
  hotBeverages = [
    { n: "French Press Coffee", p: 90, subcategory: "Coffee" },
    { n: "Pour Over Coffee", p: 100, subcategory: "Coffee" },
    { n: "Milk Coffee", p: 120, subcategory: "Coffee" },
    { n: "Hot Lemon", p: 50, subcategory: "Hot Lemon" },
    { n: "Hot Lemon w/ Honey", p: 100, subcategory: "Hot Lemon" },
    {
      n: "Hot Lemon w/ Ginger & Honey",
      p: 110,
      subcategory: "Hot Lemon",
    },
    { n: "Hot Chocolate", p: 150, subcategory: "Hot Lemon" },
    { n: "Black Tea", p: 30, subcategory: "Tea" },
    { n: "Black Masala Tea", p: 35, subcategory: "Tea" },
    { n: "Lemon Tea", p: 40, subcategory: "Tea" },
    { n: "Green Tea", p: 50, subcategory: "Tea" },
    { n: "Milk Tea", p: 50, subcategory: "Tea" },
    { n: "Milk Masala Tea", p: 60, subcategory: "Tea" },
    { n: "Ginger Tea (Milk/Black)", p: "60/40", subcategory: "Tea" },
    { n: "Saffron Milk tea", p: 100, subcategory: "Tea" },
  ],
  coldBeverages = [
    {
      n: "Cold Drinks (Dew/Coke/Slice)",
      p: "70",
      category: "snacks",
      subcategory: "Chilled Drinks",
    },
    {
      n: "Fresh Lime",
      p: "80",
      category: "snacks",
      subcategory: "Refreshing Drinks",
    },
    {
      n: "Lemonade",
      p: "120",
      category: "snacks",
      subcategory: "Refreshing Drinks",
    },
    {
      n: "Mint Lemonade",
      p: "140",
      category: "snacks",
      subcategory: "Refreshing Drinks",
    },
    {
      n: "Plain Lassi",
      p: "120",
      category: "snacks",
      subcategory: "Lassi",
    },
    {
      n: "Banana Lassi",
      p: "140",
      category: "snacks",
      subcategory: "Lassi",
    },
    {
      n: "Iced Americano",
      p: "120",
      category: "snacks",
      subcategory: "Chilled Drinks",
    },
    {
      n: "Cold Coffee",
      p: "160",
      category: "snacks",
      subcategory: "Chilled Drinks",
    },
    {
      n: "Cold Chocolate",
      p: "160",
      category: "snacks",
      subcategory: "Chilled Drinks",
    },
    {
      n: "Peach Iced Tea",
      p: "120",
      category: "snacks",
      subcategory: "Chilled Drinks",
    },
    {
      n: "Lemon Iced Tea",
      p: "120",
      category: "snacks",
      subcategory: "Chilled Drinks",
    },
  ],
  snacksCategory = [
    { c: "Mo:Mo", d: " " },
    { c: "Pizza", d: "*extra cheese @ 70" },
    { c: "Fries", d: " " },
    { c: "Burger", d: "*extra cheese @ 40" },
    { c: "Sausage", d: " " },
    { c: "Sandwich", d: " " },
    { c: "Omelette", d: " " },
    { c: "Toast", d: " " },
  ],
  hotBeveragesCategory = [
    { c: "Coffee", d: " " },
    { c: "Hot Lemon", d: " " },
    { c: "Tea", d: "*extra honey @ 60" },
  ],
  coldBeveragesCategory = [
    { c: "Chilled Drinks", d: " " },
    { c: "Refreshing Drinks", d: " " },
    { c: "Lassi", d: " " },
  ];

function menuBuilder(menuList, categoryList = []) {
  document.documentElement.scrollTop = 0;
  document.querySelector("#content").innerHTML = "";

  for (let i = 0; i < categoryList.length; i++) {
    document
      .querySelector("#content")
      .insertAdjacentHTML(
        "beforeend",
        "<h4 class='sub-category-heading'>" +
          categoryList[i].c +
          "</h4><i>" +
          categoryList[i].d +
          "</i>"
      );

    let subcategoryMenuList = menuList.filter(function (item) {
      return item.subcategory == categoryList[i].c;
    });
    for (let j = 0; j < subcategoryMenuList.length; j++)
      document
        .querySelector("#content")
        .insertAdjacentHTML(
          "beforeend",
          "<div class='card'><h5>" +
            subcategoryMenuList[j].n +
            "</h5><i>" +
            subcategoryMenuList[j].p +
            "</i></div>"
        );
  }
}

menuBuilder(snacks, snacksCategory),
  document.querySelector("#nav-snacks").addEventListener("click", function () {
    document
      .querySelector(".nav-item-selected")
      .classList.remove("nav-item-selected"),
      document.querySelector("#nav-snacks").classList.add("nav-item-selected"),
      menuBuilder(snacks, snacksCategory);
  }),
  document.querySelector("#nav-hot").addEventListener("click", function () {
    document
      .querySelector(".nav-item-selected")
      .classList.remove("nav-item-selected"),
      document.querySelector("#nav-hot").classList.add("nav-item-selected"),
      menuBuilder(hotBeverages, hotBeveragesCategory);
  }),
  document.querySelector("#nav-cold").addEventListener("click", function () {
    document
      .querySelector(".nav-item-selected")
      .classList.remove("nav-item-selected"),
      document.querySelector("#nav-cold").classList.add("nav-item-selected"),
      menuBuilder(coldBeverages, coldBeveragesCategory);
  });
