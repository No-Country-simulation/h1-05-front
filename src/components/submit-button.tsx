'use client'

import { Button } from '@nextui-org/react'
import { useFormStatus } from 'react-dom'

export function SubmitButton({ text }: { text: string }) {
    const { pending } = useFormStatus()

    return (
        <Button color='secondary' type='submit' isDisabled={pending} isLoading={pending}>
            {text}
        </Button>
    )
}
