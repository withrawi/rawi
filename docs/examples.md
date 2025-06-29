# Usage Examples

Real-world examples demonstrating how to use Rawi effectively in various development and daily scenarios.

## 🚀 Development Workflow

### Code Review and Analysis

#### Basic Code Review

```bash
# Review a specific file
cat src/components/UserAuth.tsx | rawi ask "Review this React component for best practices and potential issues"

# Review git changes
git diff | rawi ask "Review these changes for bugs, security issues, and code quality"

# Review staged changes
git diff --cached | rawi ask "Are these changes ready for commit? Any issues?"
```

#### Security Analysis

```bash
# Security-focused review
cat api/auth.js | rawi ask "Analyze this authentication code for security vulnerabilities"

# Dependency security check
cat package.json | rawi ask "Check these dependencies for known security issues"

# Environment configuration review
cat .env.example | rawi ask "Review this environment configuration for security best practices"

# Use act template for smart contract security
rawi ask --act ethereum-developer "Explain smart contract security"
cat contract.sol | rawi ask --act ethereum-developer "Review this contract for vulnerabilities"
```

#### Performance Optimization

```bash
# Database query optimization
cat queries.sql | rawi ask "Optimize these SQL queries for better performance"

# Algorithm analysis
cat algorithm.py | rawi ask "Analyze the time and space complexity of this algorithm and suggest optimizations"

# Bundle analysis
npx webpack-bundle-analyzer build/static/js/*.js | rawi ask "Analyze this webpack bundle report and suggest optimizations"
```

### Documentation Generation

#### README Creation

```bash
# Generate README from package.json
cat package.json | rawi ask "Create a comprehensive README.md for this project" > README.md

# Update existing README
cat README.md | rawi ask "Update this README with better examples and clearer installation instructions" > README_updated.md

# Generate API documentation
cat src/api/routes.js | rawi ask "Generate API documentation for these Express routes in OpenAPI format" > api-docs.yaml

# Use act template for documentation
rawi ask --act english-translator-improver "Improve this documentation"
```

#### Code Documentation

```bash
# Add JSDoc comments
cat src/utils/helpers.js | rawi ask "Add comprehensive JSDoc comments to these utility functions"

# Generate TypeScript interfaces
cat data.json | rawi ask "Generate TypeScript interfaces for this JSON structure" > types.ts

# Create inline comments
cat complex-algorithm.py | rawi ask "Add detailed inline comments explaining this algorithm step by step"
```

### Git Workflow Enhancement

#### Commit Message Generation

```bash
# Generate conventional commit message
git diff --cached | rawi ask "Generate a conventional commit message for these changes"

# Generate detailed commit message
git diff --cached | rawi ask "Create a detailed commit message explaining what changed and why"

# Multiple commit suggestions
git diff --cached | rawi ask "Suggest 3 different commit message options for these changes"
```

#### Branch and PR Management

```bash
# Generate PR description
git log main..feature-branch --oneline | rawi ask "Create a pull request description based on these commits"

# Generate release notes
git log v1.0.0..v1.1.0 --oneline | rawi ask "Generate release notes for version 1.1.0 based on these commits"

# Branch naming suggestions
rawi ask "Suggest branch names for a feature that adds user authentication with OAuth2"
```

---

## 📊 Data Analysis

### Log Analysis

#### Error Investigation

```bash
# Analyze application logs
grep ERROR /var/log/app.log | rawi ask "Analyze these error logs and categorize the issues"

# Performance monitoring
tail -1000 /var/log/nginx/access.log | rawi ask "Analyze these web server logs for performance patterns and issues"

# Database slow query analysis
cat slow-query.log | rawi ask "Analyze these slow database queries and suggest optimizations"
```

#### System Monitoring

```bash
# Server resource analysis
top -b -n1 | rawi ask "Analyze this system resource usage and identify potential issues"

# Docker container analysis
docker stats --no-stream | rawi ask "Analyze these Docker container metrics for resource optimization"

# Network traffic analysis
netstat -tuln | rawi ask "Analyze these network connections for potential security concerns"
```

### CSV and JSON Data Analysis

#### Sales Data Analysis

```bash
# Sales performance analysis
cat sales-data.csv | rawi ask "Analyze this sales data and identify trends, top products, and growth opportunities"

# Customer behavior analysis
cat customer-analytics.json | rawi ask "Analyze customer behavior patterns and suggest retention strategies"

# Financial analysis
cat quarterly-financials.csv | rawi ask "Analyze these financial metrics and highlight key insights"
```

