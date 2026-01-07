# FNyC-Website - Sitio Web Oficial
A site for Fernández, Núñez y Compañía Limitada, a Chilean company.

Este repositorio contiene el sitio web oficial de la marca **FNyC Solutions**, una empresa dedicada a ofrecer soluciones prácticas, eficientes y confiables para el hogar, empresas y proyectos de construcción.

## 🏢 Áreas de FNyC Solutions

### 🔹 Grupo de Limpieza
Servicios de aseo y limpieza para hogares, edificios y espacios comunes.

### 🔹 Grupo de instaciones
Detección de fugas, gasfitería, instalación y venta de filtros de agua, y soluciones técnicas en general.

### 🔹 Grupo de Mantenciones
Pintura, terminaciones, reparaciones y mantenciones generales.

### 🔹 Grupo de Construcción
Proyectos menores, ampliaciones, remodelaciones y soluciones constructivas para el hogar o locales comerciales.

---

## 📁 Estructura basica del proyecto
/assets → imágenes, logos e íconos
/css → hojas de estilo
/js → scripts
index.html → página que redirecciona al inicio
/inicio → página principal
/contacto → página para datos y redirección de contacto
/...otras paginas de la web

## Formato de head en archivos html
<head>

    <script async src="https://www.googletagmanager.com/gtag/js?id=G-7GEME94670"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-7GEME94670');
    </script>
    
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Fernández, Núñez y Compañía Limitada">
    <!-- DESCRIPCIÓN SEO – CAMBIAR POR PÁGINA -->
    <meta name="description" content="DESCRIPCIÓN ESPECÍFICA DE LA PÁGINA">
    <!-- Open Graph (redes sociales) – CAMBIAR POR PÁGINA -->
    <meta property="og:title" content="TÍTULO DE LA PÁGINA – FNyC Solutions">
    <meta property="og:description" content="DESCRIPCIÓN PARA REDES SOCIALES">
    <meta property="og:image" content="https://fnyc.cl/assets/logos/originales/1.png">
    <meta property="og:url" content="https://fnyc.cl/RUTA-DE-LA-PÁGINA">
    <meta property="og:type" content="website">

    <!-- TÍTULO DE LA PESTAÑA – CAMBIAR POR PÁGINA -->
    <title>TÍTULO DE LA PÁGINA – FNyC Solutions</title>
    <!-- URL CANÓNICA – CAMBIAR POR PÁGINA -->
    <link rel="canonical" href="https://fnyc.cl/RUTA-DE-LA-PÁGINA">
    <link rel="icon" href="/assets/logos/simples/1.png" type="image/png">

    <!-- PRELOAD – SOLO SI LA PÁGINA TIENE HERO -->
    <!-- <link rel="preload" href="/assets/img/IMAGEN-HERO.jpg" as="image" type="image/jpg"> -->
    
    <link rel="stylesheet" href="/css/main.css">
    <!-- CSS DE LA PÁGINA – CAMBIAR SEGÚN PÁGINA -->
    <!-- <link rel="stylesheet" href="/css/inicio.css"> -->
    
    <script defer src="/js/main.js"></script>
    <!-- JS DE LA PÁGINA – CAMBIAR SEGÚN PÁGINA -->
    <!-- <script defer src="/js/inicio.js"></script> -->
    <!-- Datos (solo si la página los usa) -->
    <!-- <script src="/js/data/services.data.js"></script> -->

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet">
    
</head>
