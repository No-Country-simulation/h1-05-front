'use client'
import { useEffect, useState } from 'react'

export default function Speech() {
    const [transcript, setTranscript] = useState<string>('')
    const [isListening, setIsListening] = useState<boolean>(false)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
            const recognition = new SpeechRecognition()

            recognition.continuous = true
            // recognition.interimResults = true // [WARN] problemas de compatibilidad en movil
            recognition.lang = 'es-ES'

            recognition.onstart = () => {
                setIsListening(true)
            }

            recognition.onend = () => {
                setIsListening(false)
                recognition.start() // inicia de nuevo para que no se apague en movil
            }

            recognition.onresult = (event: any) => {
                let interimTranscript = ''
                let finalTranscript = transcript // mantener la transcripción

                for (let i = event.resultIndex; i < event.results.length; ++i) {
                    const newTranscript = event.results[i][0].transcript
                    if (event.results[i].isFinal) {
                        finalTranscript += ' ' + newTranscript
                    } else {
                        interimTranscript += ' ' + newTranscript
                    }
                }

                setTranscript(finalTranscript + interimTranscript) // setear antigua + nueva transcripcion
            }

            recognition.onerror = (event: any) => {
                console.error('Error al reconocer audio', event)
                if (event.error === 'no-speech' || event.error === 'audio-capture') {
                    recognition.stop()
                }
            }

            recognition.start()

            return () => {
                recognition.stop()
            }
        }
    }, [transcript])

    return (
        <div>
            <h1>Transcripcion de texto</h1>
            <p>Escuchando: {isListening ? 'Yes' : 'No'}</p>
            <p>Texto: {transcript}</p>
        </div>
    )
}
