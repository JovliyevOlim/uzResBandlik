import React from 'react';
import './searchCard.css'
import {HashLink} from "react-router-hash-link";

function SearchCard({questions, maxHeight}) {
    return (
        <div style={{maxHeight: maxHeight}} className={'search-card'}>
            {
                questions?.length > 0 ?
                    questions?.map(item =>
                        <div>
                            <div className={'d-flex gap-2 mb-2'}>
                                <HashLink style={{textDecoration:'none'}} to={`/#question${item.id}`}>
                                    <div style={{background: item.color}}
                                         className={'search-card-number'}>{item.id}</div>
                                </HashLink>
                                <div className={'search-card-typeName'}>Бўлим: {item.section}</div>
                            </div>
                            <div>
                                <p className={'search-card-question'}>{item.title}</p>
                            </div>
                        </div>
                    )
                    : <p className={'search-card-question'}>Маълумот йўқ</p>
            }

        </div>
    );
}

export default SearchCard;