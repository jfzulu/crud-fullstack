# CRUD Contact List - Fullstack Application

Este proyecto es una aplicación web fullstack para la gestión de contactos, desarrollada con **Spring Boot** en el backend y **React** en el frontend. Permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre una lista de contactos, integrando una API REST y una interfaz de usuario moderna.

---

## Estructura del Proyecto

```
crud-fullstack/
│
├── ems-backend/    # Backend: Spring Boot
│
└── ems-frontend/   # Frontend: React + Vite
```

---

## Características

- **Backend (Spring Boot):**
	- API RESTful para la gestión de contactos.
	- Persistencia en base de datos MySQL.
	- Validación y manejo de excepciones.
	- Arquitectura basada en DTOs, entidades y servicios.
	- CRUD completo: crear, consultar, actualizar y eliminar contactos.

- **Frontend (React):**
	- Interfaz de usuario responsiva con Bootstrap.
	- Listado, creación, edición y eliminación de contactos.
	- Navegación mediante React Router.
	- Validación de formularios en el cliente.

---

## Requisitos

- **Backend:**
	- Java 17+
	- Maven
	- MySQL

- **Frontend:**
	- Node.js 18+
	- npm

---

## Instalación y Ejecución

### 1. Backend (Spring Boot)

1. Configura la base de datos MySQL y actualiza las credenciales en [`src/main/resources/application.properties`](ems-backend/src/main/resources/application.properties).
2. Instala las dependencias y ejecuta el servidor:

```sh
cd ems-backend
./mvnw spring-boot:run
```

El backend estará disponible en `http://localhost:8080`.

---

### 2. Frontend (React)

1. Instala las dependencias:

```sh
cd ems-frontend
npm install
```

2. Ejecuta la aplicación:

```sh
npm run dev
```

La interfaz estará disponible en `http://localhost:3000`.

---

## Uso

- Accede a la interfaz web para gestionar contactos.
- Las operaciones CRUD se comunican con la API REST del backend.
- El sistema valida los datos tanto en el frontend como en el backend.

---

## Estructura de Carpetas

- **ems-backend/**  
	Código fuente del backend, controladores, servicios, repositorios, entidades y configuración.

- **ems-frontend/**  
	Código fuente del frontend, componentes React, servicios de consumo de API y estilos.

---

## Autor

Desarrollado por [jfzulu](https://github.com/jfzulu).

---

## Licencia

Este proyecto se distribuye bajo la licencia MIT.
