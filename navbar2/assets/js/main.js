let drpdownlist = document.querySelector(".drpdownlist");
let sublist = document.querySelector(".sub-list");
let arrowcat = document.querySelector(".arrow-cat");
let switchdropdownlist = true;

let sublisttowbtn = document.querySelector(".sub-list-tow-btn");
let sublisttow = document.querySelector(".sub-list-tow");
let arrsv = document.querySelector(".arrow-sv");
let switchdropdownlisttow = true;
/* NAV BAR VERTCAIL */
let shadow = document.querySelector(".shadow-list");
let mainlist = document.querySelector(".mainlist");
let vlist = document.querySelector(".v-list");
let mainlistswitch = true;






let search = document.querySelector(".search-link");
let subheader = document.querySelector(".subheader-search");
let searchswathch = true;


let index_massege = document.querySelector(".index-massege");
let massege = document.querySelector(".massege");
let indexswitch = true;


let alaret = document.querySelector(".alaret-item");
let bell = document.querySelector(".ball-alaret");
let alaretswitch = true;

let userlistacount = document.querySelector(".userlistacount");
let itemuserimge = document.querySelector(".item-user-imge");
let userlistacountswitch = true;

let cataogrecenter = document.querySelector(".cataogre-center");
let catogre = document.querySelector(".catogre");
let catogreswitch = true;





//***** */
cataogrecenter.addEventListener("click", cataogrecenterfun);
function cataogrecenterfun() {
    if (catogreswitch === true) {
        catogre.classList.add("catogre-viwe");
        catogreswitch = false;

        userlistacount.classList.remove("saerch-viwe");
        alaret.classList.remove("saerch-viwe");
        index_massege.classList.remove("saerch-viwe");
        subheader.classList.remove("saerch-viwe");
        vlist.classList.remove("v-list-show");
        sublisttow.classList.remove("show-sublist");
        shadow.style.display = "none";

        userlistacountswitch = true;
        alaretswitch = true;
        indexswitch = true;
        searchswathch = true;
        mainlistswitch = true;
        switchdropdownlisttow = true;
        switchdropdownlist = true;



    }
    else {
        catogre.classList.remove("catogre-viwe");
        catogreswitch = true;
    }
}


itemuserimge.addEventListener("click", itemuserimgefun);
function itemuserimgefun() {
    if (userlistacountswitch === true) {
        userlistacount.classList.add("saerch-viwe");
        userlistacountswitch = false;

        alaret.classList.remove("saerch-viwe");
        index_massege.classList.remove("saerch-viwe");
        subheader.classList.remove("saerch-viwe");
        vlist.classList.remove("v-list-show");
        sublisttow.classList.remove("show-sublist");
        shadow.style.display = "none";
        catogre.classList.remove("saerch-viwe");


        alaretswitch = true;
        indexswitch = true;
        searchswathch = true;
        mainlistswitch = true;
        switchdropdownlisttow = true;
        switchdropdownlist = true;
        catogreswitch = true;


    }
    else {
        userlistacount.classList.remove("saerch-viwe");
        userlistacountswitch = true;
    }
}





bell.addEventListener("click", alaretfun);
function alaretfun() {
    if (alaretswitch === true) {
        alaret.classList.add("saerch-viwe");
        alaretswitch = false;

        userlistacount.classList.remove("saerch-viwe");
        index_massege.classList.remove("saerch-viwe");
        subheader.classList.remove("saerch-viwe");
        vlist.classList.remove("v-list-show");
        sublisttow.classList.remove("show-sublist");
        shadow.style.display = "none";
        catogre.classList.remove("saerch-viwe");
        userlistacount.classList.remove("saerch-viwe");

        userlistacountswitch = true;
        indexswitch = true;
        searchswathch = true;
        mainlistswitch = true;
        switchdropdownlisttow = true;
        switchdropdownlist = true;
        catogreswitch = true;
    }
    else {
        alaret.classList.remove("saerch-viwe");
        alaretswitch = true;
    }
}




