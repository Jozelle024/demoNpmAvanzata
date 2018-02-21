function caricaData() {

    setTimeout(function () {

        moment.locale('it');

        var sunrise = 1485762037; // hour of sunrise in json openweathermap
        var oggi = moment(); // date of today 
        var scadenza = oggi.add(30, 'days');
        console.log(oggi);
        var data = moment.unix(sunrise);

        var dataestesa = data.format('h:mm:ss'); //.format change the format in the following ()
        var dataintera = data.format('LLL');
        var datasettimana = data.format('LLLL');
        var datascadenza = scadenza.format('LLLL');

        /*
        var p = document.createElement('p');
        var p1 = document.createElement('p');
        var p3 = document.createElement('p');
        var p4 = document.createElement('p');

        p.innerText = dataestesa;
        p1.innerText = dataintera;
        p3.innerText = datasettimana;
        p4.innerText = datascadenza;

        var h1 = document.getElementById('sezione');

        h1.appendChild(p);
        h1.appendChild(p1);
        h1.appendChild(p3);
        h1.appendChild(p4);
        */
        addP('sezione', dataestesa);
        addP('sezione', dataintera);
        addP('sezione', datasettimana);
        addP('sezione', datascadenza);

    }, 1000);

    var btn = document.getElementById('btnShow');
    btn.addEventListener('click', function () {

        for (var i = 0; i < 50; i++) {
            addTagh(i);
        }
    });

};

function addP(id, content) {
    var p = document.createElement('p');
    var h1 = document.getElementById(id);
    p.innerText = content;
    h1.appendChild(p);
}

function addTagh(num) {
    var h1 = document.createElement('h1');
    var contenitore = document.getElementById('sezione2');
    h1.innerText = num;
    h1.style.backgroundColor = 'pink';
    contenitore.append(h1);

}