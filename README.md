# 🎮 RIVEROUS

RIVEROUS es un proyecto de videojuego/plataforma de juegos 2D para dispositivos con pantalla **horizontal**.

La idea principal es crear un espacio donde los jugadores puedan tener una cuenta, personalizar y controlar su perfil, jugar diferentes juegos 2D y participar en partidas y torneos multijugador.

El proyecto está siendo desarrollado por Rivero como un proyecto personal de aprendizaje y desarrollo de software.

> RIVEROUS es un proyecto original. El código es escrito por Rivero. La IA se utiliza como asistente para aprender, razonar sobre problemas, revisar código y avanzar en el desarrollo, no como autora del proyecto.

---

## 🎯 Visión del proyecto

La visión de RIVEROUS es construir una plataforma de juegos 2D centrada inicialmente en dispositivos móviles y pantallas horizontales.

El jugador podrá:

- Crear una cuenta.
- Iniciar sesión.
- Guardar su cuenta en el servidor.
- Entrar a un lobby.
- Ver y utilizar su personaje.
- Consultar su perfil.
- Ver partidas jugadas y estadísticas.
- Consultar el historial.
- Consultar el ranking.
- Añadir amigos.
- Configurar opciones del juego.
- Elegir diferentes juegos 2D.
- Participar en torneos.
- Jugar partidas multijugador.

La plataforma se desarrollará progresivamente. No todas estas funciones están implementadas actualmente.

---

## 🕹️ Experiencia principal

El flujo general previsto es:

```
RIVEROUS
   ↓
Crear cuenta / Iniciar sesión
   ↓
Servidor
   ↓
Lobby
   ↓
Perfil / Amigos / Historial / Ranking / Ajustes
   ↓
Elegir juego
   ↓
Partida
   ↓
Resultados
   ↓
Estadísticas / Ranking
```

---

## 👤 Cuenta y jugador

Cada jugador tendrá una cuenta almacenada en el servidor.

El perfil deberá permitir consultar información como:

- Nombre de usuario.
- Personaje.
- Partidas jugadas.
- Partidas ganadas.
- Historial.
- Estadísticas.
- Ranking.
- Amigos.

El sistema de cuentas y almacenamiento persistente todavía forma parte del desarrollo futuro.

---

## 🧍 Personaje

El jugador tendrá un personaje propio dentro del lobby.

La idea inicial del personaje es un diseño 2D sencillo:

- Una forma circular como cuerpo.
- Dos piernas.
- Diseño simple y reconocible.

El diseño visual definitivo del personaje todavía está en desarrollo.

---

## 🎮 Juegos

Los juegos de RIVEROUS serán inicialmente juegos **2D**.

La plataforma estará diseñada para poder incorporar diferentes juegos en lugar de estar limitada a un único juego.

La selección del juego formará parte del lobby y del sistema de partidas.

---

## 🏆 Torneos

Una de las funciones principales de RIVEROUS será el sistema de torneos.

La estructura inicial prevista utiliza:

- 4 jugadores.
- Partidas multijugador.
- Juegos 2D.
- Sistema de resultados.
- Ranking y estadísticas relacionadas con las partidas.

La estructura exacta de rondas, reglas y puntuación podrá evolucionar durante el desarrollo.

---

## 🌐 Multijugador

RIVEROUS está pensado para soportar partidas multijugador.

La arquitectura prevista contempla comunicación en tiempo real mediante WebSocket.

El sistema multijugador todavía no está implementado en la versión actual del proyecto.

---

## 🏗️ Arquitectura prevista

La arquitectura general prevista es:

```
                 RIVEROUS
                     │
          ┌──────────┴──────────┐
          │                     │
       FRONTEND              BACKEND
          │                     │
     HTML / CSS / JS           C++
          │                     │
          └──────────┬──────────┘
                     │
                  WebSocket
                     │
                  MongoDB
```

### Frontend

Actualmente el frontend utiliza:

- HTML
- CSS
- JavaScript

El frontend contiene la interfaz del juego y actualmente es la principal zona de aprendizaje y desarrollo.

### Backend

La arquitectura prevista contempla un servidor desarrollado en **C++**.

El backend será responsable progresivamente de funciones como:

- Cuentas.
- Autenticación.
- Datos de jugadores.
- Partidas.
- Multijugador.
- Comunicación con la base de datos.
- Lógica relacionada con el servidor.

El backend todavía se encuentra en una etapa inicial.

### Base de datos

El proyecto contempla utilizar **MongoDB** para almacenar información persistente.

Entre los datos previstos están:

