
window.onload=function() {
	// Get the Object by ID
	var a = document.getElementById("clockSVG");
	// Get the SVG document inside the Object tag
	var svgDoc = a.contentDocument;
	// Get one of the SVG items by ID;
	var sec = svgDoc.getElementById("sec");
  var min = svgDoc.getElementById("min")
  var hour = svgDoc.getElementById("hour")

  setInterval(function() {
    function setTime(element, degree) {
      element.setAttribute('transform', 'rotate('+ degree +' 50 50)')
    }
    var date = new Date()
    setTime(sec, 6*date.getSeconds())  
    setTime(min, 6*date.getMinutes())
    setTime(hour, 30*(date.getHours()%12) + date.getMinutes()/2)
  }, 1000)

};



