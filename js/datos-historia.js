// js/datos-historia.js
// PREGUNTAS DE HISTORIA - 20 PREGUNTAS NIVEL ALTO

if (typeof DATOS_ACUDE !== 'undefined' && DATOS_ACUDE.preguntas) {
    
    DATOS_ACUDE.preguntas.historia = [
        // PREGUNTA 1 - Nivel 5 - Revolución Francesa (causas)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'historia-001',
            texto: `¿Cuál de los siguientes fue un factor DETERMINANTE para el estallido de la Revolución Francesa en 1789?`,
            
            opciones: [
                "La crisis financiera del Estado por su participación en la guerra de independencia de Estados Unidos y el mantenimiento de privilegios del clero y nobleza",
                "La invasión de Francia por tropas prusianas que buscaban restaurar el absolutismo",
                "La publicación de la Enciclopedia que promovía ideas socialistas revolucionarias",
                "La muerte de Luis XIV que dejó un vacío de poder en la monarquía",
                "El descubrimiento de América que generó inflación en toda Europa"
            ],
            
            correcta: 0,
            
            explicacion: `La Revolución Francesa tuvo múltiples causas, pero la crisis financiera fue el detonante inmediato:
            • Francia ayudó a EE.UU. (gasto enorme)
            • La nobleza y clero no pagaban impuestos
            • El pueblo (Tercer Estado) soportaba toda la carga fiscal
            • Luis XVI convocó los Estados Generales para resolver la crisis, lo que desencadenó la revolución
            
            Las otras opciones son incorrectas: la invasión prusiana fue POSTERIOR (1792), la Enciclopedia era de la Ilustración (no socialista), Luis XIV murió en 1715, y América se descubrió en 1492.`,
            
            dificultad: 5,
            
            temas: ["Revolución Francesa", "Edad Contemporánea", "Crisis del Antiguo Régimen"],
            
            contexto: "Historia universal"
        },
        
        // PREGUNTA 2 - Nivel 5 - Primera Guerra Mundial (causas)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'historia-002',
            texto: `El asesinato del archiduque Francisco Fernando en Sarajevo (1914) fue la chispa que encendió la Primera Guerra Mundial. ¿Qué situación previa explica que este evento llevara a una guerra generalizada?`,
            
            opciones: [
                "El sistema de alianzas rivales (Triple Alianza vs Triple Entente) y la política de bloques que obligó a las potencias a apoyarse mutuamente",
                "El expansionismo alemán que ya había invadido Bélgica antes del asesinato",
                "La debilidad militar de Austria-Hungría que necesitaba apoyo inmediato de Rusia",
                "El acuerdo secreto entre Francia y Alemania para repartirse los Balcanes",
                "La decisión de Estados Unidos de declarar la guerra preventivamente"
            ],
            
            correcta: 0,
            
            explicacion: `El sistema de alianzas fue crucial:
            • Triple Alianza: Alemania, Austria-Hungría, Italia (aunque Italia no entró)
            • Triple Entente: Francia, Rusia, Gran Bretaña
            
            Tras el asesinato:
            Austria dio ultimátum a Serbia → Rusia movilizó tropas para apoyar a Serbia → Alemania declaró guerra a Rusia y Francia → Alemania invadió Bélgica → Gran Bretaña entró por Bélgica.
            
            Las alianzas convirtieron un conflicto local en guerra mundial.`,
            
            dificultad: 4,
            
            temas: ["Primera Guerra Mundial", "Sistema de alianzas", "Historia del siglo XX"],
            
            contexto: "Historia universal"
        },
        
        // PREGUNTA 3 - Nivel 5 - Revolución Rusa
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'historia-003',
            texto: `En octubre de 1917 (calendario juliano), los bolcheviques tomaron el poder en Rusia. ¿Qué documento o decreto emitieron INMEDIATAMENTE después de la toma del poder?`,
            
            opciones: [
                "Decreto sobre la Paz (retirada de la guerra) y Decreto sobre la Tierra (reparto de tierras a campesinos)",
                "La Constitución de la URSS que establecía el federalismo socialista",
                "El Plan Quinquenal para industrializar el país",
                "La abolición de todos los partidos políticos excepto el bolchevique",
                "La creación de la KGB como policía secreta"
            ],
            
            correcta: 0,
            
            explicacion: `Los primeros decretos del II Congreso de los Sóviets (noviembre 1917):
            • DECRETO SOBRE LA PAZ: proponía paz inmediata sin anexiones ni indemnizaciones (llevó al tratado de Brest-Litovsk en 1918)
            • DECRETO SOBRE LA TIERRA: abolió la propiedad privada de la tierra y la repartió entre los campesinos
            
            Los otros eventos fueron posteriores: Constitución de la URSS (1924), Planes Quinquenales (1928), partido único (1921), KGB (1954, antes Cheka 1917).`,
            
            dificultad: 5,
            
            temas: ["Revolución Rusa", "Bolcheviques", "Historia del siglo XX"],
            
            contexto: "Historia universal"
        },
        
        // PREGUNTA 4 - Nivel 4 - Segunda Guerra Mundial (cronología)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'historia-004',
            texto: `¿Cuál es el orden CRONOLÓGICO correcto de estos eventos de la Segunda Guerra Mundial?`,
            
            opciones: [
                "Invasión de Polonia (1939) → Caída de Francia (1940) → Operación Barbarroja (1941) → Pearl Harbor (1941) → Desembarco de Normandía (1944)",
                "Caída de Francia (1940) → Invasión de Polonia (1939) → Pearl Harbor (1941) → Normandía (1944)",
                "Operación Barbarroja (1941) → Invasión de Polonia (1939) → Pearl Harbor (1941) → Normandía (1944)",
                "Pearl Harbor (1941) → Invasión de Polonia (1939) → Caída de Francia (1940) → Normandía (1944)",
                "Invasión de Polonia (1939) → Pearl Harbor (1941) → Caída de Francia (1940) → Normandía (1944)"
            ],
            
            correcta: 0,
            
            explicacion: `Cronología correcta:
            • 1 sep 1939: Alemania invade Polonia (inicio de la guerra)
            • Mayo-junio 1940: Alemania invade y conquista Francia
            • 22 junio 1941: Operación Barbarroja (invasión alemana de la URSS)
            • 7 diciembre 1941: Japón ataca Pearl Harbor (entra EE.UU.)
            • 6 junio 1944: Desembarco de Normandía (Día D)`,
            
            dificultad: 3,
            
            temas: ["Segunda Guerra Mundial", "Cronología", "Historia del siglo XX"],
            
            contexto: "Historia universal"
        },
        
        // PREGUNTA 5 - Nivel 5 - Guerra Fría (crisis)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'historia-005',
            texto: `En 1962, el mundo estuvo al borde de una guerra nuclear durante la Crisis de los Misiles en Cuba. ¿Cuál fue el ACUERDO que resolvió la crisis?`,
            
            opciones: [
                "La URSS retiraría sus misiles de Cuba y EE.UU. se comprometía a no invadir la isla, retirando además sus misiles de Turquía (en secreto)",
                "Cuba se convertiría en territorio desmilitarizado supervisado por la ONU",
                "La URSS retiraría sus misiles a cambio de que EE.UU. retirara su base en Guantánamo",
                "EE.UU. invadiría Cuba y la URSS aceptaba el hecho consumado",
                "Se estableció una línea directa de comunicación (teléfono rojo) como único acuerdo"
            ],
            
            correcta: 0,
            
            explicacion: `La crisis se resolvió con:
            • PÚBLICO: URSS retira misiles de Cuba, EE.UU. no invadirá Cuba
            • SECRETO: EE.UU. retira misiles Júpiter de Turquía (en la frontera con la URSS)
            
            Kruschev y Kennedy llegaron a este acuerdo que evitó la guerra. El "teléfono rojo" se estableció DESPUÉS de la crisis para mejorar comunicación.`,
            
            dificultad: 5,
            
            temas: ["Guerra Fría", "Crisis de los misiles", "Historia del siglo XX"],
            
            contexto: "Historia universal"
        },
        
        // PREGUNTA 6 - Nivel 5 - Historia de México (Independencia)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'historia-006',
            texto: `El Grito de Dolores (16 de septiembre de 1810) es considerado el inicio de la Independencia de México. ¿Cuál era la situación política en España en ese momento que influyó en el movimiento?`,
            
            opciones: [
                "España estaba ocupada por las tropas napoleónicas y el rey Fernando VII estaba prisionero, lo que creó un vacío de poder",
                "España había reconocido la independencia de sus colonias americanas",
                "La monarquía española se había fortalecido con las reformas borbónicas",
                "España estaba en guerra con Inglaterra y necesitaba recursos de sus colonias",
                "La Constitución de Cádiz ya había sido promulgada y otorgaba derechos a los criollos"
            ],
            
            correcta: 0,
            
            explicacion: `Contexto de 1808-1810:
            • Napoleón invade España y coloca a su hermano José Bonaparte en el trono
            • Fernando VII está prisionero
            • Se forman juntas de gobierno en España que gobiernan en nombre del rey
            • En América, surge la pregunta: ¿quién gobierna? ¿las juntas españolas? ¿o debemos formar nuestras propias juntas?
            
            Esto creó el vacío de poder que los criollos aprovecharon para iniciar la independencia.`,
            
            dificultad: 4,
            
            temas: ["Independencia de México", "Historia de México", "Siglo XIX"],
            
            contexto: "Historia de México"
        },
        
        // PREGUNTA 7 - Nivel 5 - Historia de México (Reforma)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'historia-007',
            texto: `Las Leyes de Reforma (1855-1860) en México tenían como objetivo principal:`,
            
            opciones: [
                "Separar la Iglesia del Estado, desamortizar los bienes eclesiásticos y establecer un estado laico",
                "Establecer el sufragio universal y la libertad de expresión",
                "Centralizar el poder en la figura del presidente",
                "Reconocer la independencia de Texas y ceder territorio a EE.UU.",
                "Restaurar el orden colonial y devolver privilegios a la Iglesia"
            ],
            
            correcta: 0,
            
            explicacion: `Las Leyes de Reforma, impulsadas por liberales como Benito Juárez, incluyeron:
            • Ley Juárez (1855): abolió fueros eclesiásticos y militares
            • Ley Lerdo (1856): desamortización de bienes de la Iglesia y corporaciones
            • Ley Iglesias (1857): regulación de derechos parroquiales
            • Constitución de 1857: estableció estado laico
            
            El objetivo era modernizar el país, limitar el poder de la Iglesia y crear un mercado de tierras.`,
            
            dificultad: 4,
            
            temas: ["Reforma", "Historia de México", "Siglo XIX"],
            
            contexto: "Historia de México"
        },
        
        // PREGUNTA 8 - Nivel 5 - Historia de México (Revolución)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'historia-008',
            texto: `El Plan de San Luis (1910) proclamado por Francisco I. Madero desconocía la reelección de Porfirio Díaz y llamaba a la insurrección. ¿Qué demandas sociales específicas incluía?`,
            
            opciones: [
                "Principalmente el sufragio efectivo y la no reelección, pero con una vaga promesa de resolver el problema agrario",
                "La expropiación de todas las haciendas y su reparto entre campesinos",
                "La nacionalización del petróleo y los ferrocarriles",
                "La creación de un estado socialista y la abolición de la propiedad privada",
                "El establecimiento de una monarquía constitucional con apoyo de EE.UU."
            ],
            
            correcta: 0,
            
            explicacion: `El Plan de San Luis:
            • PRINCIPAL: "Sufragio Efectivo, No Reelección"
            • Agrario: mencionaba la devolución de tierras a campesinos (pero de forma vaga, no como Zapata)
            
            Madero era un liberal democrático, no un revolucionario social. Por eso Zapata se rebeló con el Plan de Ayala (1911) exigiendo reforma agraria real.`,
            
            dificultad: 4,
            
            temas: ["Revolución Mexicana", "Historia de México", "Siglo XX"],
            
            contexto: "Historia de México"
        },
        
        // PREGUNTA 9 - Nivel 5 - Conquista de América
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'historia-009',
            texto: `¿Qué factor fue DETERMINANTE en la caída del Imperio Azteca a manos de los españoles (1519-1521)?`,
            
            opciones: [
                "La alianza de los españoles con pueblos indígenas sometidos por los aztecas (como los tlaxcaltecas) y las epidemias de enfermedades europeas",
                "La superioridad numérica de los españoles, que eran miles de soldados",
                "El uso exclusivo de armas de fuego que los aztecas no podían contrarrestar",
                "La rendición voluntaria de Moctezuma que entregó el imperio sin resistencia",
                "El apoyo militar directo de Francia e Inglaterra a los españoles"
            ],
            
            correcta: 0,
            
            explicacion: `Factores clave:
            • ALIANZAS: Los españoles (unos pocos cientos) aprovecharon el descontento de pueblos tributarios (tlaxcaltecas, totonacas) que aportaron decenas de miles de guerreros
            • EPIDEMIAS: viruela y otras enfermedades diezmaron a la población indígena (sin defensas inmunológicas)
            • Superioridad tecnológica (armas, caballos) fue importante pero no decisiva sin las alianzas
            
            Moctezuma no se rindió voluntariamente; murió en circunstancias confusas.`,
            
            dificultad: 5,
            
            temas: ["Conquista de México", "Historia colonial", "Siglo XVI"],
            
            contexto: "Historia de México"
        },
        
        // PREGUNTA 10 - Nivel 4 - Imperio Romano (caída)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'historia-010',
            texto: `¿Cuál de los siguientes factores contribuyó a la caída del Imperio Romano de Occidente (476 d.C.)?`,
            
            opciones: [
                "Las invasiones de pueblos germánicos, la crisis económica y la división del imperio",
                "La conquista por el Imperio Persa que dominó todo el Mediterráneo",
                "La expansión del budismo que debilitó las creencias romanas tradicionales",
                "El asesinato de Julio César que nunca pudo ser superado",
                "La erupción del Vesubio que destruyó Roma"
            ],
            
            correcta: 0,
            
            explicacion: `Causas de la caída de Roma (Occidente):
            • INVASIONES: pueblos germánicos (visigodos, vándalos, ostrogodos) presionan las fronteras
            • ECONÓMICAS: inflación, decadencia del comercio, presión fiscal
            • POLÍTICAS: división del imperio en Oriente y Occidente (395), inestabilidad política
            • MILITARES: ejército con mercenarios germánicos poco leales
            
            El Imperio Romano de Oriente (Bizancio) continuó hasta 1453.`,
            
            dificultad: 3,
            
            temas: ["Imperio Romano", "Historia antigua", "Edad Media"],
            
            contexto: "Historia universal"
        },
        
        // PREGUNTA 11 - Nivel 5 - Renacimiento
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'historia-011',
            texto: `El Renacimiento italiano (siglos XV-XVI) se caracterizó por:`,
            
            opciones: [
                "El humanismo, que colocaba al ser humano como centro del universo (antropocentrismo), recuperando la cultura clásica grecorromana",
                "El teocentrismo medieval llevado a su máxima expresión",
                "La eliminación total de la influencia de la Iglesia en el arte",
                "El surgimiento del arte abstracto como corriente principal",
                "La expansión del islam por toda Europa"
            ],
            
            correcta: 0,
            
            explicacion: `Características del Renacimiento:
            • HUMANISMO: valoración del ser humano, sus capacidades y logros
            • ANTROPOCENTRISMO: el hombre como medida de todas las cosas (vs teocentrismo medieval)
            • RECUPERACIÓN DE LA ANTIGÜEDAD CLÁSICA: Grecia y Roma como modelos
            • MECENAZGO: familias como los Médici patrocinan artistas
            
            La Iglesia siguió siendo importante (artistas como Leonardo y Miguel Ángel trabajaron para papas), pero el enfoque cambió.`,
            
            dificultad: 4,
            
            temas: ["Renacimiento", "Humanismo", "Historia moderna"],
            
            contexto: "Historia universal"
        },
        
        // PREGUNTA 12 - Nivel 5 - Reforma Protestante
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'historia-012',
            texto: `En 1517, Martín Lutero publicó sus 95 tesis. ¿Cuál era la crítica PRINCIPAL que motivó este acto?`,
            
            opciones: [
                "La venta de indulgencias por parte de la Iglesia católica, que prometía la remisión de los pecados a cambio de dinero",
                "El celibato obligatorio de los sacerdotes, que consideraba antinatural",
                "La traducción de la Biblia al latín, que impedía su lectura por el pueblo",
                "La riqueza excesiva del Papa y su estilo de vida lujoso",
                "La construcción de la Basílica de San Pedro, que consideraba un derroche"
            ],
            
            correcta: 0,
            
            explicacion: `Las 95 tesis de Lutero criticaban específicamente:
            • LAS INDULGENCIAS: Johann Tetzel las vendía diciendo "cuando la moneda suena, el alma del purgatorio sale"
            • Lutero argumentaba que la salvación era por la fe (sola fide) y la gracia de Dios, no por obras ni dinero
            
            Las otras críticas vinieron después. La venta de indulgencias financiaba la construcción de San Pedro, pero el problema teológico era la salvación.`,
            
            dificultad: 4,
            
            temas: ["Reforma Protestante", "Lutero", "Historia moderna"],
            
            contexto: "Historia universal"
        },
        
        // PREGUNTA 13 - Nivel 5 - Guerra Fría (muro de Berlín)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'historia-013',
            texto: `El Muro de Berlín fue construido en 1961. ¿Cuál era su propósito principal?`,
            
            opciones: [
                "Detener la emigración masiva de alemanes del este hacia el oeste (fuga de cerebros y mano de obra)",
                "Proteger a Berlín Occidental de una posible invasión soviética",
                "Separar las zonas de ocupación aliada según lo acordado en Yalta",
                "Establecer una barrera sanitaria para evitar epidemias",
                "Crear una zona de amortiguamiento entre la OTAN y el Pacto de Varsovia"
            ],
            
            correcta: 0,
            
            explicacion: `El Muro de Berlín (construido por la RDA) buscaba:
            • Detener la emigración: entre 1949 y 1961, 2.7 millones de alemanes huyeron del este al oeste (muchos profesionales jóvenes)
            • La RDA perdía población y talento
            • El muro "protegía" a los ciudadanos de las ideas occidentales, según la propaganda comunista
            
            No era para proteger Berlín Occidental, sino para encerrar a los del este.`,
            
            dificultad: 4,
            
            temas: ["Guerra Fría", "Muro de Berlín", "Historia del siglo XX"],
            
            contexto: "Historia universal"
        },
        
        // PREGUNTA 14 - Nivel 5 - Colonialismo en África
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'historia-014',
            texto: `La Conferencia de Berlín (1884-1885) organizada por Otto von Bismarck estableció:`,
            
            opciones: [
                "Las reglas para el reparto y colonización de África por las potencias europeas, sin participación africana",
                "La independencia de todas las colonias africanas",
                "La creación de la Unión Africana para gobernar el continente",
                "El fin del comercio de esclavos en África",
                "La partición de Asia entre las potencias europeas"
            ],
            
            correcta: 0,
            
            explicacion: `La Conferencia de Berlín:
            • PARTICIPANTES: 14 potencias europeas (más EE.UU., Turquía)
            • OBJETIVO: regular la colonización de África (el "reparto de África")
            • PRINCIPIO: "ocupación efectiva" para reclamar territorio
            • CONSECUENCIA: división artificial de África sin considerar etnias, culturas o reinos preexistentes
            
            Esto generó fronteras que aún hoy causan conflictos.`,
            
            dificultad: 4,
            
            temas: ["Colonialismo", "Imperialismo", "Historia del siglo XIX"],
            
            contexto: "Historia universal"
        },
        
        // PREGUNTA 15 - Nivel 5 - Historia de México (Porfiriato)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'historia-015',
            texto: `Durante el Porfiriato (1876-1911), México experimentó un crecimiento económico significativo. ¿Cuál fue la BASE de este crecimiento?`,
            
            opciones: [
                "La inversión extranjera (especialmente estadounidense y británica) en minería, ferrocarriles y petróleo, y la estabilidad política mediante la represión",
                "La industrialización nacionalista con empresas mexicanas protegidas del exterior",
                "La reforma agraria que creó una clase media rural próspera",
                "El desarrollo tecnológico propio y la exportación de manufacturas",
                "La alianza comercial con Alemania y Francia que abrió nuevos mercados"
            ],
            
            correcta: 0,
            
            explicacion: `El modelo porfirista se basó en:
            • INVERSIÓN EXTRANJERA: capital de EE.UU. e Inglaterra en ferrocarriles, minería, petróleo
            • EXPORTACIONES: materias primas (henequén, café, metales)
            • ESTABILIDAD: "paz porfiriana" lograda con represión, control político y "pan o palo"
            
            El costo fue la concentración de tierras, desigualdad y dependencia económica.`,
            
            dificultad: 4,
            
            temas: ["Porfiriato", "Historia de México", "Siglo XIX-XX"],
            
            contexto: "Historia de México"
        },
        
        // PREGUNTA 16 - Nivel 5 - Independencia de Estados Unidos
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'historia-016',
            texto: `El lema "No taxation without representation" (no hay impuestos sin representación) usado por los colonos americanos contra Inglaterra significaba:`,
            
            opciones: [
                "Que los colonos no aceptaban impuestos impuestos por el Parlamento británico donde no tenían representantes electos",
                "Que no pagarían impuestos hasta que Inglaterra les diera independencia",
                "Que solo pagarían impuestos si eran iguales a los de Inglaterra",
                "Que querían abolir todos los impuestos existentes",
                "Que aceptaban impuestos solo si eran para beneficio local"
            ],
            
            correcta: 0,
            
            explicacion: `El conflicto surgió porque:
            • El Parlamento británico imponía impuestos a las colonias (Ley del Timbre, Tea Act)
            • Los colonos no tenían representantes en ese Parlamento
            • Su lema expresaba que solo sus propias asambleas coloniales podían imponer impuestos
            
            Llevó al lema "Give me liberty or give me death" y a la guerra de independencia.`,
            
            dificultad: 3,
            
            temas: ["Independencia de EE.UU.", "Historia moderna", "Revoluciones atlánticas"],
            
            contexto: "Historia universal"
        },
        
        // PREGUNTA 17 - Nivel 5 - Fascismo y Nazismo
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'historia-017',
            texto: `El ascenso de Hitler al poder en Alemania (1933) fue posible por:`,
            
            opciones: [
                "La crisis económica post-1929, el descontento con el Tratado de Versalles, el miedo al comunismo y el apoyo de sectores conservadores",
                "Un golpe de estado militar exitoso (Putsch de Múnich)",
                "La invasión de Alemania por tropas francesas que generó unificación nacional",
                "El apoyo directo de la Unión Soviética para debilitar a las democracias",
                "La muerte del presidente Hindenburg sin sucesión constitucional"
            ],
            
            correcta: 0,
            
            explicacion: `Factores del ascenso nazi:
            • ECONÓMICOS: Gran Depresión (1929) → desempleo masivo
            • POLÍTICOS: debilidad de la República de Weimar, miedo al comunismo
            • HISTÓRICOS: resentimiento por el Tratado de Versalles (1919)
            • SOCIALES: apoyo de industriales y clases medias que veían en Hitler un freno al comunismo
            
            Hitler fue nombrado canciller LEGALMENTE en enero 1933, no por golpe.`,
            
            dificultad: 5,
            
            temas: ["Nazismo", "Entreguerras", "Historia del siglo XX"],
            
            contexto: "Historia universal"
        },
        
        // PREGUNTA 18 - Nivel 5 - Descubrimiento de América
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'historia-018',
            texto: `Cristóbal Colón realizó cuatro viajes a América. ¿Cuál fue el principal objetivo de su PRIMER viaje (1492)?`,
            
            opciones: [
                "Encontrar una ruta hacia Asia (las Indias) navegando hacia el oeste, para establecer comercio directo de especias",
                "Descubrir nuevas tierras para colonizarlas y fundar ciudades",
                "Evangelizar a los pueblos paganos que se encontrara",
                "Buscar oro para financiar la reconquista española",
                "Comprobar que la Tierra era redonda"
            ],
            
            correcta: 0,
            
            explicacion: `Contexto del primer viaje:
            • Las rutas a Asia por tierra estaban bloqueadas por el Imperio Otomano
            • Portugal buscaba ruta rodeando África
            • Colón propuso ir hacia el OESTE, pensando que llegaría a Japón y China
            • Murió creyendo que había llegado a Asia (Indias), de ahí "Indias Occidentales"
            
            Colonización y evangelización fueron objetivos posteriores.`,
            
            dificultad: 3,
            
            temas: ["Descubrimiento de América", "Expansión europea", "Siglo XV"],
            
            contexto: "Historia universal"
        },
        
        // PREGUNTA 19 - Nivel 5 - Revolución Mexicana (Constitución de 1917)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'historia-019',
            texto: `La Constitución Mexicana de 1917 fue pionera a nivel mundial por incluir:`,
            
            opciones: [
                "Derechos sociales: artículo 27 (reforma agraria y propiedad nacional de recursos) y artículo 123 (derechos laborales)",
                "El sufragio femenino y la igualdad de género",
                "La abolición de la propiedad privada y la colectivización de tierras",
                "El derecho a la libre determinación de los pueblos indígenas",
                "La separación total Iglesia-Estado y libertad religiosa"
            ],
            
            correcta: 0,
            
            explicacion: `La Constitución de 1917 fue la primera en el mundo en incluir derechos sociales:
            • ARTÍCULO 27: la nación es propietaria originaria de tierras y aguas, puede expropiar, y los recursos del subsuelo (petróleo) son propiedad nacional
            • ARTÍCULO 123: jornada laboral de 8 horas, salario mínimo, derecho a huelga, protección a trabajadores
            
            La separación Iglesia-Estado ya estaba en 1857. El sufragio femenino llegó en 1953.`,
            
            dificultad: 5,
            
            temas: ["Revolución Mexicana", "Constitución de 1917", "Historia de México"],
            
            contexto: "Historia de México"
        },
        
        // PREGUNTA 20 - Nivel 5 - Globalización y fin de la Guerra Fría
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'historia-020',
            texto: `La caída del Muro de Berlín (1989) y la disolución de la URSS (1991) significaron:`,
            
            opciones: [
                "El fin de la Guerra Fría y el inicio de la hegemonía estadounidense como única superpotencia, con expansión del capitalismo y la democracia liberal",
                "El inicio de una guerra nuclear entre EE.UU. y Rusia",
                "La formación de un gobierno mundial socialista",
                "El regreso al sistema de colonias europeas en África",
                "La inmediata unificación de Europa en un solo estado"
            ],
            
            correcta: 0,
            
            explicacion: `Consecuencias del fin de la Guerra Fría:
            • EE.UU. queda como única superpotencia
            • Expansión de la OTAN hacia el este
            • Surgimiento de nuevos estados independientes (ex-repúblicas soviéticas)
            • Expansión de la democracia liberal y la economía de mercado
            • Inicio de la globalización neoliberal
            
            También surgieron nuevos conflictos étnicos y nacionalistas en los Balcanes y el Cáucaso.`,
            
            dificultad: 4,
            
            temas: ["Guerra Fría", "Globalización", "Historia contemporánea"],
            
            contexto: "Historia universal"
        }
    ];
    
    console.log("✅ datos-historia.js cargado con 20 preguntas");
    console.log("📊 Total preguntas de historia: 20");
}