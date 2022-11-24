from django.contrib import admin
from .models import *



# Register your models here.
admin.site.register(Rubro)
admin.site.register(Producto)
admin.site.register(Menu)
admin.site.register(Pedido)
admin.site.register(Detalle_pedido)