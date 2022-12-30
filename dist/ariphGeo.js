"use strict";
function ArithGeo(arr) {
    var arithFlag = true, geoFlag = true;
    var diff = arr[1] - arr[0];
    for (var i = 2; i < arr.length; i++) {
        if ((arr[i] - arr[i - 1]) !== diff) {
            arithFlag = false;
        }
    }
    if (arithFlag) {
        return "Arithmetic";
    }
    else { // check for geometric pattern
        diff = arr[1] / arr[0];
        for (var i = 2; i < arr.length; i++) {
            if ((arr[i] / arr[i - 1]) !== diff) {
                geoFlag = false;
            }
        }
        if (geoFlag) {
            return "Geometric";
        }
        else {
            return "-1";
        }
    }
}
console.log(ArithGeo([5, 10, 15]));
console.log(ArithGeo([2, 4, 16, 24]));
