
let name = "";

while (true) {
    name = prompt('Quel est ton nom ?  Allez,il faut juste mettre au moins une lettre!');

    if (name.length > 0) {
        //console.log(name) pour verifier le name
        break;
    }
    else
    	alert("Bah? Un petit blaze de rien du tout, siouplé ");

}
console.log(`Bien le bonjour, ${name}!`);
