# API Development Workflow

**ID: WF-004**  
**Category: Development**  
**Complexity: Intermediate to Advanced**  
**Time: 15-45 minutes per API**

## Overview

Streamline API development with AI assistance for design, implementation, testing, documentation, and optimization of REST APIs, GraphQL endpoints, and microservices.

## Prerequisites

- Rawi configured with a suitable provider
- API development framework (Express.js, FastAPI, etc.)
- Basic understanding of API design principles

## Workflow Steps

### 1. API Design and Planning

Design API architecture and endpoints:

```bash
# Generate API specification
rawi ask --act api-architect "Design a REST API for a task management system with users, projects, and tasks. Include OpenAPI specification"

# Create endpoint structure
rawi ask "Design RESTful endpoints for a blog platform with authentication, posts, comments, and categories"

# Design GraphQL schema
rawi ask --act graphql-expert "Create a GraphQL schema for an e-commerce platform with products, orders, and users"
```

### 2. API Implementation

Generate API code and middleware:

```bash
# Generate Express.js routes
rawi ask --act backend-developer "Create Express.js routes for user authentication including registration, login, and JWT middleware"

# Generate FastAPI endpoints
rawi ask --act python-developer "Create FastAPI endpoints for CRUD operations on a Product model with Pydantic validation"

# Generate middleware
rawi ask "Create Express.js middleware for request logging, error handling, and CORS configuration"
```

### 3. Database Integration

Design and implement database layers:

```bash
# Generate database models
rawi ask --act database-admin "Create Mongoose schemas for a social media app with Users, Posts, and Comments"

# Generate SQL queries
rawi ask --act database-admin "Create optimized SQL queries for user profile retrieval with related data"

# Generate ORM code
rawi ask "Create Prisma schema and resolver functions for a booking system"
```

### 4. API Testing

Generate comprehensive test suites:

```bash
# Generate unit tests
rawi ask --file src/routes/users.js --act test-engineer "Create comprehensive Jest unit tests for these user routes"

# Generate integration tests
rawi ask --act test-engineer "Create integration tests for a REST API using supertest and Jest"

# Generate load tests
rawi ask --act performance-engineer "Create load testing scenarios using Artillery.js for an e-commerce API"
```

### 5. Automated API Development Script

Comprehensive API development automation:

