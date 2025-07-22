# Troubleshooting Guide

This guide helps you diagnose and resolve common issues with Rawi.

## Navigation

- [📖 Wiki Home](README.md)
- [⚙️ Configuration](commands/configure.md)
- [🔧 Installation](installation.md)
- [🚀 Quick Start](quickstart.md)

---

## Quick Diagnostics

### Check Rawi Status

```bash
# Check if Rawi is properly installed
rawi --version

# View current configuration
rawi info

# Test basic functionality
rawi ask "Hello, are you working?"
```

### Common Quick Fixes

Before diving into specific issues, try these common solutions:

1. **Update Rawi**: `npm update -g rawi`
2. **Clear configuration**: `rawi configure --reset`
3. **Restart terminal**: Close and reopen your terminal
4. **Check permissions**: Ensure proper file permissions for config directory

---

## Installation Issues

### Installation Fails

**Problem**: `npm install -g rawi` fails

**Solutions**:

```bash
# Try with elevated permissions (Linux/macOS)
sudo npm install -g rawi

# Use npm with different registry
npm install -g rawi --registry https://registry.npmjs.org/

# Clear npm cache and retry
npm cache clean --force
npm install -g rawi

# Use different package manager
pnpm add -g rawi
# or
yarn global add rawi
```

### Command Not Found

**Problem**: `rawi: command not found` after installation

**Solutions**:

```bash
# Check if npm global bin is in PATH
npm config get prefix
# Add to PATH if needed (add to ~/.bashrc or ~/.zshrc)
export PATH="$(npm config get prefix)/bin:$PATH"

# Alternative: Use npx
npx rawi --version

# Check installation location
which rawi
ls -la $(npm config get prefix)/bin/rawi
```

### Permission Errors

**Problem**: Permission denied during installation or usage

**Solutions**:

```bash
# Fix npm permissions (preferred method)
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc

# Alternative: Change npm permissions
sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}

# For config directory permissions
chmod -R 755 ~/.config/rawi
```

---

## Configuration Issues

### Provider Setup Problems

**Problem**: Cannot configure AI provider

**Solutions**:

```bash
# Reset configuration
rawi configure --reset

# Check available providers
rawi provider list

# Set provider with verbose output
rawi provider set openai --verbose

# Verify API key format
rawi configure --show | grep -i api

# Test provider connection
rawi ask "Test message" --debug
```

### API Key Issues

**Problem**: Invalid or missing API key

**Solutions**:

```bash
# Check current API key (masked)
rawi info

# Set API key correctly
rawi configure --api-key YOUR_API_KEY

# Use environment variable
export RAWI_API_KEY="your-api-key"
rawi ask "Test"

# Check key format (provider-specific)
# OpenAI: sk-...
# Anthropic: sk-ant-...
# Google: AIza...
```

### Configuration File Corruption

**Problem**: Config file is corrupted or unreadable

**Solutions**:

```bash
# Backup current config
cp ~/.config/rawi/config.json ~/.config/rawi/config.json.backup

# Reset to defaults
rawi configure --reset

# Manually edit config
nano ~/.config/rawi/config.json

# Validate JSON syntax
cat ~/.config/rawi/config.json | jq .
```

---

## Connection and Network Issues

### API Connection Failures

**Problem**: Cannot connect to AI provider APIs

**Diagnostic Commands**:

```bash
# Test connectivity
rawi ask "Hello" --debug

# Check network connectivity
ping api.openai.com
curl -I https://api.anthropic.com

# Test with verbose output
rawi ask "Test" --verbose --provider openai
```

**Solutions**:

```bash
# Configure proxy if needed
export HTTPS_PROXY=http://proxy.company.com:8080
export HTTP_PROXY=http://proxy.company.com:8080

# Use different provider
rawi provider set anthropic

# Check firewall settings
# Ensure outbound HTTPS (443) is allowed

# Try different network
# Test on different WiFi/connection
```

### Timeout Issues

**Problem**: Requests timeout frequently

**Solutions**:

```bash
# Increase timeout (if available in future versions)
rawi configure --timeout 60

# Use shorter prompts
rawi ask "Brief answer please: [your question]"

# Try different provider
rawi provider set anthropic  # Often faster responses

# Check network stability
ping -c 10 8.8.8.8
```

