# Rentabilidad real de los fondos de pensiones

Esta aplicación consiste en mostrar los datos de los distintos fondos de pensiones de Chile, con el fin de que los usuarios puedan compararlos y elegir el que más les convenga.

## Vista de escritorio

En la vista de escritorio podemos encontrar un Navbar en la parte superior que lleva a otras páginas de LVA *(sólo dummy)*, y debajo se encuentran los datos de los 5 fondos esxistentes desde el A hasta el E.

Al costado izquierdo se incluye un selector para escoger el mes que se desea ver, donde cada mes tiene valores de rentabilidad real distinto.

Cada fondo cuenta con los disitinos administradores de fondo de pensiones de chile, estos son: *Capital, Cuprum, Habitat, Modelo, Planvital, Provida y Uno*.

Además de su nombre, también se incluye una barra de colores que indica el porcentaje de rentabilidad real que tuvo el fondo en el mes seleccionado. Todas las barras poseen su valor cero al medio y se extienden hacia los lados, donde el lado izquierdo indica un valor negativo y el derecho un valor positivo, esto también es visible gracias a los colores de la barra. El tope máximo de la barra corresponde al valor máximo de todos los existentes de todos los meses, de todos los fondos y de todas las administradoras.

Los valores de *Agosto 2023* son extraídos de la página de la [Superintendencia de Pensiones](https://www.spensiones.cl/apps/rentabilidad/getRentabilidad.php?tiprent=FP), mientras que los demás meses poseen valores aleatorios positivos y negativos. Esto se hizo porque en Agosto todos los valores son negativos y se necesitaba mostrar un ejemplo de valores positivos.

Adicionalmente, al costado derecho de cada barra se incluye el valor de rentabilidad correspondiente.

## Vista móvil

Al ingresar a la página en la vista para móviles, el navbar se convierte en una barra desplegable, que es posible mostrarla al interactuar con un botón en la esquina superior derecha, mostrando así las demás páginas de LVA.

En esta vista principal se muestra un solo fondo a la vez, el cual puede ser cambiado al interactuar con un selector que se encuentra en la parte superior derecha del fondo. A la izquierda de este selector también se incluye otro para seleccionar el mes que se desea ver.