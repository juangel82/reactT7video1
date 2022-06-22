## PASOS

1 Dentro de SRC crear STORE y dentro de esta , actions, config y reducers,
2 Creamos las acciones, en este caso creamos 3 acciones.
3 Crear los reducers. 
    Aqui se crean los estados, incluyendo su estado inicial.
    Como tenemos más de uno tenemos que combinarlos todos en un archivo llamado rootReducer que usa
la funcion combineReducers y asocia a cada acción su reducer.
4 Creamos el store dentro de config
5 Dentro del index.js metemos todo el render dentro de <Provider> al que le pasamos una store que creamos.


Crearemos dentro src la carpeta components y dentro , pure y containers.

Los containers tienen acceso a la lógica y al despacho de acciones