const fs = require('fs');
const colors = require('colors');

let list = [];

const guardarDB = () => {
    let data = JSON.stringify(list);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) { 
            throw new Error('No se pudo grabar'.red);
        } else {
            console.log('Guardado correctamente'.green);
        }
    });
}

const cargarDB = () => {

    try {
        list = require('../db/data.json');
    } catch (error) {
        list = [];
    }
}

const crear = (descripcion) => {
    
    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    list.push(porHacer);
    guardarDB();
    
    return porHacer;
}

const getList = () => {
    cargarDB();
    return list;
}

const actualizar = (descripcion, completado = true) => {
    
    cargarDB();

    let index = list.findIndex(tarea => tarea.descripcion === descripcion);

    if(index >= 0) {
        list[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    
    cargarDB();

    let index = list.findIndex(tarea => tarea.descripcion === descripcion);

    if(index >= 0) {
        list.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }
}

module.exports = {
    crear,
    getList,
    actualizar,
    borrar
}