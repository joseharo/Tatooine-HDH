# Markdown

## ¿Que es Markdown?

Es un lenguaje de marcado ligero, emplea texto plano buscando ser legible pero logrando que se convierta en XHTML con formato correctamente realizado,  
con Markdown se pueden crear documentos limpios y que se pueden editar con facilidad en el futuro.

## ¿Donde se utiliza?

Para crear archivos y agreagar formatos a textos web: itálicas, negritas, listas, encabezados, etc.; por lo que se pueden procesar textos de manera     
sencilla sin hacer demasiado esfuerzo en el formato.


Con Markdown se pueden crear listas de tareas o cualquier otro texto sencillo, es muy flexible ya que este tipo de textos se puede abrir sin importar  
el programa.

## Palabras claves mas utilizadas en Markdown

### Cabeceras

Para hacer un encabezado se coloca un determinado número de almohadillas 

| Tecleas | Se ve como |

    # Esto es un h1 
# Esto es un h1

    ## Esto es un h2
## Esto es un h2

    ### Esto es un h3
### Esto es un h3  

    #### Esto es un h4
#### Esto es un h4

    ###### Esto es un h5
###### Esto es un h5

        ####### Esto es un h6
####### Esto es un h6

Si se desea una mejor estética se podrian cerrar las almohadillas #

| Tecleas | Se ve como |

    ### Esto es un h3 ###
### Esto es un h3 ###

### Enlaces

La primera manera de crear enlaces es:


