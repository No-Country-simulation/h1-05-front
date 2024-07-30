import OpenAI from 'openai'

export const ia = new OpenAI({
    apiKey: process.env.OPENAIKEY,
})
