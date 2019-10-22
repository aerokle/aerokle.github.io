const navToggler = document.querySelector('.nav-toggler');
const navLinks = document.querySelector('.nav-links');
const subButtons = document.querySelectorAll('.subsystem-button');
const subText = document.querySelectorAll('.sub-text');
const sunInfo = document.querySelector('.info')
navToggler.addEventListener('click',()=>{
    navLinks.classList.toggle('active');
})

for(let i=0;i<subButtons.length;i++){
    subButtons[i].addEventListener('click',(()=>{
        info.className = 'info disappear';
        for(let j=0;j<subText.length;j++){
            if(j===i){
                subText[j].className="sub-text appear";
            }
            else{
                subText[j].className="sub-text";
            }
        }
    }))
}