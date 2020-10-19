const form = document.getElementById( 'form' );
const username = document.getElementById( 'username' );
//event listener
form.addEventListener( 'submit', function( e ) {
    //console.log( "submit" );
    e.preventDefault();
    if ( username.value == "" ) {
        //alert("username is null")
        ShowError( username );
    } else {
        showSuccess( username );
    }
} );
function ShowError (input) {
    const form = input.parentElement;
    form.className = "error";

}
function showSuccess(input){
    const form = input.parentElement;
    form.className = "success";
}