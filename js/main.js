function setCardItemImg(cardItemId, imgSrc, paragraph, link)
{
    $(".card-list")
    .append
    (
        '<a href =' + link + ' ' + 'class = card-item id =' + cardItemId + '>' + 
            '<figure class = thumbnail>' +
                // '<div class = img></div>' + 
                '<img src = ' + imgSrc + '>' + 
            '</figure>' +
            '<div class = thumbnail-info>' + paragraph + '</div>' +
        '</a>'
    );
    // 이거 왜 &quout; 뜨는교? 일단 img 태그로 바꿈
    //$(".img").css("background-image" , imgSrc);
}

function setCardItemObject(cardItemId, objectTag, paragraph, link)
{
    $(".card-list")
    .append
    (
        '<a href =' + link + ' ' + 'class = card-item id =' + cardItemId + '>' + 
            '<figure class = thumbnail' + cardItemId + '></figure>' +
            '<div class = thumbnail-info>' + paragraph + '</div>' +
        '</a>'
    );
    $(".thumbnail" + cardItemId).append(objectTag); // 기록하기: 왜 append로 해야하지?
    // 이거 왜 &quout; 뜨는교? 일단 img 태그로 바꿈
    //$(".img").css("background-image" , imgSrc);
}

setCardItemObject(1, '<iframe width = "100%" height = 215px style = "border-radius: 8px" src="https://www.youtube.com/embed/KvPykeC8Rzk?si=2cTJPmvglThK7es1?autoplay = 1&mute = 1&controls =0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>', "🔗 UE4포트폴리오", "../html/ue4.html");
setCardItemObject(2, '<iframe width = "100%" height = 215px style = "border-radius: 8px" src="https://www.youtube.com/embed/FaxgvJg4JC4?si=rzNgWX6T4S5VG7xt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>', "🔗 UE5포트폴리오", "../html/ue5.html");
setCardItemImg(3, "../img/sg1.png", "🔗 SG스텝스 운영페이지", "../html/sg.html");
setCardItemImg(4, "../img/C++_banner.png", "🔗 C++ 정리", "../html/c++.html");
setCardItemImg(5, "../img/HTML_banner.png", "🔗 HTML 정리", "../html/html.html" )
setCardItemImg(5, "../img/CSS_banner.png", "🔗 CSS 정리", "../html/css.html" )
setCardItemImg(6, "../img/STL_banner.png", "🔗 자료구조&알고리즘 정리", "../html/d&a.html");
