# SVOLGIMENTO
Crea un array composto da 4 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto. (modificato) 


## INPUT
- creo array con 4 automobili con chiavi "marca","modello","alimentazione"(benzina,diesel,gpl,alettrico,metano).
- dichiaro variabili "autoBenzina", "autoDiesel", "autoResto"

## LOGIC
- utilizzando filter inserisco nei nuovi array le auto a seconda del la lora alimentazione
    se benzina un array con solo auto benzina
    se diesel un array con solo auto diesel
    altrimenti un array con le auto di diversa alimentazione da benzina o diesel

## LOGIC 2
- utilizzo forEach per ciclare "automobili"
    - utilizzo uno switch con condizione "curAuto.alimentazione"
        - se è uguale a benzina
            -inserisco elemento in variabile "autoBenzina"
        -se è uguale a diesel
            -inserisco elemento in variabile "autoDiesel
        altrimenti
            -inserisco i restanti elementi in autoResto

## OUTPUT
- stampo in console gli array creati