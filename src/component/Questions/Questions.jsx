import React from 'react';
import QuestionCard from "./QuestionCard";
import type1 from '../../assets/Type=1 (1).svg'
import type2 from '../../assets/Type=2 (1).svg'
import type3 from '../../assets/Type=3 (1).svg'
import type4 from '../../assets/Type=4 (1).svg'
import type5 from '../../assets/Type=5 (1).svg'
import type6 from '../../assets/Type=6 (1).svg'
import './question.css'
import {type1Questions, type6Questions} from "./questionsList";


function Questions(props) {
    return (
        <>
            <QuestionCard questions={type1Questions} backColor={'#64BFA7'}>
                <div className={'col-md-2'}>
                    <h4 style={{color: '#64BFA7'}} className={'question-type'}>1</h4>
                </div>
                <div className={'col-md-5'}><p className={'question-text'}>
                    Aholi bandligi va aholi <strong style={{color: '#64BFA7'}}>bandlik
                    darajasini</strong> oshirishga qaratilgan savol - javoblar </p></div>
                <div className={'col-md-5 d-flex align-items-center justify-content-end'}>
                    <img className={'img-fluid'} src={type1} alt="picture"/></div>
            </QuestionCard>
            <QuestionCard backColor={'#60C0E1'}>
                <div className={'col-md-2'}><h4 style={{color: '#60C0E1'}} className={'question-type'}>2</h4></div>
                <div className={'col-md-5'}><p className={'question-text '}>
                    Aholining <strong style={{color: '#60C0E1'}}>ijtimoiy
                    himoya </strong> tizimi hamda
                    mamlakatda <strong style={{color: '#60C0E1'}}>ijtimoiy
                    qatlam</strong> uchun yaratilgan daftarlar bo’yicha savol - javoblar
                </p></div>
                <div className={'col-md-4 d-flex align-items-center justify-content-end'}>
                    <img className={'img-fluid'} src={type2} alt="picture"/></div>
            </QuestionCard>
            <QuestionCard backColor={'#5172B0'}>
                <div className={'col-md-2'}><h4 style={{color: '#5172B0'}} className={'question-type'}>3</h4></div>
                <div className={'col-md-5'}><p className={'question-text '}>
                    Ishsiz fuqarolarni<strong style={{color: '#5172B0'}}> kasb -
                    hunarga</strong> o’qitish hamda
                    <strong style={{color: '#5172B0'}}> Milliy malaka </strong>
                    tizimi bo’yicha
                    savol - javoblar
                </p></div>
                <div className={'col-md-4 d-flex align-items-center justify-content-end'}>
                    <img className={'img-fluid'} src={type3} alt="picture"/></div>
            </QuestionCard>
            <QuestionCard backColor={'#F59487'}>
                <div className={'col-md-2'}><h4 style={{color: '#F59487'}} className={'question-type'}>4</h4></div>
                <div className={'col-md-5'}><p className={'question-text '}>
                    Mehnat <strong style={{color: '#F59487'}} className={'category-small-text'}>bozori,</strong> mehnat
                    iqtisodiyoti hamda hamda mehnat
                    <strong style={{color: '#F59487'}} className={'category-small-text'}> resurslari </strong>
                    bo’yicha savol - javoblar

                </p></div>
                <div className={'col-md-4 d-flex align-items-center justify-content-end'}>
                    <img className={'img-fluid'} src={type4} alt="picture"/></div>
            </QuestionCard>
            <QuestionCard backColor={'#5E5CA7'}>
                <div className={'col-md-2'}><h4 style={{color: '#5E5CA7'}} className={'question-type'}>5</h4></div>
                <div className={'col-md-5'}><p className={'question-text '}>
                    <strong style={{color: '#5E5CA7'}} className={'category-small-text'}>Mehnat huquqi</strong> va
                    mehnat munosabatlari
                    hamda <strong style={{color: '#5E5CA7'}} className={'category-small-text'}>mehnatni
                    muhofaza</strong> qilish bo’yicha savol
                    - javoblar


                </p></div>
                <div className={'col-md-4 d-flex align-items-center justify-content-end'}>
                    <img className={'img-fluid'} src={type5} alt="picture"/></div>
            </QuestionCard>
            <QuestionCard questions={type6Questions} backColor={'#388CB9'}>
                <div className={'col-md-2'}><h4 style={{color: '#388CB9'}} className={'question-type'}>6</h4></div>
                <div className={'col-md-5'}><p className={'question-text '}>
                    <strong style={{color: '#388CB9'}} className={'category-small-text'}> Xavfsiz</strong>,
                    tartibli va <strong style={{color: '#388CB9'}} className={'category-small-text'}> qonuniy
                    mehnat </strong>
                    migratsiyasi bo’yicha savol - javoblar
                </p></div>
                <div className={'col-md-4 d-flex align-items-center justify-content-end'}>
                    <img className={'img-fluid'} src={type6} alt="picture"/></div>
            </QuestionCard>
        </>
    );
}

export default Questions;