from unittest.util import _MAX_LENGTH
from django.db import models

class Rubro(models.Model):
    nombre = models.CharField(max_length=60)
    detalle = models.CharField(max_length=255)

    def __str__(self):
        return self.nombre

class Producto(models.Model):
    nombre = models.CharField(max_length=60)
    descripcion = models.CharField(max_length=200)
    id_rubro = models.ForeignKey(Rubro, on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre

class Menu(models.Model):
    nombre = models.CharField(max_length=60)
    precio = models.IntegerField()
    productos = models.ManyToManyField(Producto)

    def __str__(self):
        return self.nombre

class Pedido(models.Model):
    fecha_emision = models.DateTimeField(auto_now_add=True)
    estado = models.BooleanField()
    menus = models.ManyToManyField(Menu)

    def __str__(self):
        return str(self.fecha_emision)