### Rate Limiting

**Problem**: Too many requests / rate limited

**Solutions**:

```bash
# Wait before retrying (respect rate limits)
sleep 60 && rawi ask "Your question"

# Use different provider
rawi provider set ollama  # Local provider, no rate limits

# Check provider limits
rawi info  # Shows current provider info

# Use sessions to maintain context without multiple API calls
rawi ask "Question 1" --session work
rawi ask "Follow-up question" --session work
```

---

## Command-Specific Issues

### Ask Command Issues

**Problem**: `rawi ask` not working as expected

**Diagnostics**:

```bash
# Test basic functionality
rawi ask "Hello"

# Check with debug output
rawi ask "Test" --debug

# Try different input methods
echo "Hello" | rawi ask
rawi ask "Hello" < input.txt
```

**Solutions**:

```bash
# Escape special characters
rawi ask "What is 2+2?"  # Use quotes for complex queries

# Check input encoding
file input.txt  # Ensure UTF-8 encoding

# Try without piping first
rawi ask "Your question directly"
```

### History Command Issues

**Problem**: History not working or empty

**Solutions**:

```bash
# Check if history directory exists
ls -la ~/.config/rawi/

# Verify history files
ls -la ~/.config/rawi/history/

# Test history functionality
rawi ask "Test for history" --session test
rawi history --session test

# Reset history if corrupted
rm -rf ~/.config/rawi/history/
rawi ask "New test"
```

### Act Command Issues

**Problem**: Act templates not working

**Solutions**:

```bash
# List available templates
rawi act --list

# Test basic template
rawi act assistant "Help me with this"

# Check template syntax
rawi act --help

# Try with debug output
rawi act developer "Code help" --debug
```

---

## File Reading Issues

### File Not Found Errors

**Problem**: `File not found` or `Cannot read file` errors

**Diagnostic Commands**:

```bash
# Check if file exists
ls -la /path/to/file

# Check current directory
pwd
ls -la

# Test with absolute path
rawi ask --file "$(pwd)/document.pdf" "What is this about?"
```

**Solutions**:

```bash
# Use absolute path
rawi ask --file "/full/path/to/document.pdf" "Analyze this"

# Check file permissions
chmod 644 document.pdf

# Verify file is readable
cat document.pdf | head  # For text files
file document.pdf        # Check file type
```

### Unsupported File Format

**Problem**: `Unsupported file format` errors

**Solutions**:

```bash
# Check supported formats
rawi ask --help | grep -A 20 "file-type"

# Override file type detection
rawi ask --file unknown.ext --file-type txt "Process as text"

# Convert to supported format
pandoc document.rtf -o document.docx  # Convert RTF to DOCX
libreoffice --convert-to pdf document.doc  # Convert DOC to PDF

# List supported extensions
rawi ask --file example.pdf --help
```

### Empty or Corrupted Content

**Problem**: File processed but content is empty or garbled

**Diagnostic Commands**:

```bash
# Check file integrity
file document.pdf
ls -lh document.pdf  # Check file size

# Test extraction manually
pdftotext document.pdf test.txt  # For PDFs
unzip -l document.docx  # For DOCX files
```

**Solutions**:

```bash
# Try different file type
rawi ask --file document.pdf --file-type txt "Process as plain text"

# Re-download or recreate file
wget -O new-file.pdf "original-url"

# Use verbose mode for debugging
rawi ask --file document.pdf --verbose "Debug this file"

# Try with smaller test file
echo "Hello world" > test.txt
rawi ask --file test.txt "What does this say?"
```

### Large File Processing Issues

**Problem**: Timeout or memory errors with large files

**Solutions**:

```bash
# Check file size
ls -lh large-file.pdf

# Process in smaller batches
split -b 10M large-file.txt part_  # Split large text files
rawi ask --file part_aa "Analyze this portion"

# Use specific file type to skip expensive detection
rawi ask --file large-data.xlsx --file-type xlsx "Process this"

# Increase timeout (if available in future versions)
rawi ask --file large-file.pdf --timeout 300 "Analyze slowly"
```

### Batch Processing Failures

