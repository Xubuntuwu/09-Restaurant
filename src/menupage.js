export default menupage;
import smokedi from "../images/pexels-geraud-pfeiffer-6605207.png";
import crabcaki from "../images/aliet-kitchen-t7yR_y3IENE-unsplash.jpg";
import fritatti from "../images/pexels-kristina-gain-4103221.jpg";
import sushipi from "../images/vinicius-benedit--1GEAA8q3wk-unsplash.jpg";
import chipsi from "../images/julia-karnavusha-zWdBRmh8Gv8-unsplash.jpg";
import crabsandi from "../images/youjeen-cho-sBKLiRiunK0-unsplash.jpg";
import swimminbetti from "../images/olga-tsai-IQMCYVVa2Wc-unsplash.jpg";
import paelli from "../images/kaitlin-dowis-VjM2t7VH9Uo-unsplash.jpg";
import boati from "../images/riccardo-bergamini-O2yNzXdqOu0-unsplash.jpg";
import sardini from "../images/alex-teixeira-N8-bMqUMS8g-unsplash.jpg";





//background
function menupage(){
    const content = document.getElementById('content');
    const centerdiv = document.createElement('div');
    centerdiv.setAttribute('id', 'centerdiv');

    //menu title
    const menutitle= document.createElement('h1');
    menutitle.textContent= "Menu";
    menutitle.setAttribute('id', 'menu');
    centerdiv.appendChild(menutitle);

    //breakfast dishes
    const breakfastsdiv = document.createElement('div');
    breakfastsdiv.setAttribute('id', 'breakfastdiv');
    const breakfasttitle= document.createElement('h2');
    breakfasttitle.textContent="Breakfast";
    
    //breakfast1
    let breakfast1descript= "A delicious and healthy breakfast, comprised of avocado, smoked salmon, goat cheese, and capers.";
    let breakfast1image= smokedi;
    const breakfast1 = dishCreator('breakfast1', 'Smoked Salmon Avocado Toast',breakfast1descript, "$3", breakfast1image);
    //breakfast2
    let breakfast2descript= "A breakfast and a snack! Filled with protein and taste! This easy egg and crab cake will fill you up easily.";
    let breakfast2image=crabcaki;
    const breakfast2 = dishCreator('breakfast2', 'Easy Egg and Crab Cake',breakfast2descript, "$5", breakfast2image);
    //breakfast3
    let breakfast3descript= "A warm and yummy breakfast. Our seafood fritatta will surely keep you energized throughout the day! This meal is big enough to share between two people.";
    let breakfast3image=fritatti;
    const breakfast3 = dishCreator('breakfast3', 'Seafood Fritatta',breakfast3descript, "$7", breakfast3image);
    
    breakfastsdiv.appendChild(breakfasttitle);
    breakfastsdiv.appendChild(breakfast1);
    breakfastsdiv.appendChild(breakfast2);
    breakfastsdiv.appendChild(breakfast3);
    centerdiv.appendChild(breakfastsdiv);

    //lunch dishes
    const lunchdiv = document.createElement('div');
    lunchdiv.setAttribute('id', 'lunchdiv');
    const lunchtitle= document.createElement('h2');
    lunchtitle.textContent="Lunch";

    //lunch1
    let lunch1descript= "A plate of 7 pieces of sushi Of your choice!";
    let lunch1img=sushipi;
    const lunch1 = dishCreator('lunch1', 'Sushi Plate',lunch1descript, "$3", lunch1img);
    //lunch2
    let lunch2descript= "What does the Lochness monster call his favorite dish? Fish & Ships. So 'ave some fish and chips, mate.";
    let lunch2img=chipsi;
    const lunch2 = dishCreator('lunch2', 'Fish and Chips',lunch2descript, "$2", lunch2img);
    //lunch3
    let lunch3descript= "A delicious crab sandwich with a sweet homemade sauce and freshly caught crab. Aunt Betty goes out swimming every night to catch the freshest crabs for you!";
    let lunch3img= crabsandi;
    let lunch3img2=swimminbetti;
    const lunch3 = dishCreator('lunch1', 'Crab Sandwich',lunch3descript, "$3", lunch3img, lunch3img2);

    lunchdiv.appendChild(lunchtitle);
    lunchdiv.appendChild(lunch1);
    lunchdiv.appendChild(lunch2);
    lunchdiv.appendChild(lunch3);
    centerdiv.appendChild(lunchdiv);

    //dinner dishes
    const dinnerdiv = document.createElement('div');
    dinnerdiv.setAttribute('id', 'dinnerdiv');
    const dinnertitle= document.createElement('h2');
    dinnertitle.textContent="Dinner";

    //dinner1
    let dinner1descript= "A lovely paella big enough for 2 people! This delicious dish will warm you up from the inside.";
    let dinner1img=paelli;
    const dinner1 = dishCreator('dinner1', 'Paella',dinner1descript, "$7", dinner1img);
    //dinner2
    let dinner2descript= "A mouth wateringly delicious boat filled with sushi.";
    let dinner2img=boati;
    const dinner2 = dishCreator('dinner2', 'Sushi Boat',dinner2descript, "$6", dinner2img);
    //dinner3
    let dinner3descript= "A sizzling plate of grilled sardines with a side of baked potatoes and a bowl of veggies";
    let dinner3img=sardini;
    const dinner3 = dishCreator('dinner3', 'Grilled Sardines',dinner3descript, "$7", dinner3img);

    dinnerdiv.appendChild(dinnertitle);
    dinnerdiv.appendChild(dinner1);
    dinnerdiv.appendChild(dinner2);
    dinnerdiv.appendChild(dinner3);
    centerdiv.appendChild(dinnerdiv);

    //drinks
    const drinksdiv= document.createElement('div');
    drinksdiv.setAttribute('id', 'drinksdiv');
    const drinkstitle= document.createElement('h2');
    drinkstitle.textContent="Drinks";

    //drinkslist
    const drinkslistdiv = document.createElement('div');
    drinkslistdiv.classList.add('drinks');
    const drinkslist = document.createElement('ul');
    const drink1 = drinkmaker('Water (0.5L)', '$0.50');
    const drink2 = drinkmaker('Sparkling Water (0.5L)', '$1');
    const drink3 = drinkmaker('Coke (0.5L)', '$1');
    const drink4 = drinkmaker('Ginger Ale (0.5L)', '$1');
    drinkslist.appendChild(drink1);
    drinkslist.appendChild(drink2);
    drinkslist.appendChild(drink3);
    drinkslist.appendChild(drink4);
    drinkslistdiv.appendChild(drinkslist);

    drinksdiv.appendChild(drinkstitle);
    drinksdiv.appendChild(drinkslistdiv);
    centerdiv.appendChild(drinksdiv);

    content.appendChild(centerdiv);
}


