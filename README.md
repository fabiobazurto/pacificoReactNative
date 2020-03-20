# React Native app demo
## iOS Setup Sin Xcode
En su dispositivo iPhone realice los siguientes pasos:

1. Ingrese al AppStore e instale la aplicación **ExpoClient**.
1. Al finalizar la instalación del app, abra el app ExpoClient.
1. Escoja la opción **ScanQR Code** y escanee el QR code que se encuentra en el siguiente link:[QRCODE PACIFICARD APP](https://expo.io/@fabio.bazurto/testing) 

La aplicación empezará a descargar la aplicación compilada para iOS y se mostrará en el dispositivo.

La aplicación muestra tres pantallas:

Selección de tarjeta.- Tiene haabilitados dos eventos: el primero está en el botón de cerrar (la X) que al presionarlo mostrará un request al API público proporcionado en el challenge. El segundo está en el botón ACEPTAR que lo llevará a la segunda pantalla.

Ingreso de clave.- Se encuentra habilitado el evento onKeyPress, al ingresar la clave completa lo llevará a la tercera pantalla.

Felicitaciones.- Se encuentra habilitado un evento en la imagen para descarga del BDP Wallet, al presionar la imagen lo llevará a la primera pantalla.
