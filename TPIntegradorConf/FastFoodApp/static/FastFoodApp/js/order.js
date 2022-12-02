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



localStorage.setItem('total', 0);
function addCarrito(mid){
    var pcart = document.getElementById('pcart');
    var ptotal = document.getElementById('ptotal');
    menuId = '#men' + mid;
    precioId = '#pre' + mid;
    var name = document.querySelector(menuId).innerHTML;
    var precio = document.querySelector(precioId).innerHTML;

    var orders = JSON.parse(localStorage.getItem('orders'));
    var total = localStorage.getItem('total');
    var cartSize = orders.length;

    orders[cartSize] = [name, precio];
    localStorage.setItem('orders', JSON.stringify(orders));

    total = parseInt(total) + parseInt(precio);
    localStorage.setItem('total', total);

    var cart = document.querySelector('#cart');
    cart.innerHTML = orders.length;

    butto = '<button class="del" onclick = "removeMenu(' + cartSize + ')">x</button>';
    ptotal.innerHTML = 'Total: ' + total + ' $';
    pcart.innerHTML +='<li>' + name + ' ' + precio + butto+ '</li>';
}


function pshoppingCart(){
    var orders = JSON.parse(localStorage.getItem('orders'));
    var total = localStorage.getItem('total');
    var pcart = document.getElementById('pcart');
    var cartSize = orders.length;
    pcart.innerHTML = '';
    for (let i = 0; i < cartSize; i++) {
        butto = '<button class="del" onclick = "removeMenu(' + i + ')">x</button>';
        pcart.innerHTML +='<li>' + orders[i][0] + ' ' + orders[i][1] +' $' +butto+'</li>';
    }
    ptotal.innerHTML = 'Total: ' + total + ' $';
}

pshoppingCart();

function removeMenu(n){
    var orders = JSON.parse(localStorage.getItem('orders'));
    var total = localStorage.getItem('total');
    total = Number(total) - Number(orders[n][1]);
    orders.splice(n, 1);
    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.setItem('total', total);
    pshoppingCart();
}






