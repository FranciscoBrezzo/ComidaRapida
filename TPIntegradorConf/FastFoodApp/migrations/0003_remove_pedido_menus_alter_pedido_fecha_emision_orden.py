# Generated by Django 4.1.2 on 2022-12-01 23:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("FastFoodApp", "0002_remove_pedido_id_detalle_pedido_pedido_menus_and_more"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="pedido",
            name="menus",
        ),
        migrations.AlterField(
            model_name="pedido",
            name="fecha_emision",
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.CreateModel(
            name="Orden",
            fields=[
                (
                    "menu",
                    models.OneToOneField(
                        on_delete=django.db.models.deletion.CASCADE,
                        primary_key=True,
                        serialize=False,
                        to="FastFoodApp.menu",
                    ),
                ),
                ("cantidad", models.IntegerField()),
                (
                    "pedido",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="FastFoodApp.pedido",
                    ),
                ),
            ],
        ),
    ]
