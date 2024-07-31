export const calculateAge = (nacimiento: Date | string) => {
    const today = new Date()
    const born = typeof nacimiento === 'string' ? new Date(nacimiento) : nacimiento
    let age = today.getFullYear() - born.getFullYear()
    const monthDifference = today.getMonth() - born.getMonth()

    // Ajuste si la fecha actual es anterior al día de cumpleaños
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < born.getDate())) {
        age--
    }

    return age
}
