'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'
import { Button } from '../../ui/button'
import { Input } from '../../ui/input'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../../ui/card'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

export default function AuraChat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // Função que simula a resposta do assistente virtual
  const simulateAssistantResponse = (userInput: string) => {
    return new Promise<Message>((resolve) => {
      setTimeout(() => {
        resolve({
          role: 'assistant',
          content: `Olá! Eu sou Aura, seu assistente virtual. Você perguntou: "${userInput}". Como posso ajudar?`,
        })
      }, 1000)
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = { role: 'user', content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    // Simula resposta do assistente
    const assistantMessage = await simulateAssistantResponse(input)
    setMessages((prev) => [...prev, assistantMessage])
    setIsLoading(false)
  }

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg border">
      <CardHeader className="bg-gray-50">
        <CardTitle className="text-xl font-semibold text-center">Chat com Aura</CardTitle>
      </CardHeader>
      <CardContent className="h-[60vh] overflow-y-auto p-4 space-y-4 bg-white">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-sm p-4 rounded-lg shadow-md ${
                message.role === 'user'
                  ? 'bg-indigo-500 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-sm p-4 rounded-lg bg-gray-200">
              <LoadingIndicator />
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 bg-gray-50">
        <form onSubmit={handleSubmit} className="flex w-full space-x-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite sua mensagem..."
            className="flex-grow border-gray-300"
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading} className="bg-indigo-500 hover:bg-indigo-600">
            {isLoading ? <LoadingSpinner /> : <Send className="h-4 w-4 text-white" />}
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}

// Indicador de carregamento no chat
function LoadingIndicator() {
  return (
    <div className="flex space-x-2">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
          style={{ animationDelay: `${i * 0.2}s` }}
        ></div>
      ))}
    </div>
  )
}

// Spinner para o botão
function LoadingSpinner() {
  return (
    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
  )
}
