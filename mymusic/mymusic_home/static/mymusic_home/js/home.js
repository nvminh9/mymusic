// *** Template của phần Profile
const wholeProfileForm = '<!-- Button Settings -->'
    +'<div id="buttonSettingsProfile" class="col l-12 m-12 c-12 buttonSettingsProfile" >'
    +    '<button onclick="buttonComeBack()" class="btnBack"><span class="material-symbols-outlined">'
    +        'arrow_back'
    +    '</span></button>'
    +    'Profile'
    +    '<button><span class="material-symbols-outlined">'
    +        'settings'
    +    '</span></button>'
    +'</div>'
    +'<!-- Profile Chính -->'
    +'<div class="row mainProfile">'
    +    '<!-- Ảnh bìa Profile -->'
    +    '<div id="profileBanner" class="col l-12 m-12 c-12 profileBanner">'
    +        '<img src="https://i.pinimg.com/236x/55/ee/7e/55ee7ee333ea82425afa1051dc1b6d69.jpg" alt="Ảnh bìa hồ sơ">'
    +    '</div>'
    +    '<!-- Hình đại diện và tên Profile -->'
    +    '<div id="profileAvatar" class="col l-12 m-12 c-12 profileAvatar">'
    +        '<div class="row">'
    +            '<div class="col l-3 m-12 c-12 avatar">'
    +                '<img src="./assets/img/profileAvatar.png" alt="">'
    +           '</div>'
    +          '<div class="col l-9 m-12 c-12 name">'
    +             '<div class="row nameUser"><h5>Minh Ngô</h5></div>'
    +            '<div class="row tongDspUser"><h5>Tổng số nhạc đã đăng : 4</h5></div>'
    +           '<div class="row tongNhacUser"><h5>Tổng số danh sách phát : 4</h5></div>'
    +      '</div>'
    +        '</div>'
    +   '</div>'
    +   '<!-- Thông tin hồ sơ -->'
    +   '<div class="col l-12 m-12 c-12 profileInfor">'
    +       '<div class="row">'
    +           '<div class="col l-12 m-12 c-12 infor">'
    +               '<h5 class="profileBirth"><b>Ngày sinh :</b> 18/4/2003</h5>'
    +               '<h5 class="profileGender"><b>Giới tính :</b> Nam</h5>'
    +               '<h5 class="profileEmail"><b>Email :</b> minhcorn.2@gmail.com</h5>'
    +           '</div>'
    +       '</div>'
    +   '</div>'

    +    '<!-- Danh sách danh sách phát của Người dùng -->'
    +   '<h5 style="padding-left: 16px; margin: 0px; font-size: 20px; font-weight: 600;">Danh sách phát</h5>'
    +   '<div class="col l-12 m-12 c-12 profileDsp">'
    +       '<div class="col l-4 m-6 c-12 ">'
    +           '<button class="dspInProfile">'
    +               '<img src="https://bizweb.dktcdn.net/100/411/628/products/booklet-2-1-1-86f8961a-2c66-4dbe-b979-f0466a7c3083.jpg?v=1677758994023" alt="">'
    +               '<div class="title">'
    +                   '<h5>99%</h5>'
    +               '</div>'
    +           '</button>'
    +       '</div>'
    +       '<div class="col l-4 m-6 c-12 ">'
    +           '<button class="dspInProfile">'
    +               '<img src="https://bizweb.dktcdn.net/100/411/628/products/harpers-bazaar-wren-evans-ra-mat-album-loi-choi-03-1024x1024.jpg?v=1702651230007" alt="">'
    +               '<div class="title">'
    +                   '<h5>Loi Choi</h5>'
    +               '</div>'
    +           '</button>'
    +       '</div>'
    +       '<div class="col l-4 m-6 c-12 ">'
    +           '<button class="dspInProfile">'
    +               '<img src="https://upload.wikimedia.org/wikipedia/en/0/03/Yeezus_album_cover.png" alt="">'
    +               '<div class="title">'
    +                   '<h5>Yeezus</h5>'
    +               '</div>'
    +           '</button>'
    +       '</div>'
    +      '<!--  -->'
    +       '<div class="col l-4 m-6 c-12 ">'
    +           '<button class="dspInProfile">'
    +               '<img src="https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_jpeg/cover/7/6/9/b/769b97d91b5f2ec104d6ba7c9bd7a2d3.jpg" alt="">'
    +               '<div class="title">'
    +                   '<h5>420ent</h5>'
    +               '</div>'
    +           '</button>'
    +       '</div>'
    +   '</div>'
    +   '<!-- Kết thúc danh sách danh sách phát của người dùng -->'

    +        '<!-- Danh sách nhạc của Người dùng -->'
    +   '<h5 style="padding-left: 16px; margin: 0; margin-top: 35px; font-size: 20px; font-weight: 600;">Nhạc đã đăng tải</h5>'
    +   '<div class="col l-12 m-12 c-12 profileMusic">'
    +       '<div class="col l-12 m-6 c-12 ">'
    +           '<button class="musicInProfile">'
    +               '<img src="https://i.ytimg.com/vi/dz6xe0xXqYE/maxresdefault.jpg" alt="">'
    +               '<div class="title">'
    +                   '<h5>Ừ Thì Anh Đã Ổn Hơn - MCK</h5>'
    +               '</div>'
    +           '</button>'
    +       '</div>'
    +       '<div class="col l-12 m-6 c-12 ">'
    +           '<button class="musicInProfile">'
    +               '<img src="https://i.ytimg.com/vi/FBM70NaZuVI/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGH8gEygUMA8=&rs=AOn4CLCu6aKku07pQYgxJp-rS1FbXvf_pA" alt="">'
    +               '<div class="title">'
    +                   '<h5>Mơ Làm Ma - Ngọt</h5>'
    +               '</div>'
    +           '</button>'
    +       '</div>'
    +       '<div class="col l-12 m-6 c-12 ">'
    +           '<button class="musicInProfile">'
    +               '<img src="https://i.ytimg.com/vi/CPJYGL0XkC4/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHsCYAC0AWKAgwIABABGE0gZShjMA8=&rs=AOn4CLB-V2unA-g33o9xjr8F5Qqc4SRtAg" alt="">'
    +                '<div class="title">'
    +                   '<h5>Muốn anh đau - Hustlang Robber</h5>'
    +               '</div>'
    +           '</button>'
    +       '</div>'
    +       '<!--  -->'
    +       '<div class="col l-12 m-6 c-12 ">'
    +           '<button class="musicInProfile">'
    +               '<img src="https://i1.sndcdn.com/artworks-Z2Gy7JdqY0ed8ko3-ex8YFA-t500x500.jpg" alt="">'
    +               '<div class="title">'
    +                   '<h5>Nhạc trap căng nhất 2023 - Wxrdie</h5>'
    +               '</div>'
    +           '</button>'
    +       '</div>'
    +   '</div>'
    +   '<!-- Kết thúc danh sách nhạc của người dùng -->'

    +'</div>'
    +'<script src="assets/js/home.js"></script>'
    +'<script src="assets/js/slideShow.js"></script>'
    +'<script src="assets/js/songPlayer.js"></script>'

