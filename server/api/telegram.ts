// server/api/telegram.ts
import { defineEventHandler, readBody } from 'h3'

export default defineEventHandler(async (event) => {
  // Read the form data sent in the request
  const { name, telephone } = await readBody(event)

  const botToken = '7282484024:AAEI-zl2e-7jZLXBczinsMloupUVOhZHdtI'
  const chatId = 1982682 
  const message = `Новая запись:\nName: ${name}\nTelephone: ${telephone}`

  const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`

  try {
    // Use node-fetch for the request to Telegram's API
    const response = await $fetch(telegramApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown'
      })
    })

    return { success: true, response }
  } catch (error) {
    console.error('Telegram API Error:', error)
    return { success: false, error: error?.toString() }
  }
})
