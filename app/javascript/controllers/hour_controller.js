import { Controller } from "stimulus"
import Inputmask from "inputmask";

export default class extends Controller {
  static targets = ["input"]

  initialize(){
    // default placeholder
    var str = '09:00 \\AM'

    // load values from form input
    var hours = document.getElementById("user_date_4i").value
    var minutes = document.getElementById("user_date_5i").value

    if (hours.length && minutes.length){
      str = hours
      str = hours+":"+minutes+"\\AM"
    }

    // apply Regex to the input mask, so you can only write times in the 24 hour format
    Inputmask({regex: "((1[0-2]|0?[1-9]):([0-5][0-9] (AM))", placeholder: str, clearMaskOnLostFocus: false}).mask(this.inputTarget);
  }

  getTime(){
    // get time from input on keyup and apply it to your simple form input
    var value = document.getElementById("inputmaskInput").value
    var hours = value.substring(0,2)
    var minutes = value.substring(3,5)
    document.getElementById("user_date_4i").value = hours
    document.getElementById("user_date_5i").value = minutes
  }
}