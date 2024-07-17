type TipoSangre = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'

const mapaCompatibilidadSanguinea: Record<TipoSangre, TipoSangre[]> = {
    'A+': ['A+', 'AB+'],
    'A-': ['A+', 'A-', 'AB+', 'AB-'],
    'B+': ['B+', 'AB+'],
    'B-': ['B+', 'B-', 'AB+', 'AB-'],
    'AB+': ['AB+'],
    'AB-': ['AB+', 'AB-'],
    'O+': ['A+', 'B+', 'AB+', 'O+'],
    'O-': ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
}

export function isCompatible(donor: TipoSangre, recipient: TipoSangre) {
    if (!mapaCompatibilidadSanguinea[donor] || !mapaCompatibilidadSanguinea[recipient]) {
        throw new Error('Tipo de sangre no reconocido en el sistema ABO/Rh.')
    }
    return mapaCompatibilidadSanguinea[donor].includes(recipient)
}
