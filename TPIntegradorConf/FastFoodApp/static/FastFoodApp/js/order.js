function CalcularMontoTotal(){

    var table = document.getElementById("tabla");
    var precio_total = 0;
    for (var i = 1, row; row = table.rows[i]; i++) {
        td_1 = row.cells[1]
        cantidad = td_1.getElementsByTagName('input')[0].value

        td_2 = row.cells[2]
        precio_unitario = parseInt(td_2.getElementsByTagName('label')[0].innerText)

        precio_total += cantidad * precio_unitario

    }
    document.getElementById('MontoTotal').innerHTML = precio_total + ' $';

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
function RealizarPedido(){

    var checkbox = document.querySelector("input[name=checkbox]");
    var checked = checkbox.checked;
    if(checked){
        Monto_total = document.getElementById("MontoTotal").textContent;
        document.getElementById("p_precio").innerText = Monto_total;
        NombreMenu = document.getElementById("nombre_menu").textContent;
        Cantidad = document.getElementById("input_c").value;
        Precio = document.getElementById("label_monto").textContent;
        document.getElementById("p_m").innerText = NombreMenu;
        document.getElementById("p_c").innerText = Cantidad;
        document.getElementById("p_p").innerText = Precio;

    }
    else{
        document.getElementById('MontoTotal').innerHTML = ""
    }

    
}
*/
/*
var count = 0;
function Cargar() {
    let tabla = document.getElementById("tabla");
    for (var i = 0, row; row = tabla.rows[i]; i++) {
        count= count + 1;
        for (var j = 0, col; col = row.cells[j]; j++) {
            if(i >= 2){
                if(j == 1){
                    col.innerHTML = "<td id='cantidad'><input type='number' style='width: 57px; height: 30px; text-align: center;' id='input_c" + count+  "' min='0' max='100' onkeypress='return SoloNumeros(event);' value='0'></td> ";
                    console.log(col)
                }
                else if(j == 2){
                    col.innerHTML = "<td id='precio'><label id='label_monto"+count+"'>{{m.precio}}</label></td>";
                    console.log(col)
                }
                else if(j == 3){
                    col.innerHTML = "<td id='seleccionar'><input class='form-check-input' type='checkbox' value='' name='checkbox' id='input_check'"+count+"' onclick='CalcularMontoTotal()'></td>";
                    console.log(col)
                    j = 0;           
                }
            }  
        }
    }
}
*/




function CargarVenta(){
    document.getElementById("titulo").innerText = "Venta";
    document.getElementById("p_line1").innerText = "_____________________________________";
    document.getElementById("p_line2").innerText = "--------------------------venta--------------------------";
    document.getElementById("p_line3").innerText = "_____________________________________";
    document.getElementById("p_monto").innerText = "Monto de la compra: "

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





