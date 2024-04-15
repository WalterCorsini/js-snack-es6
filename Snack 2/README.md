# SVOLGIMENTO 
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
## INPUT
- creo array di object "team";
- creo ciclo forEach
    - assicui alle chiavi "point" e "fouls" dei numeri random
- creo un array di object con le soli chiavi "name" e "fouls" tramite il metodo "map"
stampo in console.log il nuovo array