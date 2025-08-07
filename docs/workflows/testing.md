# Testing Workflow

**ID: WF-005**  
**Category: Development**  
**Complexity: Intermediate to Advanced**  
**Time: 10-60 minutes depending on scope**

## Overview

Comprehensive testing strategies using AI assistance for unit tests, integration tests, end-to-end tests, performance testing, and test automation across different frameworks and languages.

## Prerequisites

- Rawi configured with a suitable provider
- Testing framework setup (Jest, Mocha, Pytest, etc.)
- Project codebase to test
- Basic understanding of testing principles

## Workflow Steps

### 1. Test Planning and Strategy

Plan comprehensive testing approach:

```bash
# Generate test strategy
rawi ask --act test-engineer "Create a comprehensive testing strategy for a Node.js e-commerce API including unit, integration, and e2e tests"

# Test case generation
rawi ask --file src/components/UserProfile.tsx --act test-engineer "Generate comprehensive test cases for this React component"

# Test pyramid analysis
rawi ask --batch "src/**/*.js" --act test-engineer "Analyze codebase and recommend optimal test pyramid strategy"
```

### 2. Unit Test Generation

Create comprehensive unit tests:

```bash
# Generate JavaScript/TypeScript unit tests
rawi ask --file src/utils/validation.js --act test-engineer "Create comprehensive Jest unit tests with edge cases and mocks"

# Generate Python unit tests
rawi ask --file src/models.py --act test-engineer "Create pytest unit tests with fixtures and parameterization"

# Generate React component tests
rawi ask --file src/components/Button.tsx --act test-engineer "Create React Testing Library tests with accessibility checks"
```

### 3. Integration Test Generation

Create integration test suites:

```bash
# API integration tests
rawi ask --file src/routes/users.js --act test-engineer "Create supertest integration tests for these API endpoints"

# Database integration tests
rawi ask --file src/models/User.js --act test-engineer "Create database integration tests with test data setup and cleanup"

# Service integration tests
rawi ask --file src/services/emailService.js --act test-engineer "Create integration tests with external service mocking"
```

### 4. End-to-End Test Generation

Create comprehensive e2e test suites:

```bash
# Playwright e2e tests
rawi ask --act test-engineer "Create Playwright e2e tests for user authentication flow including login, registration, and password reset"

# Cypress e2e tests
rawi ask --act test-engineer "Create Cypress e2e tests for e-commerce checkout flow with payment processing"

# Selenium tests
rawi ask --act test-engineer "Create Selenium WebDriver tests for cross-browser compatibility testing"
```

### 5. Automated Test Generation Script

Comprehensive test generation automation:

