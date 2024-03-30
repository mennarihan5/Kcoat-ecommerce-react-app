export const productDetails = (imageSrc, price, description, icon) => {
  // create with placeholders for key, imageSrc, price, description, and icon props
    return (
        <div>
        <div className="product-card">
            <img src={imageSrc} alt="product" />
            <p>{price}</p>
            <p>{description}</p>
            <div className="icon">{icon}</div>
        </div>
        </div>
    );
}

export default productDetails;