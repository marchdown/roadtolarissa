var green = '#01863e',
		blue = '#1c4695',
		red = '#ec3221',
    white = '#fff'

var margin = {top: 0, right: 0, bottom: 0, left: 0},
    width = 750 - margin.left - margin.right
    height = 500 - margin.top - margin.bottom

function uniformRandom(n){
	return d3.range(n).map(function(i){
	  var p = [	Math.random()*width* .9 + width *(1 - .9)/2, 
	  					Math.random()*height*.9 + height*(1 - .9)/2]
	  return {x: p[0], y: p[1], p: p, i: i}
	})
}



function norm(v){
  return Math.sqrt(v[0]*v[0] + v[1]*v[1])
}

function calcAngle(a, b, c){
  var v1 = [b.x - a.x, b.y - a.y]
  var v2 = [c.x - b.x, c.y - b.y]
  
  var dot = v1[0]*v2[0] + v1[1]*v2[1]

  var ab = dist(a, b)
  var bc = dist(b, c)
  var ca = dist(c, a)
  console.log(v1[0]*v2[1] - v2[0]*v1[1])

  // return Math.acos((bc*bc + ab*ab - ca*ca)/(2*bc*ab))*180/Math.PI
  return Math.acos(dot/(norm(v1)*norm(v2)))*180/Math.PI
}

function dist(a, b){
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2))
}

function lessThan180(a, b, c){
  var v1 = [b.x - a.x, b.y - a.y]
  var v2 = [c.x - b.x, c.y - b.y]
  
  return v1[0]*v2[1] - v2[0]*v1[1] < 0
}