document.querySelector( 'button' ).addEventListener( 'click', getData );
function getData (e) {
    const city = document.getElementById( "city-search" ).value;
    if ( city.trim() !== "" ) {
        fetch( "https://developers.zomato.com/api/v2.1/locations?query=" + city,
            {
                method: 'GET',
                headers: {
                    "user-key": "77d218a2fe664722c3b02a9d403804c4"
                },
                //body:'{"status":true}'
            } )
            .then( ( res ) => res.json() )
            .then( ( data ) => {
                const locationFound="";
                const location = data.location_suggestions.length > 0 ?
                    data.location_suggestions[ 0 ] : {
                        entity_type: "",
                        title: "Not Found",
                        city_name: "For query" + city,
                        country_name: ""
                    };
                document.getElementById( "city-title" ).innerHTML = location.title;
                document.getElementById( "city-name" ).innerHTML = location.city_name;
                document.getElementById( "entity-type" ).innerHTML = location.entity_type;
                const mapLink=document.getElementById( 'map-link' );
                if ( locationFound ) {
                    mapLink.classList.remove( 'hide' );
                    mapLink.href = "some link";
                } else {
                    mapLink.classList.add( "hide" );
                }

            });
        e.preventDefault();
    }
}