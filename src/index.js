import mainpage from './mainpage.js';
import menupage from './menupage.js';
import contactpage from './contact.js';
import './style.css';

const content = document.getElementById('content');
const header= document.createElement('header');

const buttonmain = document.createElement('button');
const buttonmenu= document.createElement('button');
const buttoncontact = document.createElement('button');

buttonmain.innerHTML="Main";
buttonmenu.innerHTML="<a href='#'>Menu</a>";
buttoncontact.innerHTML="<a href='#'>Contact</a>";

header.appendChild(buttonmain);
header.appendChild(buttonmenu);
header.appendChild(buttoncontact);
content.appendChild(header);


//select the correct page
let currentpage= 'main';
// function currentpagef(){
//     switch(currentpage){
//         case 'main':
//             if(document.getElementById('centerdiv')!==null){
//                 centerdiv=document.getElementById('centerdiv');
//                 centerdiv.remove();
//             }
//             mainpage();
//             break;
//         case 'menu':
//             if(document.getElementById('centerdiv')!==null){
//                 centerdiv=document.getElementById('centerdiv');
//                 centerdiv.remove();
//             }
//             menupage();
//             break;
//         case 'contact':
//             if(document.getElementById('centerdiv')!==null){
//                 centerdiv=document.getElementById('centerdiv');
//                 centerdiv.remove();
//             }
//             contactpage();
//             break;
//         default:
//             console.log('Switch case error!!');
//     }
// }

function removeOld(){
    if(document.getElementById('centerdiv')!==null){
        const centerdiv=document.getElementById('centerdiv');
        centerdiv.remove();
    }
}

// currentpagef();

buttonmain.addEventListener('click', ()=>{
    removeOld()
    currentpage='main'
    mainpage();
    // currentpagef();
});
buttonmenu.addEventListener('click', ()=>{
    removeOld()
    currentpage='menu'
    menupage();
    // currentpagef();
});
buttoncontact.addEventListener('click', ()=>{
    removeOld()
    currentpage='contact'
    contactpage();
    // currentpagef();
});

mainpage();