```bash
#!/bin/bash
# api-dev-generator.sh - Complete API development workflow

set -e

API_NAME=${1:-"sample-api"}
API_TYPE=${2:-"rest"}  # rest, graphql, or grpc
DATABASE=${3:-"mongodb"}  # mongodb, postgresql, mysql

echo "🚀 Generating $API_TYPE API: $API_NAME with $DATABASE"

# Create project structure
mkdir -p "$API_NAME"/{src,tests,docs,config,scripts}
mkdir -p "$API_NAME/src"/{routes,models,middleware,controllers,services,utils}
cd "$API_NAME"

# 1. Generate package.json
echo "📦 Creating package.json..."
rawi ask "
Create a package.json for a $API_TYPE API called '$API_NAME' using:
- Express.js framework
- $DATABASE database
- JWT authentication
- Testing with Jest
- Development tools (nodemon, eslint, prettier)
- Security middleware (helmet, cors, rate-limiting)
" > package.json

# 2. Generate API specification
echo "📋 Creating API specification..."
if [ "$API_TYPE" = "rest" ]; then
    rawi ask --act api-architect "
    Create comprehensive OpenAPI 3.0 specification for '$API_NAME' including:
    - Authentication endpoints (register, login, refresh)
    - CRUD operations for main resources
    - Error responses and status codes
    - Request/response schemas
    - Security definitions
    - Rate limiting documentation
    " > docs/api-spec.yml
elif [ "$API_TYPE" = "graphql" ]; then
    rawi ask --act graphql-expert "
    Create GraphQL schema definition for '$API_NAME' including:
    - Type definitions
    - Query and mutation operations
    - Authentication directives
    - Input types and enums
    - Subscription support
    " > docs/schema.graphql
fi

# 3. Generate server setup
echo "🖥️  Creating server configuration..."
rawi ask --act backend-developer "
Create Express.js server setup for '$API_NAME' with:
- Environment configuration
- Database connection ($DATABASE)
- Security middleware (helmet, cors, rate limiting)
- Request logging
- Error handling middleware
- Graceful shutdown
- Health check endpoint
" > src/server.js

# 4. Generate authentication system
echo "🔐 Creating authentication system..."
rawi ask --act security-expert "
Create complete JWT authentication system including:
- User registration with validation
- Login with password hashing (bcrypt)
- JWT token generation and validation
- Password reset functionality
- Role-based access control
- Session management
" > src/auth.js

# 5. Generate database models
echo "🗄️  Creating database models..."
if [ "$DATABASE" = "mongodb" ]; then
    rawi ask --act database-admin "
    Create Mongoose models for '$API_NAME' including:
    - User model with authentication fields
    - Main business entity models
    - Relationship definitions
    - Validation schemas
    - Indexing strategies
    - Middleware hooks
    " > src/models/index.js
elif [ "$DATABASE" = "postgresql" ]; then
    rawi ask --act database-admin "
    Create PostgreSQL schema and Sequelize models for '$API_NAME' including:
    - User table with constraints
    - Main business entity tables
    - Foreign key relationships
    - Indexes for performance
    - Migration files
    " > src/models/index.js
fi

# 6. Generate API routes
echo "🛣️  Creating API routes..."
rawi ask --act backend-developer "
Create Express.js routes for '$API_NAME' including:
- RESTful CRUD operations
- Input validation middleware
- Authentication guards
- Error handling
- Pagination support
- Filtering and sorting
- Response formatting
" > src/routes/index.js

# 7. Generate middleware
echo "⚙️  Creating middleware..."
rawi ask --act backend-developer "
Create Express.js middleware collection including:
- Authentication verification
- Input validation
- Error handling
- Request logging
- Rate limiting
- CORS configuration
- Request timeout
- Response compression
" > src/middleware/index.js

# 8. Generate services layer
echo "🔧 Creating services layer..."
rawi ask --act backend-developer "
Create service layer for '$API_NAME' including:
- Business logic separation
- Database operations
- External API integrations
- Email services
- File upload handling
- Caching strategies
- Error handling
" > src/services/index.js

# 9. Generate configuration
echo "📝 Creating configuration..."
rawi ask "
Create configuration management for '$API_NAME' including:
- Environment variables definition
- Database configuration
- JWT secrets management
- Email service config
- Rate limiting settings
- CORS origins
- Logging configuration
" > config/index.js

# 10. Generate tests
echo "🧪 Creating test suite..."
rawi ask --act test-engineer "
Create comprehensive test suite for '$API_NAME' including:
- Unit tests for models and services
- Integration tests for API endpoints
- Authentication flow tests
- Error handling tests
- Performance tests
- Test database setup
- Mock data generators
" > tests/index.test.js

# 11. Generate documentation
echo "📚 Creating documentation..."
rawi ask --act tech-writer "
Create comprehensive API documentation including:
- Getting started guide
- Authentication documentation
- Endpoint documentation with examples
- Error codes reference
- Rate limiting information
- Deployment guide
- Development setup
" > docs/README.md

# 12. Generate deployment configuration
echo "🚀 Creating deployment configuration..."
rawi ask --act devops-engineer "
Create deployment configuration for '$API_NAME' including:
- Dockerfile for containerization
- Docker Compose for development
- Environment variables template
- PM2 configuration for production
- Nginx configuration
- Health check scripts
- Monitoring setup
" > docker-compose.yml

echo "✅ API development complete!"
echo "📄 Generated project structure:"
tree -I node_modules
```

### 6. API Testing and Validation

#### Automated Testing Suite

```bash
#!/bin/bash
# api-test-runner.sh - Comprehensive API testing

API_URL=${1:-"http://localhost:3000"}
TEST_TYPE=${2:-"all"}  # unit, integration, load, security

echo "🧪 Running API tests against $API_URL"

case $TEST_TYPE in
    "unit")
        echo "🔬 Running unit tests..."
        npm run test:unit
        ;;
    "integration")
        echo "🔗 Running integration tests..."
        rawi ask --act test-engineer "
        Create integration test scenarios for API endpoints:
        - Authentication flow testing
        - CRUD operations validation
        - Error handling verification
        - Data consistency checks
        - Concurrent request handling
        " > tests/integration.test.js
        npm run test:integration
        ;;
    "load")
        echo "⚡ Running load tests..."
        rawi ask --act performance-engineer "
        Create Artillery.js load testing configuration:
        - Gradual load increase
        - Peak load scenarios
        - Database stress testing
        - Memory leak detection
        - Response time monitoring
        " > tests/load-test.yml
        artillery run tests/load-test.yml
        ;;
    "security")
        echo "🔒 Running security tests..."
        rawi ask --act security-expert "
        Create security test scenarios:
        - SQL injection attempts
        - XSS attack vectors
        - Authentication bypass tests
        - Rate limiting validation
        - Input sanitization checks
        " > tests/security.test.js
        npm run test:security
        ;;
    "all")
        echo "🎯 Running complete test suite..."
        npm run test:unit
        npm run test:integration
        artillery run tests/load-test.yml
        npm run test:security
        ;;
esac

echo "✅ Testing complete!"
```

### 7. API Documentation Generation

#### Interactive Documentation

