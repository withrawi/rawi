# **Contributing to Rawi**

We're thrilled you're interested in contributing to Rawi! Your contributions help make Rawi an even better and more helpful tool for developers.

This document outlines the guidelines for contributing to the Rawi project. By participating, you agree to abide by our [Code of Conduct](./CODE_OF_CONDUCT.md).

## **Table of Contents**

- [Code of Conduct](#bookmark=id.dim5v6hn7dob)
- [How Can I Contribute?](#bookmark=id.cou7c2vqljut)
  - [Reporting Bugs](#bookmark=id.yrc9ci26arxx)
  - [Suggesting Enhancements](#bookmark=id.f0nzlb7n5gnd)
  - [Your First Code Contribution](#bookmark=id.vszkzzj9sgbf)
  - [Improving Documentation](#bookmark=id.ymi9og1cdmwa)
- [Development Setup](#bookmark=id.cv8y9o1lzqh1)
  - [Prerequisites](#bookmark=id.azkw6rjylztd)
  - [Getting Started](#bookmark=id.6aggi3sma248)
- [Testing](#bookmark=id.r9jq1fcf7vkd)
- [Pull Request Guidelines](#bookmark=id.qq11fbqls268)
- [Coding Style](#bookmark=id.qzg5x0pfs4i7)
- [License](#bookmark=id.dpwyv5eyso6l)
- [Getting Help](#bookmark=id.ihm9p82vczqy)

## **Code of Conduct**

Please review and adhere to our [Code of Conduct](./CODE_OF_CONDUCT.md). We are committed to fostering a welcoming and inclusive community.

## **How Can I Contribute?**

There are many ways to contribute to Rawi, even if you're not a seasoned developer!

### **Reporting Bugs**

Found an issue with Rawi? Please help us by reporting it!

Before submitting a new bug report, please check existing [issues](https://github.com/MKAbuMattar/rawi/issues) to see if the bug has already been reported. If it has, feel free to add any additional information or context you might have.

When reporting a bug, please include:

1. **Clear, concise description:** What is the bug? What did you expect to happen?
2. **Steps to reproduce:** Provide precise steps that someone else can follow to experience the bug.
3. **Expected behavior:** What should have happened?
4. **Actual behavior:** What actually happened?
5. **Rawi version:** The version of Rawi you are using (`rawi --version`).
6. **Environment details:** Your operating system, Node.js version, and npm/yarn/pnpm version.
7. **Screenshots or terminal output:** If applicable, provide visual aids.

You can open a new bug report by clicking [here](https://github.com/MKAbuMattar/rawi/issues/new?assignees&labels=bug&projects&template=bug_report.md&title=%5BBug%5D:+).

### **Suggesting Enhancements**

Have an idea for a new feature or an improvement to an existing one? We'd love to hear it!

Before suggesting an enhancement, please check existing [issues](https://github.com/MKAbuMattar/rawi/issues) to see if a similar idea has already been discussed.

When suggesting an enhancement, please include:

1. **Clear and concise description:** What is the proposed enhancement?
2. **Motivation:** Why is this enhancement useful? What problem does it solve?
3. **Examples:** How would it work or be used?
4. **Alternatives:** Have you considered any alternative solutions or approaches?

You can open a new feature request by clicking [here](https://github.com/MKAbuMattar/rawi/issues/new?assignees&labels=enhancement&projects&template=feature_request.md&title=%5BFeature%5D:+).

### **Your First Code Contribution**

If you're ready to dive into the code, here's how to get started:

1. **Fork the repository:** Click the "Fork" button on the top right of the [Rawi GitHub page](https://github.com/MKAbuMattar/rawi).
2. **Clone your fork:**

   ```sh
   git clone https://github.com/YOUR_USERNAME/rawi.git
   cd rawi
   ```

3. **Set up the upstream remote:**

   ```sh
   git remote add upstream https://github.com/MKAbuMattar/rawi.git
   ```

4. **Keep your fork up to date:** Regularly pull changes from the `upstream` `main` branch:

   ```sh
   git pull upstream main
   ```

5. **Create a new branch:** For each new feature or bug fix, create a new branch from main:

   ```sh
   git checkout -b feature/your-feature-name
   # OR
   git checkout -b bugfix/fix-for-issue-number
   ```

6. **Make your changes:** Write your code, tests, and update documentation as needed.
7. **Commit your changes:**

   ```sh
   git add .
    git commit -m "feat: Add new awesome feature" # or "fix: Resolve bug in X"
   ```

   Please use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for clear commit messages (e.g., `feat:`, `fix:`, `docs:`, `chore:`).

8. **Push your branch to your fork:**

   ```sh
   git push origin feature/your-feature-name
   ```

9. **Open a Pull Request (PR):** Go to your fork on GitHub and you'll see a prompt to open a PR to the `MKAbuMattar/rawi` repository's `main` branch. Provide a clear title and description for your changes.

### **Improving Documentation**

High-quality documentation is crucial! If you find a typo, a confusing explanation, or want to add more examples, please open a pull request with your suggested changes.

## **Development Setup**

To get Rawi running locally for development:

### **Prerequisites**

- **Node.js**: Version 18.x or higher (LTS recommended).
- **npm**, **Yarn**, or **pnpm**: Choose your preferred package manager (npm comes with Node.js, Yarn and pnpm installed separately).

### **Getting Started**

1.  **Clone the repository:** (If you haven't already, as per "Your First Code Contribution")

    ```sh
    git clone https://github.com/MKAbuMattar/rawi.git
    cd rawi
    ```

2.  **Install dependencies:**

    ```sh
    pnpm install
    # OR
    npm install
    # OR
    yarn install
    ```

3.  **Build the project:** Rawi might use a build step (e.g., TypeScript compilation). Check `package.json` scripts. Commonly, it would be:

    ```sh
    pnpm build
    # OR
    npm run build
    # OR
    yarn build
    ```

4.  **Link the CLI tool (for local testing):** To run your local development version of Rawi from your terminal, you can use `npm link`, `yarn link`, or `pnpm link`:

    ```sh
    pnpm link
    # OR
    npm link
    # OR
    yarn link
    ```

    Now you should be able to run `rawi` commands in your terminal, and they will execute your local code. To unlink, use `npm unlink`, `yarn unlink`, or `pnpm unlink`.

## **Testing**

Ensure your changes don't break existing functionality and ideally, add tests for new features or bug fixes.

To run the test suite:

```sh
pnpm test
# OR
npm test
# OR
yarn test
```

Please make sure all tests pass before submitting a pull request.

## **Pull Request Guidelines**

When submitting a Pull Request, please ensure the following:

1. **Single purpose:** Each PR should address a single bug fix or feature.
2. **Clear title and description:** Briefly summarize the changes in the title. The description should explain _what_ problem you're solving and _how_ you're solving it. Reference any related issues (e.g., `Fixes #123`).
3. **Relevant changes only:** Include only the files and changes necessary for the specific PR.
4. **Passes all tests:** Ensure your changes pass the existing test suite and any new tests you've added.
5. **Follows coding style:** Adhere to the project's coding conventions (see next section).
6. **Updates documentation:** If your changes affect how Rawi is used, please update the relevant documentation.

## **Coding Style**

Rawi uses a consistent coding style. Please ensure your code adheres to it. We use ESLint and Prettier to enforce code quality and formatting.

Before committing, you can automatically format and lint your code:

```sh
pnpm fmt:fix
pnpm lint:fix
# OR
npm run fmt:fix
npm run lint:fix
# OR
yarn fmt:fix
yarn lint:fix
```

It's recommended to set up your editor (e.g., VS Code) to automatically format on save using Prettier.

## **License**

By contributing to Rawi, you agree that your contributions will be licensed under the project's [MIT License](./LICENSE).

## **Getting Help**

If you have any questions, need clarification, or get stuck, please feel free to:

- Open an [issue](https://github.com/MKAbuMattar/rawi/issues) with your question.
- Reach out via the [contact form](https://rawi.mkabumattar.com/contact).

We're here to help! Thank you for your interest in contributing to Rawi.
