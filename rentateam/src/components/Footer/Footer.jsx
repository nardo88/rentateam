import React from 'react';
import apple from '../../assets/img/footer/app_store.png';
import google from '../../assets/img/footer/google_play.png'
import logo from '../../assets/img/footer/logo.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__logo"><img src={logo} alt="logo" /></div>
                    <div className="footer__top">
                        <ul className="footer__list">
                            <li className="footer__item footer-item">
                                <h3 className="footer-item__title">Раздел 1</h3>
                                <ul className="footer-item__list">
                                    <li className="footer-item__item">
                                        <a href="#!" className="footer-item__link">Подраздел </a>
                                    </li>
                                    <li className="footer-item__item">
                                        <a href="#!" className="footer-item__link">Подраздел </a>
                                    </li>
                                    <li className="footer-item__item">
                                        <a href="#!" className="footer-item__link">Подраздел </a>
                                    </li>
                                    <li className="footer-item__item">
                                        <a href="#!" className="footer-item__link">Подраздел </a>
                                    </li>
                                    <li className="footer-item__item">
                                        <a href="#!" className="footer-item__link">Подраздел </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="footer__item footer-item">
                                <h3 className="footer-item__title">Раздел 1</h3>
                                <ul className="footer-item__list">
                                    <li className="footer-item__item">
                                        <a href="#!" className="footer-item__link">Подраздел </a>
                                    </li>
                                    <li className="footer-item__item">
                                        <a href="#!" className="footer-item__link">Подраздел </a>
                                    </li>
                                    <li className="footer-item__item">
                                        <a href="#!" className="footer-item__link">Подраздел </a>
                                    </li>
                                    <li className="footer-item__item">
                                        <a href="#!" className="footer-item__link">Подраздел </a>
                                    </li>
                                    <li className="footer-item__item">
                                        <a href="#!" className="footer-item__link">Подраздел </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="footer__item footer-item">
                                <div className="footer-item__logo"></div>
                            </li>
                            <li className="footer__item footer-item">
                                <h3 className="footer-item__title">Раздел 1</h3>
                                <ul className="footer-item__list">
                                    <li className="footer-item__item">
                                        <a href="#!" className="footer-item__link">Подраздел </a>
                                    </li>
                                    <li className="footer-item__item">
                                        <a href="#!" className="footer-item__link">Подраздел </a>
                                    </li>
                                    <li className="footer-item__item">
                                        <a href="#!" className="footer-item__link">Подраздел </a>
                                    </li>
                                    <li className="footer-item__item">
                                        <a href="#!" className="footer-item__link">Подраздел </a>
                                    </li>
                                    <li className="footer-item__item">
                                        <a href="#!" className="footer-item__link">Подраздел </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="footer__item footer-item">
                                <h3 className="footer-item__title">Раздел 1</h3>
                                <ul className="footer-item__list">
                                    <li className="footer-item__item">
                                        <a href="#!" className="footer-item__link">Подраздел </a>
                                    </li>
                                    <li className="footer-item__item">
                                        <a href="#!" className="footer-item__link">Подраздел </a>
                                    </li>
                                    <li className="footer-item__item">
                                        <a href="#!" className="footer-item__link">Подраздел </a>
                                    </li>
                                    <li className="footer-item__item">
                                        <a href="#!" className="footer-item__link">Подраздел </a>
                                    </li>
                                    <li className="footer-item__item">
                                        <a href="#!" className="footer-item__link">Подраздел </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__bottom">
                        <div className="footer__social social">
                            <a href="#!" className="social__link">
                                <svg width="24" height="15" fill="none"><path d="M23.058.869h-3.894a.876.876 0 0 0-.775.475s-1.553 2.931-2.052 3.919c-1.343 2.656-2.212 1.822-2.212.59V1.601c0-.74-.585-1.34-1.307-1.34H9.89a2.324 2.324 0 0 0-2.072.986s1.487-.246 1.487 1.807c0 .509.025 1.973.049 3.202a.885.885 0 0 1-.546.844.85.85 0 0 1-.961-.233 26.325 26.325 0 0 1-2.957-5.51.82.82 0 0 0-.746-.49H.605a.597.597 0 0 0-.496.264.629.629 0 0 0-.071.568C1.112 4.72 5.74 14.21 11.023 14.21h2.224a.89.89 0 0 0 .878-.9v-1.376c0-.352.205-.671.52-.811a.848.848 0 0 1 .934.167l2.662 2.562c.239.23.555.358.883.358h3.495c1.685 0 1.685-1.198.766-2.126-.647-.652-2.98-3.173-2.98-3.173a1.258 1.258 0 0 1-.093-1.605c.754-1.018 1.988-2.683 2.511-3.396.715-.975 2.01-3.041.235-3.041z" fill="#000" /></svg>
                            </a>
                            <a href="#!" className="social__link">
                                <svg width="9" height="24" fill="none"><path d="M9 7.368H5.935V5.092c0-.854.5-1.054.853-1.054H8.95V.281L5.97.268c-3.306 0-4.059 2.802-4.059 4.595v2.505H0v3.872h1.912v10.956h4.023V11.24h2.714L9 7.368z" fill="#000" /></svg>
                            </a>
                            <a href="#!" className="social__link">
                                <svg width="22" height="18" fill="none" ><path opacity=".9" d="m10.682 4.979.048.767-.795-.094C7.042 5.292 4.515 4.07 2.37 2.02l-1.05-1.017-.27.751C.477 3.43.842 5.198 2.035 6.388c.636.657.492.75-.604.36-.382-.126-.716-.22-.747-.173-.112.11.27 1.534.572 2.098.413.782 1.256 1.55 2.178 2.003l.779.36-.922.016c-.89 0-.922.016-.827.344.318 1.018 1.574 2.098 2.972 2.567l.986.329-.858.5a9.122 9.122 0 0 1-4.26 1.16c-.716.015-1.304.077-1.304.124 0 .157 1.94 1.033 3.068 1.378 3.386 1.017 7.408.579 10.428-1.159 2.146-1.236 4.292-3.694 5.293-6.073.54-1.267 1.081-3.584 1.081-4.695 0-.72.048-.814.938-1.675.525-.501 1.018-1.049 1.113-1.205.159-.298.143-.298-.668-.032-1.35.47-1.542.407-.874-.297.493-.501 1.08-1.409 1.08-1.675 0-.047-.238.031-.508.172-.286.157-.922.392-1.399.532l-.858.266-.779-.516c-.43-.282-1.033-.595-1.351-.689-.81-.219-2.05-.188-2.782.063-1.987.704-3.243 2.52-3.1 4.508z" fill="#000" /></svg>
                            </a>
                            <a href="#!" className="social__link">
                                <svg width="13" height="23" fill="none" ><path d="M6.5 11.585c3.194 0 5.792-2.538 5.792-5.657 0-3.122-2.597-5.66-5.792-5.66C3.306.268.707 2.806.707 5.928c0 3.12 2.599 5.657 5.793 5.657zm0-8c1.322 0 2.398 1.05 2.398 2.343 0 1.29-1.076 2.342-2.398 2.342S4.102 7.219 4.102 5.928c0-1.293 1.076-2.344 2.398-2.344zm6.24 8.97c.498.774.26 1.798-.533 2.286a10.985 10.985 0 0 1-3.364 1.36l3.238 3.165c.319.31.498.732.498 1.172 0 .44-.18.862-.498 1.172-.318.311-.75.486-1.2.486-.45 0-.88-.175-1.199-.486L6.5 18.601l-3.18 3.11a1.724 1.724 0 0 1-1.64.429 1.678 1.678 0 0 1-1.2-1.173 1.632 1.632 0 0 1 .439-1.601L4.156 16.2a10.996 10.996 0 0 1-3.363-1.36 1.636 1.636 0 0 1-.532-2.286c.24-.373.62-.637 1.06-.735.438-.098.899-.021 1.28.213a7.503 7.503 0 0 0 7.798 0 1.73 1.73 0 0 1 1.28-.213c.44.098.82.362 1.06.735z" fill="#000" /></svg>
                            </a>
                        </div>
                        <div className="footer__share">
                            <img className="google" src={ google } alt="" />
                            <img src={ apple } alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;