OC.L10N.register(
    "provisioning_api",
    {
    "Logged in account must be an administrator or have authorization to edit this setting." : "El compte que ha iniciat la sessió ha de ser administrador o tenir autorització per a editar aquest paràmetre.",
    "Could not create non-existing user ID" : "No s'ha pogut crear l'ID d'usuari inexistent",
    "User already exists" : "L'usuari ja existeix",
    "Group %1$s does not exist" : "El grup %1$s no existeix",
    "Insufficient privileges for group %1$s" : "El grup %1$s té privilegis insuficients",
    "No group specified (required for sub-admins)" : "No s'ha especificat cap grup (obligatori per als subadministradors)",
    "Sub-admin group does not exist" : "El grup de subadministradors no existeix",
    "Cannot create sub-admins for admin group" : "No es poden crear subadministradors per al grup d'administració",
    "No permissions to promote sub-admins" : "No teniu permís per a ascendir subadministradors",
    "Invalid password value" : "El valor de la contrasenya no és vàlid",
    "To send a password link to the user an email address is required." : "Cal una adreça electrònica per a enviar un enllaç amb contrasenya a l'usuari.",
    "Required email address was not provided" : "No s'ha proporcionat l'adreça electrònica obligatòria",
    "Invalid quota value: %1$s" : "El valor de quota no és vàlid: %1$s",
    "Invalid quota value. %1$s is exceeding the maximum quota" : "El valor de quota no és vàlid. %1$s supera la quota màxima",
    "Unlimited quota is forbidden on this instance" : "Aquesta instància prohibeix definir una quota sense límits",
    "Setting the password is not supported by the users backend" : "El rerefons d'usuaris no permet definir la contrasenya",
    "Invalid language" : "La llengua no és vàlida",
    "Invalid locale" : "La configuració regional no és vàlida",
    "Cannot remove yourself from the admin group" : "No us podeu suprimir del grup d'administració",
    "Cannot remove yourself from this group as you are a sub-admin" : "No us podeu suprimir d'aquest grup perquè en sou subadministrador",
    "Not viable to remove user from the last group you are sub-admin of" : "No és viable suprimir l'usuari del darrer grup del qual sou subadministrador",
    "User does not exist" : "L'usuari no existeix",
    "Group does not exist" : "El grup no existeix",
    "User is not a sub-admin of this group" : "L'usuari no és un subadministrador d'aquest grup",
    "Email address not available" : "L'adreça electrònica no està disponible",
    "Sending email failed" : "No s'ha pogut enviar el correu electrònic",
    "Email confirmation" : "Confirmació de l'adreça electrònica",
    "To enable the email address %s please click the button below." : "Per a habilitar l'adreça electrònica %s, feu clic en el botó següent.",
    "Confirm" : "Confirma",
    "Email was already removed from account and cannot be confirmed anymore." : "L'adreça electrònica ja s'ha suprimit del compte i ja no es pot confirmar.",
    "Could not verify mail because the token is expired." : "No s'ha pogut verificar l'adreça electrònica perquè el testimoni ha caducat.",
    "Could not verify mail because the token is invalid." : "No s'ha pogut verificar l'adreça electrònica perquè el testimoni no és vàlid.",
    "An unexpected error occurred. Please contact your admin." : "S'ha produït un error inesperat. Contacteu amb l'administrador.",
    "Email confirmation successful" : "S'ha confirmat l'adreça electrònica",
    "Provisioning API" : "API d'aprovisionament",
    "This application enables a set of APIs that external systems can use to manage accounts, groups and apps." : "Aquesta aplicació habilita un conjunt d'API que els sistemes externs poden utilitzar per a administrar comptes, grups i aplicacions.",
    "This application enables a set of APIs that external systems can use to create, edit, delete and query account\n\t\tattributes, query, set and remove groups, set quota and query total storage used in Nextcloud. Group admin accounts\n\t\tcan also query Nextcloud and perform the same functions as an admin for groups they manage. The API also enables\n\t\tan admin to query for active Nextcloud applications, application info, and to enable or disable an app remotely.\n\t\tOnce the app is enabled, HTTP requests can be used via a Basic Auth header to perform any of the functions\n\t\tlisted above. More information is available in the Provisioning API documentation, including example calls\n\t\tand server responses." : "Aquesta aplicació habilita un conjunt d'API que els sistemes externs poden utilitzar per a crear, editar, suprimir i consultar atributs\n\t\tde compte, consultar, definir i suprimir grups, definir la quota i consultar l'emmagatzematge total en ús al Nextcloud. Els comptes administradors de grup\n\t\ttambé poden enviar consultes al Nextcloud i realitzar les mateixes funcions que un administrador per als grups que administren. L'API també permet a\n\t\tun administrador consultar les aplicacions actives del Nextcloud, la informació de l'aplicació i habilitar o inhabilitar una aplicació de forma remota.\n\t\tUn cop habilitada l'aplicació, es poden utilitzar sol·licituds HTTP mitjançant una capçalera d'autenticació bàsica per a realitzar qualsevol de les funcions\n\t\tindicades anteriorment. Podeu trobar més informació en la documentació de l'API d'aprovisionament, incloent-hi exemples\n\t\tde trucades i respostes del servidor.",
    "Logged in user must be an administrator or have authorization to edit this setting." : "L'usuari que ha iniciat la sessió ha de ser administrador o tenir autorització per a editar aquest paràmetre.",
    "This application enables a set of APIs that external systems can use to manage users, groups and apps." : "Aquesta aplicació habilita un conjunt d'API que els sistemes externs poden utilitzar per a administrar usuaris, grups i aplicacions.",
    "This application enables a set of APIs that external systems can use to create, edit, delete and query user\n\t\tattributes, query, set and remove groups, set quota and query total storage used in Nextcloud. Group admin users\n\t\tcan also query Nextcloud and perform the same functions as an admin for groups they manage. The API also enables\n\t\tan admin to query for active Nextcloud applications, application info, and to enable or disable an app remotely.\n\t\tOnce the app is enabled, HTTP requests can be used via a Basic Auth header to perform any of the functions\n\t\tlisted above. More information is available in the Provisioning API documentation, including example calls\n\t\tand server responses." : "Aquesta aplicació habilita un conjunt d'API que els sistemes externs poden utilitzar per a crear, editar, suprimir i consultar atributs\n\t\td'usuari, consultar, definir i suprimir grups, definir la quota i consultar l'emmagatzematge total en ús al Nextcloud. Els usuaris administradors de grup\n\t\ttambé poden enviar consultes al Nextcloud i realitzar les mateixes funcions que un administrador per als grups que administren. L'API també permet a\n\t\tun administrador consultar les aplicacions actives del Nextcloud, la informació de l'aplicació i habilitar o inhabilitar una aplicació de forma remota.\n\t\tUn cop habilitada l'aplicació, es poden utilitzar sol·licituds HTTP mitjançant una capçalera d'autenticació bàsica per a realitzar qualsevol de les funcions\n\t\tindicades anteriorment. Podeu trobar més informació en la documentació de l'API d'aprovisionament, incloent-hi exemples\n\t\tde trucades i respostes del servidor."
},
"nplurals=2; plural=(n != 1);");