// *****  Template của phần trang Home
const homeTemplate = `<!-- Button Show Song Player -->
<div id="buttonShowSongPlayerContainer" class="col l-12 m-12 c-12 buttonShowSongPlayerContainer">
    <button class="buttonShowSongPlayer" onclick="ShowSongPlayer()"><span class="material-symbols-outlined">
        arrow_left
    </span></button>
</div>
<!-- slide images -->
<div id="slideShow" class="row slideShow">
    <div class="col l-12 m-12 c-12 listImages">
        <img class="imgInSlide" src="https://i.ytimg.com/vi/5WkwBKu1le0/maxresdefault.jpg" alt="99% Album Cover">
        <img class="imgInSlide" src="https://i.ytimg.com/vi/82ZTNQNEQgE/maxresdefault.jpg" alt="Ái Album Cover">
        <img class="imgInSlide" src="https://i.ytimg.com/vi/owuEMIKthbk/maxresdefault.jpg" alt="420ent Album Cover">
        <img class="imgInSlide" src="https://thantuong.tv/custom/domain_1/2023/12/14/image-133-1702539123.jpg" alt="Loi Choi Album Cover">
        <img class="imgInSlide" src="https://i.redd.it/8kdidpdcobl71.jpg" alt="Playboi Carti Cover">
    </div>
    <div class="col l-12 m-12 c-12 btns">
        <div id="btnLeftSlideShow" class="btnLeft btn"><span class="material-symbols-outlined">arrow_left</span></div>
        <div id="btnRightSlideShow" class="btnRight btn"><span class="material-symbols-outlined">arrow_right</span></div>
    </div>
</div>

<!-- Phần danh sách thể loại -->
<div id="slideGenre" class="row slide slideGenre">
    <div class="col l-12 m-12 c-12 titleGenre">
        <span class="title">Thể Loại</span>
    </div>
    <div class="col l-12 m-12 c-12 listGenre">
        <div class="col l-3 m-3 c-3 genre">
            <div class="genreContainer">
                <img src="https://i.pinimg.com/736x/a1/e2/db/a1e2db058dafb9a1a36d3b18965a01d7.jpg" alt="">
                <span class="genreName">Pop</span>
            </div>
        </div>
        <div class="col l-3 m-3 c-3 genre">
            <div class="genreContainer">
                <img src="https://seami.vn/wp-content/uploads/2017/10/the-loai-nhac-rock.jpg" alt="">
                <span class="genreName">Rock</span>
            </div>
        </div>
        <div class="col l-3 m-3 c-3 genre">
            <div class="genreContainer">
                <img src="https://seami.vn/wp-content/uploads/2017/10/the-loai-nhac-jazz.jpg" alt="">
                <span class="genreName">Jazz</span>
            </div>
        </div>
        <div class="col l-3 m-3 c-3 genre">
            <div class="genreContainer">
                <img src="https://i.pinimg.com/736x/3a/75/ff/3a75ff3669554a502f545cae6b7e009e.jpg" alt="">
                <span class="genreName">Rap/Hip Hop</span>
            </div>
        </div>
        <div class="col l-3 m-3 c-3 genre">
            <div class="genreContainer">
                <img src="https://seami.vn/wp-content/uploads/2017/10/the-loai-nhac-rb.jpg" alt="">
                <span class="genreName">R&B</span>
            </div>
        </div>
        <div class="col l-3 m-3 c-3 genre">
            <div class="genreContainer">
                <img src="https://seami.vn/wp-content/uploads/2017/10/the-loai-nhac-dance.jpg" alt="">
                <span class="genreName">Dance</span>
            </div>
        </div>
        <div class="col l-3 m-3 c-3 genre">
            <div class="genreContainer">
                <img src="https://seami.vn/wp-content/uploads/2017/10/the-loai-nhac-dong-que.jpg" alt="">
                <span class="genreName">Country</span>
            </div>
        </div>
        <div class="col l-3 m-3 c-3 genre">
            <div class="genreContainer">
                <img src="https://i.pinimg.com/originals/14/51/84/145184956ea1219062cfa3e0d0146b50.jpg" alt="">
                <span class="genreName">EDM</span>
            </div>
        </div>
    </div>
</div>

<!-- Phần danh sách nghệ sĩ -->
<div id="slideArtist" class="row slide slideArtist">
    <div class="col l-12 m-12 c-12 titleArtist">
        <span class="title">Nghệ sĩ</span>
    </div>
    <div class="col l-12 m-12 c-12 listArtist">
        <div class="col l-3 m-3 c-3 artist">
            <div class="artistContainer">
                <img src="https://kenh14cdn.com/203336854389633024/2022/2/20/photo-1-1645350058267149016134.jpg" alt="Ảnh The Weeknd">
                <span class="artistName">The Weeknd</span>
            </div>
        </div>
        <div class="col l-3 m-3 c-3 artist">
            <div class="artistContainer">
                <img src="https://hips.hearstapps.com/hmg-prod/images/ariana_grande_photo_jon_kopaloff_getty_images_465687098.jpg" alt="Ảnh Ariana Grande">
                <span class="artistName">Ariana Grande</span>
            </div>
        </div>
        <div class="col l-3 m-3 c-3 artist">
            <div class="artistContainer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Justin_Bieber_in_2015.jpg/800px-Justin_Bieber_in_2015.jpg" alt="Ảnh Justin Bieber">
                <span class="artistName">Justin Bieber</span>
            </div>
        </div>
        <div class="col l-3 m-3 c-3 artist">
            <div class="artistContainer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Zayn_Wiki_%28cropped%29.jpg/800px-Zayn_Wiki_%28cropped%29.jpg" alt="Ảnh Zayn">
                <span class="artistName">Zayn</span>
            </div>
        </div>
        
        <div class="col l-3 m-3 c-3 artist">
            <div class="artistContainer">
                <img src="https://cdn.tuoitre.vn/471584752817336320/2023/2/14/kanyewest-1676349082565913948458.jpg" alt="Ảnh Kayne West">
                <span class="artistName">Kayne West</span>
            </div>
        </div>
        <div class="col l-3 m-3 c-3 artist">
            <div class="artistContainer">
                <img src="https://i.guim.co.uk/img/media/2965737a8d6966d949a9c7bfc255af426b5a79ac/443_69_2406_1444/master/2406.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=e8224f4f999aad1326f43373a2a7d781" alt="Ảnh Travis Scott">
                <span class="artistName">Travis Scott</span>
            </div>
        </div>
        <div class="col l-3 m-3 c-3 artist">
            <div class="artistContainer">
                <img src="https://yt3.googleusercontent.com/oKexgOgva1BtrN_zO5WMNEX4V81_VClcHyBkAdsQC1KjLWYIfVGDYxUbiRKVbYF7mcXrv9Xoig=s900-c-k-c0x00ffffff-no-rj" alt="Ảnh Playboi Carti">
                <span class="artistName">Playboi Carti</span>
            </div>
        </div>
        <div class="col l-3 m-3 c-3 artist">
            <div class="artistContainer">
                <img src="https://yt3.googleusercontent.com/V4FqOieQ9y9dnErXPUZNWl1hyLafxIK7F55n5M8LVhPBmEou8kAbNuMlUZx23DoJHvH1sWG56No=s900-c-k-c0x00ffffff-no-rj" alt="Ảnh Kendrick Lamar">
                <span class="artistName">Kendrick Lamar</span>
            </div>
        </div>
        <div class="col l-3 m-3 c-3 artist">
            <div class="artistContainer">
                <img src="https://yt3.googleusercontent.com/BFZVpnsYdUinXATWqFv_TehfKUw_uVila1n_bLh02PJnmvf0lNiCAldtoeqvD2uiFx6hUWof=s900-c-k-c0x00ffffff-no-rj" alt="Ảnh MCK">
                <span class="artistName">MCK</span>
            </div>
        </div>
        <div class="col l-3 m-3 c-3 artist">
            <div class="artistContainer">
                <img src="https://5sfashion.vn/storage/upload/images/ckeditor/qd0MYUHTHW62dst9VGCkdgYKJ9nfBXapdpoEO4RS.png" alt="Ảnh Wxride">
                <span class="artistName">Wxrdie</span>
            </div>
        </div>
        <div class="col l-3 m-3 c-3 artist">
            <div class="artistContainer">
                <img src="https://avatar-ex-swe.nixcdn.com/singer/avatar/2022/06/30/d/e/1/7/1656582658102_300.jpg" alt="Ảnh Wren Evans">
                <span class="artistName">Wren Evans</span>
            </div>
        </div>
        <div class="col l-3 m-3 c-3 artist">
            <div class="artistContainer">
                <img src="https://vcdn1-giaitri.vnecdn.net/2022/02/08/thao-linh-jpeg-1644313181-2294-1644314017.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=zUwYLKE1lqSsl-q5y7qskw" alt="Ảnh Tlinh">
                <span class="artistName">Tlinh</span>
            </div>
        </div>
        <div class="col l-3 m-3 c-3 artist">
            <div class="artistContainer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Drake_July_2016.jpg/640px-Drake_July_2016.jpg" alt="Ảnh Drake">
                <span class="artistName">Drake</span>
            </div>
        </div>
    </div>
</div>
    <script src="assets/js/home.js"></script>
    <script src="assets/js/slideShow.js"></script>
    <script src="assets/js/songPlayer.js"></script>`;


