import React, { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import SendIcon from "@mui/icons-material/Send";

const Chat = () => {
  const [prompt, setPrompt] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [conversationId, setConversationId] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3000/api/chat", {
        prompt,
        conversationId,
      });
      const userMessage = { role: "user", content: prompt };
      const botMessage = { role: "bot", content: res.data.response };

      setChatHistory([...chatHistory, userMessage, botMessage]);
      setPrompt("");
      setConversationId(res.data.conversationId);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>
        Chat with AI
      </Typography>
      <List sx={{ height: 300, overflowY: "auto", mb: 2 }}>
        {chatHistory.map((message, index) => (
          <ListItem key={index} alignItems="flex-start">
            <ListItemText
              primary={message.role === "user" ? "You" : "AI"}
              secondary={message.content}
            />
          </ListItem>
        ))}
      </List>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type your message..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button
          type="submit"
          variant="contained"
          endIcon={<SendIcon />}
          fullWidth
        >
          Send
        </Button>
      </form>
    </Paper>
  );
};

export default Chat;
