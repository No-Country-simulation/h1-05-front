import { z } from 'zod';

export const loginSchema = z.object({
    email: z
        .string()
        .email({ message: 'Ingrese un correo valido' }),
    password: z
        .string()
        .min(6, { message: 'La contraseña debe ser mínimo de 6 caracteres' }),
})