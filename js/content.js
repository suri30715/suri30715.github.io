function init()
{
    getTitle();
}

function getTitle()
{
    const content2List = document.querySelectorAll(".content2");
    var content2HList = [];
    const divisionList = new Array(content2List.length);
    
    document.getElementById("count").innerHTML = "글: " + content2List.length;

    for(let i = 0; i < content2List.length; i++)
    {
        content2HList = content2List[i].querySelectorAll("h2, h3, h4, h5, h6");

        divisionList[i] = document.createElement("div");
        divisionList[i].setAttribute("class", "division");
        index.appendChild(divisionList[i]);

        if(content2HList)
        {
            for(let j = 0; j < content2HList.length; j++)
            {
                if(content2HList[j].tagName == "H2")
                {
                    var c = document.createElement("div");
                    c.setAttribute("class", "two");
                    c.innerHTML = content2HList[j].textContent;
                    divisionList[i].appendChild(c);
                }
                if(content2HList[j].tagName == "H3")
                {
                    var c = document.createElement("div");
                    c.setAttribute("class", "three");
                    c.innerHTML = content2HList[j].textContent;
                    divisionList[i].appendChild(c);
                }
                if(content2HList[j].tagName == "H4")
                {
                    var c = document.createElement("div");
                    c.setAttribute("class", "four");
                    c.innerHTML = content2HList[j].textContent;
                    divisionList[i].appendChild(c);
                }
                if(content2HList[j].tagName == "H5")
                {
                    var c = document.createElement("div");
                    c.setAttribute("class", "five");
                    c.innerHTML = content2HList[j].textContent;
                    divisionList[i].appendChild(c);
                }
                if(content2HList[j].tagName == "H6")
                {
                    var c = document.createElement("div");
                    c.setAttribute("class", "six");
                    c.innerHTML = content2HList[j].textContent;
                    divisionList[i].appendChild(c);
                }
            }
        }
    }

    // 목차의 내용 클릭시 해당 위치로 스크롤
    const indexList = document.querySelectorAll(".two, .three, .four, .five, .six");
    const hList = document.querySelectorAll("h2, h3, h4, h5, h6");
    
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
                    indexList[i].style.color = "#30b565";
                else
                    indexList[i].style.color = "black";
            }
        }
    );
}

init();