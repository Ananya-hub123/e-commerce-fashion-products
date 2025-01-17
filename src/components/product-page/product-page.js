import { useLocation } from "react-router-dom";

const ProductPage = () => {
    const location = useLocation();
    const { image, title, sub_title, price, id } = location.state || {};

    return (
        <div className="product-page">
            {image && title && sub_title && price && id ? (
                <div>
                    <h1>Product ID: {id}</h1>
                    <div>
                        <img src={image} alt={title} style={{ width: "100%", maxWidth: "400px" }} />
                        <h2>{title}</h2>
                        <h3>{sub_title}</h3>
                        <p>{`Price: $${price}`}</p>
                    </div>
                </div>
            ) : (
                <p>Product not found</p>
            )}
        </div>
    );
};

export default ProductPage;