```bash
#!/bin/bash
# test-generator.sh - Comprehensive test suite generation

set -e

PROJECT_TYPE=${1:-"node"}  # node, python, react, vue, django
TEST_FRAMEWORK=${2:-"jest"}  # jest, mocha, pytest, vitest
TARGET_DIR=${3:-"src"}

echo "🧪 Generating comprehensive test suite for $PROJECT_TYPE project using $TEST_FRAMEWORK"

# Create test directory structure
mkdir -p tests/{unit,integration,e2e,fixtures,mocks,utils}

# 1. Analyze codebase for test coverage
echo "🔍 Analyzing codebase for test requirements..."
rawi ask --batch "$TARGET_DIR/**/*.{js,ts,py}" --act test-engineer "
Analyze this codebase and create a comprehensive testing plan including:
- Critical functions that need unit tests
- API endpoints requiring integration tests
- User flows needing e2e tests
- Mock requirements for external dependencies
- Test data and fixture needs
- Performance testing requirements
" > tests/test-plan.md

# 2. Generate unit tests
echo "🧩 Generating unit tests..."
find "$TARGET_DIR" -name "*.js" -o -name "*.ts" -o -name "*.py" | while read -r file; do
    filename=$(basename "$file" | cut -d. -f1)
    extension="${file##*.}"

    case $PROJECT_TYPE in
        "node"|"react")
            rawi ask --file "$file" --act test-engineer "
            Create comprehensive $TEST_FRAMEWORK unit tests for this file including:
            - All exported functions/methods
            - Edge cases and error conditions
            - Mock external dependencies
            - Input validation testing
            - Async operation testing
            - Performance considerations
            " > "tests/unit/${filename}.test.js"
            ;;
        "python")
            rawi ask --file "$file" --act test-engineer "
            Create comprehensive pytest unit tests including:
            - All public methods/functions
            - Fixtures for test data
            - Parameterized tests for multiple inputs
            - Exception handling tests
            - Mock external dependencies
            - Async testing if applicable
            " > "tests/unit/test_${filename}.py"
            ;;
    esac
done

# 3. Generate integration tests
echo "🔗 Generating integration tests..."
if [ -d "$TARGET_DIR/routes" ] || [ -d "$TARGET_DIR/api" ]; then
    rawi ask --batch "$TARGET_DIR/{routes,api}/**/*.{js,ts}" --act test-engineer "
    Create comprehensive integration tests including:
    - API endpoint testing with real database
    - Authentication flow testing
    - Data validation and error responses
    - Middleware functionality
    - Database operations and transactions
    - Third-party service integrations
    " > tests/integration/api.integration.test.js
fi

if [ -d "$TARGET_DIR/services" ]; then
    rawi ask --batch "$TARGET_DIR/services/**/*.{js,ts,py}" --act test-engineer "
    Create service integration tests including:
    - External API integrations
    - Database service operations
    - Email/notification services
    - File upload/download services
    - Cache operations
    - Message queue operations
    " > tests/integration/services.integration.test.js
fi

# 4. Generate e2e tests
echo "🎭 Generating end-to-end tests..."
rawi ask --act test-engineer "
Create comprehensive e2e test scenarios for this application including:
- User registration and authentication flows
- Core business process workflows
- Payment and transaction flows
- File upload and processing
- Search and filtering functionality
- Mobile responsiveness testing
- Cross-browser compatibility

Use Playwright/Cypress best practices.
" > tests/e2e/user-flows.e2e.test.js

# 5. Generate test utilities and helpers
echo "🛠️  Generating test utilities..."
rawi ask --act test-engineer "
Create test utility functions including:
- Test data generators and factories
- Database seeding and cleanup
- Mock API server setup
- Authentication helpers
- Assertion helpers
- Performance testing utilities
- Visual regression helpers
" > tests/utils/test-helpers.js

# 6. Generate test fixtures
echo "📋 Generating test fixtures..."
rawi ask --act test-engineer "
Create comprehensive test fixtures including:
- User data samples
- Product/item samples
- API response mocks
- Database seed data
- File upload samples
- Configuration test data
- Error response samples
" > tests/fixtures/index.js

# 7. Generate mock configurations
echo "🎭 Generating mocks..."
rawi ask --act test-engineer "
Create mock configurations for:
- External API services
- Database connections
- Email services
- Payment gateways
- File storage services
- Authentication providers
- Third-party integrations
" > tests/mocks/index.js

# 8. Generate performance tests
echo "⚡ Generating performance tests..."
rawi ask --act performance-engineer "
Create performance test suite including:
- Load testing scenarios
- Stress testing configurations
- Memory leak detection
- Database performance tests
- API response time benchmarks
- Frontend performance metrics
- Scalability testing
" > tests/performance/load-tests.js

# 9. Generate test configuration
echo "⚙️  Generating test configuration..."
case $TEST_FRAMEWORK in
    "jest")
        rawi ask --act test-engineer "
        Create comprehensive Jest configuration including:
        - Test environment setup
        - Coverage reporting
        - Mock configurations
        - Setup and teardown scripts
        - Custom matchers
        - Timeout configurations
        - Parallel execution settings
        " > jest.config.js
        ;;
    "pytest")
        rawi ask --act test-engineer "
        Create pytest configuration including:
        - Test discovery settings
        - Fixture configurations
        - Coverage reporting
        - Plugin configurations
        - Parallel execution
        - Custom markers
        - Environment setup
        " > pytest.ini
        ;;
    "vitest")
        rawi ask --act test-engineer "
        Create Vitest configuration including:
        - Test environment setup
        - Coverage configuration
        - Mock handling
        - Browser testing setup
        - Performance benchmarks
        - Snapshot testing
        " > vitest.config.js
        ;;
esac

# 10. Generate CI/CD test pipeline
echo "🚀 Generating CI/CD test configuration..."
rawi ask --act devops-engineer "
Create GitHub Actions workflow for comprehensive testing including:
- Unit test execution
- Integration test with services
- E2E test execution
- Performance testing
- Security testing
- Coverage reporting
- Test result publishing
- Parallel execution strategies
" > .github/workflows/test.yml

echo "✅ Test suite generation complete!"
echo "📊 Generated test structure:"
tree tests/
```

