export default contactpage;
import bettyi from '../images/Betty.svg';

function contactpage(){
    const content = document.getElementById('content');
    const centerdiv = document.createElement('div');
    centerdiv.setAttribute('id', 'centerdiv');

    const name = document.createElement('h1');
    name.textContent = "Contact Info";
    name.setAttribute('id', 'contact');

    const auntbetty = document.createElement('div');
    auntbetty.classList.add('contactbetty');
    const bettyname = document.createElement('h2');
    bettyname.textContent="Aunt Betty";
    const bettydescript = document.createElement('p');
    bettydescript.innerHTML="Chef, Manager, Waiter & Therapist </br>123-456-7890 </br> fishyFishesILoveFish@reallyRealMail.com";
    const bettypic = document.createElement('img');
    bettypic.setAttribute('src', bettyi);

    auntbetty.appendChild(bettyname);
    auntbetty.appendChild(bettydescript);
    auntbetty.appendChild(bettypic);

    centerdiv.appendChild(name);
    centerdiv.appendChild(auntbetty);

    content.appendChild(centerdiv);
}