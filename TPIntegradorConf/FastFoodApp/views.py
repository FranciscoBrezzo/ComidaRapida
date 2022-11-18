from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def order(request):
    return render(request,'FastFoodApp/base.html')

def status(request):
    return HttpResponse('I am the status view')