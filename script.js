const virtualKeyboard = {
  htmlElements: {
    container: null,
    textArea: null,
    keyboardWrapper: null,
    keyboardRow: null,
    buttons: []
  },

  specialButtons: {
    capsLock: false,
    shift: false,
    ctrl: false,
    alt: false
  },

  locale: {
    eng: true,
    ru: false
  },

  init() {
    console.log("Keyboard initialized!");
    console.group("State");
    console.log("htmlElements: ", this.htmlElements);
    console.log("specialButtons: ", this.specialButtons);
    console.log("locale: ", this.locale);
    console.groupEnd("State");

    this.htmlElements.container = document.createElement("div");
    this.htmlElements.textArea = document.createElement("textarea");
    this.htmlElements.keyboardWrapper = document.createElement("div");
    this.htmlElements.keyboardRow = document.createElement("div");

    this.htmlElements.container.classList.add("container");
    this.htmlElements.textArea.classList.add("textarea");
    this.htmlElements.keyboardWrapper.classList.add("keyboard-wrapper");
    this.htmlElements.keyboardRow.classList.add("keyboard-row");
  },

  _createButtons() {}
};

window.addEventListener("DOMContentLoaded", function() {
  virtualKeyboard.init();
});
