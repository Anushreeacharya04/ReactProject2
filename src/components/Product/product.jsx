import React, { useState } from 'react';
import styles from './product.module.css';

const Product = (props) => {
    
    const [isOrdered, setIsOrdered] = useState(false);

    const title = props.title;
    const productClickHandler = () => {
        console.log('Product card clicked');
    };

    const handleOrderClick = (event) => {
        event.stopPropagation();
        console.log(`Order button for "${title}" clicked!`);
        setIsOrdered(true);
    };
    return(
        <figure onClick={productClickHandler} className={styles['product-card']}>
            <img src={props.image} alt={props.title} className={styles['product-image']}></img>
            <figcaption className={styles['product-details']}>
                <h2>{title}</h2>
                <h3 className={styles.price}>${props.price}</h3>
                <p className={styles.description}>{props.description}</p>
                {/* <button className={styles['order-button']}>Order Now</button> */}
                <button
                    className={`${styles['order-button']} ${isOrdered ? styles['ordered'] : ''}`} 
                    onClick={handleOrderClick}
                    disabled={isOrdered} 
                >
                    {isOrdered ? 'Ordered!' : 'Order Now'}
                </button>
            </figcaption>
        </figure>
    )
}
export default Product;