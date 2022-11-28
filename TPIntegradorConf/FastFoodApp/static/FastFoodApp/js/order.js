function CalcularMontoTotal(){
    let cantidad = document.getElementById("input_c").value;
    let precioUnitario = document.getElementById("label_monto").innerText;
    var checkbox = document.querySelector("input[name=checkbox]");
    var checked = checkbox.checked;
    if(checked){
        let total = cantidad * precioUnitario
        console.log("precioUnitario:"+precioUnitario)
        console.log("cantidad:"+cantidad)
        console.log("total:"+total)
        cantidad = 0
        precioUnitario = 0
        document.getElementById('MontoTotal').innerHTML = total

    }
    else{
        console.log("0")
    }
}

function SoloNumeros(evt){
    var code = (evt.which) ? evt.which : evt.keyCode;
    
    if(code==8) { 
      return true;
    } else if(code>=48 && code<=57) { 
      return true;
    } else{ 
      return false;
    }
}










/*
let cantidad = document.getElementById("input_cantidad")
let precioUnitario = document.getElementById("labe_monto")

var checkbox = document.querySelector("input[name=checkbox]");


checkbox.addEventListener('change', function() {
    if (this.checked) {
      console.log("Checkbox is checked..");
    } else {
      console.log("Checkbox is not checked..");
    }
  });
*/

/*
checkbox.addEventListener("change", validaCheckbox, false);
function validaCheckbox(){
    var checked = checkbox.checked;
    if (checked) {
        montoTotal = cantidad * precioUnitario
        console.log(montoTotal);
    } else {
        console.log(0);
    }
};
*/