### 6. Test Data Management

#### Test Data Generation

```bash
# Generate realistic test data
rawi ask --act test-engineer "
Create comprehensive test data generators for:
- User profiles with realistic data
- Product catalogs with variations
- Order histories and transactions
- Performance test datasets
- Edge case scenarios
- Internationalization data
Include faker.js integration.
"

# Generate test fixtures
rawi ask --file src/models/ --act test-engineer "
Create test fixtures based on these data models including:
- Valid data samples
- Invalid data for negative testing
- Boundary value testing data
- Large dataset samples
- Relationship testing data
"
```

#### Database Test Management

```bash
# Generate database test setup
rawi ask --act database-admin "
Create database testing strategy including:
- Test database setup and teardown
- Data seeding scripts
- Transaction rollback patterns
- Isolation between tests
- Performance test data
- Migration testing
"
```

### 7. Specialized Testing

#### Security Testing

```bash
# Generate security test suite
rawi ask --act security-expert "
Create comprehensive security test suite including:
- Authentication bypass attempts
- Authorization testing
- Input validation attacks
- SQL injection testing
- XSS vulnerability testing
- CSRF protection testing
- Rate limiting validation
"

# Generate penetration testing scripts
rawi ask --act penetration-tester "
Create automated penetration testing scenarios for web application including:
- OWASP Top 10 vulnerability testing
- API security testing
- Session management testing
- File upload security testing
- Authentication security testing
"
```

#### Performance Testing

```bash
# Generate load testing scenarios
rawi ask --act performance-engineer "
Create comprehensive load testing suite using Artillery.js including:
- Gradual load increase scenarios
- Spike testing configurations
- Stress testing beyond capacity
- Endurance testing for extended periods
- Volume testing with large datasets
- Scalability testing scenarios
"

# Generate performance benchmarks
rawi ask --file src/algorithms/ --act performance-engineer "
Create performance benchmark tests including:
- Algorithm efficiency testing
- Memory usage profiling
- Database query performance
- API response time benchmarks
- Frontend performance metrics
"
```

#### Accessibility Testing

```bash
# Generate accessibility test suite
rawi ask --act accessibility-expert "
Create comprehensive accessibility testing suite including:
- Automated a11y testing with axe-core
- Keyboard navigation testing
- Screen reader compatibility
- Color contrast validation
- ARIA attribute testing
- Focus management testing
- Semantic HTML validation
"
```

### 8. Test Automation and CI/CD

#### Automated Test Execution

```bash
#!/bin/bash
# test-runner.sh - Comprehensive test execution

TEST_TYPE=${1:-"all"}  # unit, integration, e2e, performance, security
ENV=${2:-"test"}
PARALLEL=${3:-"true"}

echo "🚀 Running $TEST_TYPE tests in $ENV environment"

case $TEST_TYPE in
    "unit")
        echo "🧩 Running unit tests..."
        if [ "$PARALLEL" = "true" ]; then
            npm run test:unit -- --parallel
        else
            npm run test:unit
        fi
        ;;
    "integration")
        echo "🔗 Running integration tests..."
        docker-compose -f docker-compose.test.yml up -d
        npm run test:integration
        docker-compose -f docker-compose.test.yml down
        ;;
    "e2e")
        echo "🎭 Running e2e tests..."
        npm run build
        npm run start:test &
        SERVER_PID=$!
        npx wait-on http://localhost:3000
        npm run test:e2e
        kill $SERVER_PID
        ;;
    "performance")
        echo "⚡ Running performance tests..."
        npm run test:performance
        ;;
    "security")
        echo "🔒 Running security tests..."
        npm run test:security
        npm audit
        ;;
    "all")
        echo "🎯 Running complete test suite..."
        npm run test:unit
        npm run test:integration
        npm run test:e2e
        npm run test:performance
        npm run test:security
        ;;
esac

echo "✅ Test execution complete!"
```

#### Test Report Generation

