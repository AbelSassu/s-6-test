document.getElementById('searchIcon').addEventListener('click', function() {
    document.getElementById('searchInput').classList.toggle('d-none');
});


const items = document.querySelectorAll('.carousel .carousel-item')
function carosello(items){
items.forEach((el) => {
const minPerSlide = 4   
let next = el.nextElementSibling
for (let i=1; i<minPerSlide; i++) {
if (!next) {           
    next = items[0]
  }
let cloneChild = next.cloneNode(true)
el.appendChild(cloneChild.children[0])
next = next.nextElementSibling
}
})
}
carosello(items)
