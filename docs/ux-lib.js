
setTimeout(function(){ document.querySelector("html").style.display = 'opacity'; }, 0);

// Triggers when corporate-ui has finnised loading

document.addEventListener('corporate-ui-loaded', function(e) {

  document.body.className += ' done-loading';

});