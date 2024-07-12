function init()
{
    getTitle();
}

function getTitle()
{
    const content2List = document.querySelectorAll(".content2");
    var index = document.getElementById("index")


    var content2TopPosList = [];
    var content2BottomPosList = [];
    var content2H2ForEmphasize;

    for(var i = 0; i < content2List.length; i++)
    {
        var content2H2List = content2List[i].querySelectorAll("h2");
        var content2H3List = content2List[i].querySelectorAll("h3");
        var content2H5List = content2List[i].querySelectorAll("h5");
        var content2H6List = content2List[i].querySelectorAll("h6");
        
        if(content2H2List)
        {
            for(var j = 0; j < content2H2List.length; j++)
            {
                var c = document.createElement("div");
                c.setAttribute("class", "two");
                c.innerHTML = content2H2List[j].textContent;
                index.appendChild(c);
            }
        }

        if(content2H3List)
        {
            for(var j = 0; j < content2H3List.length; j++)
            {
                var c = document.createElement("div");
                c.setAttribute("class", "three");
                c.innerHTML = content2H3List[j].textContent;
                index.appendChild(c);
            }
        }
        
        if(content2H5List)
        {
            for(var j = 0; j < content2H5List.length; j++)
            {                
                var c = document.createElement("div");
                c.setAttribute("class", "five")
                c.innerHTML = content2H5List[j].textContent;    
                index.appendChild(c);
            }
        }

        if(content2H6List)
        {
            for(var j = 0; j < content2H6List.length; j++)
            {
                var c = document.createElement("div");
                c.setAttribute("class", "six");
                c.innerHTML = content2H6List[j].textContent;    
                index.appendChild(c);
            }
        }
    }

    document.getElementById("count").innerHTML = "글 갯수 " + content2List.length;
}

init();