```bash
# Generate Swagger UI documentation
rawi ask --file docs/api-spec.yml --act api-documenter "
Create interactive API documentation including:
- Endpoint descriptions with examples
- Request/response schemas
- Authentication guides
- Error code explanations
- Rate limiting information
- SDK generation instructions
"

# Generate Postman collection
rawi ask --file docs/api-spec.yml "
Generate Postman collection JSON for API testing including:
- Pre-request scripts for authentication
- Environment variables
- Test assertions
- Example requests and responses
- Collection organization by feature
"
```

#### Code Examples Generation

```bash
# Generate client code examples
rawi ask --file docs/api-spec.yml "
Generate client code examples for API consumption in:
- JavaScript (fetch, axios)
- Python (requests, httpx)
- cURL commands
- Postman examples
- React integration examples
Include authentication and error handling.
"
```

### 8. API Performance Optimization

#### Performance Analysis

```bash
# Analyze API performance
rawi ask --file src/routes/ --act performance-engineer "
Analyze these API routes for performance optimization:
- Database query efficiency
- Response caching opportunities
- Pagination implementation
- N+1 query problems
- Memory usage optimization
- Response compression
"

# Generate caching strategy
rawi ask --act performance-engineer "
Create comprehensive caching strategy for API including:
- Redis caching implementation
- Cache invalidation patterns
- Database query caching
- Response caching middleware
- Cache warming strategies
"
```

#### Database Optimization

```bash
# Optimize database queries
rawi ask --file src/models/ --act database-admin "
Optimize database operations for better API performance:
- Index strategies
- Query optimization
- Connection pooling
- Aggregation pipelines
- Data archival strategies
"
```

### 9. API Security Implementation

#### Security Hardening

```bash
# Generate security middleware
rawi ask --act security-expert "
Create comprehensive API security implementation:
- Input validation and sanitization
- SQL injection prevention
- XSS protection
- Rate limiting by IP and user
- CORS configuration
- Security headers (helmet.js)
- Request size limiting
- Authentication token validation
"

# Generate security audit script
rawi ask --act security-expert "
Create security audit script for API including:
- Dependency vulnerability scanning
- Code security analysis
- Configuration security check
- Authentication flow validation
- Authorization testing
- Input validation testing
"
```

### 10. API Monitoring and Logging

#### Monitoring Setup

```bash
# Generate monitoring configuration
rawi ask --act devops-engineer "
Create comprehensive API monitoring setup:
- Application performance monitoring
- Error rate tracking
- Response time monitoring
- Database performance metrics
- Custom business metrics
- Alert configurations
- Dashboard setup
"

# Generate logging strategy
rawi ask "
Create structured logging implementation for API:
- Request/response logging
- Error logging with context
- Performance metrics logging
- Security event logging
- Log correlation IDs
- Log aggregation setup
"
```

## API Development Best Practices

### 1. Design Principles

- Follow RESTful conventions
- Use appropriate HTTP status codes
- Implement proper error handling
- Version your APIs
- Design for scalability
- Include comprehensive documentation

### 2. Security Considerations

- Implement authentication and authorization
- Validate all inputs
- Use HTTPS everywhere
- Implement rate limiting
- Log security events
- Regular security audits

### 3. Performance Optimization

- Implement caching strategies
- Optimize database queries
- Use pagination for large datasets
- Compress responses
- Monitor performance metrics
- Load test regularly

### 4. Documentation Standards

- Keep documentation up-to-date
- Include code examples
- Document error responses
- Provide SDK/client libraries
- Create getting started guides
- Maintain changelog

## CI/CD Integration

### GitHub Actions Workflow

```yaml
# .github/workflows/api-workflow.yml
name: API Development Workflow

on:
  push:
    branches: [main, develop]
  pull_request:

jobs:
  test:
    runs-on: ubuntu-latest
    services:
      mongodb:
        image: mongo:5.0
        ports:
          - 27017:27017

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "18"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm run test
        env:
          MONGODB_URI: mongodb://localhost:27017/test

      - name: Run integration tests
        run: npm run test:integration

      - name: Generate API documentation
        run: |
          rawi ask --file src/routes/ --act api-documenter "Generate updated API documentation" > docs/api.md

      - name: Security audit
        run: |
          rawi ask --batch "src/**/*.js" --act security-expert "Perform security audit" > security-report.md

  deploy:
    if: github.ref == 'refs/heads/main'
    needs: test
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to staging
        run: echo "Deploy to staging"
```

## Related Workflows

- [Code Review Workflow](code-review.md) - Review API code
- [Documentation Generation](documentation-generation.md) - API documentation
- [Testing Workflow](testing.md) - Comprehensive testing strategies

---

**Navigation:**

- [← Back to Workflows](README.md)
- [Next: Testing Workflow →](testing.md)
