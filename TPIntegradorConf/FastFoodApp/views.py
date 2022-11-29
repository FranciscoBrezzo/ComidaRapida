from django.shortcuts import render
from django.http import HttpResponse
from django.db.models import Q
from .models import Menu
from .models import Producto


# Create your views here.
def order(request):
    menus = Menu.objects.all()
    productos = Producto.objects.all()
    busqueda = request.GET.get("buscar")
    
    if busqueda:
        menus = Menu.objects.filter(
            Q(nombre__icontains = busqueda) |
            Q(precio__icontains = busqueda)
        ).distinct()
    return render(request,'FastFoodApp/order.html', {"menus" : menus, "productos" : productos})

def status(request):
    return render(request,'FastFoodApp/status.html')
