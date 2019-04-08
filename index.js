var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let price = Math.floor((Math.random() * 100));
  cart.push({itemName: item, itemPrice: price})
  return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  } else {
    let cartString = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}`;
    if (cart.length === 1) {
      cartString = cartString + '.';
    } else {
      for (let i = 1; i < cart.length - 1; i++) {
        cartString = cartString + `, ${cart[i].itemName} at $${cart[i].itemPrice}`;
      }
      cartString = cartString + `, and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`;
    }
    
    return cartString;
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
