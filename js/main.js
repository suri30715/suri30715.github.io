function init()
{
    
}

function setCardItem(cardItemId, imgSrc, paragraph, link)
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


init();

// test
setCardItem(1, "../img/ue53.png", "UE4포트폴리오", "../html/ue5.html");
setCardItem(2, "../img/ue53.png", "UE5포트폴리오", "../html/ue5.html");
setCardItem(3, "../img/sg1.png", "SG스텝스 홈페이지", "../html/ue5.html");
setCardItem(4, "../img/ue53.png", "C++", "../html/ue5.html");
