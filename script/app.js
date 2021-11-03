/* Object for name section etc in Unordered list */
const ulObj = {
        navName: ['Section 1', 'Section 2', 'Section 3', 'Section 4', 'Section 5'],
        sectNum: 5
}


/* Create UL using JavaScript for each section on page */
function createUl(ulObj) {
    let li, a, strng;
    const elmt = document.getElementById('header');
    const ul = document.createElement('ul');
    ul.id = "header-list";
    elmt.appendChild(ul);     // Appended ul to header

    let sectn = document.getElementsByClassName('sectn');


    for (let i = 0; i<ulObj.sectNum; i++){
        li = document.createElement('li');  // Create a new list item
        li.className = 'li-inactive';             // Add class name to li
        a = document.createElement('a');    // Create a link
        a.innerHTML = ulObj.navName[i];     // Text on navigation link

        /* Click link and scroll to section smoothly */
        a.addEventListener('click',
        function(){
            scrollFunction();
        });
        function scrollFunction(){
            document.getElementById(sectn[i].id).scrollIntoView({behavior:"smooth"});
        }

        li.appendChild(a);
        ul.appendChild(li);
    };
};

createUl(ulObj); // Call function




function myFunction() {
    let header = document.getElementById('header-list');
    let links = header.getElementsByClassName('li-inactive');
    let sectn = document.getElementsByClassName('sectn');

    let ymin = 1000;
    let imin = 0;
    let y;

    for (let i = 0; i<sectn.length; i++){
        if (links[i].className !== 'li-inactive'){
            links[i].classList.remove('li-active');
        }
        y = Math.abs(sectn[i].getBoundingClientRect().top);
        if (y<ymin) {
            ymin = y;
            imin = i;
        }
    }

    links[imin].classList.add('li-active');

}