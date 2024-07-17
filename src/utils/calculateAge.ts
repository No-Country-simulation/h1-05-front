export const calculateAge = (nacimiento: Date) => {
    const today = new Date()
    let age = today.getFullYear() - nacimiento.getFullYear()
    const monthDifference = today.getMonth() - nacimiento.getMonth()

    // Ajuste si la fecha actual es anterior al día de cumpleaños
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < nacimiento.getDate())) {
        age--
    }

    return age
}
