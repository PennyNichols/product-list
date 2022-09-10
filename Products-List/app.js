const products = [
	{
		id: 1,
		title: "iPhone 9",
		description: "An apple mobile which is nothing like apple",
		price: 549,
		thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
	},
];

const sectionCenter = document.querySelector(".section-center");
const productList = products.map((product) => {
    return `
        <article class="product-item">
            <img src="https://dummyjson.com/image/i/products/1/thumbnail.jpg" alt="iPhone 9" class="photo">
            <div class="item-info">
            <header>
                <h4>iPhone 9</h4>
            </header>
            <p class="item-text">An apple mobile which is nothing like apple</p>
            <h4 class="price">$549</h4>
            </div>
        </article>
    ` ;
});





sectionCenter.innerHTML = productList;