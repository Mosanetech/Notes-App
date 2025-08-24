# School Notes

A school notes sharing platform built with **Next.js** (frontend) and **Django + PostgreSQL** (backend).

## Features

- 📚 Share and organize notes by subject
- 🎨 Responsive UI with custom fonts and TailwindCSS
- 🔗 Backend API powered by Django and PostgreSQL
- 🤝 Ready for collaboration and contributions

## Getting Started

### Frontend (Next.js)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Mosanetech/Notes-App.git
   cd Notes-App


### Run the development server:

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev


### ⚠️ Alias Config Warning (JS vs TS)

If you're using both JavaScript and TypeScript in the same project, make sure your alias paths are defined consistently across both `jsconfig.json` and `tsconfig.json`.

We ran into an issue where aliases like `@/components` worked in `.js` files but failed in `.ts` files—turns out `tsconfig.json` was missing the `paths` config.

#### ✅ Fix
Update `tsconfig.json` like so:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}

## 📱 Phone Number Verification

This project uses `libphonenumber-js` to validate international phone numbers during signup. Users must enter a valid number with country code (e.g., `+265`, `+1`, `+44`) to proceed.

### 🔧 How It Works

**1. `utils/validatePhone.ts`**  
Contains the core logic for validating phone numbers. It uses `libphonenumber-js` to parse and check if the number is valid.

```ts
import { isValidPhoneNumber } from 'libphonenumber-js';

export const validatePhone = (input: string): boolean => {
  return isValidPhoneNumber(input);
};
