//1 wpisanie nowego zadania do inputa
//2 zlapanie przycisku i miejsca gdzie chcemy umieścić nasz nowy element
var btn = $('#addButton');
var list = $('ul');
//3 Wywołanie funkcji kliknięcia na przycisk
btn.on('click', function() {
//4 tworzenie nowego elementu
var newTask = $('<li>');
//5 Złapać inputa (UWAGA - MUSI BYĆ WEWNATRZ ZADANIA CLICK)
var inp = $('input');
//6 Pobrać zawartość inputa (metoda - .val())
var inputValue = inp.val();
//7 Wstawienie wartośći do nowego elementu -> metoda text
newTask.text(inputValue);
//8 dodanie klasy, żeby nowy element listy ładnie wyglądał
newTask.addClass('newElement');
//9 Dodać go do listy
list.append(newTask);
//10 Czyszczenie inputa
inp.val('');
});
