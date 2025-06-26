# Frequently Asked Questions (FAQ)

## 🤔 General Questions

### What is Rawi?

Rawi (راوي) is a developer-friendly AI-powered CLI tool that provides direct access to multiple AI providers from your terminal. It supports conversation history, profile management, and seamless integration with shell workflows.

### Why use Rawi instead of web interfaces?

- **Terminal Integration**: Perfect for developer workflows
- **Shell Automation**: Pipe results, redirect output, use in scripts
- **Multi-Provider**: Switch between AI providers easily
- **Profile Management**: Different configs for different projects
- **Privacy**: Local AI support with Ollama
- **Persistence**: Chat history and session management

### Is Rawi free to use?

Rawi itself is free and open-source. However, most AI providers (OpenAI, Anthropic, Google, etc.) require API keys and charge for usage. Ollama is completely free and runs locally.

---

## 🔧 Installation & Setup

### How do I install Rawi?

```bash
# Install globally via npm
npm install -g rawi

# Or use with npx (no installation)
npx rawi ask "Your question"
```

### Which AI provider should I choose?

- **For coding**: OpenAI GPT-4o, Claude 3.5 Sonnet, or Ollama CodeLlama
- **For privacy**: Ollama (runs locally)
- **For cost-effectiveness**: OpenAI GPT-4o-mini or Google Gemini Flash
- **For reasoning**: Claude 3.5 Sonnet or OpenAI O1
- **For enterprise**: Azure OpenAI or Amazon Bedrock

### Can I use multiple providers?

Yes! Create different profiles for different providers:

```bash
rawi configure --profile work --provider openai --model gpt-4o
rawi configure --profile personal --provider anthropic --model claude-3-sonnet-20240229
rawi configure --profile local --provider ollama --model llama3.2
```

---

## 💻 Usage Questions

### How do I switch between profiles?

```bash
# Use specific profile
rawi ask "Your question" --profile work

# Set default profile
rawi configure --profile work  # This becomes default

# List all profiles
rawi configure --list
```

### Can I use Rawi in scripts?

Absolutely! Rawi is designed for automation:

```bash
# Pipe files to Rawi
cat code.js | rawi ask "Review this code"

# Save output to file
rawi ask "Explain Docker" > docker-explanation.md

# Use in conditional statements
if rawi ask "Is this code secure?" | grep -q "secure"; then
  echo "Code looks good!"
fi
```

### How do I view my chat history?

```bash
# List recent sessions
rawi history

# View specific session
rawi history --session <session-id>

# Search chat history
rawi history --search "docker"

# Export history
rawi history --export history.json
```

### Can I adjust AI model parameters?

Yes, during configuration:

```bash
rawi configure \
  --provider openai \
  --model gpt-4o \
  --temperature 0.7 \
  --max-tokens 2048
```

---

## 🔐 Security & Privacy

### Where are my API keys stored?

API keys are stored locally in:

- **Linux/macOS**: `~/.config/rawi/credentials.json`
- **Windows**: `%APPDATA%\rawi\credentials.json`

The file is readable only by your user account.

### How secure is Rawi?

- API keys are stored locally (never sent to Rawi servers)
- No telemetry or usage tracking
- Direct communication with AI providers
- Open-source code for transparency

### Can I use Rawi completely offline?

Yes, with Ollama! Install Ollama and download models locally:

```bash
# Install Ollama
brew install ollama  # macOS
# or visit ollama.com for other platforms

# Download a model
ollama pull llama3.2

# Configure Rawi
rawi configure --provider ollama --model llama3.2
```

---

## 🛠️ Troubleshooting

### "Command not found" error

If you get `rawi: command not found`:

1. Ensure global installation: `npm install -g rawi`
2. Check npm global path: `npm config get prefix`
3. Add to PATH if needed: `export PATH="$(npm config get prefix)/bin:$PATH"`

### API key issues

```bash
# Check current configuration
rawi configure --show

# Test connection
rawi ask "Hello" --profile your-profile

# Reconfigure if needed
rawi configure --profile your-profile
```

### "Model not available" error

1. Check available models: `rawi configure --list-models openai`
2. Verify model name spelling
3. Some models require special access (GPT-4, Claude-3)

### Ollama connection issues

```bash
# Start Ollama service
ollama serve

# Check if model is downloaded
ollama list

# Download model if missing
ollama pull llama3.2

# Test connection
rawi configure --provider ollama --model llama3.2 --base-url http://localhost:11434/api
```

---

## 🔄 Provider-Specific Questions

### OpenAI

**Q: Which OpenAI model should I use?**

