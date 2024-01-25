function init()
{
    
}

function setTitleBox(boxNumberId, imgSrc, title, paragraph)
{
    $(".title-box-wrapper").append('<div class = "title-box"' + 'id =' + '"' + boxNumberId + '"' + '>' + '<img src = ' + imgSrc + '><br>' + title +'<br>' + paragraph + '</div>' );
}


init();

// test
setTitleBox(1, "../img/ue53.png", "Portfolio", "포트폴리오 입니다. ");
setTitleBox(2, "../img/ue53.png", "Portfolio", "포트폴리오 입니다. ");
