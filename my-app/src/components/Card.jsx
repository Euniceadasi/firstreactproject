import React from "react";

const Card = ({detail}) => {
    return (  
        <div className="container">
            {
                detail.map(detail => (
                    <div className="card">
                            <h3 className="card__title">{detail.name}</h3>
                            <span className="price">{detail.price}</span>
                            <p className="description">
                            {detail.description}
                            </p>
                        
                    </div>
                ))
            }
        </div>
    );
}
 
export default Card ;

