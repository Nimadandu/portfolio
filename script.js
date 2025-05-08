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

const projects = [
{
    image : "./image/pexels-cody-berg-463684.jpg",
    title : " Animated Navbar",
    description : "A responsive navigation bar with smooth animation and"
},
{
    image : "./image/pexels-cody-berg-463684.jpg",
    title : " Animated Navbar",
    description : "A responsive navigation bar with smooth animation and" 
},
{
image : "./image/pexels-cody-berg-463684.jpg",
title : " Animated Navbar",
description : "A responsive navigation bar with smooth animation and"
},
];
const container = document.getElementById("project-container");
projects.forEach(project=> {

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
    <img src = "${project.image}" alt = "${project.title}"/>
    <h3> ${project.title}</h3>
    <p>${project.description}</p>
    `;
    container.appendChild(card)
})