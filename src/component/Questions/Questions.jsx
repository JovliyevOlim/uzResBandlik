import React from 'react';
import QuestionCard from "./QuestionCard";
import type1 from '../../assets/Type=1 (1).svg'
import type2 from '../../assets/Type=2 (1).svg'
import type3 from '../../assets/Type=3 (1).svg'
import type4 from '../../assets/Type=4 (1).svg'
import type5 from '../../assets/Type=5 (1).svg'
import type6 from '../../assets/Type=6 (1).svg'
import './question.css'



function Questions(props) {
    return (
        <>
            <QuestionCard backColor={'linear-gradient(90deg, #F6D365 0%, #FDA085 100%)'}>
                <div className={'col-md-2'}><h4 className={'question-type question-text-color1'}>1</h4></div>
                <div className={'col-md-5'}><p className={'question-text '}>
                    Aholi bandligi va aholi <strong className={'question-text-color1'}>bandlik
                    darajasini</strong> oshirishga qaratilgan savol - javoblar </p></div>
                <div className={'col-md-5 d-flex align-items-center justify-content-end'}>
                    <img className={'img-fluid'} src={type1} alt="picture"/></div>
            </QuestionCard>
            <QuestionCard backColor={'#B1DAFB'}>
                <div className={'col-md-3'}><h4 style={{color: '#B1DAFB'}} className={'question-type'}>2</h4></div>
                <div className={'col-md-5'}><p className={'question-text '}>
                    Aholining <strong style={{color: '#B1DAFB'}}>ijtimoiy
                    himoya </strong> tizimi hamda
                    mamlakatda <strong style={{color: '#B1DAFB'}}>ijtimoiy
                    qatlam</strong> uchun yaratilgan daftarlar bo’yicha savol - javoblar
                </p></div>
                <div className={'col-md-4 d-flex align-items-center justify-content-end'}>
                    <img className={'img-fluid'} src={type2} alt="picture"/></div>
            </QuestionCard>
            <QuestionCard backColor={'#6B81F5'}>
                <div className={'col-md-3'}><h4 style={{color: '#6B81F5'}} className={'question-type'}>3</h4></div>
                <div className={'col-md-4'}><p className={'question-text '}>
                    Ishsiz fuqarolarni<strong style={{color: '#6B81F5'}}> kasb -
                    hunarga</strong> o’qitish hamda
                    <strong style={{color: '#6B81F5'}}> Milliy malaka </strong>
                    tizimi bo’yicha
                    savol - javoblar
                </p></div>
                <div className={'col-md-5 d-flex align-items-center justify-content-end'}>
                    <img className={'img-fluid'} src={type3} alt="picture"/></div>
            </QuestionCard>
            <QuestionCard backColor={'#FF725E'}>
                <div className={'col-md-3'}><h4 style={{color: '#FF725E'}} className={'question-type'}>4</h4></div>
                <div className={'col-md-5'}><p className={'question-text '}>
                    Mehnat <strong style={{color: '#FF725E'}} className={'category-small-text'}>bozori,</strong> mehnat
                    iqtisodiyoti hamda hamda mehnat
                    <strong style={{color: '#FF725E'}} className={'category-small-text'}> resurslari </strong>
                    bo’yicha savol - javoblar

                </p></div>
                <div className={'col-md-4 d-flex align-items-center justify-content-end'}>
                    <img className={'img-fluid'} src={type4} alt="picture"/></div>
            </QuestionCard>
            <QuestionCard backColor={'#42C65F'}>
                <div className={'col-md-3'}><h4 style={{color: '#42C65F'}} className={'question-type'}>5</h4></div>
                <div className={'col-md-5'}><p className={'question-text '}>
                    <strong style={{color: '#42C65F'}} className={'category-small-text'}>Mehnat huquqi</strong> va
                    mehnat munosabatlari
                    hamda <strong style={{color: '#42C65F'}} className={'category-small-text'}>mehnatni
                    muhofaza</strong> qilish bo’yicha savol
                    - javoblar


                </p></div>
                <div className={'col-md-4 d-flex align-items-center justify-content-end'}>
                    <img className={'img-fluid'} src={type5} alt="picture"/></div>
            </QuestionCard>
            <QuestionCard backColor={'#FFC100'}>
                <div className={'col-md-3'}><h4 style={{color: '#FFC100'}} className={'question-type'}>6</h4></div>
                <div className={'col-md-5'}><p className={'question-text '}>
                    <strong style={{color:'#FFC100'}} className={'category-small-text'}> Xavfsiz</strong>,
                    tartibli va <strong style={{color:'#FFC100'}} className={'category-small-text'}> qonuniy mehnat </strong>
                    migratsiyasi bo’yicha savol - javoblar
                </p></div>
                <div className={'col-md-4 d-flex align-items-center justify-content-end'}>
                    <img className={'img-fluid'} src={type6} alt="picture"/></div>
            </QuestionCard>
        </>
    );
}

export default Questions;