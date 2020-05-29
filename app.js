const rect = require('./rectangle.js')

function solveRect(l,w){
    console.log(`Solving for rectangle with dimensions ${l}, ${w}`);

    if (l <= 0 || w <= 0){
        console.log(`Rectangle dimensions should be greater than zero.  The value passed in were: ${l}, ${w}`)
    } else {
        console.log(`Area of Rectangle: ${rect.area(l,w)}`);
        console.log(`Perimeter for rectangle: ${rect.perimeter(l,w)}`)
    }
}

solveRect(2,4)
solveRect(3,5)
solveRect(0,5)
solveRect(-3,5)