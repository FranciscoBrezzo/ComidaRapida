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
    precio = models.IntegerField()
    id_rubro = models.ForeignKey(Rubro, on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre

    

class Menu(models.Model):
    nombre = models.CharField(max_length=60)
    id_menu_producto = models.ManyToManyField(Producto, through='Menu_producto')

    def __str__(self):
        return self.nombre

class Menu_producto(models.Model):
    id_producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    id_menu = models.ForeignKey(Menu, on_delete=models.CASCADE)

class Pedido(models.Model):
    fecha_emision = models.DateTimeField()
    estado = models.BooleanField()
    id_detalle_pedido = models.ManyToManyField(Menu, through='Detalle_pedido')

    def __str__(self):
        return self.headline

class Detalle_pedido(models.Model):
    id_menu = models.ForeignKey(Menu, on_delete=models.CASCADE)
    id_pedido = models.ForeignKey(Pedido, on_delete=models.CASCADE)