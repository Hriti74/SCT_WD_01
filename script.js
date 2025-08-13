let cart = [];
let totalPrice = 0;

function addToCart(itemName, price) {
  cart.push({ name: itemName, price: price });
  totalPrice += price;
  updateCart();
}

function updateCart() {
  const cartItemsList = document.getElementById("cart-items");
  cartItemsList.innerHTML = "";

  cart.forEach((item) => {
    let li = document.createElement("li");
    li.innerHTML = `
      <span class="cart-item-name">${item.name}</span>
      <span class="cart-item-price">₹${item.price}</span>
    `;
    cartItemsList.appendChild(li);
  });

  document.getElementById("total-price").textContent = `Total: ₹${totalPrice}`;
  document.getElementById("cart-count").textContent = cart.length;
}

document.getElementById("checkout-btn").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert("Thank you for your order!");
  cart = [];
  totalPrice = 0;
  updateCart();
});
