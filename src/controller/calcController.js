class CalcController {
  constructor() {
    this._displayCalcEl = document.querySelector('#display');
    this._dateEl = document.querySelector('#data');
    this._timeEl = document.querySelector('#hora');
    this._currentDate;
    this.initializer();
    this.initButtonsEvents();
  }

  addEventListenerAll(element, events, func) {
    events.split(' ').forEach((event) => {
      element.addEventListener(event, func, false);
    });
  }

  initButtonsEvents() {
    const buttons = document.querySelectorAll('#buttons > g, #parts > g');
    buttons.forEach((btn) => {
      this.addEventListenerAll(btn, 'click drag', () => {
      });

      this.addEventListenerAll(btn, 'mouseup mousedown mouseover', () => {
        btn.style.cursor = 'pointer';
      });
    });
  }

  initializer() {
    this.setDisplayTime();
    setInterval(() => {
      this.setDisplayTime();
    }, 1000);
  }

  setDisplayTime() {
    this.displayDate = this.currentDate.toLocaleDateString('pt-BR');
    this.displayTime = this.currentDate.toLocaleTimeString('pt-BR');
  }

  get displayDate() {
    return this._dateEl.innerHTML;
  }

  set displayDate(value) {
    this._dateEl.innerHTML = value;
  }

  get displayTime() {
    return this._timeEl.innerHTML;
  }

  set displayTime(value) {
    this._timeEl.innerHTML = value;
  }

  get displayCalc() {
    return this._displayCalcEl.innerHTML;
  }

  set displayCalc(value) {
    this._displayCalcEl.innerHTML = value;
  }

  get currentDate() {
    return new Date();
  }

  set currentDate(value) {
    this._currentDate = value;
  }
}
module.exports = CalcController;
