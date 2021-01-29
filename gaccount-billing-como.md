EXTRA/PASO PREVIO: Para cambiar el idioma, ir a mnú 3 puntitos superior derecho > preferences > Language & region

Fuente: https://cloud.google.com/billing/docs/how-to/modify-project
Desarrollador:
Tenés una BILLING ACCOUNT por defecto, con TU tarjeta de crédito, hay una rleación de 1 a N: 1 billing account N proyectos; y cada cuenta de google cloud console tiene al menos una billing account
1. El desarrollador: creás un proyecto, prototipás cosas usando tu billing account, hacés una pequeña inversión
2. Llega el momento de transferir los costos de infraestructura al cliente
3. El cliente se registra en console.cloud.google.com
4. El cliente va al menú sandwich superior izquierdo > Billing (tarjeta de crédito) > Account management (engranaje)
5. En la barra derecha se muestra toda la información de acceso de cualquier cosa de google cloud. El cliente debe hacer click en +ADD MEMBER.
6. El cliente pone en "New members" tu mail. Seguramente le aparezca "cacheado" de gmail, si tuve conversación con vos.
7. El cliente Hace click en Role y luego donde dice "Type to filter", escribe "Billing Account User", y te lo concede haciendo click en SAVE
8. El desarrollador va a sandwich > Billing > Account management, y clickea en "Actions" > "Change billing" del proyecto a transferir. Allí va a poder elegir la billing account
9. (NO CHEQUEADO) El cliente ahora puede desactivar el rol que me concedió sobre su Billing Account para evitar que el desarrollador (malintencionadamente o por error) agregue más proyectos a su billing account
