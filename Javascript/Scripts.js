//Slideshow Hero Image Header:
var bgCounter = 0;
function heroSlideshow(){
    var listImgBG = [
        "url('Media/heroImageHeader.jpg')",
        "url('Media/heroImageHeader2.jpg')",
        "url('Media/heroImageHeader3.jpg')"
    ];

    bgCounter++;

    if(bgCounter == listImgBG.length){
        bgCounter = 0;
    }

    document.getElementById("home").style.backgroundImage = listImgBG[bgCounter];
}

//Slideshow Hero Image Header con animación:
var NextCounter = 0;
var MainCounter = 0;

function heroSlideshowAn(){
    var listImgBGAn = document.getElementsByClassName("bgHero");

    NextCounter++;
    MainCounter = NextCounter-1;

    if(NextCounter == listImgBGAn.length){
        NextCounter = 0;
    }

    if(MainCounter<0){
        MainCounter = listImgBGAn.length-1;
    }

    for(var i = 0; i<listImgBGAn.length; i++){

        listImgBGAn[i].classList.remove("nextSlide");
        listImgBGAn[i].classList.remove("mainSlide");
        listImgBGAn[i].classList.remove("hiddenSlide");

        if(i == NextCounter){
            listImgBGAn[i].classList.add("nextSlide");
        }
        else if(i == MainCounter){
            listImgBGAn[i].classList.add("mainSlide");
        }
        else{
            listImgBGAn[i].classList.add("hiddenSlide");
        }

    }
}

//Menu basado en scroll:
var posPreviousScroll = document.documentElement.scrollTop;

window.onscroll = function(){hideShowMenu()};

function hideShowMenu(){
    var posActualScroll = document.documentElement.scrollTop;

    if(posPreviousScroll>posActualScroll){
        document.getElementById("navBar").style.top="0";

        if(posActualScroll>100){
            document.getElementById("navBar").style.height="80px";
            document.getElementById("logoMenu").style.padding="10px";
        }
        else{
            document.getElementById("navBar").style.height="120px";
            document.getElementById("logoMenu").style.padding="25px";
        }
    }
    else{
        document.getElementById("navBar").style.top="-120px";
    }

    posPreviousScroll = posActualScroll;
}

//Pestañas interactivas Productos:
function selectTab(boxToShow, tabClicked){
    var listTab = document.getElementsByClassName("listProducts");

    for(var i=0; i<listTab.length; i++){
        listTab[i].style.display="none";
    }

    document.getElementById(boxToShow).style.display="block";

    var tabLinks = document.getElementsByClassName("navElementProducts");
    for(var i=0; i<tabLinks.length; i++){
        tabLinks[i].classList.remove("activeTab");
    }

    document.getElementById(tabClicked).classList.add("activeTab");

    var products = document.getElementsByClassName("navElementProducts");
    for(var i=0; i<products.length; i++){
        products[i].classList.remove("animateProduct");
    }

    var productsB = document.getElementById(boxToShow).children;
    for(var i=0; i<productsB.length; i++){
        productsB[i].classList.add("animateProduct");
    }
}

//Modal LightBox de Galeria:
var listSrcImg = [];
var numImg = 0;

function readyLB(){
    var listImgGallery = document.getElementsByClassName("imgGal");

    for(var i = 0; i < listImgGallery.length; i++){
        listSrcImg.push(listImgGallery[i].src);

    }

    for(var i = 0; i < listImgGallery.length; i++){
        listImgGallery[i].addEventListener('click', openLB);
    }

    function openLB(){
        var srcClickedImg = event.currentTarget.src;
        numImg = listSrcImg.indexOf(srcClickedImg);

        document.getElementById("imageToShow").innerHTML="<img class='imageLB' src='" + listSrcImg[numImg] +"'>";
        document.getElementById("modalLBgallery").style.display="block";
        document.documentElement.style.overflow="hidden";
    }
}

function nextImg(){
    numImg++;

    if(numImg==listSrcImg.length){
        numImg = 0;
    }

    document.getElementById("imageToShow").innerHTML="<img class='imageLB' src='" + listSrcImg[numImg] +"'>";
}

function prevImg(){
    numImg--;

    if(numImg < 0){
        numImg = listSrcImg.length-1;
    }

    document.getElementById("imageToShow").innerHTML="<img class='imageLB' src='" + listSrcImg[numImg] +"'>";
}

function closeLB(){
    document.getElementById("modalLBgallery").style.display="none";
    document.documentElement.style.overflow="auto";
}

//Modal de Formulario:

function modalForm(){
    document.getElementById("modalForm").style.display="block";
    document.documentElement.style.overflow="hidden";

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var text = document.getElementById("message").value;
    var message;
    var title;

    (function formCheck(){
        if(!document.getElementById("name").checkValidity()){

            title = ":(";
            message = "Please fill in the form...";

            document.getElementById("modalTitle").innerHTML = title;
            document.getElementById("messageConfirmation").innerHTML = message;
        }
        else if(!document.getElementById("email").checkValidity()){
            
            title = ":(";
            message = "Please fill in the form...";

            document.getElementById("modalTitle").innerHTML = title;
            document.getElementById("messageConfirmation").innerHTML = message;
        }
        else if(!document.getElementById("message").checkValidity()){
            
            title = ":(";
            message = "Please fill in the form...";

            document.getElementById("modalTitle").innerHTML = title;
            document.getElementById("messageConfirmation").innerHTML = message;
        }
        else{

            title = "Nice to meet you!";
            message = "Hi " + name + "!!! Thanks for contacting us. We just sent you a confirmation email to " + email + 
            " that your message ('" + text + "') was sent to us correctly :)";

            document.getElementById("modalTitle").innerHTML = title;
            document.getElementById("messageConfirmation").innerHTML = message;
        }
    })();
}

function closeMF(){
    document.getElementById("modalForm").style.display="none";
    document.documentElement.style.overflow="auto";

    document.getElementById("name").value ="";
    document.getElementById("email").value ="";
    document.getElementById("message").value ="";
}

//Acordeon
function AcordeonBox(){
    var acordeonElements = document.getElementsByClassName("acordeon");

    for(var i=0; i<acordeonElements.length;i++){
        acordeonElements[i].addEventListener("click",function(){
            this.classList.toggle("active");
            var panel = this.nextElementSibling;

            if(panel.style.display=="block"){
                panel.style.display="none";
            }
            else{
                panel.style.display="block";
            }
        })
    }
}

//ToolTip
function tooltipButton(){
    const sendButton = document.getElementById("buttonSend");

    sendButton.addEventListener("mouseover", () => {

        const tooltip = document.createElement("div");
        tooltip.textContent = "Click me";
        tooltip.style.position = "absolute";
        tooltip.style.top = miBoton.offsetTop + "5px";
        tooltip.style.left = miBoton.offsetLeft + "5px";

    document.body.appendChild(tooltip);

    });

    sendButton.addEventListener("mouseout", () => {
        tooltip.remove();
    });
}

//Parallax
function Parallax(){
    $('.parallax-window').parallax({imageSrc: 'Media/imagenParallax.jpg'});
}
