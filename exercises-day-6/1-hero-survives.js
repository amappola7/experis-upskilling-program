/**
 * ¿Va a sobrevivir?

Un héroe se dirige al castillo para completar su misión. Sin embargo, le han dicho que el castillo está rodeado por un par de poderosos dragones.
cada dragón necesita 2 balas para ser derrotado, nuestro héroe no tiene idea de cuántas balas debe cargar.

Responda a la pregunta y devuelva true si es así, de lo contrario false :)
 */

const heSurvives = (bullets, dragons) => {
    if(typeof bullets == "boolean" || typeof dragons == "boolean") {
        throw Error;
    } else if (isNaN(bullets) || bullets < 0 ) {
        throw Error;
    } else if (isNaN(dragons) || dragons < 0 ) {
        throw Error;
    };

    return bullets >= dragons * 2 ? true : false;
};

console.log(heSurvives(1, "a"));