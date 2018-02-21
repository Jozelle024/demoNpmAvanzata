function caricaData(){

    setTimeout(function(){
        var sunrise = 1485762037; // hour of sunrise in json openweathermap

        var data = moment(sunrise);
        var dataestesa = moment().format('MMMM Do YYYY, h:mm:ss a'); //.format change the format in the following ()
        var p = document.createElement('p');
        p.innerText = dataestesa;
        var h1 = document.getElementById('sezione');
        h1.appendChild(p);

    }, 1000) 

};