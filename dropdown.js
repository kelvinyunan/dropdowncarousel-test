const itemContainer = document.getElementById('itemContainer');
const hamburgerBtn = document.getElementById('hamburger');

hamburgerBtn.addEventListener('click',()=>{
    itemContainer.classList.toggle('hidden');
})