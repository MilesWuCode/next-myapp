```sh
yarn create next-app --typescript
mkdir components
mkdir public/images
touch pages/_document.tsx
```

- pages/\_document.tsx

```tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="zh-TW" data-theme="cupcake">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```

- tsconfig.json

```json
{
  "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "~/*": ["./*"]
    }
  }
  // ...
}
```
