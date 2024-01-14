import React from 'react';
import './question.css'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'



function QuestionCard({children,backColor,questions}) {
    return (
        <>
            <div className="container">
                <div style={{margin:'10rem 0 6.25rem 0'}} className="row px-5 d-flex align-items-center justify-content-between">
                    {children}
                </div>
            </div>
            <div style={{background:backColor}} className="questions-body">
                <div style={{width: '80%'}} className={'container'}>
                    <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 768: 2, 992: 2}}>
                        <Masonry  gutter={'1.25rem'}>
                            {
                                questions?.map(item =>
                                    <div className={'questions-body-card'}>
                                        <div className={'d-flex justify-content-start align-items-center mb-3 gap-4'}>
                                            <div style={{background:backColor}}
                                                className={'question-number'}>{item.id >= 10 ? item.id : `0${item.id}`}</div>
                                            <div className={'question-text-btn'}>Savol:</div>
                                        </div>
                                        <p className={'question-title'}>
                                            {item.title}
                                        </p>
                                        <div className={'mb-2'}>
                                            <div className={'question-text-btn'}>Javob:</div>
                                        </div>
                                        <p className={'questions-body-text'}>
                                            {item.body}
                                        </p>
                                        <ul className={'questions-body-text'}>
                                            {
                                                item?.bodyArray?.length > 0 &&
                                                item.bodyArray.map(val =>
                                                    <li>
                                                        {val}
                                                    </li>
                                                )
                                            }
                                        </ul>
                                    </div>
                                )
                            }
                        </Masonry>
                    </ResponsiveMasonry>
                </div>
            </div>
        </>
    );
}

export default QuestionCard;
