var indicator = document.querySelector('#status-dot');
var button = document.querySelector('#button');

button.addEventListener('mouseenter', function(){
        indicator.classList.remove('ordered');
        indicator.classList.add('delivered');
})
button.addEventListener('mouseleave', function(){
        indicator.classList.add('ordered');
        indicator.classList.remove('delivered');
})