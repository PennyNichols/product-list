import { products } from './products.js';
const sectionCenter = document.querySelector('.section-center');
const buttonContainer = document.querySelector('.btn-container');
const productList = products.map(
  (product) => `
    <article class="product-item">
      <img
        src="${product.thumbnail}"
        alt="${product.title}"
        class="photo"
      />
      <div class="item-info">
        <header>
          <h4>${product.title}</h4>
        </header>
        <p class="item-text">${product.description}</p>
        <h4 class="price">$${product.price}</h4>
      </div>
    </article>
  `
);
sectionCenter.innerHTML = productList.join('');
const categories = products.reduce(
  (acc, product) => {
    if (!acc.includes(product.category)) {
      acc.push(product.category);
    }
    return acc;
  },
  ['All']
);
const categoryButtons = categories.map(
  (category) =>
    `<button type="button" class="filter-btn" data-id="${category}">${category}</button>`
);
buttonContainer.innerHTML = categoryButtons.join('');

const filterButtons = document.querySelectorAll('.filter-btn');




