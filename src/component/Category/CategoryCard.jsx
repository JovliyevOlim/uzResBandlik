import React from 'react';
import './category.css'
import arrowDownLong from '../../assets/ArrowDownLong.svg'
function CategoryCard({children,picture}) {
    return (
        <div className='category-card'>
            <div className={'category-card-img'}>
                <img  src={picture} alt={picture}/>
            </div>
            <div className={'d-flex align-items-top justify-content-between px-4 mb-4'}>
            <p className={'category-card-text'}>{children}</p>
                <img src={arrowDownLong} alt="arrowDownLong"/>
            </div>
        </div>
    );
}

export default CategoryCard;