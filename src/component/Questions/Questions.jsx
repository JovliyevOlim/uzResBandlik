import React from 'react';
import QuestionCard from "./QuestionCard";
import type1 from '../../assets/Type=1 (1).svg'
import type2 from '../../assets/Type=2 (1).svg'
import type3 from '../../assets/Type=3 (1).svg'
import type4 from '../../assets/Type=4 (1).svg'
import type5 from '../../assets/Type=5 (1).svg'
import type6 from '../../assets/Type=6 (1).svg'
import './question.css'
import {type1Questions, type6Questions, type2Questions, type3Questions, type4Questions, type5Questions} from "./questionsList";


function Questions(props) {
    return (
        <>
            <QuestionCard questions={type1Questions} backColor={'#64BFA7'}>
                <div className={'col-md-2'}>
                    <h4 style={{color: '#64BFA7'}} className={'question-type'}>1</h4>
                </div>
                <div className={'col-md-5'}><p className={'question-text'}>
                    Аҳоли бандлиги ва аҳоли <strong style={{color: '#64BFA7'}}>бандлик даражасини
                </strong> оширишга қаратилган савол - жавоблар </p></div>
                <div className={'col-md-5 d-flex align-items-center justify-content-end'}>
                    <img className={'img-fluid'} src={type1} alt="picture"/></div>
            </QuestionCard>
            <QuestionCard questions={type2Questions} backColor={'#60C0E1'}>
                <div className={'col-md-2'}><h4 style={{color: '#60C0E1'}} className={'question-type'}>2</h4></div>
                <div className={'col-md-5'}><p className={'question-text '}>
                    Аҳолининг <strong style={{color: '#60C0E1'}}>ижтимоий ҳимоя
                </strong> тизими ҳамда
                    мамлакатда <strong style={{color: '#60C0E1'}}>ижтимоий қатлам</strong> учун яратилган дафтарлар бўйича савол - жавоблар
                </p></div>
                <div className={'col-md-4 d-flex align-items-center justify-content-end'}>
                    <img className={'img-fluid'} src={type2} alt="picture"/></div>
            </QuestionCard>
            <QuestionCard questions={type3Questions} backColor={'#5172B0'}>
                <div className={'col-md-2'}><h4 style={{color: '#5172B0'}} className={'question-type'}>3</h4></div>
                <div className={'col-md-5'}><p className={'question-text '}>
                    Ишсиз фуқароларни<strong style={{color: '#5172B0'}}> касб - ҳунарга
                </strong> ўқитиш ҳамда
                    <strong style={{color: '#5172B0'}}> Миллий малака </strong>
                    тизими бўйича савол - жавоблар
                </p></div>
                <div className={'col-md-4 d-flex align-items-center justify-content-end'}>
                    <img className={'img-fluid'} src={type3} alt="picture"/></div>
            </QuestionCard>
            <QuestionCard questions={type4Questions} backColor={'#F59487'}>
                <div className={'col-md-2'}><h4 style={{color: '#F59487'}} className={'question-type'}>4</h4></div>
                <div className={'col-md-5'}><p className={'question-text '}>
                    Меҳнат <strong style={{color: '#F59487'}} className={'category-small-text'}>бозори,</strong> меҳнат иқтисодиёти ҳамда ҳамда
                    меҳнат
                    <strong style={{color: '#F59487'}} className={'category-small-text'}> ресурслари </strong>
                    бўйича  савол - жавоблар

                </p></div>
                <div className={'col-md-4 d-flex align-items-center justify-content-end'}>
                    <img className={'img-fluid'} src={type4} alt="picture"/></div>
            </QuestionCard>
            <QuestionCard questions={type5Questions} backColor={'#5E5CA7'}>
                <div className={'col-md-2'}><h4 style={{color: '#5E5CA7'}} className={'question-type'}>5</h4></div>
                <div className={'col-md-5'}><p className={'question-text '}>
                    <strong style={{color: '#5E5CA7'}} className={'category-small-text'}>Меҳнат ҳуқуқи</strong> ва меҳнат муносабатлари
                    ҳамда <strong style={{color: '#5E5CA7'}} className={'category-small-text'}>меҳнатни муҳофаза</strong> қилиш бўйича савол - жавоблар


                </p></div>
                <div className={'col-md-4 d-flex align-items-center justify-content-end'}>
                    <img className={'img-fluid'} src={type5} alt="picture"/></div>
            </QuestionCard>
            <QuestionCard questions={type6Questions} backColor={'#388CB9'}>
                <div className={'col-md-2'}><h4 style={{color: '#388CB9'}} className={'question-type'}>6</h4></div>
                <div className={'col-md-5'}><p className={'question-text '}>
                    <strong style={{color: '#388CB9'}} className={'category-small-text'}> Хавфсиз</strong>,
                    тартибли ва  <strong style={{color: '#388CB9'}} className={'category-small-text'}> қонуний меҳнат</strong>
                    миграцияси бўйича савол - жавоблар
                </p></div>
                <div className={'col-md-4 d-flex align-items-center justify-content-end'}>
                    <img className={'img-fluid'} src={type6} alt="picture"/></div>
            </QuestionCard>
        </>
    );
}

export default Questions;