function dishCreator(divid, name, descript, price, source, source2=undefined){
    const dishdiv = document.createElement('div');
    const dishname= document.createElement('h3');
    const dishdescript= document.createElement('p');
    const dishprice = document.createElement('span');
    const dishpic = document.createElement('img');


    dishpic.setAttribute('src', source);
    dishpic.classList.add('foodpic');
    dishprice.textContent= price;
    dishprice.classList.add('foodprice');
    dishdescript.textContent=descript;
    dishdescript.classList.add('fooddescript');
    dishname.textContent=name;
    dishname.classList.add('foodname');
    dishdiv.setAttribute('id', divid);
    dishdiv.classList.add('dish');


    dishdiv.appendChild(dishname);
    dishdiv.appendChild(dishdescript);
    dishdiv.appendChild(dishprice);
    dishdiv.appendChild(dishpic);
    if (source2){
        const dishpic2 = document.createElement('img');
        dishpic2.setAttribute('src', source2);
        dishpic2.classList.add('foodpic2');
        dishdiv.appendChild(dishpic2);
    }
    dishdiv.appendChild(dishdescript);

    return dishdiv;
}

function drinkmaker(name, price){
    const drink = document.createElement('li');
    const drinkprice =document.createElement('span');
    const drinkname = document.createElement('span');

    drinkprice.classList.add('drinkprice');
    drinkname.classList.add('drinkname');

    drinkprice.textContent= price;
    drinkname.textContent=name;

    drink.appendChild(drinkprice);
    drink.appendChild(drinkname);
    return drink;
}