- Usuarios.
- Perfiles.
- Estadísticas.
- Historial.
- Amigos.
- Información relacionada con partidas y torneos.

---

## ☁️ Infraestructura actual

Actualmente el proyecto se encuentra alojado en GitHub y conectado con Render para el despliegue.

Repositorio:

```
dvxjsx-hub/riverous
```

Rama principal:

```
main
```

Actualmente el proyecto no depende de un dominio propio ni de un servidor físico propio.

La infraestructura podrá evolucionar posteriormente.

---

## 📁 Estructura actual

La parte principal del frontend se encuentra actualmente organizada en:

```
frontend/
├── index.html
├── style.css
└── script.js
```

También existe una estructura destinada al servidor/backend en C++.

La arquitectura del repositorio puede crecer conforme se incorporen las diferentes partes del proyecto.

---

## 🚧 Estado actual

RIVEROUS se encuentra actualmente en una etapa temprana de desarrollo.

El trabajo actual está centrado principalmente en aprender JavaScript y construir progresivamente la interfaz y la lógica básica del juego.

Actualmente existen elementos funcionales relacionados con:

- Pantalla inicial.
- Usuario.
- Entrada al sistema.
- Perfil.
- Contador de partidas.
- Menú principal.
- Menú de jugar.
- Menú de perfil.
- Menú de configuración.
- Eventos de botones.
- Manipulación básica del DOM.

Muchas funciones del concepto final todavía no están implementadas.

---

## 📚 Desarrollo y aprendizaje

RIVEROUS también funciona como proyecto de aprendizaje.

El objetivo no es únicamente conseguir que el programa funcione, sino comprender:

- JavaScript.
- HTML y CSS.
- DOM.
- Eventos.
- Funciones.
- Variables.
- Lógica de programación.
- Arquitectura de software.
- Backend.
- Bases de datos.
- Comunicación cliente-servidor.
- Multijugador.
- Depuración.
- Organización del código.

El código debe evolucionar de forma progresiva, entendiendo cada parte antes de añadir sistemas más complejos.

---

## 🤖 Uso de inteligencia artificial

La inteligencia artificial se utiliza como asistente de desarrollo y aprendizaje.

La IA puede ayudar a:

- Explicar conceptos.
- Analizar errores.
- Revisar código.
- Proponer ejercicios.
- Explicar arquitectura.
- Ayudar a razonar soluciones.

La IA no debe asumir que es la autora del código.

El objetivo es que Rivero comprenda lo que implementa y pueda modificar y mantener el proyecto por sí mismo.

---

## 📌 Reglas para futuras IAs

Cualquier IA que trabaje con RIVEROUS debe respetar estas reglas:

1. No asumir que una función está implementada solo porque aparece en esta documentación.
2. Revisar el código real antes de proponer modificaciones cuando sea posible.
3. No inventar archivos, funciones, APIs o sistemas que no existan.
4. Diferenciar claramente entre funcionalidades actuales y funcionalidades planeadas.
5. Explicar el motivo de los cambios importantes.
6. Evitar reescribir todo el proyecto innecesariamente.
7. Mantener la arquitectura existente salvo que exista una razón técnica para modificarla.
8. Priorizar el aprendizaje y la comprensión del código.
9. No tratar código generado por IA como código que Rivero ya comprende.
10. Avanzar progresivamente desde los fundamentos hacia sistemas más complejos.

---

## 🛣️ Dirección de desarrollo

El proyecto evolucionará progresivamente.

Una dirección aproximada es:

```
Fundamentos de programación
        ↓
Frontend funcional
        ↓
Sistema de navegación
        ↓
Lógica de juegos
        ↓
Cuentas y perfiles
        ↓
Backend C++
        ↓
MongoDB
        ↓
Comunicación cliente-servidor
        ↓
Multijugador
        ↓
Torneos
        ↓
Ranking e historial
        ↓
Evolución de la plataforma
```

Este orden no es una obligación absoluta. La arquitectura puede cambiar cuando aparezcan nuevas necesidades técnicas.

---

## 🔮 Futuro

La visión de RIVEROUS puede crecer con el tiempo.

El objetivo a largo plazo es convertir el proyecto en una plataforma de juegos 2D con:

- Múltiples juegos.
- Sistema de cuentas.
- Perfiles.
- Amigos.
- Multijugador.
- Torneos.
- Ranking.
- Estadísticas.
- Historial.
- Backend propio.
- Base de datos.
- Comunicación en tiempo real.

El proyecto se encuentra todavía en construcción y muchas de estas ideas pertenecen al futuro.
