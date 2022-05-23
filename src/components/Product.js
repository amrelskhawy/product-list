import React from "react";

const Product = (props) => {
    function checkStatus(e) {
        const tar = e.currentTarget.parentElement;
        const ta = e.currentTarget;
        tar.classList.toggle("checked");
        ta.classList.toggle("checked");
        // 
    }

    return (
        <div className="product">
            <input
                className="delete-checkbox"
                type="checkbox"
                data-sku={props.sku}
                data-type={props.type}
                onClick={checkStatus}
            />
            <h5>{props.sku}</h5>
            <h5>{props.name}</h5>
            <h5>{props.price}.00 $</h5>
            
            {props.type === 'dvd' && <h6>Size: {props.size}MB</h6>}
            {props.type === 'book' && <h6>Weight: {props.weight}kg</h6>}
            {props.type === 'furniture' && <h6>Dimensions:{props.height}×{props.width}×{props.length}</h6>}

        </div>
    );
};

export default Product;
