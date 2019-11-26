# Tatooine-HDH
Repositorio curso desarrollador

Significado de las palabras claves

local 

remote
El comando git se usa para conectar a un repositorio remoto. El siguiente comando muestra los repositorios remotos que están configurados actualmente:
git remote -v

git remote
El comando git se usa para conectar a un repositorio remoto. El siguiente comando muestra los repositorios remotos que están configurados actualmente:
git remote -v

init
Para crear un nuevo repositorio, usa el comando git init. git init es un comando único que se utiliza durante la configuración inicial de un repositorio nuevo. Al ejecutar este comando, se creará un nuevo subdirectorio .git en tu directorio de trabajo actual. También se creará una nueva rama maestra (master). 

clone
El comando git clone se usa para crear una copia o clonar un repositorio remoto. Se utiliza git clone con la URL de un repositorio. Git es compatible con varios protocolos de red y sus formatos de URL correspondientes. En este ejemplo, usaremos el protocolo Git SSH. Las URL Git SSH siguen esta plantilla: git@HOSTNAME:USERNAME/REPONAME.git

add
Este comando puede ser usado para agregar archivos al index. Por ejemplo, el siguiente comando agrega un nombre de archivo temp.txt en el directorio local del index:

git add temp.txt

commit
El comando commit es usado para cambiar a la cabecera. Ten en cuenta que cualquier cambio comprometido no afectara al repertorio remoto. Usa el comando:

git commit –m “Message to go with the commit here”

push
Este es uno de los comandos más básicos. Un simple push envía los cambios que se han hecho en la rama principal de los repositorios remotos que están asociados con el directorio que está trabajando. Por ejemplo:

git push origin develop

pull
Para poder fusionar todos los cambios que se han hecho en el repositorio local trabajando, el comando que se usa es:
git pull

merge
Este comando se usa para fusionar una rama con otra rama activa:
git merge <branch-name>


Fases de GIT y que pasa en cada una de ellas

UNTRACKED
Sin seguimiento o registro de archivo(s)

TRACKED
Ya hay seguimiento o registor de archivo(s)

MODIFIED
Está(n) siendo modificado(s) el(los) archivo(s)

STAGED
Ya se añadio el archivo para hacer un registro en el tiempo (snapshot)

COMMITTED
Ya se respaldo o hizo el snapshot o registro en el tiempo


Que cosas NO se deben hacer en un repositorio de GIT?

Realizar cambios sobre el branch master
Dejar de describir los cambios que se realizar
No crear el archivo readme.md

A que año debía volver Marty McFly para restablecer la linea de tiempo?
1955