**Problem**: Batch processing fails or processes some files incorrectly

**Diagnostic Commands**:

```bash
# Test glob pattern
ls -la src/**/*.js  # Verify pattern matches expected files

# Process single file first
rawi ask --file src/app.js "Test single file"

# Use verbose mode
rawi ask --batch "src/*.js" --verbose "Debug batch processing"
```

**Solutions**:

```bash
# Use continue-on-error for large batches
rawi ask --batch "**/*.js" --continue-on-error "Process all JS files"

# Reduce concurrency
rawi ask --batch "src/**/*.js" --max-concurrency 2 "Process slowly"

# Process in smaller batches
rawi ask --batch "src/components/*.js" "Process components first"
rawi ask --batch "src/utils/*.js" "Process utils second"

# Exclude problematic directories
rawi ask --batch "src/**/*.js" --exclude "node_modules/**" "Skip dependencies"
```

### Permission Denied Errors

**Problem**: Cannot read files due to permission issues

**Solutions**:

```bash
# Check file permissions
ls -l document.pdf

# Fix file permissions
chmod 644 document.pdf  # Read/write for owner, read for others
chmod -R 644 documents/  # Fix directory permissions

# Check directory permissions
ls -ld /path/to/directory

# Use sudo if necessary (be careful)
sudo rawi ask --file /root/document.pdf "Analyze this"  # Not recommended
```

### Encoding Issues

**Problem**: Non-English text appears as gibberish

**Solutions**:

```bash
# Check file encoding
file -bi document.txt

# Convert encoding if needed
iconv -f ISO-8859-1 -t UTF-8 document.txt > document-utf8.txt
rawi ask --file document-utf8.txt "Analyze this"

# Specify encoding (if supported in future)
rawi ask --file document.txt --encoding utf-8 "Process with UTF-8"

# Use file type override
rawi ask --file document.txt --file-type txt "Force text processing"
```

---

## Performance Issues

### Slow Response Times

**Problem**: Rawi responses are very slow

**Solutions**:

```bash
# Try different provider
rawi provider set anthropic  # Often faster

# Use shorter, more specific prompts
rawi ask "Brief: What is Node.js?"

# Check network speed
speedtest-cli  # or use online speed test

# Use local provider if available
rawi provider set ollama  # Requires local Ollama installation
```

### High Memory Usage

**Problem**: Rawi using too much memory

**Solutions**:

```bash
# Clear session history periodically
rawi history --clear --older-than 30d

# Use shorter sessions
rawi ask "Question" --session temp
# Start new session frequently

# Limit session size (conceptual)
# Keep individual conversations focused
```

---

## File and Permission Issues

### Cannot Read/Write Files

**Problem**: File permission errors

**Solutions**:

```bash
# Check file permissions
ls -la input.txt

# Fix permissions
chmod 644 input.txt

# Check directory permissions
ls -la ~/.config/rawi/

# Fix config directory
chmod -R 755 ~/.config/rawi/
```

### Configuration Directory Issues

**Problem**: Cannot create or access config directory

**Solutions**:

```bash
# Create config directory manually
mkdir -p ~/.config/rawi

# Set proper permissions
chmod 755 ~/.config/rawi

# Check disk space
df -h ~/.config

# Check for symlink issues
ls -la ~/.config/rawi
```

---

## Provider-Specific Issues

### OpenAI Issues

**Common Problems**:

- Invalid API key format
- Insufficient credits
- Model access restrictions

**Solutions**:

```bash
# Verify API key format (starts with sk-)
rawi info | grep -i key

# Test with curl
curl -H "Authorization: Bearer YOUR_API_KEY" \
     -H "Content-Type: application/json" \
     -d '{"model":"gpt-3.5-turbo","messages":[{"role":"user","content":"Hello"}]}' \
     https://api.openai.com/v1/chat/completions

# Check account status at platform.openai.com
```

### Anthropic Issues

**Common Problems**:

- API key format (starts with sk-ant-)
- Region restrictions
- Model availability

**Solutions**:

```bash
# Verify Anthropic key format
rawi configure --show | grep -i anthropic

# Test direct API access
curl -H "Authorization: Bearer YOUR_API_KEY" \
     -H "Content-Type: application/json" \
     -d '{"model":"claude-3-sonnet-20240229","messages":[{"role":"user","content":"Hello"}]}' \
     https://api.anthropic.com/v1/messages
```

