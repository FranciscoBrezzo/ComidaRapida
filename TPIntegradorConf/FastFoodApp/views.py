from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def order(request):
    return render(request,'FastFoodApp/order.html')

def status(request):
    return render(request,'FastFoodApp/status.html')