import Products from '../data/products';
function ProductCard({ product }) {
    return (
        <div className="product-card">
            <img 
                src={product.image}
                alt={product.name}
            />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p> 
            <p>Category: {product.category}</p>
            <p>Rating: {product.rating}</p>
            <button className="btn primary">view details</button>
        </div>
    );
};
function ProductList() {
    return (
        <div className="product-list">
            {
                Products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))
            }
        </div>
    );
};

export default ProductList;
