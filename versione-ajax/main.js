
$(document).ready(function() {

    // richiamo la funzione per la chiamata generale;
    chiamata();

    // richiamo la funzione per filtrare in base all'artista selezionato;
    filra_artist()

    // faccio partire la chiamata ajax al mio file dischi.php da cui ho convertito un array in oggetto json;
    function chiamata() {
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
    }


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

    // creo la funzione per stampare le options della select con handlebars;
    function stampa_option(artist) {

        // dichiaro le variabili per integrare handlebars;
        var source   = $('#artist-template').html();
        var template = Handlebars.compile(source);

        var context = {
            'author': artist.author
        }
        var html  = template(context);

        // appendo il tutto nella select;
        $('.artist').append(html);

    }

    // creo funzione per filtrare per artista;
    function filra_artist() {
        $('.artist').change(function () {

               // dichiaro una variabile che rappresenta il singolo elemento nell'elemento select;
               var artist = $(this).val();

               console.log(artist);

               // nascondi tutte le schede;

               $('.scheda').hide();

               $.ajax({
                   'url': 'db/dischi.php',
                   'method': 'GET',
                   'success': function(dischi) {
                       for (var i = 0; i < dischi.length; i++) {
                           var disk = dischi[i]
                           // se seleziono 'artist' mostro tutte le schede;
                           if (artist == disk.author) {
                               stampa_generale(disk)
                           } else if (artist == 'artist') {
                               stampa_generale(disk)
                           }

                       }
                   },
                   'error': function() {
                       console.log('si è verificato un errore');
                   }
               });
           });
    }

});
