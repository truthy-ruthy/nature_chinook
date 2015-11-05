console.log('comment has loaded');

window.onload = function() {
    console.log('all files that this page needs have been loaded');

//basic selectos
//declare a selector named container
//access that container via document.getElementByID('name-of'id)
var container = document.getElementByID('content');
var monsters = ['wreck it Ralph', 'lion king giraffe', 'other monster'];

for (var baddie in monsters) {
  //create a new dom element using document.createElement('name-of-tag')
  var li= document.createElement('li');
  li.innerHTML = monsters[baddie];
  //append to container
  container.appendChild(li);

}

//now create an image1
var kittenImage= document.createElement('img');
//alt text (alt) - ADA compliancy text for the blind
kittenImage.alt = 'A cute random kitten';
//src= image source
kittenImmage.id = 'kitten';
kittenImage.src = "http://theheightsanimalhospital.com/clients/15389/images/playful-kitten-6683.jpg";
//append my element as a child to a selector
container.appendChild(kittenImage);
//modify the cuteness level of my kitten
//create a new selector by querying the DOM
//notice the use of CSS style selectors
//make things easy to remember
var kitten = document.querySelector('#kitten');
kitten.src ='http://i.telegraph.co.uk/multimedia/archive/02830/cat_2830677b.jpg';

var listItemsArray= docuement.getElementsByTagName('li');
console.log(listItemsArray);

for (var li in listItemsArray) {
  listItemsArray[li].innerHTML = 'we are the champions (my friend)';
}

var status = document.getElementByID('status-message');

//bind events to a DOM element
var body =document.getElementsByTagName('body')[0];
//we need
//mouse events
body.addEventListener('touchstart', function(event){
  console.log(event);
  console.log('ow you click me bro');
});

//touch events
body.addEventListener('', function() {
  //touchstart.log(event);
  //touchmove
  //touchend
  console.log('yo yo yo');
});
body.addEventListener('keyup' function(event) {
  //look for specific keys to be pressed
  if (event.keyCode == 13) {
    console.log('y u press enter so much yo?');
  }
  console.log(event.keyCode);
});
//
//var bodyTag= body[0];







}
//end window.onload
