import React from 'react';
import {Link} from 'react-router-dom'
import './authorPage.css'
import ArrowRight from "../../assets/ArrowRightBlack.svg";
import Navbar from "../Navbar/Navbar";

function AuthorPage(props) {
    return (
        <>
            <div style={{padding: '1.25rem'}}>
                <Navbar/>
            </div>
            <div className={'authorPage'}>
                <div className="container">
                    <div className="row px-5 my-5 d-flex align-items-center">
                        <div className="col-md-4 px-4">
                            <div className={'authorPage-body'}>
                                <div className="authorPage-text">
                                    <p>
                                        {'           '} Изложенные в настоящей публикации взгляды и выводы выражают только
                                        точку зрения авторов и не являются официальной точкой зрения ООН, включая ПРООН или
                                        стран членов ООН.
                                    </p>
                                    <p>
                                        Программа развития Организации Объединенных Наций (ПРООН) является ведущей
                                        организацией ООН, борющейся c несправедливостью, вызванной нищетой, c неравенством и
                                        изменением климата.

                                    </p>
                                    <p>
                                        Работая с широкой сетью экспертов и партнеров в 170 странах, мы помогаем создавать
                                        интегрированные, долгосрочные решения для людей и планеты.

                                    </p>
                                    <p>
                                        Узнайте o нас больше на сайте undp.org/ uzbekistan или следите за @UNDPUzbekistan в
                                        социальных сетях.

                                    </p>
                                </div>
                                <Link target={'_blank'} className={'authorLink'} to={'https://www.undp.org/uzbekistan'}>©
                                    ПРООН, 2023 (undp.org/uzbekistan)</Link>
                            </div>
                        </div>
                        <div className="col-md-4 px-4">
                            <div className={'authorPage-body'}>
                                <div className="authorPage-text">
                                    <p>
                                        Ушбу нашрда келтирилган фикр ва ҳулосалар муаллифнинг ўз нуқтаи назари бўлиб, БМТ,
                                        шунингдек БМТТД ва БМТ га аъзо давлатларнинг расмий нуқтаи назари ҳисобланмайди.
                                    </p>
                                    <p>
                                        Бирлашган Миллатлар Ташкилотининг Тараққиёт Дастури (БМТТД) камбағаллик, тенгсизлик
                                        ва иқлим ўзгариши сабабли пайдо бўлган адолатсизликка қарши курашда БМТнинг етакчи
                                        ташкилотидир.

                                    </p>
                                    <p>
                                        170 та мамлакатдаги кенг экспертлар ва ҳамкорлар тармоғи билан фаолият олиб бориб,
                                        биз одамлар ва сайёра учун мувофиқлаштирилган, узоқ муддатли ечимларни яратишга
                                        ёрдам берамиз.

                                    </p>
                                    <p>
                                        Биз ҳақимизда кўпроқ маълумотни
                                        undp.org/uzbekistan сайтидан олинг ёки @UNDPUzbekistan ни ижтимоий тармоқларда
                                        кузатиб боринг. </p>
                                </div>
                                <Link target={'_blank'} className={'authorLink'} to={'https://www.undp.org/uzbekistan'}>©
                                    БМТТД, 2023 (undp.org/uzbekistan)</Link>
                            </div>
                        </div>
                        <div className="col-md-4 px-4">
                            <div className={'authorPage-body'}>
                                <div className="authorPage-text">
                                    <p>
                                        The views expressed in this publication are those of the author(s) and do not
                                        necessarily represent those of UNDP.
                                    </p>
                                    <p>
                                        UNDP is the leading United Nations organization fighting to end the injustice of
                                        poverty, inequality, and climate change.
                                    </p>
                                    <p>
                                        Working with our broad network of experts and partners in 170 countries, we help
                                        nations to build integrated, lasting solutions for people and planet.
                                    </p>
                                    <p>
                                        Learn more at undp.org/uzbekistan or follow @UNDPUzbekistan on social
                                        media. </p>
                                </div>
                                <Link target={'_blank'} className={'authorLink'} to={'https://www.undp.org/uzbekistan'}>©
                                    UNDP, 2023 (undp.org/uzbekistan)</Link>
                            </div>
                        </div>
                    </div>
                    <div className="row p-5 pb-5 mb-5">
                        <Link to={'/#home'} className={'authorPageLink'}>
                            <img src={ArrowRight} alt=""/>
                            <p style={{color: '#111111'}}>Ortga qaytish</p>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    );
}

export default AuthorPage;