#### API Response Analysis

```bash
# API structure analysis
curl -s https://api.github.com/repos/microsoft/typescript | rawi ask "Explain the structure of this API response and key metrics"

# Performance metrics analysis
curl -s https://api.status.io/metrics | rawi ask "Analyze these API performance metrics and identify any concerns"

# Error response analysis
cat api-errors.json | rawi ask "Categorize these API errors and suggest improvements"
```

---

## 🏗️ Configuration and Infrastructure

### Docker and Containerization

#### Dockerfile Optimization

```bash
# Optimize Dockerfile
cat Dockerfile | rawi ask "Optimize this Dockerfile for production use, security, and smaller image size"

# Multi-stage build suggestions
cat Dockerfile | rawi ask "Convert this Dockerfile to use multi-stage builds for better optimization"

# Security scanning
cat Dockerfile | rawi ask "Review this Dockerfile for security vulnerabilities and best practices"
```

#### Docker Compose Management

```bash
# Docker Compose optimization
cat docker-compose.yml | rawi ask "Optimize this Docker Compose configuration for production deployment"

# Service scaling suggestions
cat docker-compose.yml | rawi ask "Suggest scaling strategies for these services based on the configuration"

# Environment-specific configs
cat docker-compose.yml | rawi ask "Create environment-specific variations (dev, staging, prod) for this Docker Compose file"
```

### Cloud Infrastructure

#### AWS CloudFormation

```bash
# CloudFormation template review
cat infrastructure.yaml | rawi ask "Review this CloudFormation template for best practices and cost optimization"

# Security group analysis
cat security-groups.json | rawi ask "Analyze these AWS security groups for potential security risks"

# Cost optimization
cat aws-resources.yaml | rawi ask "Suggest cost optimization strategies for these AWS resources"
```

#### Kubernetes Configuration

```bash
# Kubernetes manifest review
cat k8s-deployment.yaml | rawi ask "Review this Kubernetes deployment for production readiness"

# Resource allocation optimization
cat k8s-resources.yaml | rawi ask "Optimize resource requests and limits for these Kubernetes workloads"

# Security policy review
cat k8s-security.yaml | rawi ask "Review these Kubernetes security policies and suggest improvements"
```

---

## 🧪 Testing and Quality Assurance

### Test Generation

#### Unit Test Creation

```bash
# JavaScript/TypeScript unit tests
cat src/utils/validation.js | rawi ask "Generate comprehensive Jest unit tests for these validation functions"

# Python unit tests
cat src/data_processor.py | rawi ask "Create pytest unit tests with edge cases for this data processing class"

# API endpoint tests
cat src/api/user.js | rawi ask "Generate integration tests for these Express API endpoints using Supertest"
```

#### Test Data Generation

```bash
# Mock data creation
rawi ask "Generate realistic mock data for a user management system with 50 users" > mock-users.json

# Test scenarios
rawi ask "Create test scenarios for an e-commerce checkout process including edge cases" > test-scenarios.md

# Performance test data
rawi ask "Generate test data for load testing a social media API with realistic user interactions" > load-test-data.json
```

### Code Quality Analysis

#### Static Analysis

```bash
# ESLint configuration
rawi ask "Create an ESLint configuration for a React TypeScript project with strict rules" > .eslintrc.js

# Prettier configuration
rawi ask "Generate a Prettier configuration that works well with ESLint for a Node.js project" > .prettierrc

# SonarQube analysis interpretation
cat sonarqube-report.json | rawi ask "Interpret this SonarQube analysis report and prioritize issues to fix"
```

---

## 🎓 Learning and Research

### Technology Comparisons

#### Framework Comparison

```bash
# Frontend framework comparison
rawi ask "Compare React, Vue, and Angular for building a large-scale dashboard application"

# Backend framework comparison
rawi ask "Compare Express.js, Fastify, and Koa.js for building a REST API with high performance requirements"

# Database comparison
rawi ask "Compare PostgreSQL, MongoDB, and Redis for a real-time chat application"
```

#### Architecture Decisions

```bash
# Microservices vs Monolith
rawi ask "Should I use microservices or monolithic architecture for a new e-commerce platform with 10 developers?"

# Deployment strategies
rawi ask "Compare Kubernetes, Docker Swarm, and serverless for deploying a Node.js application"

# State management solutions
rawi ask "Compare Redux, Zustand, and React Context for state management in a complex React application"
```

### Concept Explanations

#### Programming Concepts

