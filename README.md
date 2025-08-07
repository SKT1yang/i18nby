# My Monorepo

This is a monorepo project that contains multiple packages managed with pnpm. 

## Packages

- **package-a**: This package contains the main logic or functionality implemented in TypeScript. 
- **package-b**: This package also contains its own logic or functionality, separate from package-a.

## Getting Started

To get started with this monorepo, follow these steps:

1. **Install pnpm**: If you haven't already, install pnpm globally using npm:
   ```
   npm install -g pnpm
   ```

2. **Install Dependencies**: Navigate to the root of the monorepo and run:
   ```
   pnpm install
   ```

3. **Build Packages**: To build all packages, you can run:
   ```
   pnpm run build
   ```

4. **Run Packages**: You can run each package individually. For example, to run package-a:
   ```
   cd packages/package-a
   pnpm start
   ```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License.