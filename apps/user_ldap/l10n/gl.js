OC.L10N.register(
    "user_ldap",
    {
    "Failed to clear the mappings." : "Non foi posíbel limpar as asignacións.",
    "Failed to delete the server configuration" : "Non foi posíbel eliminar a configuración do servidor",
    "Invalid configuration: Anonymous binding is not allowed." : "A configuración non é correcta: o vínculo non está permitido.",
    "Valid configuration, connection established!" : "A configuración é correcta, estabeleceuse a conexión!",
    "Valid configuration, but binding failed. Please check the server settings and credentials." : "A configuración é correcta, mais o vínculo fallou. Comprobe os axustes do servidor e as credenciais.",
    "Invalid configuration. Please have a look at the logs for further details." : "A configuración non é correcta. Bótelle unha ollada aos rexistros para obter máis detalles.",
    "No action specified" : "Non se especificou unha acción",
    "No configuration specified" : "Non se especificou unha configuración",
    "No data specified" : "Non se especificaron datos",
    "Invalid data specified" : "Datos especificados non válidos",
    " Could not set configuration %s" : "Non foi posíbel estabelecer a configuración %s",
    "Action does not exist" : "Non existe esta acción",
    "Renewing …" : "Renovando…",
    "Very weak password" : "Contrasinal moi feble",
    "Weak password" : "Contrasinal feble",
    "So-so password" : "Contrasinal non moi aló",
    "Good password" : "Bo contrasinal",
    "Strong password" : "Contrasinal forte",
    "The Base DN appears to be wrong" : "O DN base semella ser erróneo",
    "Testing configuration…" : "Probando a configuración…",
    "Configuration incorrect" : "Configuración incorrecta",
    "Configuration incomplete" : "Configuración incompleta",
    "Configuration OK" : "Configuración correcta",
    "Select groups" : "Seleccionar grupos",
    "Select object classes" : "Seleccione as clases de obxectos",
    "Please check the credentials, they seem to be wrong." : "Comprobe as credenciais, semella que son erróneas.",
    "Please specify the port, it could not be auto-detected." : "Especifique o porto, non foi posíbel detectalo automaticamente.",
    "Base DN could not be auto-detected, please revise credentials, host and port." : "Non foi posíbel detectar automaticamente o DN base, revise as credenciais, a máquina e o porto.",
    "Could not detect Base DN, please enter it manually." : "Non foi posíbel detectar o DN base, introdúzao manualmente.",
    "{nthServer}. Server" : "{nthServer}. Servidor",
    "No object found in the given Base DN. Please revise." : "Non se atopou o obxecto no DN base solicitado. Revíseo.",
    "More than 1,000 directory entries available." : "Máis de 1,000 entradas de directorios dispoñíbeis.",
    "_{objectsFound} entry available within the provided Base DN_::_{objectsFound} entries available within the provided Base DN_" : ["{objectsFound} entrada dispoñíbel no DN base fornecido","{objectsFound} entradas dispoñíbeis no DN base fornecido"],
    "An error occurred. Please check the Base DN, as well as connection settings and credentials." : "Produciuse un erro. Comprobe o DN base, os axustes de conexión e as credenciais.",
    "Do you really want to delete the current Server Configuration?" : "Confirma que quere eliminar a configuración actual do servidor?",
    "Confirm Deletion" : "Confirmar a eliminación",
    "Mappings cleared successfully!" : "Limpáronse satisfactoriamente as asignacións!",
    "Error while clearing the mappings." : "Produciuse un erro ao limpar as asignacións.",
    "Anonymous bind is not allowed. Please provide a User DN and Password." : "O vínculo anónimo non está permitido. Forneza un DN de usuario e un contrasinal.",
    "LDAP Operations error. Anonymous bind might not be allowed." : "Produciuse un erro de operacións do LDAP. O vínculo anónimo podería non estar permitido.",
    "Saving failed. Please make sure the database is in Operation. Reload before continuing." : "Non foi posíbel gardar. Asegúrese de que a base de datos está en funcionamento. Volva a cargar antes de continuar.",
    "Switching the mode will enable automatic LDAP queries. Depending on your LDAP size they may take a while. Do you still want to switch the mode?" : "O cambio do modo permitirá consultas LDAP automáticas. Dependendo do tamaño de LDAP pode levarlle un chisco. Quere cambiar de modo aínda así?",
    "Mode switch" : "Cambio de modo",
    "Select attributes" : "Seleccione os atributos",
    "User not found. Please check your login attributes and username. Effective filter (to copy-and-paste for command-line validation): <br/>" : "Non se atopou o usuario. Recomendase consultar os atributos de acceso e o nome de usuario. Filtro eficaz (copiar e pegar para a validación en liña de ordes): <br/>",
    "User found and settings verified." : "Atopouse o usuario e verificáronse os axustes.",
    "Consider narrowing your search, as it encompassed many users, only the first one of whom will be able to log in." : "Considere restrinxir a súa busca, pois abrangue moitos usuarios, apenas o primeiro deles poderá acceder.",
    "An unspecified error occurred. Please check log and settings." : "Produciuse un erro non especificado. Comprobe o rexistro e os axustes.",
    "The search filter is invalid, probably due to syntax issues like uneven number of opened and closed brackets. Please revise." : "O filtro de busca é incorrecto, probabelmente por mor de erros de sintaxe como un número impar de chaves de apertura/peche. Revíseo.",
    "A connection error to LDAP/AD occurred. Please check host, port and credentials." : "Produciuse un erro de conexión a LDAP/AD. Verifique a máquina, o porto e as credenciais.",
    "The \"%uid\" placeholder is missing. It will be replaced with the login name when querying LDAP/AD." : "Falta o marcador de posición «%u id». Substitúese polo nome de acceso ao consultar LDAP/AD.",
    "Please provide a login name to test against" : "Forneza o nome de acceso para facer a proba",
    "The group box was disabled, because the LDAP/AD server does not support memberOf." : "Desactivouse a caixa de grupo porque o servidor LDAP/AD non admite memberOf.",
    "Password change rejected. Hint: " : "Contrasinal rexeitado. Consello:",
    "Please login with the new password" : "Acceda co novo contrasinal",
    "LDAP User backend" : "Infraestrutura do usuario LDAP",
    "Your password will expire tomorrow." : "O seu contrasinal caduca mañá.",
    "Your password will expire today." : "O seu contrasinal caducará hoxe.",
    "_Your password will expire within %n day._::_Your password will expire within %n days._" : ["O seu contrasinal caducará en %n día.","O seu contrasinal caducará en %n días."],
    "LDAP/AD integration" : "Integración de LDAP/AD",
    "_%n group found_::_%n groups found_" : ["Atopouse %n grupo","Atopáronse %n grupos"],
    "> 1000 groups found" : "> 1000 grupos atopados",
    "> 1000 users found" : "> 1000 usuarios atopados",
    "_%n user found_::_%n users found_" : ["%n usuario atopado","%n usuarios atopados"],
    "Could not detect user display name attribute. Please specify it yourself in advanced LDAP settings." : "Non foi posíbel detectar o atributo nome de usuario que amosar. Especifíqueo Vde. mesmo nos axustes avanzados de LDAP. ",
    "Could not find the desired feature" : "Non foi posíbel atopar a función desexada",
    "Invalid Host" : "Máquina incorrecta",
    "LDAP user and group backend" : "Infraestrutura de usuarios e grupos LDAP",
    "This application enables administrators to connect Nextcloud to an LDAP-based user directory." : "Esta aplicación permitelle aos administradores conectar Nextcloud a un directorio de usuarios baseado en LDAP.",
    "This application enables administrators to connect Nextcloud to an LDAP-based user directory for authentication and provisioning users, groups and user attributes. Admins can configure this application to connect to one or more LDAP directories or Active Directories via an LDAP interface. Attributes such as user quota, email, avatar pictures, group memberships and more can be pulled into Nextcloud from a directory with the appropriate queries and filters.\n\nA user logs into Nextcloud with their LDAP or AD credentials, and is granted access based on an authentication request handled by the LDAP or AD server. Nextcloud does not store LDAP or AD passwords, rather these credentials are used to authenticate a user and then Nextcloud uses a session for the user ID. More information is available in the LDAP User and Group Backend documentation." : "Esta aplicación permítelle aos administradores conectar Nextcloud cun directorio de usuarios baseado en LDAP para a autenticación e aprovisionamento de usuarios, grupos e atributos de usuario. Os administradores poden configurar esta aplicación para conectarse a un ou máis directorios LDAP ou Active Directory mediante unha interface LDAP. Os atributos como cota de usuario, correo, imaxes de avatar, pertenza a grupos e  máis poden incorporarse a Nextcloud dende un directorio coas peticións e filtros axeitados.\n\nUn usuario rexistrase en Nextcloud coas súa credenciais LDAP ou AD e  se lle concede acceso baseandose nunha petición de autenticación manexada polo servidor LDAP ou AD.Nexttcloud non almacen os contrasinais LDAP ou AD, senon que estas credenciais usanse para autenticar un usuario e após Nextcloud emprega unha sesión para O ID do usuario. Ten dispoñíbel máis información na documentación da infraestrutura de usuarios e grupos LDAP.",
    "Test Configuration" : "Probar a configuración",
    "Help" : "Axuda",
    "Groups meeting these criteria are available in %s:" : "Os grupos que cumpren estes criterios están dispoñíbeis en %s:",
    "Only these object classes:" : "Só estas clases de obxecto:",
    "Only from these groups:" : "Só para estes grupos:",
    "Search groups" : "Buscar grupos",
    "Available groups" : "Grupos dispoñíbeis",
    "Selected groups" : "Grupos seleccionados",
    "Edit LDAP Query" : "Editar a consulta LDAP",
    "LDAP Filter:" : "Filtro LDAP:",
    "The filter specifies which LDAP groups shall have access to the %s instance." : "O filtro especifica que grupos LDAP teñen acceso á instancia %s.",
    "Verify settings and count the groups" : "Verificar os axustes e contar os grupos",
    "When logging in, %s will find the user based on the following attributes:" : "Ao acceder, %s atopa o usuario en función dos seguintes atributos:",
    "LDAP/AD Username:" : "Nome de usuario LDAP/AD:",
    "Allows login against the LDAP/AD username, which is either \"uid\" or \"sAMAccountName\" and will be detected." : "Permite acceder co nome de usuario LDAP/AD, que é «uid» ou «sAMAccountName» e será detectado.",
    "LDAP/AD Email Address:" : "Enderezo de correo LDAP/AD:",
    "Allows login against an email attribute. \"mail\" and \"mailPrimaryAddress\" allowed." : "Permite o acceso contra un atributo de correo-e. Permitirase «mail» e «mailPrimaryAddress».",
    "Other Attributes:" : "Outros atributos:",
    "Defines the filter to apply, when login is attempted. \"%%uid\" replaces the username in the login action. Example: \"uid=%%uid\"" : "Define o filtro que se aplica cando se intenta o acceso. «%%uid» substitúe o nome de usuario e a acción de acceso. Exemplo: «uid=%%uid» ",
    "Test Loginname" : "Probar o nome de acceso",
    "Attempts to receive a DN for the given loginname and the current login filter" : "Tenta recibir un DN para o nome de acceso indicado e o filtro de acceso actual",
    "Verify settings" : "Verificar os axustes",
    "%s. Server:" : "%s. Servidor:",
    "Add a new configuration" : "Engadir unha configuración nova",
    "Copy current configuration into new directory binding" : "Copiar a configuración no novo directorio vinculado",
    "Delete the current configuration" : "Eliminar a configuración actual",
    "Host" : "Máquina",
    "You can omit the protocol, unless you require SSL. If so, start with ldaps://" : "Pode omitir o protocolo a non ser que precise de SSL. Daquela comece con ldaps://",
    "Port" : "Porto",
    "Detect Port" : "Detectar o porto",
    "User DN" : "DN do usuario",
    "The DN of the client user with which the bind shall be done, e.g. uid=agent,dc=example,dc=com. For anonymous access, leave DN and Password empty." : "O DN do cliente do usuario co que hai que estabelecer unha conexión, p.ex uid=axente, dc=exemplo, dc=com. Para o acceso anónimo deixe o DN e o contrasinal baleiros.",
    "Password" : "Contrasinal",
    "For anonymous access, leave DN and Password empty." : "Para o acceso anónimo deixe o DN e o contrasinal baleiros.",
    "Save Credentials" : "Gardar as credenciais",
    "One Base DN per line" : "Un DN base por liña",
    "You can specify Base DN for users and groups in the Advanced tab" : "Pode especificar o DN base para usuarios e grupos na lapela de «Avanzado»",
    "Detect Base DN" : "Detectar o DN base",
    "Test Base DN" : "Probar o DN base",
    "Avoids automatic LDAP requests. Better for bigger setups, but requires some LDAP knowledge." : "Evita as solicitudes LDAP automáticas. E o mellor para as configuracións máis grandes, mais precisa algúns coñecementos de LDAP.",
    "Manually enter LDAP filters (recommended for large directories)" : "Introduza manualmente os filtros LDAP (recomendado para directorios grandes)",
    "Listing and searching for users is constrained by these criteria:" : "A listaxe e a busca de usuarios están restrinxidos por estes criterios:",
    "The most common object classes for users are organizationalPerson, person, user, and inetOrgPerson. If you are not sure which object class to select, please consult your directory admin." : "As clases de obxecto máis comúns para os usuarios son «organizationalPerson», «person», «user» e «inetOrgPerson». Se non está seguro de que clase de obxecto ten que seleccionar, consulte co administrador de directorios.",
    "The filter specifies which LDAP users shall have access to the %s instance." : "O filtro especifica que usuarios LDAP teñen acceso á instancia %s.",
    "Verify settings and count users" : "Verificar os axustes e contar os usuarios",
    "Saving" : "Gardando",
    "Back" : "Atrás",
    "Continue" : "Continuar",
    "Please renew your password." : "Renove o seu contrasinal.",
    "An internal error occurred." : "Produciuse un erro interno.",
    "Please try again or contact your administrator." : "Ténteo de novo ou póñase en contacto coa administración desta instancia.",
    "Current password" : "Contrasinal actual",
    "New password" : "Contrasinal novo",
    "Renew password" : "Renovar o contrasinal",
    "Wrong password." : "Contrasinal erróneo",
    "Cancel" : "Cancelar",
    "Server" : "Servidor",
    "Users" : "Usuarios",
    "Login Attributes" : "Atributos de acceso",
    "Groups" : "Grupos",
    "Expert" : "Experto",
    "Advanced" : "Avanzado",
    "<b>Warning:</b> The PHP LDAP module is not installed, the backend will not work. Please ask your system administrator to install it." : "<b>Advertencia:</b> O módulo PHP LDAP non está instalado, o servidor non funcionará. Consulte coa administración do sistema para instalalo.",
    "Connection Settings" : "Axustes da conexión",
    "Configuration Active" : "Configuración activa",
    "When unchecked, this configuration will be skipped." : "Se está sen marcar, omítese esta configuración.",
    "Backup (Replica) Host" : "Servidor da copia de seguranza (réplica)",
    "Give an optional backup host. It must be a replica of the main LDAP/AD server." : "Indicar un servidor de copia de seguranza opcional. Debe ser unha réplica do servidor principal LDAP/AD.",
    "Backup (Replica) Port" : "Porto da copia de seguranza (réplica)",
    "Disable Main Server" : "Desactivar o servidor principal",
    "Only connect to the replica server." : "Conectar só co servidor de réplica.",
    "Turn off SSL certificate validation." : "Desactiva a validación do certificado SSL.",
    "Not recommended, use it for testing only! If connection only works with this option, import the LDAP server's SSL certificate in your %s server." : "Non recomendado, utilizar só para probas! Se a conexión só funciona con esta opción importa o certificado SSL do servidor LDAP no seu servidor %s.",
    "Cache Time-To-Live" : "Tempo de persistencia da caché",
    "in seconds. A change empties the cache." : "en segundos. Calquera cambio baleira a caché.",
    "Directory Settings" : "Axustes do directorio",
    "User Display Name Field" : "Campo de nome de usuario para amosar",
    "The LDAP attribute to use to generate the user's display name." : "O atributo LDAP a empregar para xerar o nome de usuario para amosar.",
    "2nd User Display Name Field" : "2º campo de nome de usuario para amosar",
    "Optional. An LDAP attribute to be added to the display name in brackets. Results in e.g. »John Doe (john.doe@example.org)«." : "Opcional. Un atributo LDAP para ser engadido no nome para amosar entre parénteses. Resulta en p.ex. «Xan Carallás (xan.carallas@exemplo.org)».",
    "Base User Tree" : "Base da árbore de usuarios",
    "One User Base DN per line" : "Un DN base de usuario por liña",
    "User Search Attributes" : "Atributos de busca do usuario",
    "Optional; one attribute per line" : "Opcional; un atributo por liña",
    "Disable users missing from LDAP" : "Desactivar usuarios que faltan en LDAP",
    "When switched on, users imported from LDAP which are then missing will be disabled" : "Cando estea activado, desactivaranse os usuarios importados de LDAP e que logo faltan",
    "Group Display Name Field" : "Campo de nome de grupo para amosar",
    "The LDAP attribute to use to generate the groups's display name." : "O atributo LDAP úsase para xerar os nomes dos grupos que amosar.",
    "Base Group Tree" : "Base da árbore de grupo",
    "One Group Base DN per line" : "Un DN base de grupo por liña",
    "Group Search Attributes" : "Atributos de busca do grupo",
    "Group-Member association" : "Asociación de grupos e membros",
    "Dynamic Group Member URL" : "URL dinámico do membro do grupo",
    "The LDAP attribute that on group objects contains an LDAP search URL that determines what objects belong to the group. (An empty setting disables dynamic group membership functionality.)" : "O atributo LDAP que nos obxectos de grupo contén un URL de busca LDAP que determina que obxectos pertencen ao grupo. (Un escenario baleiro desactiva a funcionalidade dinámica de pertenza ao grupo.)",
    "Nested Groups" : "Grupos aniñados",
    "When switched on, groups that contain groups are supported. (Only works if the group member attribute contains DNs.)" : "Se está activado, admítense grupos que conteñen grupos. (Só funciona se o atributo de membros do grupo contén os DN.)",
    "Paging chunksize" : "Tamaño dos fragmentos paxinados",
    "Chunksize used for paged LDAP searches that may return bulky results like user or group enumeration. (Setting it 0 disables paged LDAP searches in those situations.)" : "Tamaño dos fragmentos utilizados para as buscas LDAP paxinadas, que poden devolver resultados voluminosos como usuario ou enumeración de grupo. (Se se axusta a 0, desactívanse as buscas LDAP paxinadas nesas situacións.)",
    "Enable LDAP password changes per user" : "Activar os cambios no contrasinal LDAP polo usuario",
    "Allow LDAP users to change their password and allow Super Administrators and Group Administrators to change the password of their LDAP users. Only works when access control policies are configured accordingly on the LDAP server. As passwords are sent in plaintext to the LDAP server, transport encryption must be used and password hashing should be configured on the LDAP server." : "Permítelle aos usuarios LDAP cambiar o seu contrasinal e permite que os administradores e administradores de grupos, cambiar o contrasinal dos seus usuarios LDAP. Só funciona cando as directivas de control de acceso están configuradas conforme coas do servidor LDAP. Xa que os contrasinais son enviados en texto simple ao servidor, LDAP, debe empregarse o cifrado no transporte e o «resumo criptográfico dos contrasinais debe ser configurado no servidor LDAP.",
    "(New password is sent as plain text to LDAP)" : "(O novo contrasinal envíase como un texto simple para LDAP)",
    "Default password policy DN" : "DN da directiva de contrasinal predeterminado",
    "The DN of a default password policy that will be used for password expiry handling. Works only when LDAP password changes per user are enabled and is only supported by OpenLDAP. Leave empty to disable password expiry handling." : "O DN dunha directiva de contrasinais predeterminados que será usado para o control da caducidade dos contrasinais. Só funciona cando está activado o cambio do contrasinal LDAP polos usuarios e só está aceptado por OpenLDAP. Déixea baleira para desactivar o control da caducidade dos contrasinais.",
    "Special Attributes" : "Atributos especiais",
    "Quota Field" : "Campo de cota",
    "Leave empty for user's default quota. Otherwise, specify an LDAP/AD attribute." : "Deixar baleiro para a cota predeterminada do usuario. Noutro caso, especifique un atributo LDAP/AD.",
    "Quota Default" : "Cota predeterminada",
    "Override default quota for LDAP users who do not have a quota set in the Quota Field." : "Substituír a cota predeterminada para usuarios LDAP que non teñen unha cota estabelecida no campo Cota.",
    "Email Field" : "Campo do correo",
    "Set the user's email from their LDAP attribute. Leave it empty for default behaviour." : "Estabelecer o correo do usuario dende un atributo LDAP. Déixeo baleiro para un comportamento predeterminado.",
    "User Home Folder Naming Rule" : "Regra de nomeado do cartafol do usuario",
    "Leave empty for username (default). Otherwise, specify an LDAP/AD attribute." : "Deixar baleiro para o nome de usuario (predeterminado). Noutro caso, especifique un atributo LDAP/AD.",
    "\"$home\" Placeholder Field" : "Campo de marcador de posición «$home»",
    "$home in an external storage configuration will be replaced with the value of the specified attribute" : "Nunha configuración de almacenamento externo substituirase $home polo valor do atributo especificado",
    "User Profile Attributes" : "Atributos do perfil de usuario",
    "Phone Field" : "Campo de teléfono",
    "User profile Phone will be set from the specified attribute" : "O teléfono do perfil de usuario estabelecerase a partir do atributo especificado",
    "Website Field" : "Campo do sitio web",
    "User profile Website will be set from the specified attribute" : "O sitio web do perfil de usuario estabelecerase a partir do atributo especificado",
    "Address Field" : "Campo de enderezo",
    "User profile Address will be set from the specified attribute" : "O enderezo do perfil de usuario estabelecerase a partir do atributo especificado",
    "Twitter Field" : "Campo de Twitter",
    "User profile Twitter will be set from the specified attribute" : "O perfil de usuario Twitter estabelecerase a partir do atributo especificado",
    "Fediverse Field" : "Campo do Fediverso",
    "User profile Fediverse will be set from the specified attribute" : "O perfil de usuario Fediverso estabelecerase a partir do atributo especificado",
    "Organisation Field" : "Campo da organización",
    "User profile Organisation will be set from the specified attribute" : "A organización do perfil de usuario estabelecerase a partir do atributo especificado",
    "Role Field" : "Campo de rol",
    "User profile Role will be set from the specified attribute" : "O rol do perfil de usuario estabelecerase a partir do atributo especificado",
    "Headline Field" : "Campo de título",
    "User profile Headline will be set from the specified attribute" : "O título do perfil de usuario estabelecerase a partir do atributo especificado",
    "Biography Field" : "Campo de biografía",
    "User profile Biography will be set from the specified attribute" : "A biografía do perfil do usuario estabelecerase a partir do atributo especificado",
    "Internal Username" : "Nome interno de usuario",
    "By default the internal username will be created from the UUID attribute. It makes sure that the username is unique and characters do not need to be converted. The internal username has the restriction that only these characters are allowed: [a-zA-Z0-9_.@-]. Other characters are replaced with their ASCII correspondence or simply omitted. On collisions a number will be added/increased. The internal username is used to identify a user internally. It is also the default name for the user home folder. It is also a part of remote URLs, for instance for all DAV services. With this setting, the default behavior can be overridden. Changes will have effect only on newly mapped (added) LDAP users. Leave it empty for default behavior." : "De xeito predeterminado, o nome de usuario interno crearase a partir do atributo UUID. Isto asegura que o nome de usuario é único e que non é necesario converter os caracteres. O nome de usuario interno ten a restrición de que só se permiten estes caracteres: [a-zA-Z0-9_.@-]. Outros caracteres substitúense pola súa correspondencia ASCII ou simplemente omítense. Nos casos de colisións engadirase/aumentarase un número. O nome de usuario interno úsase para identificar un usuario internamente. Tamén é o nome predeterminado para o cartafol de inicio do usuario. Tamén forma parte dos URL remotos, por exemplo para todos os servizos DAV. Con esta configuración, pódese anular o comportamento predeterminado. Os cambios só terán efecto nos usuarios LDAP recén asignados (engadidos). Déixeo baleiro para o comportamento predeterminado.",
    "Internal Username Attribute:" : "Atributo do nome interno de usuario:",
    "Override UUID detection" : "Ignorar a detección do UUID",
    "By default, the UUID attribute is automatically detected. The UUID attribute is used to doubtlessly identify LDAP users and groups. Also, the internal username will be created based on the UUID, if not specified otherwise above. You can override the setting and pass an attribute of your choice. You must make sure that the attribute of your choice can be fetched for both users and groups and it is unique. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users and groups." : "Por omisión, o atributo UUID é detectado automaticamente. O atributo UUID utilizase para identificar, sen dúbida, aos usuarios e grupos LDAP. Ademais, crearase o nome interno de usuario baseado no UUID, se non se especifica anteriormente o contrario. Pode anular o axuste e pasar un atributo da súa escolla. Vde. debe asegurarse de que o atributo da súa escolla pode ser recuperado polos usuarios e grupos e de que é único. Déixeo baleiro para o comportamento predeterminado. Os cambios terán efecto só nas novas asignacións (engadidos) de usuarios de LDAP.",
    "UUID Attribute for Users:" : "Atributo do UUID para usuarios:",
    "UUID Attribute for Groups:" : "Atributo do UUID para grupos:",
    "Username-LDAP User Mapping" : "Asignación do usuario ao «nome de usuario LDAP»",
    "Usernames are used to store and assign metadata. In order to precisely identify and recognize users, each LDAP user will have an internal username. This requires a mapping from username to LDAP user. The created username is mapped to the UUID of the LDAP user. Additionally the DN is cached as well to reduce LDAP interaction, but it is not used for identification. If the DN changes, the changes will be found. The internal username is used all over. Clearing the mappings will have leftovers everywhere. Clearing the mappings is not configuration sensitive, it affects all LDAP configurations! Never clear the mappings in a production environment, only in a testing or experimental stage." : "Os nomes de usuario empréganse para almacenar e asignar metadatos. Coa fin de identificar con precisión e recoñecer aos usuarios, cada usuario LDAP terá un nome interno de usuario. Isto precisa dunha asignación do nome de usuario a usuario LDAP. O nome de usuario creado asignase ao UUID do usuario LDAP. Ademais o DN almacenase na caché, para así reducir a interacción do LDAP, mais non se utiliza para a identificación. Se o DN cambia, os cambios poden ser atopados. O nome interno do usuario utilizase para todo. A limpeza das asignacións deixará rastros en todas partes. A limpeza das asignacións non é sensíbel á configuración, afecta a todas as configuracións de LDAP! Non limpar nunca as asignacións nun contorno de produción. Limpar as asignacións só en fases de proba ou experimentais.",
    "Clear Username-LDAP User Mapping" : "Limpar a asignación do usuario ao «nome de usuario LDAP»",
    "Clear Groupname-LDAP Group Mapping" : "Limpar a asignación do grupo ao «nome de grupo LDAP»"
},
"nplurals=2; plural=(n != 1);");