```bash
# Complex programming concepts
rawi ask "Explain closures in JavaScript with practical examples and common use cases"

# Design patterns
rawi ask "Explain the Observer pattern with a real-world TypeScript implementation for a news subscription system"

# Algorithm explanations
rawi ask "Explain the QuickSort algorithm with step-by-step breakdown and Python implementation"
```

#### System Design

```bash
# Scalability concepts
rawi ask "Explain horizontal vs vertical scaling with examples for a web application"

# Database design
rawi ask "Explain database normalization with examples and when to denormalize"

# Caching strategies
rawi ask "Explain different caching strategies (Redis, Memcached, CDN) and when to use each"
```

---

## 🔧 Automation and Scripting

### Script Generation

#### Deployment Scripts

```bash
# CI/CD pipeline script
rawi ask "Create a GitHub Actions workflow for deploying a Node.js app to AWS ECS" > .github/workflows/deploy.yml

# Backup script
rawi ask "Create a bash script to backup PostgreSQL database and upload to S3" > backup.sh

# Environment setup script
rawi ask "Create a setup script for new developers to configure a React development environment" > setup.sh
```

#### Monitoring Scripts

```bash
# Health check script
rawi ask "Create a monitoring script that checks application health and sends Slack notifications" > monitor.sh

# Performance monitoring
rawi ask "Create a script to monitor server performance and log metrics to a file" > performance-monitor.sh

# Log rotation script
rawi ask "Create a log rotation script for application logs with compression and cleanup" > log-rotate.sh
```

### Configuration Generation

#### Server Configuration

```bash
# Nginx configuration
rawi ask "Create an Nginx configuration for a Node.js app with SSL, gzip, and caching" > nginx.conf

# Apache configuration
rawi ask "Generate Apache virtual host configuration for a PHP application with security headers" > apache-vhost.conf

# Database configuration
rawi ask "Create optimized PostgreSQL configuration for a high-traffic web application" > postgresql.conf
```

---

## 🔍 Debugging and Troubleshooting

### Error Analysis

#### Runtime Error Investigation

```bash
# JavaScript error analysis
rawi ask "Explain this error: 'TypeError: Cannot read property 'map' of undefined' and how to fix it"

# Python traceback analysis
cat error.log | rawi ask "Analyze this Python traceback and suggest the root cause and fix"

# SQL error investigation
rawi ask "Debug this SQL error: 'Column 'user_id' in field list is ambiguous' in a complex JOIN query"
```

#### Performance Issues

```bash
# Slow query analysis
cat slow-queries.log | rawi ask "Analyze these slow database queries and suggest optimization strategies"

# Memory leak investigation
cat memory-profile.log | rawi ask "Analyze this memory usage profile and identify potential memory leaks"

# Network latency analysis
curl -w "@curl-format.txt" -s -o /dev/null https://api.example.com | rawi ask "Analyze these network timing metrics"
```

### System Troubleshooting

#### Server Issues

```bash
# High CPU usage investigation
top -b -n1 | rawi ask "Analyze this high CPU usage and suggest troubleshooting steps"

# Disk space analysis
df -h | rawi ask "Analyze disk usage and suggest cleanup strategies"

# Network connectivity issues
ping -c 5 example.com | rawi ask "Analyze this ping output for connectivity issues"
```

---

## 📱 Mobile and Frontend Development

### React Development

#### Component Generation

```bash
# React component creation
rawi ask "Create a reusable React component for a product card with TypeScript props" > ProductCard.tsx

# Custom hook creation
rawi ask "Create a custom React hook for managing form state with validation" > useFormValidation.ts

# Context provider
rawi ask "Create a React context provider for theme management with TypeScript" > ThemeProvider.tsx
```

#### Styling and UI

```bash
# CSS-in-JS styles
rawi ask "Create styled-components for a responsive navigation bar with mobile menu"

# Responsive design
rawi ask "Create CSS Grid layout for a dashboard with responsive breakpoints"

# Animation implementation
rawi ask "Create CSS animations for a loading spinner and fade-in transitions"
```

### Mobile Development

#### React Native

```bash
# React Native component
rawi ask "Create a React Native component for a swipeable card with gesture handling"

# Navigation setup
rawi ask "Set up React Navigation v6 for a tab-based app with nested stack navigation"

# Platform-specific code
rawi ask "Create platform-specific styles for iOS and Android in React Native"
```

---

## 🔒 Security and DevOps

### Security Implementation

#### Authentication and Authorization

