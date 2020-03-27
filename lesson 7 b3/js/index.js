document.addEventListener("DOMContentLoaded",()=>{
    var item1 = document.getElementById("item1");
    var item2 = document.getElementById("item2");
    var item3 = document.getElementById("item3");
    
    var content1 = document.getElementById("content1");
    var content2 = document.getElementById("content2");
    var content3 = document.getElementById("content3");
    item1.addEventListener("click", ()=>{
        item1.classList.add("config");
        if(content1.style.display === "block"){
            content1.style.display = "none";
        }
        else {
            content1.style.display = "block";
            content2.style.display = "none";
            content3.style.display = "none";
        }
    });
    item2.addEventListener("click", ()=>{
        if(content2.style.display === "block"){
            content2.style.display = "none";
        }
        else {
            content2.style.display = "block";
        }
    });
    item3.addEventListener("click", ()=>{
        if(content3.style.display === "block"){
            content3.style.display = "none";
        }
        else {
            content3.style.display = "block";
        }
    });
});