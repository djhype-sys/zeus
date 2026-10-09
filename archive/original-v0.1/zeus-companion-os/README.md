# ZEUS Companion OS v0.1
Zero-credit local-first AI companion PWA.

## Run
Serve this folder with any static web server. The visual shell, local memory, browser speech recognition and browser TTS work without an AI subscription.

## Local AI (optional)
Install Ollama, then run a compatible local model such as `qwen2.5:3b`. ZEUS calls the local Ollama endpoint at `http://localhost:11434/api/chat` and falls back gracefully if it is unavailable.

Note: browsers may restrict localhost/CORS depending on how the page is served. For production, use a tiny local bridge or configure Ollama origins appropriately.
