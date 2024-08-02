let totalAmount = 0

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const productList = document.querySelector('.product-list');

searchButton.addEventListener('click', liveSearch);

searchInput.addEventListener('input', liveSearch);

// Function to live search products
function liveSearch() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const products = productList.children;

  if (searchTerm === '') {
    Array.from(products).forEach((product) => {
      product.style.display = 'block';
    });
  } else {
    // Hide all products
    Array.from(products).forEach((product) => {
      product.style.display = 'none';
    });
  }
  // Show products that match the search term
  Array.from(products).forEach((product) => {
    const productName = product.querySelector('h4').textContent.toLowerCase();
    if (productName.includes(searchTerm)) {
      product.style.display = 'block';
    }
  });
}

const productCards = document.querySelectorAll('.product-card');
let q = 1;
let no = 0;
let array=[]
let final

productCards.forEach((card) => {
  const addButton = card.querySelector('button');

  const add_quantity = card.querySelector('.add');
  const minus_quantity = card.querySelector('.minus');
  let quant = card.querySelector('.quant')
 

  
  const priceElement  = card.querySelector('.price');

 
  let q = 1; // initialize quantity to 1
  let productPrice = 0; // initialize product price to 0

  if (priceElement) {
    productPrice = parseFloat(priceElement.textContent.replace(/[₹,]/g, ''));
  }

  console.log(productPrice);
  
   const  updateTotalAmount = () => {
    totalAmount +=  productPrice * q;
  };

  add_quantity.addEventListener('click', () => {
    q++;
    quant.innerHTML = q;
    updateTotalAmount();

  });

  minus_quantity.addEventListener('click', () => {
    q--;
    quant.innerHTML = q;
    updateTotalAmount();
  });

  addButton.addEventListener('click', () => {
    no = no + q;
    let number = document.getElementById('absolute');
    number.classList.add('absolutes');
    number.innerHTML = q;
    totalAmount += productPrice * q;
    updateTotal(totalAmount)
  });

  function updateTotal(final){
    const tooltip = document.getElementById('tooltip');
    tooltip.textContent = `Total Amount: ₹${totalAmount.toFixed(2)}`;
  }

});


//  const priceElement = card.querySelector('.price').textContent;
//  const priceValue = parseFloat(priceElement.textContent.replace('₹', ''));
//  totalAmount += priceValue * q;
// const totalAmountElement = document.getElementById('tooltip');
// totalAmountElement.textContent = `Total Amount: ₹${totalAmount.toFixed(2)}`;