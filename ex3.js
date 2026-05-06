// Part 1
// Sum of multiples of a or b in list l

let listEuler1 = (a, b, l) => {

    let sum = 0;

    for(let i = 0; i < l.length; i++){

        if(l[i] % a == 0 || l[i] % b == 0){

            sum += l[i];
        }
    }

    return sum;
}


// Part 2
// Sum of multiples of elements in list a (length 2)

let listEuler2 = (a, l) => {

    let sum = 0;

    for(let i = 0; i < l.length; i++){

        if(l[i] % a[0] == 0 || l[i] % a[1] == 0){

            sum += l[i];
        }
    }

    return sum;
}


// Part 3
// Sum of multiples of elements in list a (any length)

let listEuler3 = (a, l) => {

    let sum = 0;

    for(let i = 0; i < l.length; i++){

        for(let j = 0; j < a.length; j++){

            if(l[i] % a[j] == 0){

                sum += l[i];
                break;
            }
        }
    }

    return sum;
}


// Exercise 3 - Part 1

let eulerlist = () => {

    let a = parseInt(document.getElementById('a1').value);

    let b = parseInt(document.getElementById('b1').value);

    let l = document.getElementById('l').value
            .split(" ")
            .map(x => parseInt(x));

    let result = listEuler1(a, b, l);

    alert('Sum: ' + result);
}


// Exercise 3 - Part 2

let euler2Lists = () => {

    let a = document.getElementById('aList').value
            .split(" ")
            .map(x => parseInt(x));

    let l = document.getElementById('mList').value
            .split(" ")
            .map(x => parseInt(x));

    let result = listEuler2(a, l);

    alert('Sum: ' + result);
}


// Exercise 3 - Part 3

let euler2Lists1 = () => {

    let a = document.getElementById('aList').value
            .split(" ")
            .map(x => parseInt(x));

    let l = document.getElementById('mList').value
            .split(" ")
            .map(x => parseInt(x));

    let result = listEuler3(a, l);

    alert('Sum: ' + result);
}