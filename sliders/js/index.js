$('#carouselExampleIndicators').on('slide.bs.carousel', animate)

wow = new WOW(
  {
	animateClass: 'animated',
	offset:       100,
	callback:     function(box) {
	  console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
	}
  }
);
wow.init();
function animate() {
  var section = document.createElement('section');
  section.className = 'section--purple wow fadeInDown';
  this.parentNode.insertBefore(section, this);
};