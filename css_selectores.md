## Selectores básicos

### Selector de tipo
Selecciona todos los elementos que coincidan con el elemento especificado.  
    Sintaxis: eltname  
    Ejemplo: input se aplica a cualquier elemento < input >

### Selectores de clase
Selecciona todos los elementos que tienen el atribudo de class especificado.  
    Sintaxis: .classname  
    Ejemplo: .index seleccionará cualquier elemento que tenga la clase "index"

### Selector de ID
Selecciona un elemento basándose en el valor del atributo id, solo puede haber un elemento con un determinado ID dentro de un documento.  
    Sintaxis: #idname  
    Ejemplo: #toc se aplicará a cualquier elemento que tenga el ID "toc"

### Selector universal
Selecciona todos los elementos, si se quiere puede estar restringido a un espacio de nombre específico o a todos los espacioes de nombres.  
    Sintaxis: * ns|* *|*  
    Ejemplo: * se aplicará a todos los elementos del documento.  

### Selector de atributo
Selecciona elementos basándose en el valor de un determinado atributo.  
    Sintaxis: [attr] [attr=value] [attr~=value] [attr|=value] [attr^=value] [attr$=value] [attr*=value]  
    Ejemplo: [autoplay] seleccionará todos los elementos que tengan el atributo "autoplay" establecido (a cualquier valor).

## Combinadores 

### Combinador de hermanos adyacentes

El combinador + selecciona hermanos adyacentes, es decir el segundo elemento sigue directamente al primero y ambos comparten el mismo elemento padre.  
    Sintaxis: A + B  
    Ejemplo: La regla h2 + p se aplicará a todos los elementos < p > que siguen directamente a un elemento < h2 >.

### Combinador general de hermanos

El combinador ~ selecciona hermanos, es decir que el segundo elemento que sigue al primero (no necesariamente de forma inmediata) y ambos comparten el mismo elemento padre.  
    Sintaxis: A ~ B   
    Ejemplo: La regla p ~ span se aplicará a todos los elementos < span > que siguen de un elemento < p >.

### Combinador de hijo
> selecciona los elementos que son hijos directos del primer elemento.  
    Sintaxis: A > B  
    Ejemplo: La regla u1 > li se aplicará a todos los elementos < li > que son hijos directos de un elemento < ul >.

### Combinador de descendientes
El combinador espacio selecciona los elementos que son descendientes del primer elemento.  
    Sintaxis: A B  
    Ejemplo: La regla div span se aplicará a todos los elementos < span > que están dentro de un elemento < div >.

### Combinador de columna
|| selecciona los elementos especificados pertenecientes a una columna.  
    Sintaxis: A || B  
    Ejemplo: col || td selecciona todos los elementos < td > que pertenezcan al ámbito de < col >.

## Pseudoclases
Permiten seleccionar elementos en base a información de estado que no está contenida en el árbol de documentos.  
    Ejemplo: La regla a:visited se aplicará a todos los elementos < a > que hayan sido visitados por el usuario.  

## Pseudoelementos
Son abstracciones del árbol que representan entidades más allá de los elementos HTML, por ejemplo HTML no tiene un elemento que describa la primera letra de un párrafo ni los marcadores de una lista; los pseudoelementos representan estas entidades y nos permiten asignarles reglas CSS, de esta forma se pueden diseñar entidades independientes.  
    Ejemplo: La regla p::first-line se aplicará a la primera línea de texto de todos los elementos < p >.