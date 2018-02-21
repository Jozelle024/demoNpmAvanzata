function caricaData(){

    setTimeout(function(){
        moment('it');
        var sunrise = 1485762037; // hour of sunrise in json openweathermap

        var data = moment.unix(sunrise);
        var dataestesa = data.format('h:mm:ss'); //.format change the format in the following ()
        var dataintera = data.format('LLL');
        var datasettimana = data.format('LLLL')
        var p = document.createElement('p');
        var p1 = document.createElement('p');
        var p3 = document.createElement('p');
        p.innerText = dataestesa;
        p1.innerText = dataintera;
        p3.innerText = datasettimana;
        var h1 = document.getElementById('sezione');
        h1.appendChild(p);
        h1.appendChild(p1);
        h1.appendChild(p3);

    }, 1000) 

};