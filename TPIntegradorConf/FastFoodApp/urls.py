from django.urls import path
from . import views

app_name = 'FastFoodApp'

urlpatterns = [
    path('order/', views.order, name='order'),
    path('status/', views.status, name='status'),
    path('signin/', views.signin, name='signin'),
    


]