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
