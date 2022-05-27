```sh
yarn add tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- tailwind.config.js

```js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

- ./styles/globals.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
