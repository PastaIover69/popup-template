git clone https://github.com/PastaIover69/popup-template.git

EN:

Here is a template for quick integration of modal windows (popups) with the Fade in effect (Smooth appearance and closing)

  1. It is enough to copy the blanks from all the files
      - index.html
      - style.css
      - script.js

2. The js code is optimized for a variety of modal windows in the project.
     
  3. To add a new modal window, make a trace.steps:
       - to complete or use a ready-made template from my project.
       - The template can also be changed to fit the project design in style.css (by changing the initial styles, or using a modifier following the BEM methodology)
       - you can set your own appearance animation (via transform or keyframes) and add it to .popup-casual__overlay.open
       - initialize in your own .js new modal window pre-select new elements via document.querySelector();
       - initialize a function with its own elements: popupFunctions (The button or buttons that will open the window, the modal window itself, the Overlay, the Close button);
RU:

Перед вами шаблон для быстрой интеграции модальных окон (попапов) с эффектром Fade in (Плавное появление и закрытие)

  1. Достаточно скопировать заготовок из всех файлов
      - index.html
      - style.css
      - script.js
        
  2. Код в js оптимизирован под множество модальных окон в проекте.
     
  3. Для добавления нового модального окна следует сделать след.шаги:
       - заверстать, либо поспользоваться готовым шаблоном из моего проекта.
       - Шаблон так же можно изменить под дизайн проекта в style.css (изменив начальные стили, либо через модификатор следуя методологии БЭМ)
       - анимацию появления можно задать свою (через transform либо keyframes) и добавить к .popup-casual__overlay.open
       - инициализировать в своем .js новое модальное окно предварительно выбрать новые элементы через document.querySelector();
       - инициализировать функцию со своими элементами: popupFunctions(Кнопка или кнопки по которой будет открываться окно, Само модальное окно, Оверлей, Кнопка закрытия);
