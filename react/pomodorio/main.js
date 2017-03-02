setInterval(function() {
  function r(el, deg) {
    el.setAttribute('transform', 'rotate('+ deg +' 50 50)')
  }
  var d = new Date()
  r(secondhand, 6*d.getSeconds())  
  r(minutehand, 6*d.getMinutes())
  r(hourhand, 30*(d.getHours()%12) + d.getMinutes()/2)
}, 1000)