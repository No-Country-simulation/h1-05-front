'use client'
import { useEffect, useState, useRef } from 'react'

export default function Speech() {
    const [transcript, setTranscript] = useState<string>('')
    const [isListening, setIsListening] = useState<boolean>(false)
    const recognitionRef = useRef<any | null>(null)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

            if (SpeechRecognition) {
                recognitionRef.current = new SpeechRecognition()
                const recognition = recognitionRef.current

                recognition.continuous = true
                recognition.interimResults = true
                recognition.lang = 'es-ES'

                recognition.onstart = () => {
                    setIsListening(true)
                }

                recognition.onend = () => {
                    setIsListening(false)
                }

                recognition.onresult = (event: any) => {
                    let interimTranscript = ''
                    let finalTranscript = ''

                    for (let i = event.resultIndex; i < event.results.length; ++i) {
                        const newTranscript = event.results[i][0].transcript
                        if (event.results[i].isFinal) {
                            finalTranscript += newTranscript + ' '
                        } else {
                            interimTranscript += newTranscript
                        }
                    }

                    setTranscript((prevTranscript) => prevTranscript + finalTranscript + interimTranscript)
                }

                recognition.onerror = (event: any) => {
                    console.error('Error al reconocer audio', event)
                    if (event.error === 'no-speech' || event.error === 'audio-capture') {
                        stopListening()
                    }
                }
            } else {
                console.error('SpeechRecognition no está soportado en este navegador')
            }
        }

        return () => {
            if (recognitionRef.current) {
                recognitionRef.current.stop()
            }
        }
    }, [])

    const startListening = () => {
        if (recognitionRef.current) {
            recognitionRef.current.start()
        }
    }

    const stopListening = () => {
        if (recognitionRef.current) {
            recognitionRef.current.stop()
        }
    }

    return (
        <div>
            <h1>Transcripción de texto</h1>
            <p>Escuchando: {isListening ? 'Sí' : 'No'}</p>
            <button onClick={isListening ? stopListening : startListening}>{isListening ? 'Detener' : 'Iniciar'} reconocimiento</button>
            <p>Texto: {transcript}</p>
        </div>
    )
}
