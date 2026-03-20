// js/datos-matematicas-ing.js
// PREGUNTAS DE MATEMÁTICAS PARA INGENIERÍA - 20 PREGUNTAS NIVEL ALTO

if (typeof DATOS_ACUDE !== 'undefined' && DATOS_ACUDE.preguntas) {
    
    DATOS_ACUDE.preguntas.matematicas_ing = [
        // PREGUNTA 1 - Nivel 5 - Cálculo diferencial (optimización)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'matematicas-ing-001',
            texto: `Se desea construir una caja abierta (sin tapa) a partir de una lámina cuadrada de 30 cm de lado, recortando cuadrados iguales en las esquinas y doblando los lados. ¿Qué altura maximiza el volumen?`,
            
            opciones: [
                "5 cm, porque V(x) = x(30-2x)², derivando e igualando a cero: V'(x) = (30-2x)² - 4x(30-2x) = 0 → (30-2x)(30-2x-4x)=0 → (30-2x)(30-6x)=0 → x=5 o x=15 (x=15 no válido)",
                "10 cm, porque es la mitad del lado",
                "7.5 cm, porque es un cuarto del lado",
                "15 cm, porque es la mitad",
                "3 cm, porque es pequeño"
            ],
            
            correcta: 0,
            
            explicacion: `Volumen: V = x × (30-2x) × (30-2x) = x(30-2x)²
            Dominio: 0 < x < 15
            
            Derivando: V'(x) = (30-2x)² + x × 2(30-2x)(-2) = (30-2x)² - 4x(30-2x)
            Factorizando: V'(x) = (30-2x)[(30-2x) - 4x] = (30-2x)(30-6x)
            
            V'(x)=0 → x=15 (no válido) o x=5
            x=5 da volumen máximo: V=5×(20)²=5×400=2000 cm³`,
            
            dificultad: 4,
            
            temas: ["Optimización", "Cálculo diferencial", "Máximos y mínimos"],
            
            contexto: "Problemas de optimización en ingeniería"
        },
        
        // PREGUNTA 2 - Nivel 5 - Cálculo integral (volumen de revolución)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'matematicas-ing-002',
            texto: `La región limitada por y = x², el eje X y la recta x = 2 gira alrededor del eje Y. ¿Cuál es el volumen generado?`,
            
            opciones: [
                "8π unidades cúbicas, porque usando método de capas: V = 2π ∫₀² x·x² dx = 2π ∫₀² x³ dx = 2π [x⁴/4]₀² = 2π (16/4) = 2π×4 = 8π",
                "4π, porque ∫₀² x² dx = 8/3, multiplicado por π",
                "16π, porque es el doble",
                "32π/5, por error en límites",
                "2π, porque es muy pequeño"
            ],
            
            correcta: 0,
            
            explicacion: `Método de capas cilíndricas alrededor del eje Y:
            V = 2π ∫ x·f(x) dx, desde x=0 hasta x=2
            
            V = 2π ∫₀² x·x² dx = 2π ∫₀² x³ dx
            V = 2π [x⁴/4]₀² = 2π (16/4) = 2π×4 = 8π
            
            También por método de discos: y = x² → x = √y, V = π ∫₀⁴ (√y)² dy = π ∫₀⁴ y dy = π [y²/2]₀⁴ = π (16/2) = 8π`,
            
            dificultad: 5,
            
            temas: ["Cálculo integral", "Volumen de revolución", "Método de capas"],
            
            contexto: "Geometría computacional"
        },
        
        // PREGUNTA 3 - Nivel 5 - Ecuaciones diferenciales (crecimiento exponencial)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'matematicas-ing-003',
            texto: `La población de bacterias se duplica cada 3 horas. Si inicialmente hay 1000 bacterias, ¿cuántas habrá después de 12 horas?`,
            
            opciones: [
                "16,000 bacterias, porque en 12 horas hay 4 períodos de duplicación: 1000 × 2⁴ = 1000 × 16 = 16,000",
                "8,000 bacterias, porque 12/3=4, pero 2³=8",
                "4,000 bacterias, porque 2²=4",
                "32,000 bacterias, porque 2⁵=32",
                "12,000 bacterias, porque 1000×12"
            ],
            
            correcta: 0,
            
            explicacion: `Modelo de crecimiento exponencial: N(t) = N₀ × 2^(t/T), donde T es tiempo de duplicación.
            
            t = 12 horas, T = 3 horas → número de períodos = 12/3 = 4
            N(12) = 1000 × 2⁴ = 1000 × 16 = 16,000 bacterias
            
            También por ED: dN/dt = k N, con k = ln2/T`,
            
            dificultad: 3,
            
            temas: ["Ecuaciones diferenciales", "Crecimiento exponencial", "Modelado matemático"],
            
            contexto: "Biomatemáticas"
        },
        
        // PREGUNTA 4 - Nivel 5 - Álgebra lineal (valores propios)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'matematicas-ing-004',
            texto: `Los valores propios de la matriz A = [[2, 1], [1, 2]] son:`,
            
            opciones: [
                "λ₁ = 3, λ₂ = 1, porque el polinomio característico es (2-λ)² - 1 = λ² - 4λ + 3 = 0",
                "λ₁ = 2, λ₂ = 2, porque es diagonal",
                "λ₁ = 2, λ₂ = -2, por simetría",
                "λ₁ = 4, λ₂ = 0, porque traza=4",
                "λ₁ = √3, λ₂ = -√3"
            ],
            
            correcta: 0,
            
            explicacion: `Polinomio característico: det(A - λI) = |2-λ, 1; 1, 2-λ| = (2-λ)² - 1 = 0
            (2-λ)² = 1
            2-λ = ±1
            λ = 2 ∓ 1 → λ₁ = 3, λ₂ = 1
            
            Verificación: traza = 3+1 = 4 (coincide con suma diagonal 2+2=4)
            determinante = 3×1 = 3 (coincide con det A = 4-1=3)`,
            
            dificultad: 4,
            
            temas: ["Álgebra lineal", "Valores propios", "Matrices"],
            
            contexto: "Análisis de sistemas"
        },
        
        // PREGUNTA 5 - Nivel 5 - Series de Fourier
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'matematicas-ing-005',
            texto: `La serie de Fourier de una función par en [-L, L] contiene solamente:`,
            
            opciones: [
                "Términos coseno (incluyendo el término constante), porque los coeficientes seno (bn) son cero",
                "Términos seno, porque los cosenos son cero",
                "Términos seno y coseno por igual",
                "Solo términos constantes",
                "Términos exponenciales complejos"
            ],
            
            correcta: 0,
            
            explicacion: `Propiedades de simetría en series de Fourier:
            • FUNCIÓN PAR: f(x) = f(-x) → solo términos coseno (a₀, aₙ cos(nπx/L))
            • FUNCIÓN IMPAR: f(-x) = -f(x) → solo términos seno (bₙ sen(nπx/L))
            
            Los coeficientes se calculan por integración en un período.`,
            
            dificultad: 4,
            
            temas: ["Series de Fourier", "Análisis de señales", "Funciones pares e impares"],
            
            contexto: "Procesamiento de señales"
        },
        
        // PREGUNTA 6 - Nivel 5 - Transformada de Laplace
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'matematicas-ing-006',
            texto: `La transformada de Laplace de la función f(t) = e^(3t) sen(2t) es:`,
            
            opciones: [
                "F(s) = 2 / [(s-3)² + 4], porque L{e^(at) sen(bt)} = b / [(s-a)² + b²]",
                "F(s) = 2 / [s² + 4], sin el desplazamiento",
                "F(s) = (s-3) / [(s-3)² + 4]",
                "F(s) = 1 / (s-3) × 2/(s²+4)",
                "F(s) = 2 / [(s+3)² + 4]"
            ],
            
            correcta: 0,
            
            explicacion: `Propiedad de desplazamiento (traslación en s):
            L{e^(at) f(t)} = F(s-a)
            
            L{sen(2t)} = 2/(s² + 4)
            L{e^(3t) sen(2t)} = 2/[(s-3)² + 4]
            
            Es fundamental para resolver ecuaciones diferenciales con términos forzados exponenciales.`,
            
            dificultad: 5,
            
            temas: ["Transformada de Laplace", "Ecuaciones diferenciales", "Análisis de sistemas"],
            
            contexto: "Control automático"
        },
        
        // PREGUNTA 7 - Nivel 5 - Cálculo vectorial (gradiente)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'matematicas-ing-007',
            texto: `El gradiente de la función f(x,y,z) = x²y + yz³ en el punto (1, 2, 1) es:`,
            
            opciones: [
                "(4, 2, 6), porque ∂f/∂x = 2xy = 4, ∂f/∂y = x² + z³ = 1 + 1 = 2, ∂f/∂z = 3yz² = 3×2×1 = 6",
                "(2, 1, 3), porque son las derivadas simples",
                "(4, 1, 3), por error en y",
                "(4, 2, 3), por error en z",
                "(2, 2, 6), por error en x"
            ],
            
            correcta: 0,
            
            explicacion: `Gradiente: ∇f = (∂f/∂x, ∂f/∂y, ∂f/∂z)
            
            ∂f/∂x = 2xy = 2×1×2 = 4
            ∂f/∂y = x² + z³ = 1 + 1 = 2
            ∂f/∂z = 3yz² = 3×2×1 = 6
            
            El gradiente apunta en la dirección de máximo crecimiento.`,
            
            dificultad: 3,
            
            temas: ["Cálculo vectorial", "Gradiente", "Derivadas parciales"],
            
            contexto: "Análisis multivariable"
        },
        
        // PREGUNTA 8 - Nivel 5 - Integrales dobles (área)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'matematicas-ing-008',
            texto: `Calcular el área de la región limitada por las curvas y = x² e y = √x.`,
            
            opciones: [
                "1/3 unidades cuadradas, porque los puntos de intersección son x=0 y x=1, área = ∫₀¹ (√x - x²) dx = [2x^(3/2)/3 - x³/3]₀¹ = 2/3 - 1/3 = 1/3",
                "1/2 unidades, porque ∫ x² dx = 1/3",
                "2/3 unidades, porque √x integra 2/3",
                "1 unidad, porque el cuadrado unitario",
                "1/4 unidades, porque es pequeña"
            ],
            
            correcta: 0,
            
            explicacion: `Puntos de intersección: x² = √x → x⁴ = x → x(x³ - 1) = 0 → x = 0, x = 1
            
            En [0,1], √x ≥ x² (porque √0.25=0.5, 0.25²=0.0625)
            
            Área = ∫₀¹ (√x - x²) dx = [2x^(3/2)/3 - x³/3]₀¹ = (2/3 - 1/3) = 1/3`,
            
            dificultad: 4,
            
            temas: ["Integrales dobles", "Área entre curvas", "Cálculo integral"],
            
            contexto: "Geometría analítica"
        },
        
        // PREGUNTA 9 - Nivel 5 - Números complejos (forma polar)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'matematicas-ing-009',
            texto: `El número complejo z = -1 + i en forma polar es:`,
            
            opciones: [
                "√2 (cos 135° + i sen 135°) = √2 cis(135°)",
                "√2 (cos 45° + i sen 45°)",
                "2 (cos 135° + i sen 135°)",
                "√2 (cos 225° + i sen 225°)",
                "1 (cos 90° + i sen 90°)"
            ],
            
            correcta: 0,
            
            explicacion: `Módulo: r = √[(-1)² + 1²] = √(1+1) = √2
            Argumento: tan θ = y/x = 1/(-1) = -1
            x negativo, y positivo → θ en el segundo cuadrante: θ = 135° (3π/4)
            
            Forma polar: z = √2 (cos 135° + i sen 135°)`,
            
            dificultad: 4,
            
            temas: ["Números complejos", "Forma polar", "Argumento"],
            
            contexto: "Análisis de circuitos"
        },
        
        // PREGUNTA 10 - Nivel 5 - Estadística (distribución normal)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'matematicas-ing-010',
            texto: `En una distribución normal con media μ = 50 y desviación estándar σ = 5, ¿qué porcentaje de datos está entre 45 y 55?`,
            
            opciones: [
                "68%, porque está a ±1 desviación estándar de la media (regla empírica 68-95-99.7)",
                "95%, porque sería ±2σ",
                "50%, porque es la media",
                "34%, porque es la mitad",
                "99.7%, porque es ±3σ"
            ],
            
            correcta: 0,
            
            explicacion: `Regla empírica para distribución normal:
            • ±1σ → 68% de los datos (μ-σ a μ+σ)
            • ±2σ → 95% de los datos
            • ±3σ → 99.7% de los datos
            
            μ-σ = 50-5 = 45, μ+σ = 50+5 = 55 → 68%`,
            
            dificultad: 3,
            
            temas: ["Estadística", "Distribución normal", "Regla empírica"],
            
            contexto: "Control de calidad"
        },
        
        // PREGUNTA 11 - Nivel 5 - Ecuaciones diferenciales (EDO lineales)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'matematicas-ing-011',
            texto: `Resolver la ecuación diferencial lineal: y' + 2y = 6, con y(0) = 1`,
            
            opciones: [
                "y = 3 - 2e^(-2x), porque factor integrante μ = e^(2x), integrando: (ye^(2x))' = 6e^(2x) → ye^(2x) = 3e^(2x) + C, y = 3 + Ce^(-2x), con C = -2",
                "y = 3 + 2e^(-2x), porque C sería 2",
                "y = 6 - 5e^(-2x)",
                "y = 1 + 3e^(-2x)",
                "y = 3 - e^(-2x)"
            ],
            
            correcta: 0,
            
            explicacion: `EDO lineal de primer orden: y' + P(x)y = Q(x)
            P(x)=2, Q(x)=6
            Factor integrante: μ = e^(∫2dx) = e^(2x)
            
            (y·e^(2x))' = 6e^(2x)
            y·e^(2x) = ∫6e^(2x) dx = 3e^(2x) + C
            y = 3 + Ce^(-2x)
            
            Condición inicial: y(0)=1 → 1 = 3 + C → C = -2
            Solución: y = 3 - 2e^(-2x)`,
            
            dificultad: 5,
            
            temas: ["Ecuaciones diferenciales", "EDO lineales", "Factor integrante"],
            
            contexto: "Modelado de sistemas"
        },
        
        // PREGUNTA 12 - Nivel 5 - Cálculo numérico (método de Newton)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'matematicas-ing-012',
            texto: `El método de Newton-Raphson para encontrar raíces de f(x)=0 utiliza la iteración:`,
            
            opciones: [
                "x_{n+1} = x_n - f(x_n)/f'(x_n)",
                "x_{n+1} = x_n - f'(x_n)/f(x_n)",
                "x_{n+1} = x_n + f(x_n)/f'(x_n)",
                "x_{n+1} = f(x_n)/f'(x_n)",
                "x_{n+1} = x_n - f(x_n) × f'(x_n)"
            ],
            
            correcta: 0,
            
            explicacion: `Método de Newton-Raphson:
            x_{n+1} = x_n - f(x_n)/f'(x_n)
            
            Interpretación geométrica: desde (x_n, f(x_n)) se traza la tangente (pendiente f'(x_n)) y se encuentra su intersección con el eje X.
            
            Convergencia cuadrática cerca de la raíz.`,
            
            dificultad: 4,
            
            temas: ["Cálculo numérico", "Newton-Raphson", "Raíces de ecuaciones"],
            
            contexto: "Métodos numéricos"
        },
        
        // PREGUNTA 13 - Nivel 5 - Transformada de Fourier
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'matematicas-ing-013',
            texto: `La transformada de Fourier de la función pulso rectangular f(t) = 1 para |t| < T, 0 en otro caso, es:`,
            
            opciones: [
                "2 sen(ωT)/ω = 2T sinc(ωT/π)",
                "sen(ωT)/ω",
                "2 cos(ωT)/ω",
                "T sinc(ωT)",
                "e^(-iωT) sen(ωT)/ω"
            ],
            
            correcta: 0,
            
            explicacion: `Transformada de Fourier: F(ω) = ∫_{-∞}^{∞} f(t) e^(-iωt) dt
            
            Para el pulso rectangular de ancho 2T:
            F(ω) = ∫_{-T}^{T} e^(-iωt) dt = [e^(-iωt)/(-iω)]_{-T}^{T}
            = (e^(iωT) - e^(-iωT))/(iω) = 2 sen(ωT)/ω
            
            Es la función sinc.`,
            
            dificultad: 5,
            
            temas: ["Transformada de Fourier", "Análisis de señales", "Pulso rectangular"],
            
            contexto: "Procesamiento de señales"
        },
        
        // PREGUNTA 14 - Nivel 5 - Cálculo multivariable (máximos y mínimos)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'matematicas-ing-014',
            texto: `La función f(x,y) = x² + y² - 2x - 4y tiene un punto crítico en (1,2). ¿Qué tipo de punto es?`,
            
            opciones: [
                "Mínimo local, porque las segundas derivadas son positivas y el Hessiano es positivo: fxx=2, fyy=2, fxy=0 → H=4>0",
                "Máximo local, porque las derivadas segundas son positivas",
                "Punto silla, porque el Hessiano es negativo",
                "No es punto crítico",
                "Mínimo global, porque es una parábola"
            ],
            
            correcta: 0,
            
            explicacion: `Derivadas parciales primeras:
            fx = 2x - 2 = 0 → x = 1
            fy = 2y - 4 = 0 → y = 2
            
            Derivadas segundas:
            fxx = 2, fyy = 2, fxy = 0
            
            Hessiano: H = fxx·fyy - (fxy)² = 2×2 - 0 = 4 > 0
            fxx > 0 → MÍNIMO local
            
            La función es un paraboloide con mínimo.`,
            
            dificultad: 4,
            
            temas: ["Cálculo multivariable", "Puntos críticos", "Hessiano"],
            
            contexto: "Optimización multivariable"
        },
        
        // PREGUNTA 15 - Nivel 5 - Integral de línea
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'matematicas-ing-015',
            texto: `Calcular la integral de línea ∫_C (x dx + y dy) donde C es la curva paramétrica r(t) = (cos t, sen t), 0 ≤ t ≤ π/2.`,
            
            opciones: [
                "0, porque x dx + y dy = (1/2) d(x²+y²), y en la circunferencia x²+y²=1 constante → integral de diferencial exacta es cero",
                "π/2, porque es la longitud del arco",
                "1, porque ∫ cos t (-sen t) dt + ∫ sen t (cos t) dt = 0",
                "π/4, porque es el área",
                "2, por simetría"
            ],
            
            correcta: 0,
            
            explicacion: `Observamos que x dx + y dy = (1/2) d(x² + y²)
            
            En la curva, x² + y² = 1 (constante) → d(x²+y²) = 0
            Por lo tanto, la integral es 0.
            
            También directamente: x=cos t, y=sen t → dx = -sen t dt, dy = cos t dt
            x dx + y dy = cos t(-sen t) dt + sen t(cos t) dt = -cos t sen t dt + sen t cos t dt = 0`,
            
            dificultad: 5,
            
            temas: ["Integral de línea", "Diferencial exacta", "Campos conservativos"],
            
            contexto: "Análisis vectorial"
        },
        
        // PREGUNTA 16 - Nivel 5 - Teorema de Stokes
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'matematicas-ing-016',
            texto: `El teorema de Stokes relaciona:`,
            
            opciones: [
                "La integral de superficie del rotacional de un campo vectorial con la integral de línea del campo alrededor de la frontera de la superficie",
                "La integral de volumen de la divergencia con la integral de superficie del campo",
                "La integral de línea con la integral doble del gradiente",
                "La integral de superficie con la integral triple",
                "La integral de línea con la integral de superficie del laplaciano"
            ],
            
            correcta: 0,
            
            explicacion: `Teorema de Stokes:
            ∫∫_S (∇ × F) · dS = ∮_C F · dr
            
            Relaciona el flujo del rotacional a través de una superficie con la circulación del campo alrededor de su frontera.
            
            Es una generalización del teorema fundamental del cálculo.`,
            
            dificultad: 5,
            
            temas: ["Teorema de Stokes", "Cálculo vectorial", "Rotacional"],
            
            contexto: "Electromagnetismo"
        },
        
        // PREGUNTA 17 - Nivel 5 - Series de potencias (radio de convergencia)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'matematicas-ing-017',
            texto: `El radio de convergencia de la serie Σ (x^n)/n! es:`,
            
            opciones: [
                "∞ (infinito), porque usando el criterio del cociente: lím |a_{n+1}/a_n| = lím |x/(n+1)| = 0 para todo x",
                "1, porque es geométrica",
                "0, porque diverge siempre",
                "e, porque es la exponencial",
                "Depende de x"
            ],
            
            correcta: 0,
            
            explicacion: `Serie: Σ (x^n)/n!
            
            Criterio del cociente: lím |a_{n+1}/a_n| = lím |x^(n+1)/(n+1)! × n!/x^n| = lím |x/(n+1)| = 0 para cualquier x
            
            Radio de convergencia R = ∞ (converge para todo x real o complejo)
            
            Esta serie define la función exponencial: e^x = Σ x^n/n!`,
            
            dificultad: 4,
            
            temas: ["Series de potencias", "Radio de convergencia", "Serie exponencial"],
            
            contexto: "Análisis matemático"
        },
        
        // PREGUNTA 18 - Nivel 5 - Matrices (inversa)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'matematicas-ing-018',
            texto: `La inversa de la matriz A = [[a, b], [c, d]] existe si y solo si:`,
            
            opciones: [
                "det(A) = ad - bc ≠ 0, y su inversa es (1/det(A)) [[d, -b], [-c, a]]",
                "a, b, c, d son diferentes de cero",
                "la matriz es simétrica",
                "la matriz es diagonal",
                "a + d ≠ 0"
            ],
            
            correcta: 0,
            
            explicacion: `Matriz inversa de 2×2:
            Si A = [[a, b], [c, d]], entonces A⁻¹ = (1/(ad-bc)) [[d, -b], [-c, a]]
            
            La condición es que el determinante (ad - bc) sea diferente de cero.
            
            Verificación: A × A⁻¹ = I`,
            
            dificultad: 3,
            
            temas: ["Álgebra lineal", "Matriz inversa", "Determinante"],
            
            contexto: "Sistemas de ecuaciones"
        },
        
        // PREGUNTA 19 - Nivel 5 - Probabilidad (teorema de Bayes)
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'matematicas-ing-019',
            texto: `En una fábrica, dos máquinas producen el mismo producto. La máquina A produce el 60% de las piezas, con 2% de defectuosas. La máquina B produce el 40%, con 5% de defectuosas. Si se encuentra una pieza defectuosa, ¿cuál es la probabilidad de que haya sido producida por la máquina A?`,
            
            opciones: [
                "0.375, porque P(A|D) = P(D|A)P(A)/P(D) = (0.02×0.6)/(0.02×0.6 + 0.05×0.4) = 0.012/(0.012+0.02) = 0.012/0.032 = 0.375",
                "0.6, porque es la proporción de producción",
                "0.4, porque es la otra máquina",
                "0.5, porque son iguales",
                "0.286, por error en cálculo"
            ],
            
            correcta: 0,
            
            explicacion: `Teorema de Bayes:
            P(A|D) = P(D|A)P(A) / [P(D|A)P(A) + P(D|B)P(B)]
            
            P(D|A) = 0.02, P(A) = 0.6
            P(D|B) = 0.05, P(B) = 0.4
            
            Numerador: 0.02 × 0.6 = 0.012
            Denominador: 0.012 + 0.05×0.4 = 0.012 + 0.02 = 0.032
            
            P(A|D) = 0.012/0.032 = 0.375`,
            
            dificultad: 5,
            
            temas: ["Probabilidad", "Teorema de Bayes", "Estadística"],
            
            contexto: "Control de calidad"
        },
        
        // PREGUNTA 20 - Nivel 5 - Ecuaciones en diferencias
        {
            id: crypto.randomUUID ? crypto.randomUUID() : 'matematicas-ing-020',
            texto: `La ecuación en diferencias y_{n+1} = 2y_n + 1, con y_0 = 0, tiene por solución:`,
            
            opciones: [
                "y_n = 2^n - 1, porque la solución homogénea es C·2^n y la particular constante es -1",
                "y_n = 2^n, porque es exponencial",
                "y_n = n, porque es lineal",
                "y_n = 2^(n+1) - 2",
                "y_n = 2^n + 1"
            ],
            
            correcta: 0,
            
            explicacion: `Ecuación en diferencias lineal no homogénea:
            y_{n+1} - 2y_n = 1
            
            Solución homogénea: y_h = C·2^n
            Solución particular constante: y_p = k → k - 2k = 1 → -k = 1 → k = -1
            
            Solución general: y_n = C·2^n - 1
            
            Condición inicial y_0 = 0 → 0 = C·1 - 1 → C = 1
            
            y_n = 2^n - 1
            
            Verificación: n=0 → 0; n=1 → 2-1=1; n=2 → 4-1=3, etc.`,
            
            dificultad: 5,
            
            temas: ["Ecuaciones en diferencias", "Sistemas discretos", "Modelado"],
            
            contexto: "Procesamiento digital"
        }
    ];
    
    console.log("✅ datos-matematicas-ing.js cargado con 20 preguntas");
    console.log("📊 Total preguntas de matemáticas para ingeniería: 20");
}