```bash
# JWT implementation
rawi ask "Create a secure JWT authentication system for Express.js with refresh tokens" > auth.js

# OAuth integration
rawi ask "Implement Google OAuth2 authentication for a Node.js web application"

# Password security
rawi ask "Create a secure password hashing and validation system using bcrypt"
```

#### Security Scanning

```bash
# Vulnerability assessment
npm audit --json | rawi ask "Analyze these npm audit results and prioritize security fixes"

# Dependency analysis
cat package-lock.json | rawi ask "Analyze these dependencies for potential security risks"

# Code security review
cat user-input-handler.js | rawi ask "Review this user input handling code for security vulnerabilities"
```

### DevOps Automation

#### Infrastructure as Code

```bash
# Terraform configuration
rawi ask "Create Terraform configuration for a scalable web application on AWS" > infrastructure.tf

# Ansible playbook
rawi ask "Create an Ansible playbook to deploy a Node.js application to Ubuntu servers" > deploy.yml

# Helm chart
rawi ask "Create a Helm chart for deploying a microservice to Kubernetes" > Chart.yaml
```

---

## 🌐 API Development

### REST API Creation

#### Express.js APIs

```bash
# CRUD API generation
rawi ask "Create a complete CRUD REST API for user management using Express.js and MongoDB" > user-api.js

# API middleware
rawi ask "Create Express middleware for rate limiting, CORS, and request validation" > middleware.js

# API documentation
cat api-routes.js | rawi ask "Generate OpenAPI 3.0 specification for these API routes" > api-spec.yaml
```

#### GraphQL APIs

```bash
# GraphQL schema
rawi ask "Create a GraphQL schema for a blog with posts, comments, and users" > schema.graphql

# Resolver implementation
rawi ask "Create GraphQL resolvers for a user management system with Apollo Server"

# GraphQL queries
rawi ask "Create example GraphQL queries and mutations for an e-commerce system"
```

---

## 🔄 Continuous Integration/Continuous Deployment

### CI/CD Pipeline Creation

#### GitHub Actions

```bash
# Node.js CI/CD
rawi ask "Create GitHub Actions workflow for Node.js app with testing, building, and deployment" > .github/workflows/ci-cd.yml

# Docker build and push
rawi ask "Create GitHub Actions workflow to build and push Docker images to ECR" > .github/workflows/docker.yml

# Multi-environment deployment
rawi ask "Create GitHub Actions workflow for deploying to dev, staging, and production environments"
```

#### GitLab CI

```bash
# GitLab CI pipeline
rawi ask "Create GitLab CI pipeline for a Python Flask application with testing and deployment" > .gitlab-ci.yml

# Docker deployment
rawi ask "Create GitLab CI pipeline to deploy Docker containers to Kubernetes"
```

### Monitoring and Observability

#### Application Monitoring

```bash
# Prometheus configuration
rawi ask "Create Prometheus configuration to monitor a Node.js application" > prometheus.yml

# Grafana dashboard
rawi ask "Create Grafana dashboard JSON for monitoring web application performance"

# Log aggregation
rawi ask "Create ELK stack configuration for centralized logging" > logstash.conf
```

---

## 💡 Creative and Content Generation

### Technical Writing

#### Blog Posts

```bash
# Technical tutorial
rawi ask "Write a technical blog post about implementing WebSockets in Node.js with Socket.io" > websockets-tutorial.md

# Best practices article
rawi ask "Write an article about React performance optimization best practices" > react-performance.md

# Technology comparison
rawi ask "Write a comparison article between REST and GraphQL APIs" > rest-vs-graphql.md
```

#### Documentation

```bash
# User manual
rawi ask "Create a user manual for a command-line tool with examples and troubleshooting" > user-manual.md

# Developer guide
rawi ask "Create a developer onboarding guide for a React TypeScript project" > developer-guide.md

# API reference
cat api-endpoints.json | rawi ask "Generate comprehensive API reference documentation" > api-reference.md
```

### Creative Solutions

#### Problem Solving

```bash
# Algorithm design
rawi ask "Design an algorithm to find the shortest path in a weighted graph with obstacles"

# System architecture
rawi ask "Design a distributed system architecture for a real-time multiplayer game"

# Database schema design
rawi ask "Design a database schema for a social media platform with posts, users, and relationships"
```

These examples demonstrate the versatility of Rawi across different domains and use cases. The key is to be specific in your prompts and use appropriate profiles for different types of tasks.

For more advanced usage patterns, see the [Configuration Guide](./configuration.md) and [Providers Guide](./providers.md).
