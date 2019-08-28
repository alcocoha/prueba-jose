function countOccurences(strValue) {

    const letras = strValue.split("");
    const cuenta = [];
    const repeticiones = [];

    for (let i = 0; i < letras.length; i++) {
        if(cuenta.indexOf(letras[i]) === -1){
            cuenta.push(letras[i]);
            repeticiones.push( 1 );
        } else {
            repeticiones[cuenta.indexOf(letras[i])] ++;
        }
    }

    return cuenta.map((item, index) => `${item}: ${repeticiones[index]}`);

}
console.log(countOccurences("Hello World"));
console.log(countOccurences("Purple People Eater"));