# Troubleshooting Guide

Common issues and solutions for Rawi users and developers.

## 🔧 Installation Issues

### Node.js Version Errors

**Problem**: Getting errors about Node.js version compatibility

```
error: The engine "node" is incompatible with this module
```

**Solution**:

```bash
# Check your Node.js version
node --version

# Update to Node.js 18+ (recommended: use nvm)
nvm install 18
nvm use 18

# Or download from nodejs.org
```

### Package Installation Failures

**Problem**: `npm install` or `pnpm install` fails

**Solution**:

```bash
# Clear package manager cache
npm cache clean --force
# or
pnpm store prune

# Delete node_modules and lock file
rm -rf node_modules package-lock.json
# or
rm -rf node_modules pnpm-lock.yaml

# Reinstall
npm install
# or
pnpm install
```

### Global Installation Issues

**Problem**: `rawi` command not found after global installation

**Solution**:

```bash
# Check if npm global bin is in PATH
npm config get prefix
echo $PATH

# Add npm global bin to PATH (add to ~/.bashrc or ~/.zshrc)
export PATH=$PATH:$(npm config get prefix)/bin

# Or use npx
npx rawi --help
```

---

## ⚙️ Configuration Issues

### Configuration File Not Found

**Problem**:

```
❌ No configuration found for profile 'default'. Run 'rawi configure' to set up.
```

**Solution**:

```bash
# Run interactive configuration
rawi configure

# Or manual configuration
rawi configure --provider openai --model gpt-4o --api-key your-key

# Check configuration location
ls -la ~/.rawi/
```

### Invalid API Key Errors

**Problem**:

```
❌ Unable to load credentials for profile 'default'
❌ Invalid API key format
```

**Solutions**:

#### OpenAI API Key Issues

```bash
# Verify API key format (should start with 'sk-')
echo $OPENAI_API_KEY

# Regenerate API key at https://platform.openai.com/api-keys
rawi configure --provider openai --model gpt-4o --api-key sk-new-key
```

#### Anthropic API Key Issues

```bash
# Verify API key format (should start with 'sk-ant-')
rawi configure --provider anthropic --model claude-3-sonnet-20240229 --api-key sk-ant-your-key
```

#### Google API Key Issues

```bash
# Verify API key format (should start with 'AIza')
rawi configure --provider google --model gemini-1.5-pro --api-key AIza-your-key
```

### Profile Management Issues

**Problem**: Cannot switch between profiles or profiles not found

**Solution**:

```bash
# List all profiles
rawi configure --list

# Show specific profile
rawi configure --show --profile work

# Create new profile
rawi configure --profile work --provider anthropic --model claude-3-sonnet-20240229

# Delete problematic profile
rawi configure --delete broken-profile
```

### Permission Errors

**Problem**:

```
Error: EACCES: permission denied, open '~/.rawi/credentials'
```

**Solution**:

```bash
# Fix file permissions
chmod 600 ~/.rawi/credentials
chown $USER ~/.rawi/credentials

# Or recreate configuration directory
rm -rf ~/.rawi
rawi configure
```

---

## 🤖 Provider-Specific Issues

### OpenAI Issues

#### Rate Limit Errors

**Problem**:

```
Error: Rate limit exceeded
```

**Solution**:

```bash
# Wait and retry
# Upgrade OpenAI plan for higher limits
# Use different model (gpt-3.5-turbo has higher limits)
rawi configure --model gpt-3.5-turbo
```

#### Model Access Issues

**Problem**:

```
Error: The model 'gpt-4' does not exist or you do not have access to it
```

**Solution**:

```bash
# Check available models
rawi configure --list-models openai

# Use available model
rawi configure --model gpt-3.5-turbo

# Request access to GPT-4 from OpenAI
```

### Anthropic Issues

#### Claude Model Access

**Problem**: Claude models returning access errors

**Solution**:

```bash
# Verify Anthropic account has Claude access
# Use correct model name
rawi configure --list-models anthropic

# Update to latest model
rawi configure --model claude-3-5-sonnet-20241022
```

### Google Issues

#### Gemini API Setup

**Problem**: Google API returning authentication errors

**Solution**:

```bash
# Verify API key is enabled for Generative AI
# Check Google Cloud Console for API restrictions
# Ensure correct base URL
rawi configure --provider google --base-url https://generativelanguage.googleapis.com/v1beta
```

### Ollama Issues

#### Service Not Running

**Problem**:

