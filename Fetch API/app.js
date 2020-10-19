document.getElementById( 'getText' ).addEventListener( 'click', getText );
//document.getElementById('getJson').addEventListener( 'click', getJson );
//document.getElementById('getApi').addEventListener( 'click', getApi );

function getText () {
    //console.log("but")
    fetch( 'https://jsonplaceholder.typicode.com/posts' )
        .then( ( result ) => result.json() )
        //.then( ( data ) => console.log( data ) )
        .then( ( data ) => {
            let output = '<h1>data</h1>';
            data.forEach( function( post ) {
                output += `<ul>
                <li>ID:${post.id}</li>
                <li>Title:${post.title}</li>
                </ul>`
            } )
            document.getElementById( 'output' ).innerHTML = output;
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
//function getApi () {
//    //console.log( "button" );
//    fetch('https://jsonplaceholder.typicode.com/posts')
//        .then( ( res ) => res.json() )
//        //.then((data)=>console.log(data))
//        .then( ( data ) => {
//            let output = '<h2>Users</h2>';
//            data.forEach( function ( posts ) {
//                output += `<ul>
//                <li>Id: ${posts.id}</li>
//                <li>Title: ${posts.title}</li>
//                </ul>`;
//            } );
//            document.getElementById( 'output' ).innerHTML = output;
//        })
//}