// ****** Array lưu các trang đã đi qa sự dụng cho nút Back 
var pageStorage = [];
// Trang Home lun ở đầu tiên (vì khi truy cập vào trang thì sẽ gặp trang Home đầu tiên)
pageStorage[0] = homeTemplate;



// Hàm ẩn Song Player
function HideSongPlayer(){
    const middleContainer = document.querySelector('#middleContainer');
    const rightContainer = document.querySelector('#rightContainer');
    const buttonShowSongPlayer = document.getElementById('buttonShowSongPlayerContainer');
    const slideGenre = document.getElementById('slideGenre');
    const slideArtist = document.getElementById('slideArtist');
    const btnLeftSlideShow = document.getElementById('btnLeftSlideShow');
    const btnRightSlideShow = document.getElementById('btnRightSlideShow');
    const slideShow = document.getElementById('slideShow');
    const profileBanner = document.getElementById('profileBanner');
    const profileAvatar = document.getElementById('profileAvatar');

    // Thực hiện thay đổi
    middleContainer.classList.replace('l-6','l-9');
    rightContainer.classList.replace('l-3','l-0');
    buttonShowSongPlayer.style.display = 'block';
    slideGenre.style.height = '300px';
    slideArtist.style.height = '300px';
    btnLeftSlideShow.style.paddingTop = '14%';
    btnRightSlideShow.style.paddingTop = '14%';
    slideShow.style.height = '350px';
    profileBanner.style.height = '300px';
    profileAvatar.style.height = '200px';
}

