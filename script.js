const virtualKeyboard = {
  htmlElements: {
    container: null,
    textArea: {
      element: null,
      value: ""
    },
    keyboardWrapper: null,
    buttons: []
  },

  properties: {
    isUppercase: false
  },

  specialButtons: {
    capsLock: { key: "Caps Lock", isPressed: false },
    shift: { key: "Shift", isPressed: false },
    ctrl: { key: "Ctrl", isPressed: false },
    alt: { key: "Alt", isPressed: false },
    tab: { key: "Tab", isPressed: false }
  },

  locale: {
    eng: true
  },

  _reinitButtons() {
    this.htmlElements.keyboardWrapper = document.createElement("div");
    this.htmlElements.keyboardWrapper.classList.add("keyboard-wrapper");
    this.htmlElements.container.append(this.htmlElements.keyboardWrapper);
    this.htmlElements.keyboardWrapper.append(this._createButtons());
  },

  init() {
    console.log("Keyboard initialized!");

    this.htmlElements.container = document.createElement("div");
    this.htmlElements.textArea.element = document.createElement("textarea");
    this.htmlElements.keyboardWrapper = document.createElement("div");

    this.htmlElements.container.classList.add("container");
    this.htmlElements.textArea.element.classList.add("textarea");
    this.htmlElements.keyboardWrapper.classList.add("keyboard-wrapper");

    this.htmlElements.container.append(this.htmlElements.textArea.element);
    this.htmlElements.container.append(this.htmlElements.keyboardWrapper);
    this.htmlElements.keyboardWrapper.append(this._createButtons());
    document.body.append(this.htmlElements.container);

    this.htmlElements.textArea.element.innerText = this.htmlElements.textArea.element.value;
  },

  _createButtons() {
    let buttonsEng = [
      "`",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      "-",
      "=",
      "BACKSPACE",
      "TAB",
      "q",
      "w",
      "e",
      "r",
      "t",
      "y",
      "u",
      "i",
      "o",
      "p",
      "[",
      "]",
      "CAPS",
      "a",
      "s",
      "d",
      "f",
      "g",
      "h",
      "j",
      "k",
      "l",
      ";",
      "'",
      "ENTER",
      "SHIFT",
      "z",
      "x",
      "c",
      "v",
      "b",
      "n",
      "m",
      ",",
      ".",
      "?",
      "CTRL",
      "ALT",
      "SPACE"
    ];

    let buttonsRu = [
      "`",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      "-",
      "=",
      "BACKSPACE",
      "TAB",
      "й",
      "ц",
      "у",
      "к",
      "е",
      "н",
      "г",
      "ш",
      "щ",
      "з",
      "[",
      "]",
      "\\",
      "CAPS",
      "ф",
      "ы",
      "в",
      "а",
      "п",
      "р",
      "о",
      "л",
      "д",
      "ж",
      "э",
      "ENTER",
      "SHIFT",
      "я",
      "ч",
      "с",
      "м",
      "и",
      "т",
      "ь",
      "б",
      "ю",
      "/",
      "CTRL",
      "ALT",
      "SPACE"
    ];

    if (this.properties.isUppercase) {
      buttonsEng = buttonsEng.map(elem => elem.toUpperCase());
      buttonsRu = buttonsRu.map(elem => elem.toUpperCase());
    }

    const fragment = document.createDocumentFragment();

    this.locale.eng
      ? buttonsEng.forEach(elem => {
          const lineBreak =
            ["BACKSPACE", "]", "ENTER", "?"].indexOf(elem) !== -1;

          const button = document.createElement("button");
          button.setAttribute("type", "button");
          button.classList.add("button");
          button.innerText = elem;

          switch (elem) {
            case "BACKSPACE":
              button.classList.add("button__secondary");
              button.addEventListener("click", e => {
                this.htmlElements.textArea.element.value = this.htmlElements.textArea.element.value.substring(
                  0,
                  this.htmlElements.textArea.element.value.length - 1
                );
              });
              break;

            case "TAB":
              button.classList.add("button__secondary");
              button.addEventListener("click", e => {
                this.htmlElements.textArea.element.value += "    ";
              });
              break;

            case "CAPS":
              button.classList.add("button__secondary");

              if (this.specialButtons.capsLock.isPressed) {
                button.classList.add("button__active");
              }

              button.addEventListener("click", () => {
                this.specialButtons.capsLock.isPressed = !this.specialButtons
                  .capsLock.isPressed;
                this.properties.isUppercase = !this.properties.isUppercase;

                if (this.specialButtons.capsLock.isPressed) {
                  this._reinitialize();
                } else {
                  this._reinitialize();
                }
              });

              break;

            case "ENTER":
              button.classList.add("button__secondary");
              button.addEventListener("click", e => {
                this.htmlElements.textArea.element.value += "\n";
              });
              break;

            case "SHIFT":
              button.classList.add("button__secondary");
              break;

            case "CTRL":
              button.classList.add("button__secondary");
              break;

            case "ALT":
              button.classList.add("button__secondary");
              break;

            case "SPACE":
              button.classList.add("button__secondary");
              button.addEventListener("click", e => {
                this.htmlElements.textArea.element.value += " ";
              });
              break;

            default:
              button.addEventListener("click", e => {
                this.htmlElements.textArea.element.value += elem;
              });
          }

          fragment.append(button);

          if (lineBreak) {
            fragment.append(document.createElement("br"));
          }
        })
      : buttonsRu.forEach(elem => {
          const lineBreak =
            ["BACKSPACE", "\\", "ENTER", "/"].indexOf(elem) !== -1;

          const button = document.createElement("button");
          button.setAttribute("type", "button");
          button.classList.add("button");
          button.innerText = elem;

          switch (elem) {
            case "BACKSPACE":
              button.classList.add("button__secondary");
              button.addEventListener("click", e => {
                this.htmlElements.textArea.element.value = this.htmlElements.textArea.element.value.substring(
                  0,
                  this.htmlElements.textArea.element.value.length - 1
                );
              });
              break;

            case "TAB":
              button.classList.add("button__secondary");
              button.addEventListener("click", e => {
                this.htmlElements.textArea.element.value += "    ";
              });
              break;

            case "CAPS":
              button.classList.add("button__secondary");

              if (this.specialButtons.capsLock.isPressed) {
                button.classList.add("button__active");
              }

              button.addEventListener("click", () => {
                this.specialButtons.capsLock.isPressed = !this.specialButtons
                  .capsLock.isPressed;
                this.properties.isUppercase = !this.properties.isUppercase;

                if (this.specialButtons.capsLock.isPressed) {
                  this._reinitialize();
                } else {
                  this._reinitialize();
                }
              });

              break;

            case "ENTER":
              button.classList.add("button__secondary");
              button.addEventListener("click", e => {
                this.htmlElements.textArea.element.value += "\n";
              });
              break;

            case "SHIFT":
              button.classList.add("button__secondary");
              break;
            case "CTRL":
              button.classList.add("button__secondary");
              break;
            case "ALT":
              button.classList.add("button__secondary");
              break;
            case "SPACE":
              button.classList.add("button__secondary");
              button.addEventListener("click", e => {
                this.htmlElements.textArea.element.value += " ";
              });
              break;

            default:
              button.addEventListener("click", e => {
                this.htmlElements.textArea.element.value += elem;
              });
          }

          fragment.append(button);

          if (lineBreak) {
            fragment.append(document.createElement("br"));
          }
        });

    return fragment;
  },

  _reinitialize() {
    document.querySelector(".keyboard-wrapper").remove();
    this._reinitButtons();
  }
};

window.addEventListener("DOMContentLoaded", function() {
  virtualKeyboard.init();
});
