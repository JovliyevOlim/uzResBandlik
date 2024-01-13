import React from 'react';
import CategoryCard from "./CategoryCard";
import {Col, Container, Row} from "reactstrap";
import './category.css'
import type1 from '../../assets/Type=1.svg'
import type2 from '../../assets/Type=2.svg'
import type3 from '../../assets/Type=3.svg'
import type4 from '../../assets/Type=4.svg'
import type5 from '../../assets/Type=5.svg'
import type6 from '../../assets/Type=6.svg'

function Category() {
    return (
        <section id={'category'}>
            <div className={'container'}>
                <div  className={'row px-5'}>
                    <h4 className={'category-title'}>Bo’limlar</h4>
                </div>
                <div className={'row px-5 row-gap-5 d-flex align-items-stretch flex-wrap'}>
                    <div className={'col-md-6 col-lg-6 col-xl-4 px-3'}><CategoryCard picture={type1}>
                        Aholi bandligi va aholi <strong style={{color: '#64BFA7'}} className={'category-small-text'}>bandlik
                        darajasini</strong> oshirishga qaratilgan savol - javoblar
                    </CategoryCard></div>
                    <div className={'col-md-6 col-lg-6 col-xl-4 px-3'}><CategoryCard picture={type2}>
                        Aholining <strong style={{color: '#60C0E1'}} className={'category-small-text'}>ijtimoiy
                        himoya </strong> tizimi hamda
                        mamlakatda <strong style={{color: '#60C0E1'}} className={'category-small-text'}>ijtimoiy
                        qatlam</strong> uchun yaratilgan daftarlar bo’yicha savol - javoblar
                    </CategoryCard></div>
                    <div className={'col-md-6 col-lg-6 col-xl-4 px-3'}><CategoryCard picture={type3}>
                        Ishsiz fuqarolarni<strong style={{color: '#5172B0'}} className={'category-small-text '}> kasb -
                        hunarga</strong> o’qitish hamda
                        <strong style={{color: '#5172B0'}} className={'category-small-text '}> Milliy malaka </strong>
                        tizimi bo’yicha
                        savol - javoblar
                    </CategoryCard></div>
                    <div className={'col-md-6 col-lg-6 col-xl-4 px-3'}><CategoryCard picture={type4}>
                        Mehnat <strong style={{color: '#F59487'}} className={'category-small-text'}>bozori,</strong> mehnat iqtisodiyoti hamda hamda mehnat
                        <strong style={{color: '#F59487'}} className={'category-small-text'}> resurslari </strong>
                        bo’yicha  savol - javoblar

                    </CategoryCard></div>
                    <div className={'col-md-6 col-lg-6 col-xl-4 px-3'}><CategoryCard picture={type5}>
                        <strong  style={{color:'#5E5CA7'}} className={'category-small-text'}>Mehnat huquqi</strong> va mehnat munosabatlari
                        hamda <strong style={{color:'#5E5CA7'}}  className={'category-small-text'}>mehnatni muhofaza</strong> qilish bo’yicha savol
                        - javoblar

                    </CategoryCard></div>
                    <div className={'col-md-6 col-lg-6 col-xl-4 px-3'}><CategoryCard picture={type6}>
                        <strong style={{color:'#388CB9'}} className={'category-small-text'}> Xavfsiz</strong>,
                        tartibli va <strong style={{color:'#388CB9'}} className={'category-small-text'}> qonuniy mehnat</strong>
                        migratsiyasi bo’yicha savol - javoblar

                    </CategoryCard></div>
                </div>
            </div>
        </section>
    );
}

export default Category;