// Hàm hiện Song Player
function ShowSongPlayer(){
    const middleContainer = document.querySelector('#middleContainer');
    const rightContainer = document.querySelector('#rightContainer');
    const buttonShowSongPlayer = document.getElementById('buttonShowSongPlayerContainer');
    const slideGenre = document.getElementById('slideGenre');
    const slideArtist = document.getElementById('slideArtist');
    const btnLeftSlideShow = document.getElementById('btnLeftSlideShow');
    const btnRightSlideShow = document.getElementById('btnRightSlideShow');
    const slideShow = document.getElementById('slideShow');
    const profileBanner = document.getElementById('profileBanner');
    const profileAvatar = document.getElementById('profileAvatar');

    // Thực hiện thay đổi
    middleContainer.classList.replace('l-9','l-6');
    rightContainer.classList.replace('l-0','l-3');
    buttonShowSongPlayer.style.display = 'none';
    slideGenre.style.height = '230px';
    slideArtist.style.height = '230px';
    btnLeftSlideShow.style.paddingTop = '18%';
    btnRightSlideShow.style.paddingTop = '18%';
    slideShow.style.height = '300px';
    profileBanner.style.height = '200px';
    profileAvatar.style.height = '150px';
}

// Hàm phóng to Song Player
function buttonZoomSongPlayer(){
    const middleContainer = document.querySelector('#middleContainer');
    const rightContainer = document.querySelector('#rightContainer');
    const brrightContainer = document.getElementById('rightContainer');
    const leftContainer = document.querySelector('#leftContainer');
    const buttonHideSongPlayer = document.getElementById('buttonHideSongPlayer');
    const vbuttonZoomSongPlayer = document.getElementById('buttonZoomSongPlayer');
    const buttonHideSongPlayerContainer = document.getElementById('buttonHideSongPlayerContainer');
    const songImg = document.getElementById('songImg');
    const audioSong = document.querySelector('#audioSong');
    const body = document.querySelector('body');

    // Thực hiện thay đổi
    middleContainer.classList.replace('l-6','l-0');
    rightContainer.classList.replace('l-3','l-12');
    leftContainer.classList.replace('l-3','l-0');
    vbuttonZoomSongPlayer.innerHTML = '<span class="material-symbols-outlined">zoom_in_map</span>';
    buttonHideSongPlayerContainer.innerHTML = 'Song Player'
    +'<button id="buttonZoomSongPlayer" class="buttonZoomSongPlayer" onclick="buttonZoomOutSongPlayer()"><span class="material-symbols-outlined">'
    +    'zoom_in_map'
    +'</span></button>';
    brrightContainer.style.borderRadius = '10px 10px 10px 10px';
    songImg.style.width = "40%";
    songImg.style.height = "170%";
    audioSong.classList.replace('l-12','l-4');
    audioSong.classList.add('l-o-4');
    audioSong.style.borderRadius = "10px 10px 0px 0px";
    body.style.padding = "0px"
    rightContainer.style.borderRadius = "0px"
    // buttonHideSongPlayer.style.display = 'none';
}

