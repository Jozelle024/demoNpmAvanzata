function caricaData(){

    setInterval(function(){
        var sunrise = 1485762037; // hour of sunrise in json openweathermap

        var data = moment(sunrise);
        var dataestesa = moment().format('MMMM Do YYYY, h:mm:ss a'); //.format change the format in the following ()
        console.log(dataestesa);
        var h1 = document.getElementById('data');
        h1.innerText = dataestesa;
    },1000);


}