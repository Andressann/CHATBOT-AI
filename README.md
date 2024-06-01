
# IA CHATBOT

## CONTEXT
The company "Coomeva" needs a Chatbot that only users can use. This Chatbot, based on symptomatology, should recommend a specialization to consult and, based on the specialization, recommend one or more doctors to consult with based on AI.

### Functional Requirements 
**1.Registration in the web plataform (Auth step):**
Allow users to register with a username, email and password.

**2.make Login in the plataform (Auth step):**
Allow users to log in with  email and password.

**3.Sending and Receiving Messages:**
Allow users to send text messages to IA chatbot.
Users must be able to receive and view messages sent by IA chatbot.

**4.Basic message history:**
Provide a basic message history so users can view past conversations.

**5.Simple User Interface:**
Create a simple user interface that allows users to send and receive messages intuitively.

**6.Initial Platform:**
Develop the application initially on the web

**7.Consult advice on which doctor to consult:**
el usuario por medio del chat ia podra obtener concejo sobre que medico de la base de datos de medicos asociados a Coomeva.

**8.Consult which specialist to consult:**
based on your ailments, the AI should give you advice on which specialist from a medical branch to consult.

## Diagram C4

### Diagram C1
![Diagram C1](./documentationAssets/c1Coomeva.png)
### Diagram C2
![Diagram C2](./documentationAssets/c2Coomeva.png)
### Diagram C3
![Diagram C3](./documentationAssets/c3Coomeva.png)

## cases use
![cases use](./documentationAssets/useCases.png)

## Flowchart
![Flowchart](./documentationAssets/flowchart.jpg)

## QAW
**ARQUITECTURA QAW**

Identificación de Atributos de Calidad:
Usabilidad: Facilidad para el uso y el aprendizaje del sistema.
Eficiencia: Rapidez y eficacia en las consultas.
Flexibilidad: Adaptación a diversos tipos y tamaños de consultas.
Seguridad: Protección de datos y control de acceso.

Priorización de Atributos de Calidad:
Primaria: Seguridad (Garantizar la protección de la información es primordial).
Secundaria: Usabilidad (Importante para la aceptación del usuario).
Terciaria: Eficiencia y Flexibilidad (Importante para la operación efectiva).

Desarrollo de Escenarios de Calidad: 
Escenario de Seguridad:
Estímulo: Intento de consultas no autorizadas.
Respuesta: Bloqueo de la consulta y registro del intento.

**Escenario de Usabilidad:**
Estímulo: Usuario nuevo accede al sistema.
Respuesta: El usuario comprende rápidamente como usar el sistema sin tener que consultar otros sitios.

**Escenario de Eficiencia:**
Estímulo: Usuario busca consultar sus síntomas.
Respuesta: El sistema rápidamente muestra la información requerida. 

**Escenario de Flexibilidad:**
Estímulo: Se realiza un nuevo tipo de consulta.
Respuesta: El sistema se adapta sin requerir realizar cambios mayores en su programación. 

**Definición de Métricas:**

**Usabilidad:**
Tiempo de Aprendizaje: Tiempo que le toma a un usuario nuevo aprender el uso del sistema hasta un nivel competente.
Tasa de Errores de Usuario: Número de errores que los usuarios cometen al interactuar con el sistema.

**Eficiencia:**
Tiempo de Respuesta: Tiempo que tarda el sistema en responder a una solicitud del usuario.
Uso de Recursos: Cantidad de recursos del sistema (como memoria, CPU o créditos por el uso del chat) que se utilizan durante las operaciones. 

Throughput: Cantidad de tareas que el sistema puede procesar durante un periodo de tiempo determinado.

**Flexibilidad:**
Tiempo y Esfuerzo para Modificar: Medida del tiempo y esfuerzo requeridos para implementar cambios en el sistema

Facilidad de Añadir Nuevas Funcionalidades: Nivel de dificultad que se presenta para añadir nuevas funcionalidades al sistema.

**Seguridad:**
Tiempo hasta el Primer Fallo de Seguridad: Tiempo hasta que se descubra el primer fallo de seguridad después de una liberación. 

Número de vulnerabilidades descubiertas: Número de vulnerabilidades de seguridad descubiertas durante un periodo de tiempo específico.


## roles
**Frontend Developer:** Andres F. Muñoz S  
**Backend Developer:** Camilo A. Velásquez V   
**Quality assurance:** todo el equipo  
**DevOps management:** Kenny A. Diaz C 

## Technologies
**Activity Manager:** Trello     
**Version controller:** Git     
**Integration driver:** jenkins, github     
**Cloud:** aws netify
**FrontEnd:** react 
**BackEnd:** Spring Boot

**page**: https://master--adorable-begonia-5331c5.netlify.app

backend CI: crontab in aws

## Authors

-   [@Keni diaz](https://github.com/kennydiaz1)
-   [@Camilo Velasquez](https://www.github.com/zarrok2112)
-   [@Andres muños](https://github.com/Andressann)

