// 자바스크립트로 생성된 html components
function header() {
    return `
    <header>
    <div class="header-wrap">
        <h1 id="H-logo">
            <a href="./index.html">
                <img src="./images/한일제약-컬러-logo.svg" alt="color-logo">
            </a>
        </h1>
        <nav id="GNB">
                <ul class="depth-1">
                    <li>
                        <a href="#" class="pc-only">회사소개</a>
                        <button class="m-gnb-up-btn mobile-only">
                        <p class="mobile-only"> 회사소개 </p>  <img src="./images/m-gnb-up-btn.svg" alt="m-gnb-up-btn.svg">
                        </button>
                        <ul class="depth-2">
                            <li>
                                <a href="./About-Us.html">기업소개</a>
                            </li>
                            <li>
                                <a href="./CEO-Greetings.html">CEO 인사말</a>
                            </li>
                            <li>
                                <a href="./History.html">연혁</a>
                            </li>
                            <li>
                                <a href="./Location.html">오시는 길</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" class="pc-only">제품소개</a>
                        <button class="m-gnb-up-btn mobile-only">
                        <p class="mobile-only"> 제품소개 </p> <img src="./images/m-gnb-up-btn.svg" alt="m-gnb-up-btn.svg">
                        </button>
                        <ul class="depth-2">
                            <li>
                                <a href="./product.html"">제품정보</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" class="pc-only">
                            채용공고
                        </a>
                        <button class="m-gnb-up-btn mobile-only">
                        <p class="mobile-only"> 채용공고 </p> <img src="./images/m-gnb-up-btn.svg" alt="m-gnb-up-btn.svg">
                        </button>
                        <ul class="depth-2">
                            <li>
                                <a href="./recruit.html">
                                    채용안내
                                </a>
                            </li>
                            <li>
                                <a href="./talent.html">
                                    인재상
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" class="pc-only">
                            고객문의
                        </a>
                        <button class="m-gnb-up-btn mobile-only">
                        <p class="mobile-only"> 고객문의 </p>  <img src="./images/m-gnb-up-btn.svg" alt="m-gnb-up-btn.svg">
                        </button>
                        <ul class="depth-2">
                            <li>
                                <a href="./FAQ.html">
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    문의하기
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" class="pc-only">
                            홍보센터
                        </a>
                        <button class="m-gnb-up-btn mobile-only">
                        <p class="mobile-only"> 홍보센터 </p>  <img src="./images/m-gnb-up-btn.svg" alt="m-gnb-up-btn.svg">
                        </button>
                        <ul class="depth-2">
                            <li>
                                <a href="#">
                                    공지사항
                                </a>
                            </li>                        
                            <li>
                                <a href="#">
                                    홍보영상
                                </a>
                            </li>
                        </ul>
                    </li>

                </ul>

            </nav>
            <div id="Right-menu">
            <div class="Language-group pc-only">
                <p class="pc-only">EN</p>
                <a href="#" class="pc-only">
                    <img src="./images/Language-icon.svg" alt="Language-icon.svg">
                </a>
                <p class="H-Language-line pc-only">ㅣ</p>
            </div>
            <!-- pc-site-map-btn -->
            <button id="site-map-btn" class="pc-only">
                <img src="./images/Site-map-btn.svg" alt="Site-map-btn.svg">
            </button>
            <!-- mobile-sitme-map-toggle-btn -->
            <button id="mobile-toggle-btn" class="mobile-only">
                <img src="./images/m-toggle-btn.svg" alt="m-toggle-btn.svg">
            </button>
        </div>
    </div>
    <div class="site-map pc-only">
        <div class="site-map-logo">
            <a href="./">
                <img src="./images/한일제약-컬러-logo.svg" alt="한일제약 컬러 -logo.svg">
            </a>
        </div>
        <ul class="sitme-map-1depth">
            <li><a href="#">회사소개</a>
                <ul class="site-map-2depth">
                    <li><a href="./About-Us.html">기업소개</a></li>
                    <li><a href="./CEO-Greetings.html">CEO 인사말</a></li>
                    <li><a href="./History.html">연혁</a></li>
                    <li><a href="./Location.html">오시는 길</a></li>
                </ul>
            </li>

            <li><a href="#"> 제품소개</a>
                <ul class="site-map-2depth">
                    <li><a href="./product.html">제품정보</a></li>

                </ul>
            </li>


            <li><a href="#"> 채용공고</a>
                <ul class="site-map-2depth">
                    <li><a href="./recruit.html">채용안내</a></li>
                    <li><a href="./talent.html">인재상</a></li>
                </ul>
            </li>

            <li><a href="#">고객문의</a>
                <ul class="site-map-2depth">
                    <li><a href="./FAQ.html">FAQ</a></li>
                    <li><a href="#">문의하기</a></li>
                </ul>
            </li>
            <li><a href="#">홍보센터</a>
            <ul class="site-map-2depth">
                <li><a href="#">공지사항</a></li>
                <li><a href="#">홍보영상</a></li>
            </ul>
        </li>
        </ul>
        <button class="site-map-close-btn">
            <img src="./images/Site-map-close-btn.svg" alt="Site-map-close-btn.svg">
        </button>
    </div>
</header>
   `
}


// 문서에 html 생성
const headerName = '.header-component'; // class 요소명
document.querySelector(headerName).innerHTML = header();
