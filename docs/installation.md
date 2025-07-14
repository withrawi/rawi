# Installation & Setup

Get Rawi up and running on your system in just a few minutes.

## 📋 Table of Contents

- [System Requirements](#system-requirements)
- [Installation Methods](#installation-methods)
- [Post-Installation Setup](#post-installation-setup)
- [Verification](#verification)
- [Next Steps](#next-steps)

---

## System Requirements

Before installing Rawi, ensure your system meets these requirements:

- **Node.js**: Version 18.0.0 or higher
- **Operating System**: Windows, macOS, or Linux
- **Terminal**: Any modern terminal (Terminal.app, iTerm2, Windows Terminal, PowerShell, etc.)
- **Internet Connection**: Required for cloud AI providers (optional for local providers like Ollama)

### Check Your Node.js Version

```bash
node --version
```

If you need to install or update Node.js, visit [nodejs.org](https://nodejs.org/).

---

## Installation Methods

### NPM (Recommended)

The easiest way to install Rawi globally:

```bash
# Install globally via npm
npm install -g rawi
```

### Alternative Package Managers

```bash
# Using Yarn
yarn global add rawi

# Using pnpm
pnpm add -g rawi

# Using Bun
bun add -g rawi
```

### No Installation Required (npx)

Use Rawi without installing it globally:

```bash
# Run commands directly with npx
npx rawi ask "What is TypeScript?"
npx rawi configure
```

### Development Version

Install the latest development version from GitHub:

```bash
# Clone and install from source
git clone https://github.com/withrawi/rawi.git
cd rawi
npm install
npm run build
npm link
```

---

## Post-Installation Setup

After installing Rawi, you'll need to configure at least one AI provider to start using it.

### Interactive Configuration (Recommended)

Run the interactive configuration wizard:

```bash
rawi configure
```

This will guide you through:

1. Choosing an AI provider
2. Selecting a model
3. Entering API credentials
4. Setting up basic preferences

### Quick Setup Examples

Choose one of these popular options for quick setup:

#### OpenAI (Best for General Use)

```bash
# Get API key from: https://platform.openai.com/api-keys
rawi configure \
  --provider openai \
  --model gpt-4o \
  --api-key sk-your-api-key
```

#### Ollama (Free & Private)

```bash
# Install Ollama first: https://ollama.com/download
ollama pull llama3.2
rawi configure \
  --provider ollama \
  --model llama3.2
```

#### Anthropic Claude (Great for Analysis)

```bash
# Get API key from: https://console.anthropic.com/
rawi configure \
  --provider anthropic \
  --model claude-3-5-sonnet-20241022 \
  --api-key sk-ant-your-key
```

#### DeepSeek (Cost-Effective with Reasoning)

```bash
# Get API key from: https://platform.deepseek.com/api_keys
rawi configure \
  --provider deepseek \
  --model deepseek-chat \
  --api-key sk-your-deepseek-key
```

#### Google Gemini (Fast & Efficient)

```bash
# Get API key from: https://aistudio.google.com/app/apikey
rawi configure \
  --provider google \
  --model gemini-2.0-flash-exp \
  --api-key AIza-your-key
```

---

## Verification

After installation and configuration, verify everything is working:

### Check Installation

```bash
# Check Rawi version
rawi --version

# Show system information
rawi info

# List available commands
rawi --help
```

### Test Configuration

```bash
# Show current configuration
rawi configure --show

# Test with a simple question
rawi ask "Hello, can you hear me?"
```

### Expected Output

If everything is working correctly, you should see:

```bash
$ rawi --version
rawi/1.0.0 linux-x64 node-18.17.0

$ rawi ask "Hello"
🤖 Hello! I can hear you perfectly. I'm ready to help you with questions,
code review, analysis, or any other tasks you'd like assistance with.
What can I help you with today?
```

---

## Common Installation Issues

### Permission Errors (Linux/macOS)

If you get permission errors during global installation:

```bash
# Option 1: Use sudo (not recommended)
sudo npm install -g rawi

# Option 2: Configure npm to use a different directory
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
npm install -g rawi
```

### Windows Installation Issues

If you encounter issues on Windows:

```bash
# Use PowerShell as Administrator
npm install -g rawi

# Or use Windows Subsystem for Linux (WSL)
wsl
npm install -g rawi
```

### Node.js Version Issues

If your Node.js version is too old:

```bash
# Update Node.js using nvm (recommended)
nvm install node
nvm use node

# Or download from https://nodejs.org/
```

### Network Issues

If installation fails due to network issues:

```bash
# Use a different registry
npm install -g rawi --registry https://registry.npmmirror.com

# Or use npm with retry
npm install -g rawi --maxsockets 1
```

---

## Next Steps

Once Rawi is installed and configured:

1. **Learn the Basics**: Check out the [Quick Start Guide](./quickstart.md)
2. **Explore Commands**: Read the [Commands Reference](./commands/README.md)
3. **Set Up Multiple Providers**: Learn about [Profile Management](./profiles.md)
4. **Try Templates**: Explore [Act Templates](./templates/README.md)
5. **Advanced Usage**: Discover [Shell Integration](./shell-integration.md)

---

## Need Help?

- **Troubleshooting**: Check our [Troubleshooting Guide](./troubleshooting.md)
- **FAQ**: Browse [Frequently Asked Questions](./faq.md)
- **Community**: Join the [GitHub Discussions](https://github.com/withrawi/rawi/discussions)
- **Issues**: Report bugs on [GitHub Issues](https://github.com/withrawi/rawi/issues)

---

## Navigation

- [← Back to Wiki Home](./README.md)
- [Next: Quick Start Guide →](./quickstart.md)

Related Pages:

- [Configuration Guide](./configuration.md)
- [AI Providers](./providers/README.md)
- [Troubleshooting](./troubleshooting.md)
