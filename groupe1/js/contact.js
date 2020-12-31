/*
 * contact.js
 * @author Lilian Strub
 */

first_input.focus();
soumis = false;
function myFunction () { 
    soumis = true;
    document.forms[0].submit(); 
}

function msg () { 
    if (!soumis)
    	return "Votre demande a bien été envoyée.\nMerci !";
}
