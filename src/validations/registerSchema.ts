import { z } from 'zod';

const especialidades = ['doctor', 'enfermero', 'radiologo', 'kinesiologo'] as const;

export type Especialidades = (typeof especialidades)[number]

export const mappedEspecialidades: { [key in Especialidades]: string } = {
    "doctor": 'Doctor',
    "enfermero": 'Enfermero',
    "radiologo": 'Radiologo',
    "kinesiologo": "Kinesiologo"
}

export const registerSchema = z.object({
    name: z
        .string()
        .min(2, { message: 'El nombre debe ser mínimo de 2 caracteres' }),
    lastname: z
        .string()
        .min(2, { message: 'El apellido debe ser mínimo de 2 caracteres' }),
    phoneNumber: z
        .string()
        .refine(phoneNumber => !isNaN(parseInt(phoneNumber)), { message: 'Debe ser un número de celular' }),
    medicalLicense: z
        .string()
        .min(4, { message: 'La licencia medica debe ser mínimo de 4 caracteres' }),
    dni: z
        .string()
        .min(8, { message: 'El DNI es de 8 caracteres' }),
    especialidad: z
        .enum(especialidades, {
            errorMap: () => ({ message: "Por favor selecciona una especialidad" }),
        }),
    location: z
        .string()
        .min(4, { message: 'Mínimo 4 caracteres' }),
    email: z
        .string()
        .email({ message: 'Ingrese un correo valido' })
        .trim(),
    password: z
        .string()
        .min(6, { message: 'La contraseña debe ser mínimo de 6 caracteres' }),
    confirmPassword: z
        .string()
    .min(6, { message: 'La contraseña no coincide' }),

}).refine((data) => data.password === data.confirmPassword, {
    message: 'Las contraseñas no coinciden', // Spanish message for mismatch
    path: ['confirmPassword'], // Set error path for both fields
});