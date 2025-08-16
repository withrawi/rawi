# 🔐 Security Operations Workflow

Use Rawi to streamline security operations, credential management, key generation, and secure system administration tasks.

## 🎯 Key Benefits

- Automate secure key generation with proper parameters
- Generate complex security commands with correct syntax
- Handle interactive security prompts safely
- Document security operations and procedures

## 🛠️ Workflow Overview

| Step | Action                                        | Commands                                     |
| ---- | --------------------------------------------- | -------------------------------------------- |
| 1    | [Key Generation](#key-generation)             | Generate SSH/GPG/TLS keys                    |
| 2    | [Security Auditing](#security-auditing)       | Run security scans and audits                |
| 3    | [Access Management](#access-management)       | Manage users, permissions, credentials       |
| 4    | [Secure Configuration](#secure-configuration) | Configure security settings for applications |

---

## Key Generation

Generate cryptographic keys with proper parameters and security settings.

### SSH Key Generation

```bash
# Generate a new Ed25519 SSH key with passphrase
rawi exec "generate a new Ed25519 SSH key named 'work_key'"

# Generate a strong RSA key with specific parameters
rawi exec "create a 4096-bit RSA key with a descriptive comment for GitHub"

# Add SSH key to SSH agent
rawi exec "add my ~/.ssh/work_key to ssh-agent"
```

> **Interactive Feature**: When generating keys, Rawi will automatically detect when a passphrase is required and securely prompt you to enter one.

### GPG Key Generation

```bash
# Generate a new GPG key for code signing
rawi exec "create a new GPG key for signing git commits"

# Export GPG public key for sharing
rawi exec "export my GPG public key to share on GitHub"
```

### TLS Certificate Generation

```bash
# Generate a self-signed certificate
rawi exec "generate a self-signed TLS certificate for local development"

# Create CSR for domain
rawi exec "create a certificate signing request for example.com"
```

---

## Security Auditing

Run security scans, audits, and analysis on your systems and code.

### System Scanning

```bash
# Run a security audit of open ports
rawi exec "scan my system for open ports and security vulnerabilities"

# Check for outdated packages with security issues
rawi exec "find outdated packages with known security vulnerabilities"
```

### Security Compliance

```bash
# Verify file permissions
rawi exec "check file permissions for sensitive configuration files"

# Audit user accounts
rawi exec "audit system user accounts and privileges"
```

---

## Access Management

Manage users, permissions, and credentials securely.

### User Management

```bash
# Add a new user with specific permissions
rawi exec "create a new system user with limited permissions"

# Modify user access
rawi exec "change user's group membership and shell"
```

### Password Management

```bash
# Generate a secure password
rawi exec "generate a strong password with special characters"

# Change user password
rawi exec "change password for user account"
```

> **Interactive Feature**: When changing passwords, Rawi will securely prompt you for the new password without displaying it.

---

## Secure Configuration

Configure security settings for applications and services.

### Firewall Management

```bash
# Configure firewall rules
rawi exec "set up firewall rules to allow SSH and HTTPS only"

# Check current firewall status
rawi exec "show current firewall configuration and active rules"
```

### Service Hardening

```bash
# Secure SSH configuration
rawi exec "harden SSH server configuration"

# Configure secure web server settings
rawi exec "configure nginx with secure TLS settings"
```

---

## 📚 Related Resources

- [Linux Security Documentation](https://www.kernel.org/doc/html/latest/security/index.html)
- [OpenSSH Documentation](https://www.openssh.com/manual.html)
- [GPG Documentation](https://gnupg.org/documentation/)

## 🔍 Related Commands

- [`exec` Command](../commands/exec.md) — For executing security operations
- [`ask` Command](../commands/ask.md) — For understanding security concepts

## 📝 Tips for Security Operations

1. **Always review commands** before execution, especially for security operations
2. **Use the `--dry-run` option** to preview commands without execution
3. **Create a dedicated profile** for security operations with appropriate models
4. **Document all security operations** for audit and compliance purposes