### Local Provider Issues (Ollama)

**Problem**: Cannot connect to local Ollama

**Solutions**:

```bash
# Check if Ollama is running
curl http://localhost:11434/api/tags

# Start Ollama service
ollama serve

# Check available models
ollama list

# Pull a model if needed
ollama pull llama2

# Configure Rawi for Ollama
rawi provider set ollama
```

---

## Debugging and Diagnostics

### Enable Debug Mode

```bash
# Run with debug output
rawi ask "Test" --debug

# Enable verbose logging
rawi ask "Test" --verbose

# Check log files (if available)
tail -f ~/.config/rawi/logs/rawi.log
```

### Collect Diagnostic Information

```bash
# System information
echo "OS: $(uname -a)"
echo "Node: $(node --version)"
echo "NPM: $(npm --version)"
echo "Rawi: $(rawi --version)"

# Configuration dump
rawi info --verbose

# Network test
curl -I https://api.openai.com
curl -I https://api.anthropic.com

# Permission check
ls -la ~/.config/rawi/
```

### Generate Support Information

```bash
# Create diagnostic report
{
  echo "=== Rawi Diagnostic Report ==="
  echo "Date: $(date)"
  echo "OS: $(uname -a)"
  echo "Node: $(node --version)"
  echo "NPM: $(npm --version)"
  echo "Rawi: $(rawi --version)"
  echo ""
  echo "=== Configuration ==="
  rawi info
  echo ""
  echo "=== Directory Structure ==="
  ls -la ~/.config/rawi/
  echo ""
  echo "=== Recent History ==="
  rawi history --last 3
} > rawi-diagnostic.txt
```

---

## Getting Help

### Before Seeking Help

1. Check this troubleshooting guide
2. Review the [Quick Start](quickstart.md) guide
3. Verify your [installation](installation.md)
4. Check [configuration documentation](commands/configure.md)

### Reporting Issues

When reporting issues, include:

1. **Environment Information**:

   ```bash
   rawi --version
   node --version
   npm --version
   uname -a
   ```

2. **Configuration Details**:

   ```bash
   rawi info
   ```

3. **Error Messages**: Full error output with `--debug` flag

4. **Steps to Reproduce**: Exact commands that cause the issue

5. **Expected vs Actual Behavior**: What you expected vs what happened

### Community Resources

- **GitHub Issues**: Report bugs and feature requests
- **Documentation Wiki**: [Main documentation](README.md)
- **Command Reference**: [All commands](commands/README.md)
- **Configuration Guide**: [Setup and configuration](commands/configure.md)

---

## Prevention and Best Practices

### Regular Maintenance

```bash
# Update Rawi regularly
npm update -g rawi

# Clean old history periodically
rawi history --clear --older-than 30d

# Backup configuration
cp ~/.config/rawi/config.json ~/.config/rawi/config.json.backup

# Test configuration after updates
rawi ask "Test after update"
```

### Configuration Best Practices

1. **Use environment variables for sensitive data**:

   ```bash
   export RAWI_API_KEY="your-key"
   # Instead of storing in config file
   ```

2. **Use profiles for different contexts**:

   ```bash
   rawi configure --profile work
   rawi configure --profile personal
   ```

3. **Regular backups**:
   ```bash
   tar -czf rawi-config-backup.tar.gz ~/.config/rawi/
   ```

### Error Prevention

1. **Always use quotes for complex prompts**
2. **Test new configurations with simple commands**
3. **Keep API keys secure and don't share them**
4. **Monitor API usage and costs**
5. **Use appropriate models for your tasks**

---

## Related Documentation

- [🚀 Quick Start Guide](quickstart.md) - Get started quickly
- [⚙️ Configuration Guide](commands/configure.md) - Detailed configuration
- [🔧 Installation Guide](installation.md) - Installation instructions
- [📚 Commands Reference](commands/README.md) - All available commands
- [📖 Main Documentation](README.md) - Return to main wiki

---

_Part of the [Rawi Documentation Wiki](README.md)_
