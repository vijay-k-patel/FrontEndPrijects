document.getElementById( 'getText' ).addEventListener( 'click', getText );
//document.getElementById('getJson').addEventListener( 'click', getJson );

function getText () {
    //console.log("but")
    fetch( 'sample.txt' )
        .then( ( result ) => result.text() )
        //.then( ( data ) => console.log( data ) )
        .then( ( data ) => {
            let output = '<h1>data</h1>';
            document.getElementById( 'output' ).innerHTML = data;
        })
        
}
//function getJson () {
//    //console.log( "button" );
//    fetch( 'user.json' )
//        .then( ( res ) => res.json() )
//        //.then((data)=>console.log(data))
//        .then( ( data ) => {
//            let output = '<h2>Users</h2>';
//            data.forEach( function ( user ) {
//                output += `<ul>
//                <li>Id: ${user.id}</li>
//                <li>Name: ${user.Name}</li>
//                </ul>`;
//            } );
//            document.getElementById( 'output' ).innerHTML = output;
//        })
//}
