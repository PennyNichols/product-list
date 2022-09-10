const products = [
	{
		id: 1,
		title: "iPhone 9",
		description: "An apple mobile which is nothing like apple",
		price: 549,
		thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
	},
    {
        id: 2,
        title: 'iPhone X',
        description:
          'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
        price: 899,
        discountPercentage: 17.94,
        rating: 4.44,
        stock: 34,
        brand: 'Apple',
        category: 'smartphones',
        thumbnail: 'https://dummyjson.com/image/i/products/2/thumbnail.jpg',
        images: [
          'https://dummyjson.com/image/i/products/2/1.jpg',
          'https://dummyjson.com/image/i/products/2/2.jpg',
          'https://dummyjson.com/image/i/products/2/3.jpg',
          'https://dummyjson.com/image/i/products/2/thumbnail.jpg',
        ],
      },
];

const sectionCenter = document.querySelector(".section-center");
const productList = products.map((product) => `
        <article class="product-item">
            <img src="${product.thumbnail}" alt="${product.title}" class="photo">
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




// removes comma from array
sectionCenter.innerHTML = productList.join('');