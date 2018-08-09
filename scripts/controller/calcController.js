class CalcController {
  constructor(){
    this._displayCalc = '0'
    this._currentDate = 0
  }

  get displayCalc(){
    return this._displayCalc
  }
  set displayCalc(value){
    this._displayCalc = value
  }

  get currretnDate(){
    return this._currentDate
  }
  set currretnDate(value){
    this._currentDate = value
  }
}
