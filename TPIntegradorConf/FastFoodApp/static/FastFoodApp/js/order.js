function CalcularMontoTotal(){
    let cantidad = document.getElementById("input_c").value;
    let precioUnitario = document.getElementById("label_monto").innerText;
    var checkbox = document.querySelector("input[name=checkbox]");
    var checked = checkbox.checked;
    if(checked){
        let total = cantidad * precioUnitario
        cantidad = 0
        precioUnitario = 0
        document.getElementById('MontoTotal').innerHTML = total

    }
    else{
        document.getElementById('MontoTotal').innerHTML = ""
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




function addCarrito(mid){
    var pcart = document.getElementById('pcart');
    var ptotal = document.querySelector('ptotal');
    menuId = '#men' + mid;
    var name = document.querySelector(menuId).innerHTML;
    var precio = document.getElementById('label_monto').innerHTML
    pcart.innerHTML +='<li>' + name + ' ' + precio +'</li>';
}


/*
var count = 0;
function Cargar() {
    let tabla = document.getElementById("tabla");
    var n1 = document.getElementById("tabla").rows.length;
    for (var i = 0, row; i < n1; i++) {
        row = tabla.rows[i]
        count= count + 1;
        var n2 = document.getElementById("tabla").rows[i].cells.length;
        for (var j = 0, col; j < n2; j++) {
            col = row.cells[j]
            if(i >= 2){
                if(j == 0){
                    col.innerHTML = "<td id='cantidad'><input type='number' style='width: 57px; height: 30px; text-align: center;' id='input_c" + count+  "' min='0' max='100' onkeypress='return SoloNumeros(event);' value='0'></td> ";
                    
                }
                else if(j == 1){
                    col.innerHTML = "<td id='precio'><label id='label_monto"+count+"'>{{m.precio}}</label></td>";
                    
                }
                else if(j == 2){
                    col.innerHTML = "<td id='seleccionar'><input class='form-check-input' type='checkbox' value='' name='checkbox' id='input_check'"+count+"' onclick='CalcularMontoTotal()'></td>";
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





