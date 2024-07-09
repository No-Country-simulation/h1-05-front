export {}

declare global {
    interface Window {
        SpeechRecognition: typeof SpeechRecognition
        webkitSpeechRecognition: typeof SpeechRecognition
        SpeechGrammarList: typeof SpeechGrammarList
        webkitSpeechGrammarList: typeof SpeechGrammarList
        SpeechRecognitionEvent: typeof SpeechRecognitionEvent
        webkitSpeechRecognitionEvent: typeof SpeechRecognitionEvent
    }
}