| Tecleas | Se ve como |
    
    [Con titulo](http://sitioweb.com "titulo")
[Con titulo](http://sitioweb.com "titulo")

    [Sin titulo](http://sitioweb.com)
[Sin titulo](http://sitioweb.com)

    [Enlace 1][1], [Enlace 2][2], [Enlace 3][3]

    [1]: http://sitioweb.com/consejos
    [2]: http://sitioweb.com/consejos "Consejos"
    [3]: http://sitioweb.com/

[Enlace 1][1], [Enlace 2][2], [Enlace 3][3]

[1]: http://sitioweb.com/consejos
[2]: http://sitioweb.com/consejos "Consejos"
[3]: http://sitioweb.com/

También se pueden crear enlaces encerrando la dirección entre menor que <  y mayor que > :

    <http://sitioweb.com>
<http://sitioweb.com>


### Párrafos
Se pueden crear párrafos dejando una línea en blanco:

    Este es el primer párrafo.

    Este es el segundo párrafo.

Este es el primer párrafo.

  Este es el segundo párrafo.

  Si se desea hacer un salto de línea se dejan dos espacios al final de la última palabra de esa línea:

      Esta es la primera línea
      y este es un salto de línea.

  Esta es la primera línea  
  y este es un salto de línea.
  
### Formato
Se puede agregar formato básico al texto como negritas y cursiva:

| Tecleas | Se ve como |

    **Texto en negritas**
**Texto en negritas**

    __Esto también es negritas__
__Esto también es negritas__

    *Esto es cursiva*
*Esto es cursiva*

    _Esto también es cursiva_
_Esto también es cursiva_

    ***Esto es negrita y cursiva***  
***Esto es negrita y cursiva***

    ___Esto también es negrita y cursiva___
___Esto también es negrita y cursiva___

Nota: Se puede emplear de forma indistinta sterisco * y guión bajo  _ siempre y cuando no se mezclen; lo que determina el formato es la cantidad de ellos antes   
y después del código a dar formato: uno es cursiva, dos es negrita y tres es ambos a la vez.

### Citar

Para hacer citas se emplea el caracter de mayor que anets del bloque de texto.

| Tecleas | Se ve como |

Esto es una línea normal

> Esto es parte de un bloque de cita.
> Esto es parte del mismo bloque de cita.

> Esto es parte de un bloque de cita.
Esto continúa el bloque incluso aunque no hay símbolo 'mayor que'.

La línea en blanco finaliza el bloque.

  
Esto es una línea normal

> Esto es parte de un bloque de cita.
> Esto es parte del mismo bloque de cita.
>
> > Esto es otro bloque de cita anidado.
> > Esto es parte del bloque anidado.
>
> Esto es parte del bloque de cita de primer nivel.


### Listas
Es posible crear listas ordenadas y desordendas (numeradas y no numeradas):

| Tecleas | Se ve como |

    Lista ordenada

    1. Este es el primer elemento
    2. Este es el segundo elemento
    3. Este es el tercer elemento

Lista ordenada
1. Este es el primer elemento
2. Este es el segundo elemento
3. Este es el tercer elemento

#### Para lista desordenada se emplea *  

    Lista desordenada
    * Un elemento de la lista
    * Otro elemento de la lista
    * El tercer elemento de la lista

Lista desordenada
* Un elemento de la lista
* Otro elemento de la lista
* El tercer elemento de la lista

#### Se pueden emplear también + y - en vez de *

    * Un elemento de la lista
    + Otro elemento de la lista
    - El tercer elemento de la lista

* Un elemento de la lista
+ Otro elemento de la lista
- El tercer elemento de la lista

#### Se pueden mezclar distintos tipos de listas y anidar unas dentro de otras.

    1. Esto es una lista ordenada
    2. Segundo elemento de la lista ordenada
        1. Esta es una lista ordenada anidada dentro de otra
            * Lista desordenada anidada a tercer nivel
            * Segundo elemento de esta lista
    2. Este es el segundo elemento de la lista ordenada anidada

####

1. Esto es una lista ordenada
2. Segundo elemento de la lista ordenada
    1. Esta es una lista ordenada anidada dentro de otra
        * Lista desordenada anidada a tercer nivel
        * Segundo elemento de esta lista
    2. Este es el segundo elemento de la lista ordenada anidada

#### Listas de definicion

Integradas por términos y definiciones de los mismos:

| Tecleas | Se ve como |

    Primer término
     : Primera definición

    Segundo término
     : Segunda definición

####
Primer término  
 : Primera definición

Segundo término  
 : Segunda definición

#### Se pueden aplicar más de una definición a un término

Primer termino  
 : Primera definición  
 : Segunda definición

Segundo termino  
 : Segunda definición
    
### Tablas
Se pueden crear tablas de manera sencilla, indicando los elementos de la cabecera y separando los campos con |

    Cabecera A | Cabecera B
    -- | --
    Campo A0 | Campo B0
    Campo A1 | Campo B1


Cabecera A | Cabecera B
-- | --
Campo A0 | Campo B0
Campo A1 | Campo B1

Por estética se pueden alinear las columnas y hasta comenzar con el símbolo |, aunque esto es opcional.

    | Cabecera A | Cabecera B |
    | ---------- | ---------- |
    | Campo A0   | Campo B0   |
    | Campo A1   | Campo B1   |

| Cabecera A | Cabecera B |
| ---------- | ---------- |
| Campo A0   | Campo B0   |
| Campo A1   | Campo B1   |

Si se desea alinear cada columna se agregan dos puntos a las líneas de separación, por lo que dos puntos a la izquierda haraán que la columna esté alineada  
hacia la izquierda, dos puntos a la derecha alinearán la columna a la derecha y dos puntos en ambos lados hará que la columna esté centrada.

    | Elemento | Cantidad | Precio |
    | :------- | :------: | -----: |
    | Item 1   | 15       | 150€   |
    | Item 2   | 3250     | 23,65€ |

| Elemento | Cantidad | Precio |
| :------- | :------: | -----: |
| Item 1   | 15       | 150€   |
| Item 2   | 3250     | 23,65€ |


### Código

Para crear bloques con código o presentar extractos de código fuente de un lenguaje de programción o para reproducir texto y que no sea interpretado por   
Markdown, lo único necesario es que cada línea inicie con cuatro espacios o un tabulador.

Esto es un párrafo normal.

    Esto es un párrafo de código.

Otra forma es encerrar el bloque entre dos líneas de tres caracteres tilde ~
~~~
Esto es un párrafo de código.
~~~

Para resaltar pequeños fragmentos de código dentro de un párrafo de texto normal se encierra el código entre dos acentos graves ``.

Esto es un párrafo normal, con un trozo de código, `import this` insertado en el medio del mismo.

### Líneas horizontales
Se pueden hacer por medio del uso de 3 o más símbolos (guines, astericos o giones bajos)

    ***
***

    ---
---

    ___
___


### Escapar caracteres

Si se desea escapar caracteres para que Markdown no los interprete se indica la barra backslash \ y enseguida el caracter a mostrar, por ejemplo:

\\ \` \* \_  \{\} \[\] \(\) \# \+ \- \. \! \: \|

### Identificadores de Cabecera

Se utilizan para establecer un identifador en las cabeceras y de esta forma se pueden enlazar en cualquier otro lugar del texto  

### Imágenes
Se enlazan las imágenes de manera similar a la creación de enlaces, solo se agrega el caracter de  
exclamación ! antes del par de corchetes en donde se define el nombre del enlace:

    ![Con titulo](img/test.png "Imagen de prueba")
![Con titulo](img/test.png "Imagen de prueba")

    ![Sin titulo](img/test2.png)
![Sin titulo](img/test2.png)



### Esto es una cabecera con un Id {#cabecera1}

[Enlace a esa cabecera](#cabecera1)


### Fuentes de consulta:

<https://joedicastro.com/pages/markdown.html#mark0>

    
