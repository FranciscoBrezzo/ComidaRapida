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
    fecha_emision = models.DateTimeField(auto_now_add=True, blank=True)
    estado = models.BooleanField(default=False)
    

    def __str__(self):
        return 'Pedido Nº' + str(self.pk)


class Orden(models.Model):
    class Meta:
        verbose_name_plural = "Ordenes"
    menu = models.OneToOneField(
        Menu,
        on_delete=models.CASCADE,
        primary_key=True,
    )
    cantidad = models.IntegerField()
    pedido = models.ForeignKey(Pedido, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.pk)