- `gpt-4o` - Best overall (reasoning + speed)
- `gpt-4o-mini` - Cost-effective, fast
- `o1-preview` - Complex reasoning tasks
- `gpt-4` - High-quality, slower

**Q: Why am I getting rate limit errors?**

- Check your OpenAI tier/limits
- Use `--max-tokens` to reduce token usage
- Consider `gpt-4o-mini` for higher rate limits

### Anthropic

**Q: What's the difference between Claude models?**

- `claude-3-5-sonnet-20241022` - Latest, most capable
- `claude-3-5-haiku-20241022` - Fast, cost-effective
- `claude-3-sonnet-20240229` - Balanced capability

### Ollama

**Q: Which Ollama model should I start with?**

- `llama3.2` - Good balance (3B/7B versions)
- `codellama` - Optimized for code
- `mistral` - Fast and efficient
- `qwen2.5` - Great for multilingual

**Q: How do I run Ollama on a different port?**

```bash
# Start Ollama on custom port
OLLAMA_HOST=0.0.0.0:8080 ollama serve

# Configure Rawi
rawi configure --provider ollama --model llama3.2 --base-url http://localhost:8080/api
```

### Azure OpenAI

**Q: What's the difference between model name and deployment name?**

- **Model name**: `gpt-4o` (the actual AI model)
- **Deployment name**: `my-gpt4-deployment` (your Azure deployment)
- Use deployment name with `--model` in Rawi

### Amazon Bedrock

**Q: How do I request model access?**

1. Go to AWS Bedrock console
2. Navigate to "Model access"
3. Request access for desired models
4. Wait for approval (usually instant for most models)

---

## 📊 Performance & Optimization

### How can I make responses faster?

1. Use faster models (GPT-4o-mini, Gemini Flash, Claude Haiku)
2. Reduce `--max-tokens`
3. Use Ollama for local inference
4. Set higher `--temperature` for less careful responses

### How can I reduce costs?

1. Use cost-effective models:
   - OpenAI: `gpt-4o-mini`
   - Google: `gemini-1.5-flash`
   - Anthropic: `claude-3-5-haiku`
2. Set lower `--max-tokens`
3. Use Ollama (completely free)

### Can I use Rawi for large documents?

Yes, but be aware of token limits:

- Most models: 4K-8K tokens input
- Extended models: 32K-200K tokens
- Use `cat large-file.txt | head -100 | rawi ask "Summarize"`

---

## 🔗 Integration Questions

### Can I integrate Rawi with my IDE?

Yes! Many ways:

- **VS Code**: Terminal integration
- **Vim/Neovim**: Shell commands
- **Shell aliases**: Create shortcuts

```bash
# Add to ~/.bashrc or ~/.zshrc
alias explain="rawi ask 'Explain this code:'"
alias review="rawi ask 'Review this code for issues:'"
```

### Can I use Rawi in CI/CD?

Absolutely! Use environment variables:

```bash
# Set in CI environment
export RAWI_OPENAI_API_KEY="sk-..."
export RAWI_PROVIDER="openai"
export RAWI_MODEL="gpt-4o-mini"

# Use in pipeline
rawi ask "Review this pull request" < changes.diff
```

### How do I backup my configuration?

```bash
# Copy configuration files
cp -r ~/.config/rawi ~/backups/

# Or export specific profile
rawi configure --show --profile work > work-profile.txt
```

---

## 🆕 Updates & Support

### How do I update Rawi?

```bash
# Update to latest version
npm update -g rawi

# Check current version
rawi info
```

### Where can I get help?

1. **Documentation**: Full guides in `/docs`
2. **Issues**: GitHub repository
3. **Troubleshooting**: [troubleshooting.md](./troubleshooting.md)

### How do I report bugs?

1. Check existing issues on GitHub
2. Include version: `rawi info`
3. Include configuration: `rawi configure --show`
4. Include error messages and steps to reproduce

---

## 🔮 Advanced Questions

### Can I extend Rawi with custom providers?

Currently, no plugin system exists, but you can:

1. Fork the repository
2. Add provider in `src/config/providers/`
3. Follow the [development guide](./development.md)

### Can I use custom prompts?

Not directly, but you can:

```bash
# Create alias with custom prompt
alias code-review='rawi ask "As a senior developer, review this code for security, performance, and best practices:"'

# Use with input
cat mycode.js | code-review
```

### How does Rawi handle rate limits?

Rawi respects provider rate limits but doesn't implement automatic retry. If you hit limits:

1. Wait before retrying
2. Use different model/provider
3. Consider upgrading your API tier

---

_For more detailed information, see our [complete documentation](./README.md)._
