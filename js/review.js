const  upSpeed=15;  //sliding speed of messages
const  delayStop =3000; //static time before switching to the next message
let  tickerHeight=400;  //display box height
const sw = window.screen.width;

window.onload =function divScroller(){

    //change tickerHeight if screen width change
    switch (sw) {
        case 1007:
            tickerHeight = 275;
            break;
        case 640:
            tickerHeight = 173;
            break;
        default:
            break;
    }
    scroller = document.getElementById("ticKer"); // display box 
    scroller.style.height= tickerHeight+"px"; // display box height
    scroller.style.lineHeight= tickerHeight+"px"; // display box line height  
    slide = document.getElementById("ulArea"); // ul element of sliding
    slide.style.position = "absolute"; //absolute position
    slide.style.top = tickerHeight+"px" ;  //slide top

    innScroll(tickerHeight, upSpeed, delayStop) //inner scroll
}

/**
 * inner scroll
 * @param tickerHeight : height of display box
 * @param upSpeed : speed of slide
 * @param delayStop : rest time
*/
function innScroll(tickerHeight, upSpeed, delayStop){
    msec = upSpeed; // scroll time
    numTop = parseInt(slide.style.top)
    //move the top position up -1px if the top position is not -30
    if (numTop > -tickerHeight){ 
        slide.style.top = (numTop-1)+"px";
    }else{ 
        slide.style.top = 0+"px"; 
        changeLine(); // Next message and replacement
    }

    if(numTop==0)
        msec = delayStop;

    setTimeout("innScroll("+ tickerHeight +","+ upSpeed +"," + delayStop +")", msec);
}

/**
 * Moving messages
 * 
*/
function changeLine(){ 
    base= document.getElementById("ulArea");
    liList = base.getElementsByTagName("li");
    elm = liList[0];// top "li" element
    base.appendChild(elm); // 
}