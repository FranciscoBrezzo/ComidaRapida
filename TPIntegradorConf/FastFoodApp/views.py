from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def order(request):
    return HttpResponse('I am the order view')

def status(request):
    return HttpResponse('I am the status view')

def signin(request):
    return render(request, "FastFoodApp/signin.html")

