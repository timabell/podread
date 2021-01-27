console.log("it's a fucking console log, big whoop, what do you want, cheese?");
const jack = "allworkandnoplaymakesjackadullboy";
let i = 0; let j = 0; let c = 0;
let x: HTMLElement|null;
function start(){
    console.log("i will kill ur browser");
    document.body.innerHTML+="<br><span id='x'>&gt; </span>";
    x = document.getElementById('x');
    setInterval(type, 200);
}
function type(){
    console.log("tappity tap");
    if (j++==20){
        console.log("redruM");
        c=138;
    }
    if (c>0){c-=2;}
    if (j>20 && c <1){c=138;}
    let l = document.createElement("span");
    l.textContent = jack[i++] + " ";
    l.style.color = `rgb(${c} 3 3)`;
    if (x){//nullproofer
        x.appendChild(l);
    }
    if (i>jack.length){i=0;}
}
setTimeout(start, 100);
