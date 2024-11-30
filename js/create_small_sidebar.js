function init()
{
    getTitleSmall();
}

function getTitleSmall()
{
    const content2List = document.querySelectorAll(".content");
    const index = document.querySelector("#small-sidebar-index");
    var content2HList = [];
    const divisionList = new Array(content2List.length);
    
    document.getElementById("small-sidebar-count").innerHTML = "contents " + content2List.length;

    for(let i = 0; i < content2List.length; i++)
    {
        content2HList = content2List[i].querySelectorAll("h1, h2, h3, h4, h5, h6");

        divisionList[i] = document.createElement("div");
        divisionList[i].setAttribute("class", "small-sidebar-division");
        index.appendChild(divisionList[i]);

        if(content2HList)
        {
            for(let j = 0; j < content2HList.length; j++)
            {
                if(content2HList[j].tagName == "H1")
                {
                   var c = document.createElement("div");
                   c.setAttribute("class", "small-sidebar-one");
                   c.innerHTML = content2HList[j].textContent;
                   divisionList[i].appendChild(c);
                }
                if(content2HList[j].tagName == "H2")
                {
                    var c = document.createElement("div");
                    c.setAttribute("class", "small-sidebar-two");
                    c.innerHTML = content2HList[j].textContent;
                    divisionList[i].appendChild(c);
                }
                if(content2HList[j].tagName == "H3")
                {
                    var c = document.createElement("div");
                    c.setAttribute("class", "small-sidebar-three");
                    c.innerHTML = content2HList[j].textContent;
                    divisionList[i].appendChild(c);
                }
                if(content2HList[j].tagName == "H4")
                {
                    var c = document.createElement("div");
                    c.setAttribute("class", "small-sidebar-four");
                    c.innerHTML = content2HList[j].textContent;
                    divisionList[i].appendChild(c);
                }
                if(content2HList[j].tagName == "H5")
                {
                    var c = document.createElement("div");
                    c.setAttribute("class", "small-sidebar-five");
                    c.innerHTML = content2HList[j].textContent;
                    divisionList[i].appendChild(c);
                }
                if(content2HList[j].tagName == "H6")
                {
                    var c = document.createElement("div");
                    c.setAttribute("class", "small-sidebar-six");
                    c.innerHTML = content2HList[j].textContent;
                    divisionList[i].appendChild(c);
                }
            }
        }
    }

    // 목차의 내용 클릭시 해당 위치로 스크롤
    const indexList = document.querySelectorAll(".small-sidebar-one, .small-sidebar-two, .small-sidebar-three, .small-sidebar-four, .small-sidebar-five, .small-sidebar-six");
    const hList = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    
    for(let i = 0; i < indexList.length; i++)
    {
        indexList[i].addEventListener
        (
            "click", 
            function()
            {
                // https://enai.tistory.com/33
                window.scrollTo(0, hList[i].offsetTop);
            }
        );
    }

    window.addEventListener
    (
        "scroll",
        function()
        {
            for(let i = 0; i < indexList.length; i++)
            {
                // https://velog.io/@nemo/scroll-offset-property
                if(scrollY >= hList[i].offsetTop)
                    indexList[i].style.color = "#5390f1";
                else
                    indexList[i].style.color = "#777777";
            }
        }
    );
}

init();