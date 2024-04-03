let cartItems = [];
let total = 0;

function addToCart(productName, price) {
  cartItems.push({ productName, price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById('cart-items');
  cartList.innerHTML = '';
  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.productName} - Prezzo: $${item.price}`;
    cartList.appendChild(li);
  });
  document.getElementById('total').textContent = `Totale: $${total}`;
}

function checkout() {
  alert(`Hai acquistato ${cartItems.length} prodotti con un totale di $${total}. Grazie per il tuo acquisto!`);
  cartItems = [];
  total = 0;
  updateCart();
}
