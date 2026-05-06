//write a function to alert if overweight (15kg) baggage

let check = () => {

    let weight = parseInt(document.getElementById('weight').value);

    alert('Checking Baggage weight: ' + weight + 'kg');

    if(weight > 15){

        alert(`Baggage is overweight! Remove ${weight-15} weight.`);

        document.getElementById('removed').style.display = 'block';
        document.getElementById('remB').style.display = 'block';

    }
    else{

        alert('Baggage OK. Proceed.');

        document.getElementById('removed').style.display = 'none';
        document.getElementById('remB').style.display = 'none';
    }
}

let remove = () => {

    let weight = parseInt(document.getElementById('weight').value);

    let removed = parseInt(document.getElementById('removed').value);

    let newWeight = weight - removed;

    document.getElementById('weight').value = newWeight;

    alert('Updated Weight: ' + newWeight + 'kg');

    if(newWeight <= 15){

        alert('Weight is OK to proceed.');

        document.getElementById('removed').style.display = 'none';
        document.getElementById('remB').style.display = 'none';
    }
    else{

        alert('Still overweight!');
    }
}