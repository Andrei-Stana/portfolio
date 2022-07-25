const intro = document.getElementById("intro");
const mainSection = document.getElementById("main-section");
const quote = document.getElementById("quote");



quote.addEventListener("animationend", () => {     
        intro.remove();
        mainSection.style.display = "flex";
        const elementName = document.getElementById("name");
        const description = document.getElementById("description");
        const indicator = document.getElementById("indicator")
        
        const menu = document.getElementById("menu");
        
        window.addEventListener("wheel", (e) => {
            elementName.style.animation = "disappear 2s";
            description.style.animation = "disappear 2s";
            indicator.style.animation = "disappear 2s"
        
            setTimeout(() => {     
        
                mainSection.remove();
                
                menu.style.display = "flex";
            }, 1900);
        })
})




