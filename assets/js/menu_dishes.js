"use strict";
/*
  Version 20211007-1245
*/

// GLOBAL DISH DB
// Just follow the format below to add additional items.
// Make sure id is unique and 
// set rating to value 1 <= rating <= 5  and numRatings to numRatings >= 1
let dishes = [
  {
    id: 0,
    meal: 'breakfast',        // breakfast | lunch |dinner
    title: "Yum Kai Dao",
    description: "Wake yourself up with this explosive combination of deep fried \
      eggs, bacon, Thai and jalapeno peppers in a spicy sauce.",
    calories: 550,
    allergies: "peanut oil",
    imgUrl: "./assets/img/menu_db/food-yum_kai_dao.jpg",
    price: 9.99,
    rating: 4,        // 1 - 5, running average
    numRatings: 59,
    pairing: "Deschute's Pine Mountain Pilsner",
  },
  {
    id: 1,
    meal: 'lunch',        // breakfast | lunch |dinner
    title: "Pan-seared Chile Lime Tilapia",
    description: "A delicious, spicy, seared-to-perfection Tilapia fillet on a \
      bed of brown rice and tender snap peas, topped with an ample portion of \
      our mind-blowing chile lime butter a fresh corn on the cob on the side.",
    calories: 900,
    allergies: "",
    imgUrl: "./assets/img/menu_db/food-chile_lime_tilapia.jpg",
    price: 12.99,
    rating: 3,        // 1 - 5, running average
    numRatings: 1,
    pairing: "Anchor Steam",
  },
  {
    id: 2,
    meal: 'dinner',        // breakfast | lunch |dinner
    title: "Gourmet Cowboy Deep Dish Pizza",
    description: "This item is not for the faint of heart. You will be hardpressed \
      to avoid overeating. Jalapenos; fine Italian sausage; a Parmesan, Romano, \
      mozzarella cheese blend that will warp your tongue; onions; and our zesty \
      and slightly sweet world famous pizza sauce top this 2-inch thick, 12-inch \
      pie! Feeds four adults. Calories noted are per slice.",
    calories: 700,
    allergies: "",
    imgUrl: "./assets/img/menu_db/food-deep_dish_pizza.jpg",
    price: 19.99,
    rating: 5,        // 1 - 5, running average
    numRatings: 356,
    pairing: "Woliver's Organic Pale Ale",
  },
  {
    id: 3,
    meal: 'dinner',        // breakfast | lunch |dinner
    title: "Fried Saiman",
    description: "A delectable fusion of Japanese and Hawaiian culinary expertise. \
      Features stir-fried Spam, crab meat (imitation), celery, onions, green \
      cabbage, and Chow Mein noodles garnished with chives, and carrots. \
      This is a dinner favorite!",
    calories: 500,
    allergies: "sea food, crab meat",
    imgUrl: "./assets/img/menu_db/food-saiman.jpg",
    price: 12.99,
    rating: 4,        // 1 - 5, running average
    numRatings: 136,
    pairing: "Humbolt Brewing Red Nectar",
  },
  {
    id: 4,
    meal: 'breakfast',        // breakfast | lunch |dinner
    title: "Gourmet French Toast",
    description: "Three scrumptious, 3/4-inch thick slices of French Toast with \
    our exclusive blend of seasonings and extracts. Served with a cup of your \
    choice of fruits (can be combined): blueberries, raspberries, huckleberries, \
    and banana along with powdered sugar and several gourmet syrups (table side).",
    calories: 750,
    allergies: "berries (optional)",
    imgUrl: "./assets/img/menu_db/01_food-french_toast.jpg",
    price: 7.99,
    rating: 4,        // 1 - 5, running average
    numRatings: 97,
    pairing: "Memosa",
  },
  {
    id: 5,
    meal: 'breakfast',        // breakfast | lunch |dinner
    title: "The Works: Bangers and Mash",
    description: "Simple, sumptious. Three authentic London bangers, bacon, corned \
    beef hash, scrambled eggs, and toast.",
    calories: 900,
    allergies: "",
    imgUrl: "./assets/img/menu_db/01_food-grand_slam.jpg",
    price: 8.99,
    rating: 3,        // 1 - 5, running average
    numRatings: 24,
    pairing: "Deschute's Black Butte Porter",
  },
  {
    id: 6,
    meal: 'dinner',        // breakfast | lunch |dinner
    title: "Filet Mignon",
    description: "Grade A prime beef masterfully turned into a work of art by \
      our culinary artists. Need we say more: look at that photo! Served with \
      a loaded baked potato.",
    calories: 1100,
    allergies: "",
    imgUrl: "./assets/img/menu_db/03-filet_mignon.jpg",
    price: 24.99,
    rating: 5,        // 1 - 5, running average
    numRatings: 98,
    pairing: "Kona Pipeline Porter",
  },
  {
    id: 7,
    meal: 'dinner',        // breakfast | lunch |dinner
    title: "Meat Wagon Ribs",
    description: "Marinaded in our exquisite signature BBQ sauce and smoked for \
      24-hours, the meat will fall right off these ribs and melt in your mouth.",
    calories: 1500,
    allergies: "",
    imgUrl: "./assets/img/menu_db/03-ribs.jpg",
    price: 19.99,
    rating: 5,        // 1 - 5, running average
    numRatings: 580,
    pairing: "New Belgium Sunshine Wheat",
  },
  {
    id: 8,
    meal: 'lunch',        // breakfast | lunch |dinner
    title: "Succulent Shrimp Scampi",
    description: "Fresh shrimp cooked to perfection and the presentation is opulent eye candy!",
    calories: 1100,
    allergies: "",
    imgUrl: "./assets/img/menu_db/02_food-shrimp_scampi.jpg",
    price: 13.99,
    rating: 4,        // 1 - 5, running average
    numRatings: 249,
    pairing: "Widmer Hefewiezen with lemon",
  },
  {
    id: 9,
    meal: 'lunch',        // breakfast | lunch |dinner
    title: "Ironman Bacon Burger",
    description: "Simple perfection. This burger will blow your socks off.",
    calories: 900,
    allergies: "",
    imgUrl: "./assets/img/menu_db/02_food-bacon_burger.jpg",
    price: 9.99,
    rating: 5,        // 1 - 5, running average
    numRatings: 957,
    pairing: "Red Hook ESB"
  },
  {
    id: 10,
    meal: 'breakfast',        // breakfast | lunch |dinner
    title: "Arizona Sunrise",
    description: "Sausage, bacon, eggs, toast, and tomato. Simple. Delightful.",
    calories: 600,
    allergies: "",
    imgUrl: "./assets/img/menu_db/01_food-grand_slam02.jpg",
    price: 6.99,
    rating: 3,        // 1 - 5, running average
    numRatings: 1,
    pairing: "Terminal Velocity",
  },
  // { // USER_EDIT menu item template, duplicate and uncomment the COPY.
  //   id: 10,
  //   meal: ' ',        // breakfast | lunch |dinner
  //   title: " ",
  //   description: " ",
  //   calories: 0,
  //   imgUrl: "./assets/img/PATH/FILENAME",
  //   price: 0.00,
  //   rating: 3,        // 1 - 5, running average
  //   numRatings: 1,
  // },
];