const hamburger = document.getElementById("hamburger");
const navlinks = document.getElementById("navlinks");

hamburger.addEventListener('click' , () => {
    navlinks.classList.toggle('active');
});

const text ="Hi, I'm Mr.s | ";
const typeText = document.getElementById('typed-text');
let index = 0;
function type(){
    if(index < text.length){
        typeText.textContent += text.charAt(index);
        index++;
        setTimeout(type,150);
    }
}
type();

