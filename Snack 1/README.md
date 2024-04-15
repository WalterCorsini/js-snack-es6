# SVOLGIMENTO
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

## INPUT
- creo una elemento lista con id "list" in pagina per inserire l'elenco delle biciclette
- do un id al contenitore della lista "result"
- creo l'array di object "market"
- dichiaro la variabile per la stringa da stampare in pagina "stringList"

## LOGIC
- invoco la funzione createList a cui passo come parametro l'array di oggetti "market"
    - dichiaro una variabile "string"
    - creo un ciclo forEach
        - concateno alla variabile string un elmento della lista con i valore delle chiavi "name" e "price"
    - ritorno la variabile "string";
- salvo il risultato della funzione nella variabile "stringList"
- invoco la funzione minPriceSearch a cui passo come parametro l'array di oggetti "market"
    - dichiaro la variabile "count" che servira a tenere conte dell'indice in cui è situato l'oggetto che costa meno.
    - creo un ciclo forEach con i parametri element e index
        - se la variabile count è maggiore del prezzo corrente o la variabile "count è uguale a 0
            - alla varabile count viene associato il valore dell'indice
    -ritorno il valore dell 'indice.
- salvo nella variabile "index" il valore della funzione minPriceSearch

## OUTPUT
- nell'id del DOM "list" stampo la lista di oggetti dell'array di object
-nell' id del DOM "result" stampo l'oggetto che costa di meno