// Hàm thu nhỏ Song Player
function buttonZoomOutSongPlayer(){
    const middleContainer = document.querySelector('#middleContainer');
    const rightContainer = document.querySelector('#rightContainer');
    const brrightContainer = document.getElementById('rightContainer');
    const leftContainer = document.querySelector('#leftContainer');
    const buttonHideSongPlayer = document.getElementById('buttonHideSongPlayer');
    const vbuttonZoomSongPlayer = document.getElementById('buttonZoomSongPlayer');
    const buttonHideSongPlayerContainer = document.getElementById('buttonHideSongPlayerContainer');
    const songImg = document.getElementById('songImg');
    const audioSong = document.querySelector('#audioSong');
    const body = document.querySelector('body');

    // Thực hiện thay đổi
    middleContainer.classList.replace('l-0','l-6');
    rightContainer.classList.replace('l-12','l-3');
    leftContainer.classList.replace('l-0','l-3');
    vbuttonZoomSongPlayer.innerHTML = '<span class="material-symbols-outlined">zoom_out_map</span>';
    buttonHideSongPlayerContainer.innerHTML = 'Song Player'
    +'<button id="buttonHideSongPlayer" class="buttonHideSongPlayer" onclick="HideSongPlayer()"><span class="material-symbols-outlined">'
    +    'arrow_right'
    +'</span></button>'
    +'<button id="buttonZoomSongPlayer" class="buttonZoomSongPlayer" onclick="buttonZoomSongPlayer()"><span class="material-symbols-outlined">'
    +    'zoom_out_map'
    +'</span></button>';
    // brrightContainer.style.borderRadius = '0px 10px 10px 0px';
    songImg.style.width = "100%";
    songImg.style.height = "100%";
    audioSong.classList.replace('l-4','l-12')
    audioSong.classList.remove('l-o-4')
    audioSong.style.borderRadius = "0px";
    // rightContainer.style.borderRadius = "0px 10px 10px 0px"
    // body.style.padding = "8px"
    // buttonHideSongPlayer.style.display = 'block';
}

