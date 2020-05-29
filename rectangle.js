module.exports = (x, y, callback)=> {
    if(x <= 0 || y <= 0){
        callback(new Error(`Rectangle dimensions should be greater than zero.  The value passed in were: ${x}, ${y}`))
    } else{
        setTimeout(() =>        //setTimeout is only used here to simulate a delay in retreiving data
            callback(null, {

                perimeter: () => 2 * (x+y),
                area: () => x * y
            }), 
            2000
        );
    }
}

