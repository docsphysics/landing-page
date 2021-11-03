/* Object for name section etc in Unordered list */
const ulObj = {
        sectID: ['section1', 'section2', 'section3', 'section4', 'section5'],
        navName: ['Section 1', 'Section 2', 'Section 3', 'Section 4', 'Section 5'],
        navID: ['section1-link', 'section2-link', 'section3-link', 'section4-link', 'section5-link'],
        sectNum: 5
}

const elmt = document.getElementById('header');

/* Create UL using JavaScript for each section on page */
function createUl(elmt, ulObj) {
    let li, a, strng;
    const ul = document.createElement('ul');
    ul.id = "header-list";
    elmt.appendChild(ul);     // Appended ul to header

    for (let i = 0; i<ulObj.sectNum; i++){
        li = document.createElement('li'); // Create a new list item
        li.className = 'listd';
        a = document.createElement('a'); // Create a link

        a.strng = ulObj.sectID[i]; //Section ID
        a.id = ulObj.navID[i]; // Add an id tag
        a.innerHTML = ulObj.navName[i]; // Text on navigation link

        /* Click link and scroll to section smoothly */
        a.addEventListener('click',
        function(){
            scrollFunction(this);
        });
        function scrollFunction(item){
            console.log(item.strng);
            document.getElementById(item.strng).scrollIntoView({behavior:"smooth"});
        }

        li.appendChild(a);
        ul.appendChild(li);
    };
};

createUl(elmt, ulObj); // Call function


function myFunction() {
    let header = document.getElementById('header-list');
    let links = header.getElementsByClassName('listd');
    let sectn = document.getElementsByClassName('sectn');

    let ymin = 1000;
    let imin = 0;
    let y;

    for (let i = 0; i<sectn.length; i++){
        y = Math.abs(sectn[i].getBoundingClientRect().top);
        if (y<ymin) {
            ymin = y;
            imin = i;
        }
    }

    links[imin].classList.toggle("liontop");

}


/*
function myFunction(ulObj) {
    let rect;
    let ymin = 1000;
    let imin = 0;
    const y = [];
    for (let i = 0; i<ulObj.sectNum; i++){
        let div = document.getElementById(ulObj.sectID[i]);
        rect=div.getBoundingClientRect();
        y[i] = Math.abs(rect.top);
        if (y[i]<ymin) {
            ymin = y[i];
            imin = i;
        }
    }

    document.getElementById(ulObj.navID[imin]).classList.toggle("liOnTop");

    console.log(ymin);
    console.log(imin);
}
*/
