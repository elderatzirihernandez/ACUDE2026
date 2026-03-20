// js/examen.js
// LÓGICA COMPLETA DEL EXAMEN - VERSIÓN CORREGIDA (SIN CICLOS INFINITOS)

// Variables de control
let examenInicializado = false;
let intentosCarga = 0;
const MAX_INTENTOS = 30; // 30 intentos * 200ms = 6 segundos máximo

// ============================================
// FUNCIÓN PRINCIPAL DE INICIALIZACIÓN (CORREGIDA)
// ============================================
function inicializarExamenConDatos() {
    // Evitar inicialización múltiple
    if (examenInicializado) return;
    
    // Incrementar contador de intentos
    intentosCarga++;
    
    console.log(`🔍 Intento ${intentosCarga}/${MAX_INTENTOS} de inicializar examen...`);
    
    // ============================================
    // VERIFICAR QUE DATOS_ACUDE EXISTA (CON CONTROL)
    // ============================================
    if (typeof DATOS_ACUDE === 'undefined' || typeof DATOS_ACUDE.materias === 'undefined') {
        if (intentosCarga < MAX_INTENTOS) {
            console.log(`⏳ Datos no disponibles, reintento ${intentosCarga}/${MAX_INTENTOS} en 200ms...`);
            setTimeout(inicializarExamenConDatos, 200);
        } else {
            // MÁXIMOS INTENTOS ALCANZADOS - MOSTRAR ERROR
            console.error("❌ Máximos intentos alcanzados. DATOS_ACUDE no disponible.");
            
            // Ocultar spinner
            document.getElementById('spinner').style.display = 'none';
            
            // Mostrar error al usuario
            Swal.fire({
                icon: 'error',
                title: 'Error de carga',
                html: `
                    <p>No se pudieron cargar los datos después de varios intentos.</p>
                    <p class="small text-muted">Verifica que los archivos .js estén en la carpeta correcta:</p>
                    <ul class="text-start small">
                        <li>📄 js/datos.js (obligatorio)</li>
                        <li>📄 js/datos-lengua.js (opcional)</li>
                        <li>📄 js/examen.js (este archivo)</li>
                    </ul>
                `,
                confirmButtonText: 'Reintentar',
                showCancelButton: true,
                cancelButtonText: 'Volver al inicio'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.reload();
                } else {
                    window.location.href = 'index.html';
                }
            });
        }
        return;
    }
    
    // ============================================
    // SI LLEGAMOS AQUÍ, DATOS_ACUDE EXISTE
    // ============================================
    examenInicializado = true;
    console.log(`✅ DATOS_ACUDE encontrado después de ${intentosCarga} intentos`);
    
    // ============================================
    // OBTENER MATERIA DE LA URL
    // ============================================
    const urlParams = new URLSearchParams(window.location.search);
    const materiaId = urlParams.get('materia');
    
    if (!materiaId) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se especificó ninguna materia',
            confirmButtonText: 'Volver al inicio'
        }).then(() => {
            window.location.href = 'index.html';
        });
        return;
    }
    
    // ============================================
    // REFERENCIAS A ELEMENTOS DEL DOM
    // ============================================
    const elementos = {
        // Spinner y paneles
        spinner: document.getElementById('spinner'),
        panelConfiguracion: document.getElementById('panel-configuracion'),
        areaExamen: document.getElementById('area-examen'),
        preguntaContainer: document.getElementById('pregunta-container'),
        
        // Títulos
        tituloMateria: document.getElementById('titulo-materia'),
        subtituloMateria: document.getElementById('subtitulo-materia'),
        
        // Contadores
        contadorPreguntas: document.getElementById('contador-preguntas'),
        respuestasContador: document.getElementById('respuestas-contador'),
        badgeRespuestas: document.getElementById('badge-respuestas'),
        barraProgreso: document.getElementById('barra-progreso'),
        preguntaNumero: document.getElementById('pregunta-numero'),
        preguntasDisponibles: document.getElementById('preguntas-disponibles'),
        
        // Marcadas
        badgeMarcadas: document.getElementById('badge-marcadas'),
        marcadasCount: document.getElementById('marcadas-count'),
        marcadasContador: document.getElementById('marcadas-contador'),
        
        // Pregunta actual
        contextoPregunta: document.getElementById('contexto-pregunta'),
        textoPregunta: document.getElementById('texto-pregunta'),
        opcionesContainer: document.getElementById('opciones-container'),
        badgeDificultad: document.getElementById('badge-dificultad'),
        badgeArea: document.getElementById('badge-area'),
        temasContainer: document.getElementById('temas-container'),
        
        // Explicación
        explicacionContainer: document.getElementById('explicacion-container'),
        textoExplicacion: document.getElementById('texto-explicacion'),
        
        // Botones
        btnAnterior: document.getElementById('btn-anterior'),
        btnSiguiente: document.getElementById('btn-siguiente'),
        btnFinalizar: document.getElementById('btn-finalizar'),
        btnMarcar: document.getElementById('btn-marcar'),
        botonesCantidad: document.querySelectorAll('[data-cantidad]')
    };
    
    // Verificar que todos los elementos existan
    const elementosFaltantes = Object.entries(elementos)
        .filter(([key, value]) => !value)
        .map(([key]) => key);
    
    if (elementosFaltantes.length > 0) {
        console.error("❌ Elementos faltantes:", elementosFaltantes);
        Swal.fire({
            icon: 'error',
            title: 'Error de interfaz',
            text: `Faltan elementos: ${elementosFaltantes.join(', ')}`,
            confirmButtonText: 'Recargar'
        }).then(() => {
            window.location.reload();
        });
        return;
    }
    
    // ============================================
    // BUSCAR INFORMACIÓN DE LA MATERIA
    // ============================================
    const materiaInfo = DATOS_ACUDE.materias.find(m => m.id === materiaId);
    
    if (!materiaInfo) {
        Swal.fire({
            icon: 'error',
            title: 'Materia no encontrada',
            text: `La materia "${materiaId}" no existe`,
            confirmButtonText: 'Volver al inicio'
        }).then(() => {
            window.location.href = 'index.html';
        });
        return;
    }
    
    // Verificar preguntas
    if (!DATOS_ACUDE.preguntas[materiaId] || DATOS_ACUDE.preguntas[materiaId].length === 0) {
        Swal.fire({
            icon: 'warning',
            title: 'Sin preguntas',
            html: `
                <p>La materia <strong>${materiaInfo.nombre}</strong> no tiene preguntas disponibles.</p>
                <p class="small text-muted">Esperando archivo: <strong>datos-${materiaId}.js</strong></p>
            `,
            confirmButtonText: 'Ver otras materias',
            showCancelButton: true,
            cancelButtonText: 'Reintentar'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = 'index.html';
            } else {
                window.location.reload();
            }
        });
        return;
    }
    
    // ============================================
    // VARIABLES DE ESTADO
    // ============================================
    let estado = {
        materia: materiaInfo,
        bancoPreguntas: DATOS_ACUDE.preguntas[materiaId],
        preguntasExamen: [],
        respuestas: [],
        marcadas: [],
        indiceActual: 0,
        totalPreguntas: 0,
        examenIniciado: false,
        materiaId: materiaId
    };
    
    console.log(`✅ Materia: ${materiaInfo.nombre}`);
    console.log(`📊 Preguntas disponibles: ${estado.bancoPreguntas.length}`);
    
    // Actualizar UI
    elementos.tituloMateria.textContent = materiaInfo.nombre;
    elementos.subtituloMateria.textContent = `${materiaInfo.area || 'General'} · ${materiaInfo.nivel || 'Intermedio'}`;
    
    if (elementos.preguntasDisponibles) {
        elementos.preguntasDisponibles.innerHTML = `
            <i class="fas fa-database me-1"></i> 
            ${estado.bancoPreguntas.length} preguntas disponibles
        `;
    }
    
    // Ocultar spinner, mostrar configuración
    elementos.spinner.style.display = 'none';
    elementos.panelConfiguracion.style.display = 'block';
    
    // ============================================
    // FUNCIÓN: MEZCLAR OPCIONES DE UNA PREGUNTA
    // ============================================
    function mezclarOpciones(pregunta) {
        // Si no hay opciones, devolver la pregunta original
        if (!pregunta.opciones || !Array.isArray(pregunta.opciones)) {
            return pregunta;
        }
        
        // Crear array de opciones con su índice original
        const opcionesConIndice = pregunta.opciones.map((texto, idx) => ({
            texto,
            idxOriginal: idx
        }));
        
        // Algoritmo Fisher-Yates para mezclar aleatoriamente
        for (let i = opcionesConIndice.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [opcionesConIndice[i], opcionesConIndice[j]] = [opcionesConIndice[j], opcionesConIndice[i]];
        }
        
        // Encontrar nueva posición de la respuesta correcta
        const nuevaPosicionCorrecta = opcionesConIndice.findIndex(
            item => item.idxOriginal === pregunta.correcta
        );
        
        // Devolver pregunta con opciones mezcladas
        return {
            ...pregunta,
            opciones: opcionesConIndice.map(item => item.texto),
            correcta: nuevaPosicionCorrecta
        };
    }
    
    // ============================================
    // FUNCIÓN: INICIAR EXAMEN
    // ============================================
    function iniciarExamen(cantidad) {
        console.log(`🎯 Iniciando examen con ${cantidad} preguntas`);
        
        // Validar cantidad disponible
        let preguntasTomar = cantidad;
        if (cantidad > estado.bancoPreguntas.length) {
            Swal.fire({
                icon: 'warning',
                title: 'Atención',
                text: `Solo hay ${estado.bancoPreguntas.length} preguntas disponibles. Se usarán todas.`,
                confirmButtonText: 'Entendido'
            });
            preguntasTomar = estado.bancoPreguntas.length;
        }
        
        // Seleccionar preguntas aleatorias del banco
        const preguntasSeleccionadas = [...estado.bancoPreguntas]
            .sort(() => Math.random() - 0.5)
            .slice(0, preguntasTomar);
        
        // Mezclar opciones de cada pregunta
        estado.preguntasExamen = preguntasSeleccionadas.map(p => mezclarOpciones(p));
        estado.totalPreguntas = estado.preguntasExamen.length;
        
        // Inicializar arrays de estado
        estado.respuestas = new Array(estado.totalPreguntas).fill(null);
        estado.marcadas = new Array(estado.totalPreguntas).fill(false);
        estado.indiceActual = 0;
        estado.examenIniciado = true;
        
        // Mostrar área de examen
        elementos.panelConfiguracion.style.display = 'none';
        elementos.areaExamen.style.display = 'block';
        
        // Actualizar UI
        actualizarContadores();
        mostrarPregunta(0);
        
        console.log(`✅ Examen iniciado con ${estado.totalPreguntas} preguntas`);
    }
    
    // ============================================
    // FUNCIÓN: MOSTRAR PREGUNTA
    // ============================================
    function mostrarPregunta(indice) {
        const pregunta = estado.preguntasExamen[indice];
        
        // Actualizar número de pregunta
        elementos.preguntaNumero.textContent = `Pregunta ${indice + 1} de ${estado.totalPreguntas}`;
        
        // Mostrar área
        elementos.badgeArea.innerHTML = `
            <i class="fas fa-folder me-1"></i> ${estado.materia.area || 'General'}
        `;
        
        // Mostrar dificultad
        const dificultad = pregunta.dificultad || 3;
        elementos.badgeDificultad.className = `badge-dificultad dificultad-${dificultad}`;
        elementos.badgeDificultad.innerHTML = `
            <i class="fas fa-star me-1"></i> Nivel ${dificultad}/5
        `;
        
        // Mostrar temas si existen
        if (pregunta.temas && pregunta.temas.length > 0) {
            elementos.temasContainer.innerHTML = pregunta.temas.map(tema => 
                `<span class="tema-badge"><i class="fas fa-tag me-1"></i>${tema}</span>`
            ).join('');
        } else {
            elementos.temasContainer.innerHTML = '';
        }
        
        // Mostrar contexto (si existe)
        if (pregunta.contexto) {
            elementos.contextoPregunta.textContent = pregunta.contexto;
            elementos.contextoPregunta.style.display = 'block';
        } else {
            elementos.contextoPregunta.style.display = 'none';
        }
        
        // Mostrar texto de la pregunta
        elementos.textoPregunta.innerHTML = pregunta.texto || pregunta.pregunta || 'Pregunta no disponible';
        
        // Generar opciones
        elementos.opcionesContainer.innerHTML = '';
        
        pregunta.opciones.forEach((opcion, idx) => {
            const opcionDiv = document.createElement('div');
            opcionDiv.className = 'opcion-item';
            
            // Si ya respondió esta pregunta, marcar estilos
            if (estado.respuestas[indice] !== null) {
                opcionDiv.classList.add('disabled');
                if (idx === pregunta.correcta) {
                    opcionDiv.classList.add('opcion-correcta');
                }
                if (idx === estado.respuestas[indice] && idx !== pregunta.correcta) {
                    opcionDiv.classList.add('opcion-incorrecta');
                }
                if (idx === estado.respuestas[indice]) {
                    opcionDiv.classList.add('selected');
                }
            }
            
            const letra = String.fromCharCode(65 + idx); // A, B, C, D, E
            
            opcionDiv.innerHTML = `
                <span class="letra">${letra}</span>
                <span>${opcion}</span>
            `;
            
            // Evento click si no está respondida
            if (estado.respuestas[indice] === null) {
                opcionDiv.addEventListener('click', () => seleccionarOpcion(indice, idx));
            }
            
            elementos.opcionesContainer.appendChild(opcionDiv);
        });
        
        // Mostrar explicación si ya respondió
        if (estado.respuestas[indice] !== null) {
            mostrarExplicacion(indice);
        } else {
            elementos.explicacionContainer.style.display = 'none';
        }
        
        // Actualizar botones de navegación
        elementos.btnAnterior.disabled = (indice === 0);
        
        if (indice === estado.totalPreguntas - 1) {
            elementos.btnSiguiente.innerHTML = 'Última <i class="fas fa-angle-double-right ms-2"></i>';
        } else {
            elementos.btnSiguiente.innerHTML = 'Siguiente <i class="fas fa-arrow-right ms-2"></i>';
        }
        
        // Actualizar estilo de marcado
        actualizarEstiloMarcado(indice);
        
        // Renderizar fórmulas con KaTeX si está disponible
        if (typeof renderMathInElement === 'function') {
            try {
                renderMathInElement(elementos.textoPregunta, {
                    delimiters: [
                        {left: '\\(', right: '\\)', display: false},
                        {left: '\\[', right: '\\]', display: true}
                    ]
                });
            } catch (e) {
                console.log("Error en KaTeX:", e);
            }
        }
    }
    
    // ============================================
    // FUNCIÓN: SELECCIONAR OPCIÓN
    // ============================================
    function seleccionarOpcion(indicePregunta, indiceOpcion) {
        // Guardar respuesta
        estado.respuestas[indicePregunta] = indiceOpcion;
        
        // Actualizar UI de opciones
        const opciones = elementos.opcionesContainer.children;
        const pregunta = estado.preguntasExamen[indicePregunta];
        
        for (let i = 0; i < opciones.length; i++) {
            opciones[i].classList.add('disabled');
            
            if (i === pregunta.correcta) {
                opciones[i].classList.add('opcion-correcta');
            }
            
            if (i === indiceOpcion && i !== pregunta.correcta) {
                opciones[i].classList.add('opcion-incorrecta');
            }
            
            if (i === indiceOpcion) {
                opciones[i].classList.add('selected');
            }
        }
        
        // Mostrar explicación
        mostrarExplicacion(indicePregunta);
        
        // Actualizar contadores
        actualizarContadores();
    }
    
    // ============================================
    // FUNCIÓN: MOSTRAR EXPLICACIÓN
    // ============================================
    function mostrarExplicacion(indice) {
        const pregunta = estado.preguntasExamen[indice];
        elementos.textoExplicacion.innerHTML = pregunta.explicacion || 'No hay explicación disponible';
        elementos.explicacionContainer.style.display = 'block';
        
        // Renderizar fórmulas en explicación
        if (typeof renderMathInElement === 'function') {
            try {
                renderMathInElement(elementos.textoExplicacion, {
                    delimiters: [
                        {left: '\\(', right: '\\)', display: false},
                        {left: '\\[', right: '\\]', display: true}
                    ]
                });
            } catch (e) {
                console.log("Error en KaTeX:", e);
            }
        }
    }
    
    // ============================================
    // FUNCIÓN: ACTUALIZAR CONTADORES
    // ============================================
    function actualizarContadores() {
        const respondidas = estado.respuestas.filter(r => r !== null).length;
        const marcadasCount = estado.marcadas.filter(m => m).length;
        
        // Contador general
        elementos.contadorPreguntas.innerHTML = `
            <i class="fas fa-question-circle me-1"></i> ${estado.indiceActual + 1}/${estado.totalPreguntas}
        `;
        
        // Contador de respuestas
        elementos.respuestasContador.textContent = `${respondidas} respondidas de ${estado.totalPreguntas}`;
        elementos.badgeRespuestas.innerHTML = `
            <i class="fas fa-check-circle me-1"></i> ${respondidas}/${estado.totalPreguntas}
        `;
        
        // Contador de marcadas
        if (marcadasCount > 0) {
            elementos.badgeMarcadas.style.display = 'inline-block';
            elementos.marcadasCount.textContent = marcadasCount;
            elementos.marcadasContador.textContent = `${marcadasCount} marcadas`;
        } else {
            elementos.badgeMarcadas.style.display = 'none';
            elementos.marcadasContador.textContent = '0 marcadas';
        }
        
        // Barra de progreso
        const progreso = (respondidas / estado.totalPreguntas) * 100;
        elementos.barraProgreso.style.width = `${progreso}%`;
    }
    
    // ============================================
    // FUNCIÓN: ACTUALIZAR ESTILO DE MARCADO
    // ============================================
    function actualizarEstiloMarcado(indice) {
        if (estado.marcadas[indice]) {
            elementos.preguntaContainer.classList.add('pregunta-marcada');
            elementos.btnMarcar.innerHTML = '<i class="fas fa-flag me-2"></i>Quitar marca';
            elementos.btnMarcar.classList.add('btn-marcado');
        } else {
            elementos.preguntaContainer.classList.remove('pregunta-marcada');
            elementos.btnMarcar.innerHTML = '<i class="fas fa-flag me-2"></i>Marcar para revisar';
            elementos.btnMarcar.classList.remove('btn-marcado');
        }
    }
    
    // ============================================
    // FUNCIÓN: MOSTRAR RESULTADOS
    // ============================================
    function mostrarResultados() {
        let aciertos = 0;
        const detalles = [];
        
        estado.preguntasExamen.forEach((pregunta, idx) => {
            const respuestaUsuario = estado.respuestas[idx];
            const esCorrecta = (respuestaUsuario === pregunta.correcta);
            if (esCorrecta) aciertos++;
            
            // Encontrar letra de respuesta
            const letraUsuario = respuestaUsuario !== null ? 
                String.fromCharCode(65 + respuestaUsuario) : '❌';
            const letraCorrecta = String.fromCharCode(65 + pregunta.correcta);
            
            detalles.push({
                pregunta: pregunta.texto || pregunta.pregunta,
                opciones: pregunta.opciones,
                respuestaUsuario: respuestaUsuario,
                letraUsuario: letraUsuario,
                correcta: pregunta.correcta,
                letraCorrecta: letraCorrecta,
                esCorrecta: esCorrecta,
                explicacion: pregunta.explicacion
            });
        });
        
        const porcentaje = ((aciertos / estado.totalPreguntas) * 100).toFixed(1);
        
        // Determinar mensaje
        let titulo, icono, color;
        if (porcentaje >= 90) {
            titulo = '🎉 ¡Excelente!';
            icono = 'success';
            color = '#2ecc71';
        } else if (porcentaje >= 80) {
            titulo = '👍 ¡Muy bien!';
            icono = 'success';
            color = '#3498db';
        } else if (porcentaje >= 70) {
            titulo = '👌 Buen trabajo';
            icono = 'success';
            color = '#f39c12';
        } else if (porcentaje >= 60) {
            titulo = '💪 Puedes mejorar';
            icono = 'warning';
            color = '#e67e22';
        } else {
            titulo = '📚 Sigue practicando';
            icono = 'error';
            color = '#e74c3c';
        }
        
        // Mostrar resumen
        Swal.fire({
            title: titulo,
            html: `
                <div class="text-center">
                    <div style="font-size: 4rem; font-weight: bold; color: ${color}">
                        ${porcentaje}%
                    </div>
                    <p class="mt-3 fs-5">
                        <strong>${aciertos}</strong> aciertos de <strong>${estado.totalPreguntas}</strong> preguntas
                    </p>
                    <div class="progress mt-3" style="height: 15px;">
                        <div class="progress-bar bg-success" style="width: ${porcentaje}%"></div>
                    </div>
                </div>
            `,
            icon: icono,
            confirmButtonText: '📋 Ver respuestas detalladas',
            showCancelButton: true,
            cancelButtonText: '🏠 Ir al inicio',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#6c757d'
        }).then((result) => {
            if (result.isConfirmed) {
                mostrarRevisionDetallada(detalles);
            } else {
                window.location.href = 'index.html';
            }
        });
    }
    
    // ============================================
    // FUNCIÓN: MOSTRAR REVISIÓN DETALLADA
    // ============================================
    function mostrarRevisionDetallada(detalles) {
        let html = '<div class="text-start" style="max-height: 500px; overflow-y: auto;">';
        
        detalles.forEach((detalle, idx) => {
            const clase = detalle.esCorrecta ? 'border-success' : 'border-danger';
            const icono = detalle.esCorrecta ? '✅' : '❌';
            
            html += `
                <div class="mb-4 p-3 border rounded ${clase}">
                    <div class="d-flex justify-content-between align-items-start">
                        <h6 class="mb-2">${icono} Pregunta ${idx + 1}</h6>
                        <span class="badge ${detalle.esCorrecta ? 'bg-success' : 'bg-danger'}">
                            ${detalle.letraUsuario} / ${detalle.letraCorrecta}
                        </span>
                    </div>
                    <p class="mb-2">${detalle.pregunta.substring(0, 100)}${detalle.pregunta.length > 100 ? '...' : ''}</p>
                    <p class="mb-1 small">
                        <strong>Tu respuesta:</strong> 
                        <span class="${detalle.esCorrecta ? 'text-success' : 'text-danger'}">
                            ${detalle.letraUsuario}
                        </span>
                    </p>
                    <p class="mb-1 small">
                        <strong>Correcta:</strong> 
                        <span class="text-success">${detalle.letraCorrecta}</span>
                    </p>
                    <p class="mb-0 small text-muted mt-2">
                        <i class="fas fa-info-circle me-1"></i>
                        ${detalle.explicacion.substring(0, 150)}${detalle.explicacion.length > 150 ? '...' : ''}
                    </p>
                </div>
            `;
        });
        
        html += '</div>';
        
        Swal.fire({
            title: '📝 Revisión de respuestas',
            html: html,
            icon: 'info',
            width: '800px',
            confirmButtonText: 'Entendido',
            showCancelButton: true,
            cancelButtonText: 'Nuevo examen',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#28a745'
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.cancel) {
                window.location.reload();
            }
        });
    }
    
    // ============================================
    // EVENTOS DE CONFIGURACIÓN
    // ============================================
    elementos.botonesCantidad.forEach(btn => {
        btn.addEventListener('click', () => {
            const cantidad = parseInt(btn.dataset.cantidad);
            iniciarExamen(cantidad);
        });
    });
    
    // ============================================
    // EVENTOS DE NAVEGACIÓN
    // ============================================
    elementos.btnAnterior.addEventListener('click', () => {
        if (estado.indiceActual > 0) {
            estado.indiceActual--;
            mostrarPregunta(estado.indiceActual);
            actualizarContadores();
        }
    });
    
    elementos.btnSiguiente.addEventListener('click', () => {
        if (estado.indiceActual < estado.totalPreguntas - 1) {
            estado.indiceActual++;
            mostrarPregunta(estado.indiceActual);
            actualizarContadores();
        }
    });
    
    // ============================================
    // EVENTO: MARCAR PREGUNTA
    // ============================================
    elementos.btnMarcar.addEventListener('click', () => {
        estado.marcadas[estado.indiceActual] = !estado.marcadas[estado.indiceActual];
        
        actualizarEstiloMarcado(estado.indiceActual);
        actualizarContadores();
        
        // Notificación
        Swal.fire({
            icon: 'info',
            title: estado.marcadas[estado.indiceActual] ? '📌 Pregunta marcada' : '🗑️ Marca eliminada',
            timer: 1000,
            showConfirmButton: false,
            toast: true,
            position: 'top-end'
        });
    });
    
    // ============================================
    // EVENTO: FINALIZAR EXAMEN
    // ============================================
    elementos.btnFinalizar.addEventListener('click', () => {
        const respondidas = estado.respuestas.filter(r => r !== null).length;
        
        if (respondidas < estado.totalPreguntas) {
            Swal.fire({
                icon: 'question',
                title: '¿Estás seguro?',
                html: `
                    Has respondido <strong>${respondidas}</strong> de <strong>${estado.totalPreguntas}</strong> preguntas.<br>
                    Quedan ${estado.totalPreguntas - respondidas} sin responder.
                `,
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: '✅ Sí, finalizar',
                cancelButtonText: '↩️ Seguir practicando'
            }).then((result) => {
                if (result.isConfirmed) {
                    mostrarResultados();
                }
            });
        } else {
            mostrarResultados();
        }
    });
}

// ============================================
// INICIAR CUANDO EL DOM ESTÉ LISTO
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    console.log("⏳ Esperando datos para inicializar examen...");
    setTimeout(inicializarExamenConDatos, 100);
});