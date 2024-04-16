# SVOLGIMENTO
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.

## INPUT
- creo array di oggetti con persone che abbiano come chiavi "nome","cognome","eta"
- dichiaro due nuovi array "personeMagg" e "personeMin" 

## LOGICA
- creo un ciclo con il metodo forEacg per ciclare l'array d persone
- creo un if
    -se eta della persona corrente è maggiore uguale a 18
        -pusho nel nuovo array "personeMagg"
    altrimenti
        -"pusho nel nuovo array "personeMin"
## OUTPUT
- stampo in console array PersoneMagg con messaggio  puo guidare
- stampo in console array PersoneMagg con messaggio  non puo guidare