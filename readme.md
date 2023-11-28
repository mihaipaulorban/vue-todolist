# Todolist con Vue JS

## Consegna

Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:

- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
  MILESTONE 1
  Stampare all'interno di una lista HTML un item per ogni todo.
  Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
  MILESTONE 2
  Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
  MILESTONE 3
  Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
  Bonus:
  1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
  2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

## Logica della webapp

Per gestire la lista come oggetti ho rappresentato i ToDo all'interno di una variabile di nome `todos`, ogni oggetto ha due proprietá: `text` e `completed`.

- La proprietà `text`contiene il testo che viene inserito dall'utende nell'input
- La proprietà `completed`controlla se il Todo é stato fatto o no con i checkbox, usando il `v-model`dentro <input>, che viene collegato a `todo.completed`.

Quando qualcuno aggiunge un nuovo Todo con l'input e il testo inserito, lo stato `completed` viene impostato automaticamente su false e l'oggetto viene aggiunto all'array.

Per far si che i pulsanti funzionino e soprattutto il label funzioni ho collegato all'input type text con il `v-model` il dato `todoText` che quindi sostiuirà ad esso il testo inserito dall'utente, e con il `@click` viene richiamata la funzione `addTodo`, che fa un ciclo, aggiungendo `trim` per eliminare eventuali spaziature, nel quale se il contenuto della stringa è diverso da vuoto, ci pusha dentro un dato text, con all'interno il `todoText` e un valore booleano per completed che di base è `false`, e infine svuota l'input type settandolo di nuovo a vuoto.
