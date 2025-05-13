// Arrays con los componentes de las excusas
let who = ['El perro', 'Mi abuela', 'El cartero', 'Mi pájaro', 'Mi vecino'];
let action = ['se comió', 'orinó sobre', 'aplastó', 'rompió', 'escondió'];
let what = ['mi tarea', 'mi teléfono', 'el coche', 'mi computadora', 'mis llaves'];
let when = ['antes de la clase', 'cuando estaba durmiendo', 'mientras hacía ejercicio', 
           'durante mi almuerzo', 'mientras rezaba', 'cuando no estaba mirando'];

// Función para generar una excusa aleatoria
function generateExcuse() {
    // Calcular índices aleatorios para cada array
    let whoIndex = Math.floor(Math.random() * who.length);
    let actionIndex = Math.floor(Math.random() * action.length);
    let whatIndex = Math.floor(Math.random() * what.length);
    let whenIndex = Math.floor(Math.random() * when.length);

    // Concatenar las partes para formar la excusa completa
    let excuse = who[whoIndex] + ' ' + action[actionIndex] + ' ' + what[whatIndex] + ' ' + when[whenIndex] + '.';
    
    // Mostrar la excusa en el elemento HTML
    document.getElementById('excuse').innerHTML = excuse;
}