massege.addEventListener("click", massegefun);
function massegefun() {
    if (indexswitch === true) {
        index_massege.classList.add("saerch-viwe");
        indexswitch = false;

        userlistacount.classList.remove("saerch-viwe");
        alaret.classList.remove("saerch-viwe");
        subheader.classList.remove("saerch-viwe");
        vlist.classList.remove("v-list-show");
        sublisttow.classList.remove("show-sublist");
        shadow.style.display = "none";
        catogre.classList.remove("saerch-viwe");
        userlistacount.classList.remove("saerch-viwe");
        alaret.classList.remove("saerch-viwe");

        userlistacountswitch = true;
        alaretswitch = true;
        searchswathch = true;
        mainlistswitch = true;
        switchdropdownlisttow = true;
        switchdropdownlist = true;
        catogreswitch = true;
    }
    else {
        index_massege.classList.remove("saerch-viwe");
        indexswitch = true;
    }
}






search.addEventListener("click", searchfun);

function searchfun() {
    if (searchswathch === true) {
        subheader.classList.add("saerch-viwe");
        searchswathch = false;


        userlistacount.classList.remove("saerch-viwe");
        alaret.classList.remove("saerch-viwe");
        index_massege.classList.remove("saerch-viwe");
        vlist.classList.remove("v-list-show");
        sublisttow.classList.remove("show-sublist");
        shadow.style.display = "none";
        catogre.classList.remove("saerch-viwe");
        userlistacount.classList.remove("saerch-viwe");
        alaret.classList.remove("saerch-viwe");
        index_massege.classList.remove("saerch-viwe");

        userlistacountswitch = true;
        alaretswitch = true;
        indexswitch = true;
        mainlistswitch = true;
        switchdropdownlisttow = true;
        switchdropdownlist = true;
        catogreswitch = true;


    }
    else {
        subheader.classList.remove("saerch-viwe");
        searchswathch = true;
    }
}


//***** */

mainlist.addEventListener("click", mainlistfun);
function mainlistfun() {
    if (mainlistswitch === true) {
        vlist.classList.add("v-list-show");
        shadow.style.display = "flex";
        mainlistswitch = false;

        userlistacount.classList.remove("saerch-viwe");
        alaret.classList.remove("saerch-viwe");
        index_massege.classList.remove("saerch-viwe");
        subheader.classList.remove("saerch-viwe");
        sublisttow.classList.remove("show-sublist");
        catogre.classList.remove("saerch-viwe");
        userlistacount.classList.remove("saerch-viwe");
        alaret.classList.remove("saerch-viwe");
        index_massege.classList.remove("saerch-viwe");
        subheader.classList.remove("saerch-viwe");

        userlistacountswitch = true;
        alaretswitch = true;
        indexswitch = true;
        searchswathch = true;
        switchdropdownlisttow = true;
        switchdropdownlist = true;
        catogreswitch = true;


    }
    else {
        vlist.classList.remove("v-list-show");
        shadow.style.display = "none";
        mainlistswitch = true;
    }
}

drpdownlist.addEventListener("click", drpdownlistfun);

function drpdownlistfun() {
    if (switchdropdownlist === true) {
        sublist.classList.add("show-sublist");
        arrowcat.classList.toggle("arr-sv")
        switchdropdownlist = false;

    
    }
    else {
        sublist.classList.remove("show-sublist");
        arrowcat.classList.remove("arr-sv");
        switchdropdownlist = true;
    }
}

sublisttowbtn.addEventListener("click", sublisttowbtnfun);

function sublisttowbtnfun() {
    if (switchdropdownlisttow === true) {
        sublisttow.classList.add("show-sublist");
        arrsv.classList.toggle("arr-sv");
        switchdropdownlisttow = false;

       


    }
    else {
        sublisttow.classList.remove("show-sublist");
        arrsv.classList.remove("arr-sv");
        switchdropdownlisttow = true;
    }
}





/* close clilk empty page with navbar */
const toggle = document.getElementById('toggle');
const slider = document.getElementById('sidebar');
const serchdiv = document.getElementById('serchdiv');
const item1 = document.getElementById('item1');

const navbar = Array.from(document.querySelectorAll('#serviessite>ul>li'));
document.onclick = function (e) {
    if (e.target.id !== 'sidebar' && e.target.id !== 'toggle' && e.target.id !== 'serchdiv' && e.target.id !== 'serchform' && e.target.id !== 'item1') {

        vlist.classList.remove("v-list-show");
        shadow.style.display = "none";
        mainlistswitch = true;
    }
}