```
Error: connect ECONNREFUSED 127.0.0.1:11434
```

**Solution**:

```bash
# Start Ollama service
ollama serve

# Check if Ollama is running
curl http://localhost:11434/api/tags

# Verify model is pulled
ollama list
ollama pull llama3.2
```

#### Model Not Found

**Problem**:

```
Error: model 'llama3.2' not found
```

**Solution**:

```bash
# Pull the model
ollama pull llama3.2

# List available models
ollama list

# Use available model
rawi configure --provider ollama --model available-model-name
```

#### Custom Ollama Host

**Problem**: Ollama running on different host/port

**Solution**:

```bash
# Configure custom base URL
rawi configure --provider ollama --model llama3.2 --base-url http://192.168.1.100:11434/api

# Or set environment variable
export OLLAMA_HOST=192.168.1.100:11434
```

### Azure OpenAI Issues

#### Resource Configuration

**Problem**: Azure OpenAI configuration errors

**Solution**:

```bash
# Verify all required parameters
rawi configure \
  --provider azure \
  --model your-deployment-name \
  --api-key your-azure-key \
  --resource-name your-resource-name \
  --api-version 2024-10-01-preview

# Check Azure portal for correct values
# Ensure deployment is active
```

### Amazon Bedrock Issues

#### AWS Credentials

**Problem**: AWS credential errors

**Solution**:

```bash
# Use AWS credential provider chain
aws configure
rawi configure --provider bedrock --model anthropic.claude-3-sonnet-20240229-v1:0 --use-provider-chain

# Or explicit credentials
rawi configure \
  --provider bedrock \
  --model anthropic.claude-3-sonnet-20240229-v1:0 \
  --access-key-id AKIA... \
  --secret-access-key your-secret \
  --region us-east-1
```

#### Model Access

**Problem**: Model access denied in Bedrock

**Solution**:

```bash
# Request model access in AWS Console
# Go to Amazon Bedrock > Model access
# Request access for required models
# Wait for approval (can take time)
```

---

## 🗄️ Database and History Issues

### Database Corruption

**Problem**: History commands failing or returning errors

**Solution**:

```bash
# Backup current database
cp ~/.rawi/history.db ~/.rawi/history.db.backup

# Remove corrupted database (will recreate)
rm ~/.rawi/history.db

# Test with new session
rawi ask "test" --new-session
```

### Session Management Issues

**Problem**: Cannot continue sessions or session not found

**Solution**:

```bash
# List all sessions
rawi history sessions

# Use correct session ID
rawi ask "follow up" --session correct-session-id

# Start new session if needed
rawi ask "new conversation" --new-session
```

### History Search Problems

**Problem**: Search not finding expected results

**Solution**:

```bash
# Try different search terms
rawi history --search "typescript"
rawi history --search "react"

# Use broader search
rawi history --search "code"

# Check specific date range
rawi history --from 2024-01-01 --to 2024-01-31
```

---

## 🌐 Network and API Issues

### Connection Timeouts

**Problem**: API requests timing out

**Solution**:

```bash
# Check internet connection
ping google.com

# Try different provider
rawi ask "test" --profile ollama-local

# Check firewall/proxy settings
# Some corporate networks block AI API endpoints
```

### SSL/TLS Errors

**Problem**: Certificate or SSL errors

**Solution**:

```bash
# Update Node.js and certificates
npm update -g

# Check system time (SSL certificates are time-sensitive)
date

# Try with different provider
```

### Proxy Configuration

**Problem**: Requests failing behind corporate proxy

**Solution**:

```bash
# Set proxy environment variables
export HTTP_PROXY=http://proxy.company.com:8080
export HTTPS_PROXY=http://proxy.company.com:8080

# Or configure npm proxy
npm config set proxy http://proxy.company.com:8080
npm config set https-proxy http://proxy.company.com:8080
```

---

## 💾 Performance Issues

### Slow Response Times

**Problem**: AI responses taking too long

**Solutions**:

#### Use Faster Models

```bash
# Switch to faster models
rawi configure --model gpt-3.5-turbo  # OpenAI
rawi configure --model claude-3-haiku-20240307  # Anthropic
rawi configure --model gemini-1.5-flash  # Google
```

#### Reduce Token Limits

```bash
# Reduce max tokens for faster responses
rawi configure --max-tokens 1024
```

#### Use Local Models

```bash
# Switch to local Ollama for fastest responses
ollama pull llama3.2:3b  # Smaller model
rawi configure --provider ollama --model llama3.2:3b
```

