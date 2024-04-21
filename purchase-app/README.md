## Variable de Tailwind

Vamos a utilizar las var de tailwind para mantener la coherencia en cuanto a los estilos. Para utilizar las var solo debemos escribir su nombre. Ejemplo, si queremos cambiar un background gris utilizaremos `bg-gray-bg`.

Aca la lista completa de las var:

* gray-bg sera utilizado para las card y fondos importantes.
* gray-bg-light sera utilizado para disabled.
* gray-txt sera utilizado para disabled y/o font color secundario.
* black sera la font principal.
* black-btn para botones.
* blue para resaltar precios, lineas, etc.
* white sera el bg principal.

<br>

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

<br>

## Autentificacion y autorizacion

Para la auth estamos usando `firebase Authentication` para permitir que los usuarios se autentiquen usando sus direcciones de correo electrónico y contraseñas, y para administrar las cuentas basadas en contraseñas.

### Authentication vs Authorization
    Authentication : 
        telling the system who you are 
	    by providing username and password.


	  Authorization : 
				things you can do according to who you are.

<br>

__Es necesario agregar al archivo .env las siguiente variable:__
```
NEXT_PUBLIC_FIREBASE_API_KEY=api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=app-id
```