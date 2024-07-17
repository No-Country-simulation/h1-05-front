import { z } from 'zod'
import { especialidades } from '@/constants/nomenclaturas/especialidades'

const mappedEspecialidades = especialidades.map((esp) => esp.id.toString()) as [string, ...string[]]

export const registerSchema = z
    .object({
        name: z.string().min(2, { message: 'El nombre debe ser mínimo de 2 caracteres' }),
        lastname: z.string().min(2, { message: 'El apellido debe ser mínimo de 2 caracteres' }),
        phoneNumber: z
            .string()
            .refine((phoneNumber) => !isNaN(parseInt(phoneNumber)), { message: 'Debe ser un número de celular' }),
        medicalLicense: z.string().min(4, { message: 'La licencia medica debe ser mínimo de 4 caracteres' }),
        dni: z.string().min(8, { message: 'El DNI es de 8 caracteres' }),
        especialidad: z
            .array(z.string(), { message: 'Seleccione al menos una especialidad' })
            .nonempty({ message: 'Seleccione al menos una especialidad' })
            .refine((value) => value.every((item) => mappedEspecialidades.includes(item)), {
                message: 'Especialidad no válida',
            }),
        provincia: z.string({ message: 'Provincia es requerida' }).min(2, { message: 'Seleccione una provincia' }),
        ciudad: z.string({ message: 'Ciudad es requerida' }).min(2, { message: 'Seleccione un poblado/ciudad' }),
        email: z.string().email({ message: 'Ingrese un correo valido' }).trim(),
        password: z.string().min(6, { message: 'La contraseña debe ser mínimo de 6 caracteres' }),
        confirmPassword: z.string().min(6, { message: 'La contraseña no coincide' }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'Las contraseñas no coinciden', // Spanish message for mismatch
        path: ['confirmPassword'], // Set error path for both fields
    })
