const projectImage=document.querySelector('.project-image');
const hoverText=document.querySelector('.project-hover');

projectImage.addEventListener('mouseenter',()=>{
    hoverText.classList.remove('hide')
    hoverText.classList.add('hide')

})