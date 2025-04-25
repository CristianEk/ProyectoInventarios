from rest_framework import viewsets
from producto.models import Productos
from producto.api.serializers import ProductoSerializer

class ProductoViewSet(viewsets.ModelViewSet):
    queryset = Productos.objects.all()
    serializer_class = ProductoSerializer


