import React from 'react';
import CategoryCard from "./CategoryCard";
import './category.css'
import type1 from '../../assets/Type=1.svg'
import type2 from '../../assets/Type=2.svg'
import type3 from '../../assets/Type=3.svg'
import type4 from '../../assets/Type=4.svg'
import type5 from '../../assets/Type=5.svg'
import type6 from '../../assets/Type=6.svg'
import upDown from '../../assets/Frame 50.svg'
import {HashLink} from "react-router-hash-link";
import {useNavigate} from "react-router-dom";

function Category() {

    return (
        <section id={'category'}>
            <div className={'container'}>
                <div className={'row px-2 px-lg-5'}>
                    <h4 className={'category-title'}>Бўлимлар</h4>
                </div>
                <div className={'row px-2 px-lg-5 row-gap-5 d-flex align-items-stretch flex-wrap'}>
                    <div className={'col-md-6 col-lg-6 col-xl-4 px-3'}>
                        <HashLink style={{textDecoration: 'none'}} to={'/#questionType1'}>
                            <CategoryCard picture={type1}>
                                1. Аҳоли бандлиги ва аҳоли <strong style={{color: '#64BFA7'}}
                                                                className={'category-small-text'}>бандлик даражасини
                            </strong> оширишга қаратилган савол - жавоблар
                            </CategoryCard>
                        </HashLink>
                    </div>
                    <div className={'col-md-6 col-lg-6 col-xl-4 px-3'}>
                        <HashLink style={{textDecoration: 'none'}} to={'/#questionType2'}>
                            <CategoryCard picture={type2}>
                                2. Аҳолининг <strong style={{color: '#60C0E1'}} className={'category-small-text'}>ижтимоий
                                ҳимоя
                            </strong> тизими ҳамда
                                мамлакатда <strong style={{color: '#60C0E1'}} className={'category-small-text'}>ижтимоий
                                қатлам
                            </strong> учун яратилган дафтарлар бўйича савол - жавоблар
                            </CategoryCard>
                        </HashLink>
                    </div>
                    <div className={'col-md-6 col-lg-6 col-xl-4 px-3'}>
                        <HashLink style={{textDecoration: 'none'}} to={'/#questionType3'}>
                            <CategoryCard picture={type3}>
                                3. Ишсиз фуқароларни<strong style={{color: '#5172B0'}}
                                                         className={'category-small-text '}> касб - ҳунарга
                            </strong> ўқитиш ҳамда
                                <strong style={{color: '#5172B0'}} className={'category-small-text '}> Миллий
                                    малака </strong>
                                тизими бўйича савол - жавоблар
                            </CategoryCard>
                        </HashLink>
                    </div>
                    <div className={'col-md-6 col-lg-6 col-xl-4 px-3'}>
                        <HashLink style={{textDecoration: 'none'}} to={'/#questionType4'}>
                            <CategoryCard picture={type4}>
                                4. Меҳнат <strong style={{color: '#F59487'}}
                                               className={'category-small-text'}>бозори,</strong> меҳнат иқтисодиёти
                                ҳамда ҳамда меҳнат
                                <strong style={{color: '#F59487'}}
                                        className={'category-small-text'}> ресурслари </strong>
                                бўйича савол - жавоблар

                            </CategoryCard>
                        </HashLink>
                    </div>
                    <div className={'col-md-6 col-lg-6 col-xl-4 px-3'}>

                        <HashLink style={{textDecoration: 'none'}} to={'/#questionType5'}>
                            <CategoryCard picture={type5}>
                                5.<strong style={{color: '#5E5CA7'}} className={'category-small-text'}> Меҳнат
                                    ҳуқуқи</strong> ва меҳнат муносабатлари
                                ҳамда <strong style={{color: '#5E5CA7'}} className={'category-small-text'}>меҳнатни
                                муҳофаза</strong> қилиш бўйича савол - жавоблар
                            </CategoryCard>
                        </HashLink>
                    </div>
                    <div className={'col-md-6 col-lg-6 col-xl-4 px-3'}>
                        <HashLink style={{textDecoration: 'none'}} to={'/#questionType6'}>
                            <CategoryCard picture={type6}>
                                6.<strong style={{color: '#388CB9'}} className={'category-small-text'}> Хавфсиз</strong>,
                                тартибли ва <strong style={{color: '#388CB9'}}
                                                    className={'category-small-text'}> қонуний меҳнат</strong>
                                миграцияси бўйича савол - жавоблар

                            </CategoryCard>
                        </HashLink>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Category;
