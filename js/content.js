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



    for(var i = 0; i < content2List.length; i++)
    {
        var content2H3List = content2List[i].querySelectorAll("h3");
        var content2H5List = content2List[i].querySelectorAll("h5");
        var content2H6List = content2List[i].querySelectorAll("h6");
        
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

        // for(var i = 0; i < content2List.length; i++)
        // {
        //     content2TopPosList.push(content2List[i].getBoundingClientRect().top + window.scrollY);
        //     content2BottomPosList.push(content2List[i].getBoundingClientRect().bottom + window.scrollY);
        // }
        
        // window.addEventListener("scroll", ()=>
        // {
        //     for(var i = 0; i < content2List.length; i++)
        //     {
        //         if(yPos >= content2TopPosList[i] && yPos <= content2BottomPosList[i])
        //         {
                        
        //         }
        //     }
        // });
    }

    // var content2TopPosList = [];
    // var content2BottomPosList = [];

    // for(var i = 0; i < content2List.length; i++)
    // {
    //     content2TopPosList.push(content2List[i].getBoundingClientRect().top + window.scrollY);
    //     content2BottomPosList.push(content2List[i].getBoundingClientRect().bottom + window.scrollY);
    // }

    // window.addEventListener("scroll", ()=>
    // {
    //     var yPos = window.scrollY;

    //     // debug
    //     console.log(yPos);

    //     /*TODO: <img>뒤에<h6></h6>모두 삭제하고 서식 css 편집하기 */
    //     for(var i = 0; i < content2List.length; i++)
    //     {
    //         //debug
    //         console.log("searching index", i);

    //         if(yPos >= content2TopPosList[i] && yPos <= content2BottomPosList[i])
    //         {
    //             var content2H3List = content2List[i].querySelectorAll("h3");
    //             var content2H5List = content2List[i].querySelectorAll("h5");
    //             var content2H6List = content2List[i].querySelectorAll("h6");
                
    //             if(content2H3List)
    //             {
    //                 for(var j = 0; j < content2H3List.length; j++)
    //                 {
    //                     var c2H3T = content2H3List[j].getBoundingClientRect().top + yPos;
    //                     var c2H3B = content2H3List[j].getBoundingClientRect().bottom + yPos;

    //                     if(yPos >= c2H3T)/*&& yPos <= c2H3B)*/
    //                     {
    //                         index3.innerHTML = content2H3List[j].textContent;
    //                         // debug
    //                         console.log(content2H3List[j].textContent);
    //                     }
    //                 }
    //             }

    //             if(content2H5List)
    //             {
    //                 for(var j = 0; j < content2H5List.length; j++)
    //                 {
    //                     var c2H5T = content2H5List[j].getBoundingClientRect().top + yPos;
    //                     var c2H5B = content2H5List[j].getBoundingClientRect().bottom + yPos; 

    //                     if(yPos >= c2H5T)/* && yPos <= c2H5B)*/
    //                     {
    //                         index5.innerHTML = content2H5List[j].textContent;
    //                         //debug
    //                         console.log(content2H5List[j].textContent);
    //                     }
    //                 }
    //             }

    //             if(content2H6List)
    //             {
    //                 for(var j = 0; j < content2H6List.length; j++)
    //                 {
    //                     var c2H6T = content2H6List[j].getBoundingClientRect().top + yPos;
    //                     var c2H6B = content2H6List[j].getBoundingClientRect().bottom + yPos;

    //                     if(yPos >= c2H6T)/* && yPos <= c2H6B)*/
    //                     {
    //                         index6.innerHTML = content2H6List[j].textContent;
    //                         //debug
    //                         console.log(content2H6List[j].textContent);
    //                     }
    //                 }
    //             }
    //         }
        
    //         if(yPos > content2BottomPosList[i])
    //         {
    //                index3.innerHTML = "";
    //                index5.innerHTML = "";
    //                index6.innerHTML = "";
    //         }
    //     }
    // });
}

init();