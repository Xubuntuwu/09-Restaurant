export default mainpage;
import sushii from "../images/sushi-svgrepo-com.svg";
import coastali from '../images/noah-mayer-BWSDI-6YLW4-unsplash.jpg';

//background
function mainpage(){
    const content = document.getElementById('content');
    const centerdiv = document.createElement('div');
    centerdiv.setAttribute('id', 'centerdiv');

    const name = document.createElement('h1');
    name.textContent = "Aunt Betty's C-Food Dishes";
    name.setAttribute('id', 'restaurantname');

    const praise = document.createElement('div');
    const hours = document.createElement('div');
    const location  = document.createElement('div');
    praise.classList.add('bubble');
    hours.classList.add('bubble');
    location.classList.add('bubble');

        //praise
        const praise_text = document.createElement('p');
        praise_text.classList.add('text');
        praise_text.textContent="Aunt Betty's C-Food Dishes is here to serve you the most delicious sea food meals for breakfast, lunch, and dinner! Aunt Betty serves the most mouth watering dishes. She can cook you anything, from sushi to King Crab. Tell a friend or better yet bring them with you! If you have no friends, just scooch onto our stranger-danger dining table where you'll meet others like you! Sharing the fun of fishing turns strangers into friends in a few hours!";
        praise.appendChild(praise_text);
        let sushi = document.createElement('img');
        sushi.src=sushii;
        sushi.alt="sushi svg";
        sushi.setAttribute('id', 'sushi');
        praise.appendChild(sushi);
        praise.appendChild
        centerdiv.appendChild(praise);


        //hours
        const hours_title = document.createElement('h2');
        hours_title.classList.add('title');
        hours_title.textContent="Hours";
        const hours_text = document.createElement('p');
        hours_text.classList.add('text');
        hours_text.innerHTML="Monday: 8am- 8pm </br> Tuesday: 8am- 8pm </br> Wednesday: 8am- 8pm </br> Thursday: 8am- 8pm </br> Friday: 8am- 10pm </br> Saturday: 10am- 10pm </br> Sunday: 12am- 8pm </br>";
        centerdiv.appendChild(hours);
        hours.appendChild(hours_title);
        hours.appendChild(hours_text);

        //location
        const location_title = document.createElement('h2');
        location_title.classList.add('title');
        location_title.textContent="Location";
        const location_text = document.createElement('p');
        location_text.classList.add('text');
        location_text.innerHTML=`234 Eldham Cove, at The Ethereal Water Shores</br> <img src=${coastali} alt='coastal town' id='coastal_town'>`;
        centerdiv.appendChild(location);
        location.appendChild(location_title);
        location.appendChild(location_text);

    content.appendChild(centerdiv);
}

