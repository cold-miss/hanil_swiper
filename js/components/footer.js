// footer component
function footer() {
  return `
  <footer id="footer">
    <div class="footer-wrap">
    <h1 class="f-logo pc-only">
    <a href="./index.html" class="pc-only">
        <img src="./images/footer-black-logo.svg" alt="">
    </a>
    </h1>
    <div class="f-info">
        <ul>
            <li><a href="#"><strong>개인정보방침</strong></a></li>
            <li><span class="pc-only">ㅣ</span><a href="#">윤리경영</a><span class="pc-only">ㅣ</span></li>
            <li><a href="#">웹주문등록바로가기</a></li>
        </ul>
        <address class="f-adress">
            <ul>
                <li>Tel : 031-798-7161 ~ 2 <span class="pc-only">ㅣ</span></li>
                <li>Fax : 031-798-7163 <span class="pc-only">ㅣ</span></li>
                <li>사업장 주소 : 경기도 광주시 도척면 도척로 584 번길 29</li>
            </ul>
        </address>
        <p class="copy">Copyright &copy; 2008 by HANIL. All rights reserved.</p>
        <h1 class="m-f-logo">
            <a href="#" class="mobile-only">
                <img src="./images/footer-black-logo.svg" alt="">
            </a>
        </h1>
    </div>
    <div class="f-right-menu">
        <div class="sns-group">
            <ul>
                <li>
                    <a href="#"><img src="./images/e-mail.svg" alt="e-mail.svg"></a>
                </li>
                <li>
                    <a href="#"><img src="./images/facebook_logo.svg" alt="facebook_logo.svg"></a>
                </li>
                <li>
                    <a href="#"><img src="./images/youtube_logo.svg" alt="youtube_logo"></a>
                </li>
                <li>
                    <a href="#"><img src="./images/instagram_logo.svg" alt="instagram_logo"></a>
                </li>
                <li>
                    <a href="#" class="mobile-only"><img src="./images/top-btn.svg" alt="top-btn.svg"></a>
                </li>
            </ul>
        </div>
        <h1 class="top-btn pc-only">
            <a href="#">
                <img src="./images/top-btn.svg" alt="top-btn.svg">
            </a>
        </h1>
    </div>
    </div>
    </footer>
  `
}

const footerName = '.footer-component'; // class 요소명
document.querySelector(footerName).innerHTML = footer();
