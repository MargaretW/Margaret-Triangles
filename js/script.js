function dataBox(){
var triangles = ["equilateral","isosceles","scalene"];
var x = parseInt (document.getElementById("x"). value);
var y = parseInt (document.getElementById("y").value);
var z = parseInt (document.getElementById("z"). value);
if ((x === y) && (x === z)) {
      alert ("It is an " + triangles[0] + " triangle");
} else if
      ((x === y) || (y === z) || (x === z)) {
      alert ("It is an "+ triangles[1] + " triangle.");
} else if
        ((x+y<=z) || (y+z<=x) || (x + z<= y)) {
       alert ("not a triangle")
} else {
        alert("The figure is a "+ triangles[2] + " triangle");
}
}
