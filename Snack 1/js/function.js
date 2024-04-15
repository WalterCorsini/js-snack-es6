/**
 * Description: creates array objects in a string
 * @param {object} elem
 * @returns {string} string
 */
function createList(elem){
    let string ="";
    elem.forEach((element,index) => {
        string += `
            <li><strong>Modello bici:</strong> ${element.name}</li>
            <li><strong>Prezzo :</strong> ${element.price},00 euro</li><br>
        `;
    });
    return string;
}


/**
 * Description: look for the item that costs the least
 * @param {object} elem
 * @returns {number}
 */
function minPriceSearch(elem){
    let count = 0;
    elem.forEach((element,index) => {
        if(count > element.price || count == 0){
            count = index;
        }
    });
    return count;
}