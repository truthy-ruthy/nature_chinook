

window.onload = function()

initialize: function(domSelector) {
    console.log('initializing component');
    this.domElement = document.createElement('img'); //<img />
  }
  render: function(imageSrc) {
    this.domElement.src = imageSrc;
    domSelector.appendChild(this.domElement);
  },


  //hovering over menu links to make them larger
