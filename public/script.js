$(document).ready(function () {
  let lightBrown = "#8a5d3b";
  let darkBrown = "#331a0d";

  let snacks = [
    { name: "Bread Toast", price: 20, category: "snacks" },
    { name: "Bread Toast with Butter", price: 40, category: "snacks" },
    { name: "Masala Omelette", price: 60, category: "snacks" },
    { name: "Cheese Omelette", price: 60, category: "snacks" },
    { name: "Cheesy Bread Omelette", price: 100, category: "snacks" },
    { name: "Chicken Sausage", price: 60, category: "snacks" },
    { name: "Buff Sausage", price: 50, category: "snacks" },
    { name: "French Fries", price: 150, category: "snacks" },
    { name: "Bud's Fries", price: 190, category: "snacks" },
    {
      name: "Sandwich (Veg/Egg/Chicken)",
      price: "120/140/160",
      category: "snacks",
    },
  ];

  let hotBeverages = [
    { name: "Black Tea", price: 30 },
    { name: "Black Masala Tea", price: 35 },
    { name: "Lemon Tea", price: 40 },
    { name: "Green Tea", price: 50 },
    { name: "Milk Tea", price: 50 },
    { name: "Milk Masala Tea", price: 60 },
    { name: "Ginger Tea (Milk/Black)", price: "60/40" },
    { name: "Saffron Milk tea", price: 100 },
    { name: "Hot Lemon", price: 50 },
    { name: "Hot Lemon w/ Honey", price: 100 },
    { name: "Hot Lemon w/ Ginger & Honey", price: 110 },
    { name: "Hot Chocolate", price: 150 },
    { name: "French Press Coffee", price: 90 },
    { name: "Pour Over Coffee", price: 100 },
    { name: "Milk Coffee", price: 120 },
  ];

  let coldBeverages = [
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

  $("body").css("background-color", "#eee");
  $(".nav-items").css("color", "#000");
  menuBuilder(snacks);

  $("#nav-snacks").click(function () {
    $(".nav-item").removeClass("nav-item-selected");
    $("#nav-snacks").addClass("nav-item-selected");
    menuBuilder(snacks);
  });

  $("#nav-hot").click(function () {
    $(".nav-item").removeClass("nav-item-selected");
    $("#nav-hot").addClass("nav-item-selected");
    menuBuilder(hotBeverages);
  });
  
  $("#nav-cold").click(function () {
    $(".nav-item").removeClass("nav-item-selected");
    $("#nav-cold").addClass("nav-item-selected");
    menuBuilder(coldBeverages);
  });

  function menuBuilder(menuList) {
    $("#content").empty();
    for (let i = 0; i < menuList.length; i++) {
      $("#content").append(
        "<div class='card'><h5>" +
          menuList[i].name +
          "</h5><i>" +
          menuList[i].price +
          "</i></div>"
      );
    }
  }
});