// Hàm chuyển qua Profile
function toProfile(){
    const buttonShowSongPlayer = '<!-- Button Show Song Player -->'
    +'<div id="buttonShowSongPlayerContainer" class="col l-12 m-12 c-12 buttonShowSongPlayerContainer">'
    +    '<button class="buttonShowSongPlayer" onclick="ShowSongPlayer()"><span class="material-symbols-outlined">'
    +        'arrow_left'
    +    '</span></button>'
    +'</div>'
    const middleContainer = document.querySelector('#middleContainer');
    // Push Page Profile vào pageStorage sau khi user đã bấm nút Profile
    if(wholeProfileForm == pageStorage[pageStorage.length - 1]){
        return;
    }else{
        pageStorage.push(wholeProfileForm);
    }
    // pageStorage.push(wholeProfileForm);
    // var index để lấy phần tử cuối của pageStorage
    var lastestPageIndex = pageStorage.length - 1; 
    
    // Thực hiện thay đổi 
    middleContainer.innerHTML = `${buttonShowSongPlayer}` 
                                + pageStorage[lastestPageIndex];
}

// Hàm cho nút Quay Trở Lại
function buttonComeBack(){
    // Query Phần Giữa ( middleContainer )
    const middleContainer = document.querySelector('#middleContainer');
    // Xóa page ở cuối pageStorage đi 
    pageStorage.pop();
    // var index để lấy phần tử cuối của pageStorage
    var lastestPageIndex = pageStorage.length - 1; 
    // Thực hiện show ra page ở cuối mảng pageStorage
    // Thực hiện thay đổi 
    middleContainer.innerHTML = pageStorage[lastestPageIndex];
}