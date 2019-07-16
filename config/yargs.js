const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca la tarea como completada o pendiente'
}

const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea', { descripcion })
    .command('actualizar', 'Actualiza el estado de una tarea', { descripcion, completado })
    .command('borrar', 'Borra una tarea', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}