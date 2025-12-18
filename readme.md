🎮 Projekt "Twoja Biblioteka Gier"  pozwala na stworzeniu własnej kolekcji gier składającej się z różnych gier, ich tytułu, dewelopera, opisu, roku wydania oraz statusu czy przeszedłeś daną grę lub nie. 

❓ Strona umożliwia usuwanie, edytowanie oraz przeglądaniu listy gier, którą można sortować poprzez nazwę (od a do z, lub od z do a) lub poprzez status.

❔ Aby dodać grę wystarczy kliknąć "Dodaj grę", uzupełnić wszystkie dane i kliknąć przycisk zapisz grę.

🀄 Technologoie użyte w projekcie to: EJS, CSS, JavaScript 




⭐ Lista endpointów:

> GET / - strona główna
> 
> GET /list - lista gier
> 
> GET /add, POST /add - dodawanie gier
> 
> GET /edit/:id, POST /edit/:id - edytowanie poszczególnej gry
> 
> POST /delete/:id - usuwanie poszczególnej gry
> 
> GET /game/:id - szczegóły poszczególnej gry





🛫 Aby uruchomić stronę należy najpierw sklonować repozytorium github poprzez komendę:

> git clone https://github.com/arturvegas/J231-Twoja-Biblioteka-Gier.git

Następnie przeczytać i postępować zgodnie z plikiem docker.txt następnie uruchomić konsolę CMD
i wpisać "cd {lokalizacja projektu np: C:\\Users\\User\\Desktop\\4J231}" następnie "npm start".




✡️ Autor: Artur Wykurz




📜 Licencja:

Copyright 2025 Artur Wykurz

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

