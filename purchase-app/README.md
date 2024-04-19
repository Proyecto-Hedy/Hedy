## Base de datos

Como BD vamos a utilizar "dummyJSON". Esta api nos provee fake data de productos en diferente categorias.

__Es necesario crear un archivo .env con la siguiente variable:__
```
NEXT_PUBLIC_BD_URL="https://dummyjson.com/products"
```

Vamos a utilizar estas 3 rutas: home, search y details.
```
main root: https://dummyjson.com/products?limit=${limit}&skip=${skip}
search: https://dummyjson.com/products/search?q=${inputSearch}
details: https://dummyjson.com/products/${slugId}
```

Para esto vamos a utilizar el hook custom useApi. Este hook lo utilizaremos en cualquiera de las siguientes 3 variables, dependiendo el caso:
```
main root: const { data } = useApi<any>("?limit=${limit}&skip=${skip}")
search: const { data } = useApi<any>("/search?q=${inputSearch}")
details: const { data } = useApi<any>("/${slugId}")
```
- Donde "any" deberia ser el tipo de dato que se espera que devuelva. Estas interfaces ya estan creadas.
- Donde las var limit y skip vendran de la paginacion.
- Donde el inputSearch vendra de lo ingresado en el input search.
- Donde el slugId vendra del id del product.