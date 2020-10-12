class Usuarios {

    constructor() {
        this.personas = [];
    }

    agregarPersona(id, nombre, sala) {
        const persona = { id, nombre, sala };
        this.personas.push(persona);
        return this.personas;
    }

    getPersona(id) {
        const persona = this.personas.filter(item => item.id === id)[0];
        return persona;
    }

    getPersonas() {
        return this.personas;
    }

    getPersonasPorSala(sala) {
        const personasEnSala = this.personas.filter(item => item.sala === sala);
        return personasEnSala;
    }

    borrarPersona(id) {
        const personaBorrada = this.getPersona(id);
        this.personas = this.personas.filter(item => item.id != id);
        return personaBorrada;
    }

}

module.exports = {
    Usuarios
}