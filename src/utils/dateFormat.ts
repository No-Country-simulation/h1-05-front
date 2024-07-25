export const dateFormat = (date?: Date) => {
    const fecha = date ? new Date(date) : new Date()
    // Crear una nueva fecha
    // Obtener el nombre del día
    const opcionesHora: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    }

    const hora = fecha.toLocaleTimeString('es-ES', opcionesHora)
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
    const nombreDia = dias[fecha.getDay()]

    // Obtener el día del mes
    const dia = fecha.getDate()

    // Obtener el nombre del mes
    const meses = [
        'enero',
        'febrero',
        'marzo',
        'abril',
        'mayo',
        'junio',
        'julio',
        'agosto',
        'septiembre',
        'octubre',
        'noviembre',
        'diciembre',
    ]
    const nombreMes = meses[fecha.getMonth()]

    return {
        hora: hora,
        diaNombre: nombreDia,
        diaNumero: dia,
        mesNombre: nombreMes,
    }
}
