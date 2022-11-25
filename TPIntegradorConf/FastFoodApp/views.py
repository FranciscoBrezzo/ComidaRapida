from django.shortcuts import render
from django.http import HttpResponse
from .models import Menu
from .models import Producto

# Create your views here.
def order(request):
    menus = Menu.objects.all()
    productos = Producto.objects.all()
    return render(request,'FastFoodApp/order.html', {"menus" : menus, "productos" : productos})

def status(request):
    return render(request,'FastFoodApp/status.html')
