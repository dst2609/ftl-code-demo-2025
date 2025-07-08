const { getChatHistory, saveChatMessage } = require("../models/chatModel");

const OpenAI = require("openai");

// get the OpenAI api key from env file
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const chatHandler = async (req, res) => {
  const { prompt, conversationId } = req.body;

  if (!prompt) {
    return res.status(400).send("prompt is empty - it is required");
  }

  try {
    let messages = [
      { role: "system", content: "You are a helpful assistant." },
    ];
    if (conversationId) {
      const prevMessages = await getChatHistory(conversationId);

      prevMessages.forEach((msg) => {
        messages.push({ role: 'user', content: msg.prompt });
        messages.push({ role: 'assistant', content: messages.response });
      });
    }

    messages.push({ role: "user", content: prompt });

    const completion = await openai.chat.completions.create({
      model: "gpt-4.1",
      messages: messages,
    });

    console.log(completion.choices[0].message);

    const chatResponse = completion.choices[0].message.content.trim();

    const newConversationId = conversationId || Date.now().toString();
    await saveChatMessage(newConversationId, prompt, chatResponse);

    res.json({
      prompt: prompt,
      response: chatResponse,
      conversationId: newConversationId
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("something went wrong");
  };

};

module.exports = { chatHandler };