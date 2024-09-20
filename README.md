# TypeScript Node.js Template

This template provides a minimal setup for building Node.js applications using TypeScript with ES modules support.

## Features

- TypeScript support
- ES modules configuration
- Custom loader for seamless TypeScript execution
- NPM scripts for development and production
- Example TypeScript code

## Prerequisites

- Node.js (v14.0.0 or later recommended)
- npm (comes with Node.js)

## Getting Started

1. Clone this repository or use it as a template for your new project.
2. Install dependencies:

   ```
   npm install
   ```

3. Start the development server:

   ```
   npm run dev
   ```

## Scripts

- `npm run dev`: Starts the development server using ts-node
- `npm run build`: Compiles TypeScript to JavaScript
- `npm start`: Runs the compiled JavaScript code

## Project Structure

```
.
├── src/
│   └── index.ts
├── loader.mjs
├── package.json
├── tsconfig.json
└── README.md
```

## Configuration Files

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es2022",
    "module": "nodenext",
    "moduleResolution": "nodenext",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "outDir": "./dist"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

### package.json

```json
{
  "type": "module",
  "scripts": {
    "build": "tsc",
    "start": "node ./dist/index.js",
    "dev": "node --import ./loader.mjs src/index.ts"
  },
  "dependencies": {},
  "devDependencies": {
    "@types/node": "^22.5.5",
    "ts-node": "^10.9.2",
    "typescript": "^5.6.2"
  }
}
```

### loader.mjs

```javascript
import { register } from 'node:module';
import { pathToFileURL } from 'node:url';

register('ts-node/esm', pathToFileURL('./'));
```

## Example Code

The template includes a basic TypeScript file (`src/index.ts`) to demonstrate TypeScript features:

```typescript
type anExampleType = "type1" | "type2" | "type3";
interface anExampleInterface {
    type: anExampleType;
    value: string;
}
const anExampleObject: anExampleInterface = {
    type: "type1",
    value: "This is an example value"
};
console.log(anExampleObject);
console.log("The typescript code has been executed successfully!");
```

This example showcases TypeScript's type system with a union type, an interface, and a typed object.

## Best Practices

- Keep your source files in the `src/` directory.
- Use `.ts` extension for TypeScript files.
- When importing local files, use the `.js` extension in import statements, even for TypeScript files.

## Contributing

Feel free to submit issues or pull requests if you have suggestions for improvements.

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

Orkhan Aliyev

---

Happy coding!
