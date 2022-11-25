from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic import TemplateView
from django.contrib.auth.decorators import login_required
    
# Create your views here.
def order(request):
    return HttpResponse('I am the order view')

def status(request):
        return HttpResponse('I am the status view')