```bash
# Generate comprehensive test reports
rawi ask --act test-engineer "
Create test reporting configuration including:
- Coverage reports with visualizations
- Test result dashboards
- Performance benchmarking reports
- Security testing reports
- Accessibility testing reports
- Historical trend analysis
- Failed test analysis
"
```

### 9. Test Quality Assurance

#### Test Review and Optimization

```bash
# Review test quality
rawi ask --batch "tests/**/*.test.js" --act test-engineer "
Review test suite quality including:
- Test coverage analysis
- Test case completeness
- Test maintainability
- Test performance optimization
- Flaky test identification
- Test documentation quality
"

# Optimize test performance
rawi ask --batch "tests/**/*.test.js" --act performance-engineer "
Optimize test suite performance including:
- Parallel execution opportunities
- Test data optimization
- Mock optimization
- Setup/teardown efficiency
- Resource usage optimization
"
```

#### Test Maintenance

```bash
# Update tests for code changes
rawi ask --file src/updated-feature.js --file tests/unit/old-tests.test.js --act test-engineer "
Update existing tests to match code changes including:
- New functionality testing
- Updated API contracts
- Changed business logic
- Deprecated feature removal
- Performance impact testing
"
```

### 10. Advanced Testing Techniques

#### Visual Regression Testing

```bash
# Generate visual testing suite
rawi ask --act test-engineer "
Create visual regression testing setup using Playwright including:
- Screenshot comparison testing
- Cross-browser visual testing
- Responsive design testing
- Component visual testing
- PDF generation testing
- Email template testing
"
```

#### API Contract Testing

```bash
# Generate contract tests
rawi ask --file docs/api-spec.yml --act test-engineer "
Create API contract testing suite including:
- OpenAPI specification validation
- Request/response schema testing
- API versioning compatibility
- Breaking change detection
- Consumer-driven contract testing
"
```

#### Mutation Testing

```bash
# Generate mutation testing configuration
rawi ask --act test-engineer "
Create mutation testing setup to validate test quality including:
- Mutation testing configuration
- Test effectiveness analysis
- Code coverage quality assessment
- Test improvement recommendations
"
```

## Testing Best Practices

### 1. Test Structure

- Follow AAA pattern (Arrange, Act, Assert)
- Use descriptive test names
- Keep tests independent and isolated
- Use proper test data management
- Implement proper setup and teardown

### 2. Test Coverage

- Aim for high code coverage (80%+)
- Focus on critical business logic
- Test edge cases and error conditions
- Include positive and negative scenarios
- Test performance requirements

### 3. Test Maintenance

- Keep tests simple and focused
- Update tests with code changes
- Remove obsolete tests
- Refactor duplicate test code
- Document complex test scenarios

### 4. Test Performance

- Optimize test execution time
- Use parallel execution when possible
- Minimize external dependencies
- Use efficient test data
- Monitor test suite performance

## CI/CD Integration

### GitHub Actions Testing Workflow

```yaml
# .github/workflows/comprehensive-testing.yml
name: Comprehensive Testing

on:
  push:
    branches: [main, develop]
  pull_request:

jobs:
  unit-tests:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [16, 18, 20]
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node-version }}
          cache: "npm"
      - run: npm ci
      - run: npm run test:unit
      - run: npm run test:coverage

  integration-tests:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:14
        env:
          POSTGRES_PASSWORD: postgres
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "18"
          cache: "npm"
      - run: npm ci
      - run: npm run test:integration
        env:
          DATABASE_URL: postgres://postgres:postgres@localhost:5432/test

  e2e-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "18"
          cache: "npm"
      - run: npm ci
      - run: npx playwright install
      - run: npm run build
      - run: npm run test:e2e

  performance-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "18"
          cache: "npm"
      - run: npm ci
      - run: npm run test:performance
      - name: Upload performance results
        uses: actions/upload-artifact@v3
        with:
          name: performance-results
          path: performance-results/

  security-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "18"
          cache: "npm"
      - run: npm ci
      - run: npm audit
      - run: npm run test:security
```

## Related Workflows

- [Code Review Workflow](code-review.md) - Review test code quality
- [API Development Workflow](api-development.md) - API-specific testing
- [Development Workflow](development.md) - Integrate testing in development

---

**Navigation:**

- [← Back to Workflows](README.md)
- [Next: CI/CD Integration →](cicd-integration.md)
