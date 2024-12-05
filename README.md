# TypeScript Lambda Function Template

This repository is designed for developing AWS Lambda functions with TypeScript. It allows seamless development in TypeScript and packages everything you need for deployment into the `dist` folder, including a `.zip` file.

## Features

- Write Lambda functions in TypeScript.
- Automatically compiles to `.mjs` for ES module support.
- Packages all required files into `dist/lambda.zip` for deployment.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development:
   ```bash
   npm run dev
   ```

3. Build for deployment:
   ```bash
   npm run build
   ```

   After building, the `dist` folder will contain:
   - `.mjs` files for your Lambda function.
   - `lambda.zip` ready for AWS Lambda.

## Deployment

1. Navigate to the `dist` folder:
   ```bash
   cd dist
   ```

2. Upload `lambda.zip` to your AWS Lambda function using the AWS console, CLI, or SDK.

---

## Scripts

- `npm run dev`: Starts development with `ts-node`.
- `npm run build`: Compiles TypeScript to `.mjs`, cleans unnecessary files, and creates `lambda.zip`.

---

## Project Structure

```
src/          # Source TypeScript files
dist/         # Compiled and packaged output
lambda.zip    # Deployment-ready package
```

---

## Example Code

Write your Lambda handler in `src/index.ts`:
```typescript
export const handler = async () => {
  return {
    statusCode: 200,
    body: "Hello from a TypeScript Lambda!",
  };
};
```

---

## Author

Orkhan Aliyev
