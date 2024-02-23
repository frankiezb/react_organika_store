let catalog = [
  {
    title: "CoffeeMug",
    category: "Merchandise",
    price: 10.99,
    image: "coffeeMug.png",
    _id: "1",
  },

  {
    title: "BackPack",
    category: "Merchandise",
    price: 25.99,
    image: "backpack.png",
    _id: "2",
  },

  {
    title: "SweatPants",
    category: "Merchandise",
    price: 19.99,
    image: "sweatpants.png",
    _id: "3",
  },

  {
    title: "Watch",
    category: "Merchandise",
    price: 45.99,
    image: "watch.png",
    _id: "4",
  },

  {
    title: "shirt",
    category: "Merchandise",
    price: 25.99,
    image: "shirt.png",
    _id: "5",
  },

  {
    title: "cansiter",
    category: "Merchandise",
    price: 35.99,
    image: "canister.png",
    _id: "6",
  },

  {
    title: "car",
    category: "Merchandise",
    price: 145999.99,
    image: "car.png",
    _id: "7",
  },

  {
    title: "jet",
    category: "Merchandise",
    price: 245999.99,
    image: "jet.png",
    _id: "8",
  },
];

class DataService {
  getProducts() {
    return catalog;
  }
  addToCart(prod) {
    //add a product to local stroage
    // loca straige support string, json
    let cart = this.readCart();
    cart.push(prod);

    const jsonCart = JSON.stringify(cart);
    localStorage.setItem("cart", jsonCart);
  }
  readCart() {
    //reads the cart from local stroage
    const jsonCart = localStorage.getItem("cart");
    if (jsonCart) {
      return JSON.parse(jsonCart);
    } else {
      return []; //empty cart
    }
  }
}

export default DataService;
