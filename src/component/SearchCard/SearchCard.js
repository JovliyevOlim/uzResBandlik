import React from 'react';
import './searchCard.css'
function SearchCard({questions,maxHeight}) {
    return (
        <div style={{maxHeight:maxHeight}} className={'search-card'}>
            {
                questions?.length > 0 ?
                questions?.map(item=>
                    <div>
                        <div className={'d-flex gap-2 mb-2'}>
                            <div style={{background:item.color}} className={'search-card-number'}>{item.id}</div>
                            <div className={'search-card-typeName'}>Bo'lim:{item.section}</div>
                        </div>
                        <div>
                            <p className={'search-card-question'}>{item.title}</p>
                        </div>
                    </div>
                )
                    : <p className={'search-card-question'}>Ma'lumot yo'q</p>
            }

        </div>
    );
}

export default SearchCard;