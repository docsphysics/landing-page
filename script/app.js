/* Create UL using JavaScript for each section on page */
const sectionArray = ['Section 1', 'Section 2', 'Section 3', 'Section 4', 'Section 5'];
const elmt = document.getElementById('header');

function createUl(elmt, arr) {
    let li, a, strng;
    const ul = document.createElement('ul');
    ul.id = "header-list";
    elmt.appendChild(ul);     // Appended ul to header

    arr.forEach(function(item) {
        li = document.createElement('li'); // Create a new list item
        a = document.createElement('a'); // Create a link
        strng = item.replace(/\s+/g, '').toLowerCase(); //Format section names
        a.strng = strng; //Format section names
        a.id = strng + '-link'; // Add an id tag
        a.innerHTML = item;

        /* Click link and scroll to section smoothly */
        a.addEventListener('click',
        function(){
            myFunction(this);
        });
        function myFunction(item){
            console.log(item.strng);
            document.getElementById(item.strng).scrollIntoView({behavior:"smooth"});
        }

        li.appendChild(a);
        ul.appendChild(li);
    });
};

createUl(elmt, sectionArray); // Call function


function myFunction(arr) {
    let arrPos, strng, minStrng, rect;
    let ymin = 1000;
    let imin = 0;
    const y = [];
    for (let i = 0; i<arr.length; i++){
        strng = arr[i].replace(/\s+/g, '').toLowerCase(); //Format section names
        let div = document.getElementById(strng);
        rect=div.getBoundingClientRect();
        y[i] = Math.abs(rect.top);
        if (y[i]<ymin) {
            ymin = y[i];
            imin = i;
            minStrng = strng;
        }
    }

    let elmt = document.getElementById(minStrng + '-link');
    elmt.style.backgroundColor = 'black';
    console.log(ymin);
    console.log(imin);
}

