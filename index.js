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
  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].itemPrice;
  }
  return totalPrice;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i,1);
      return cart;
    }
  }
  return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return 'Sorry, we don\'t have a credit card on file for you.';
  } else {
    let totalCost = total();
    cart = [];
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`;
  }
}
