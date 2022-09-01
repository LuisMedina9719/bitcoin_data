// Visit The Stimulus Handbook for more details 
// https://stimulusjs.org/handbook/introduction
// 
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "field", "salida", "item", "denied" ]

  connect() {
  }

  charPermitted() {
    const pattern = /[A-Za-z0-9]/;
    let value = this.fieldTarget.value;
    let submit = document.getElementsByName("commit");
    submit.disabled = true
    submit.onclick = function() {
      if (pattern.test(value)) {
        console.log("clean");
      }else {
        "dirty"
      }
    } 
    // this.deniedTarget.textContent = `${chars}, este caracter no esta permitido`
  }

  accordion(event){
    let id = event.target.dataset.index
    this.itemTargets.find(target => {
      if (target.id === id && !target.classList[1]) {
        target.classList.add("active")
      } else {
        target.classList.remove("active")
      }
    })

    this.salidaTargets.find(target =>{
      if (target.id === id && !target.style.maxHeight ) {
        target.style.maxHeight = target.scrollHeight + "px";
      } else {
        target.style.maxHeight = null;
      }
      
    })
    console.log(this.salidaTarget.style);
  }

  modal(){
    let modal = document.getElementById("myModal")
    var span = document.getElementsByClassName("close")[0];
    let confirm = document.getElementById("confirm")
    
    console.log(modal);
    modal.style.display = "block";
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    confirm.onclick = function() {
      modal.style.display = "none"
    }
  }

}
