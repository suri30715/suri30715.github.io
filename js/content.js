function init()
{
    window.addEventListener("scroll", ()=>{getTitle();});
}

function getTitle()
{
    var h3 = document.querySelector("h3");
    var h5 = document.querySelector("h5");
    var h6 = document.querySelector("h6");

    var h3B = h3.getBoundingClientRect().bottom + window.scrollY;
    var h3T = h3.getBoundingClientRect().Top + window.scrollY;
    
    var h5B = h5.getBoundingClientRect().bottom + window.scrollY;
    var h5T = h5.getBoundingClientRect().Top + window.scrollY;
    
    var h6B = h6.getBoundingClientRect().bottom + window.scrollY;
    var h6T = h6.getBoundingClientRect().Top + window.scrollY;
    
    var index3 = document.getElementById("index-3");
    var index5 = document.getElementById("index-5");
    var index6 = document.getElementById("index-6");
    
    if(window.scrollY >= h3B)
        index3.innerHTML = h3.textContent;
    
    if(window.scrollY >= h5B)
        index5.innerHTML = h5.textContent;
    
    if(window.scrollY >= h6B)
        index6.innerHTML = h6.textContent;
    
    // debug
    // console.log(h3B, window.scrollY);

}

function getTitlePos()
{
    const h3List = document.querySelectorAll("h3");
    const h5List = document.querySelectorAll("h5");
    const h6List = document.querySelectorAll("h6");
    
    for(const h3ListItem of h3List)
    {
        console.log(h3ListItem.textContent);
    }

    for(const h5ListItem of h5List)
    {
        console.log(h5ListItem.textContent);
    }

    for(const h6ListItem of h6List)
    {
        console.log(h6ListItem.textContent);
    }
}

init();

// debug
getTitlePos();