### High Memory Usage

**Problem**: Rawi using too much memory

**Solution**:

```bash
# Use smaller models
# Limit conversation history
rawi history cleanup --days 7

# Clear old sessions
rawi history cleanup --confirm
```

---

## 🖥️ Platform-Specific Issues

### Windows Issues

#### PowerShell Execution Policy

**Problem**: Cannot run scripts in PowerShell

**Solution**:

```powershell
# Set execution policy
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# Or run with bypass
powershell -ExecutionPolicy Bypass -Command "rawi ask 'test'"
```

#### Path Issues

**Problem**: Command not found on Windows

**Solution**:

```cmd
# Add npm global to PATH
set PATH=%PATH%;%APPDATA%\npm

# Or use full path
%APPDATA%\npm\rawi.cmd ask "test"
```

### macOS Issues

#### Permission Errors

**Problem**: Permission denied errors on macOS

**Solution**:

```bash
# Fix npm permissions
sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}

# Or use nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install node
```

### Linux Issues

#### Package Manager Conflicts

**Problem**: Conflicts with system package managers

**Solution**:

```bash
# Use nvm instead of system Node.js
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 18
nvm use 18

# Or use isolated installation
npm install -g rawi --prefix ~/.local
export PATH=$PATH:~/.local/bin
```

---

## 🔧 Development Issues

### TypeScript Compilation Errors

**Problem**: Build failing with TypeScript errors

**Solution**:

```bash
# Check TypeScript version
npx tsc --version

# Clear TypeScript cache
rm -rf .tsbuildinfo

# Rebuild
pnpm run build

# Check for type errors
pnpm run typecheck
```

### Import/Export Issues

**Problem**: Module import errors

**Solution**:

```bash
# Ensure .js extensions in imports (ESM requirement)
import { config } from './config.js';  // ✅
import { config } from './config';     // ❌

# Check package.json type field
"type": "module"
```

### Test Failures

**Problem**: Tests failing unexpectedly

**Solution**:

```bash
# Run tests with verbose output
pnpm test --reporter=verbose

# Run specific test
pnpm test src/config/manager.test.ts

# Clear test cache
rm -rf node_modules/.vite
```

---

## 🔍 Debugging Techniques

### Enable Debug Mode

```bash
# Set debug environment variable
export DEBUG=rawi:*
rawi ask "test"

# Or for specific modules
export DEBUG=rawi:config,rawi:database
```

### Verbose Logging

```bash
# Add temporary logging
console.log('Debug: Current config:', config);
console.error('Error details:', error);

# Use Node.js debugging
node --inspect-brk dist/index.js ask "test"
```

### Configuration Inspection

```bash
# Check configuration file
cat ~/.rawi/credentials | jq .

# Verify file permissions
ls -la ~/.rawi/

# Check environment variables
env | grep -i rawi
```

---

## 🆘 Getting Help

### Before Reporting Issues

1. **Check existing issues**: Search GitHub issues for similar problems
2. **Update to latest version**: `npm update -g rawi`
3. **Try different providers**: Test with Ollama (local) if API issues
4. **Check configuration**: Verify with `rawi configure --show`

### Information to Include

When reporting issues, include:

```bash
# System information
node --version
npm --version
rawi --version

# Operating system
uname -a  # Linux/macOS
# or
systeminfo  # Windows

# Configuration (remove sensitive data)
rawi configure --show

# Error output
rawi ask "test" 2>&1 | tee error.log
```

### Community Support

- **GitHub Issues**: https://github.com/MKAbuMattar/rawi/issues
- **Discussions**: https://github.com/MKAbuMattar/rawi/discussions
- **Documentation**: https://rawi.mkabumattar.com/

### Quick Fixes Checklist

- [ ] Restart terminal/shell
- [ ] Update Node.js to latest LTS
- [ ] Clear npm/pnpm cache
- [ ] Reconfigure with `rawi configure`
- [ ] Test with local provider (Ollama)
- [ ] Check internet connection
- [ ] Verify API key permissions
- [ ] Try different profile
- [ ] Check file permissions on ~/.rawi/

### Emergency Reset

If everything is broken:

```bash
# Complete reset
rm -rf ~/.rawi
npm uninstall -g rawi
npm cache clean --force
npm install -g rawi
rawi configure
```

Most issues can be resolved by following this troubleshooting guide. If you're still experiencing problems, please create an issue on GitHub with detailed information about your setup and the error messages you're seeing.
