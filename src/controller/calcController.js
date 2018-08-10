class CalcController {
  constructor() {
    this._displayCalcEl = document.querySelector('#display')
    this._dateEl = document.querySelector('#data')
    this._timeEl = document.querySelector('#hora')
    this._currentDate = 0
    this.initializer()
  }

  initializer() {
    setInterval(()=> {
      this.displayDate = this.currentDate.toLocaleDateString('pt-BR')
      this.displayTime = this.currentDate.toLocaleTimeString('pt-BR')
    }, 1000);
  }

  get displayDate() {
    return this._dateEl.innerHTML;
  }

  set displayDate( value ) {
    return this._dateEl.innerHTML = new Date().toLocaleString('pt-br');
  }

  get displayTime() {
    return this._timeEl.innerHTML;
  }

  set displayTime( value ) {
    return this._timeEl.innerHTML = value;
  }

  get displayCalc() {
    return this._displayCalcEl.innerHTML;
  }

  set displayCalc(value) {
    this._displayCalcEl.innerHTML = value;
  }

  get currrentDate() {
    return new Date();
  }

  set currrentDate(value) {
    this._currentDate = value;
  }
}
module.exports = CalcController;
