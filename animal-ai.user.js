// ==UserScript==
// @name         Agregar Botón de Redirección a Animal AI
// @namespace    http://oceanandwild.github.io
// @version      1.1
// @description  Agrega un botón que redirige a otra web en Animal AI
// @match        https://oceanandwild.github.io/Animal-AI-Official-Website/*
// @updateURL    https://oceanandwild.github.io/OrangeMonkey-Animal-AI-Script/package.json  // Cambia esta URL a tu archivo JSON
// @grant        none

// ==/UserScript==

(function() {
    'use strict';

    // Crear el botón
    const botonRedireccion = document.createElement('button');
    botonRedireccion.innerText = 'Visita Nuestro Blog'; // Cambia el texto según necesites
    botonRedireccion.style.position = 'fixed'; // Fijo en la pantalla
    botonRedireccion.style.bottom = '20px'; // Espaciado desde el fondo
    botonRedireccion.style.right = '20px'; // Espaciado desde la derecha
    botonRedireccion.style.padding = '10px 20px'; // Padding
    botonRedireccion.style.fontSize = '16px'; // Tamaño de fuente
    botonRedireccion.style.backgroundColor = '#4CAF50'; // Color de fondo
    botonRedireccion.style.color = 'white'; // Color del texto
    botonRedireccion.style.border = 'none'; // Sin borde
    botonRedireccion.style.borderRadius = '5px'; // Esquinas redondeadas
    botonRedireccion.style.cursor = 'pointer'; // Cambia el cursor al pasar

    // Añadir un evento de clic para redirigir
    botonRedireccion.addEventListener('click', () => {
        window.location.href = 'https://www.ejemplo.com'; // Cambia esta URL a la que deseas redirigir
    });

    // Añadir el botón al cuerpo del documento
    document.body.appendChild(botonRedireccion);
})();
