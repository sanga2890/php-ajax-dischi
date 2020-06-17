
$(document).ready(function() {

    // faccio partire la chiamata ajax al mio file dischi.php da cui ho convertito un array in oggetto json;
    $.ajax({
        'url': 'db/dischi.php',
        'method': 'GET',
        'success': function(dischi) {

            // richiamo la funzione per ciclare i dischi
            cicla_dischi(dischi);
        },
        'error': function() {
            console.log('si è verificato un errore');
        }
    });

    // creo la funzione per ciclare i dischi;
    function cicla_dischi(dischi) {
        for (var i = 0; i < dischi.length; i++) {
            var disco = dischi[i];
            // richiamo la funzione per la stampa in pagina;
            stampa_generale(disco);
            stampa_option(disco);
        }
    }

    // creo la funzione per la stampa in pagina con handlebars;
    function stampa_generale(info) {

        // dichiaro le variabili per integrare handlebars;
        var source   = $('#disk-template').html();
        var template = Handlebars.compile(source);

        var context = {
            'title': info.title,
            'author': info.author,
            'year': info.year,
            'poster': info.poster,
            'genre': info.genre
        }

        var html  = template(context);

        // appendo il tutto nel contenitore con classe playlist;
        $('.playlist').append(html);
    }

    function stampa_option(artist) {

        // dichiaro le variabili per integrare handlebars;
        var source   = $('#artist-template').html();
        var template = Handlebars.compile(source);

        var context = {
            'author': artist.author
        }
        var html  = template(context);

        // appendo il tutto nel contenitore con classe playlist;
        $('.artist').append(html);

    }
});
