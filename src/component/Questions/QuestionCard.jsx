import React from 'react';
import './question.css'
function QuestionCard({children}) {
    return (
        <>
            <div className="container">
                <div className="row px-4 d-flex align-items-center justify-content-between">
                    {children}
                </div>
            </div>
        </>
    );
}

export default QuestionCard;