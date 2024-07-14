function init()
{
    getTitle();
}

function getTitle()
{
    const content2List = document.querySelectorAll(".content2");

    var content2H2List;
    var content2H3List;
    var content2H5List;
    var content2H6List;
    var content2H2ListTopPos = [];
    var content2H3ListTopPos = [];
    var content2H5ListTopPos = [];
    var content2H6ListTopPos = [];

    var index = document.getElementById("index")
    
    document.getElementById("count").innerHTML = "글: " + content2List.length;
    
    for(var i = 0; i < content2List.length; i++)
    {
        var division = document.createElement("div");
        content2H2List = content2List[i].querySelectorAll("h2");
        content2H3List = content2List[i].querySelectorAll("h3");
        content2H5List = content2List[i].querySelectorAll("h5");
        content2H6List = content2List[i].querySelectorAll("h6");

        division.setAttribute("class", "division");
        index.appendChild(division);

        if(content2H2List)
        {
            for(var j = 0; j < content2H2List.length; j++)
            {
                var c = document.createElement("div");
            
                c.setAttribute("class", "two");
                c.innerHTML = content2H2List[j].textContent;
                division.appendChild(c);

                content2H2ListTopPos.push(content2H2List[j].getBoundingClientRect().top);
            }
        }

        if(content2H3List)
        {
            for(var j = 0; j < content2H3List.length; j++)
            {
                var c = document.createElement("div");

                c.setAttribute("class", "three");
                c.innerHTML = content2H3List[j].textContent;
                division.appendChild(c);

                content2H3ListTopPos.push(content2H3List[j].getBoundingClientRect().top);
            }
        }
        
        if(content2H5List)
        {
            for(var j = 0; j < content2H5List.length; j++)
            {                
                var c = document.createElement("div");
                
                c.setAttribute("class", "five")
                c.innerHTML = content2H5List[j].textContent;    
                division.appendChild(c);

                content2H5ListTopPos.push(content2H5List[j].getBoundingClientRect().top);
            }
        }

        if(content2H6List)
        {
            for(var j = 0; j < content2H6List.length; j++)
            {
                var c = document.createElement("div");

                c.setAttribute("class", "six");
                c.innerHTML = content2H6List[j].textContent;    
                division.appendChild(c);

                content2H6ListTopPos.push(content2H6List[j].getBoundingClientRect().top);
            }
        }
    }

    var list2 = document.querySelectorAll(".two");
    var list3 = document.querySelectorAll(".three");
    var list5 = document.querySelectorAll(".five");
    var list6 = document.querySelectorAll(".six");

    for(let i = 0; i < list2.length; i++)
    {
        list2[i].addEventListener("click", ()=>{ window.scrollTo(0, content2H2ListTopPos[i]); });
    }
    for(let i = 0; i < list3.length; i++)
    {
        list3[i].addEventListener("click", ()=>{ window.scrollTo(0, content2H3ListTopPos[i]); });
    }
    for(let i = 0; i < list5.length; i++)
    {
        list5[i].addEventListener("click", ()=>{ window.scrollTo(0, content2H5ListTopPos[i]); });
    }
    for(let i = 0; i < list6.length; i++)
    {
        list6[i].addEventListener("click", ()=>{ window.scrollTo(0, content2H6ListTopPos[i]); });
    }
}

init();