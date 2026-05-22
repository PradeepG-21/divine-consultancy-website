# Divine Consultancy Services — Website

Website for **Divine Consultancy Services**, an MSME loan facilitation consultancy based in Chennai, India. Founded by P. Ganesh, a former SIDBI Assistant General Manager with 25+ years of banking and MSME finance experience.

## Tech Stack

- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Icons** for iconography

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens the site at `http://localhost:5173`.

### Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/       # React components (Nav, Hero, Services, About, etc.)
├── content/          # Site content data (site.ts)
├── lib/              # Utilities (motion helpers)
├── App.tsx           # Root component
├── main.tsx          # Entry point
└── index.css         # Global styles & Tailwind directives
public/               # Static assets (logo, founder photo)
Assets/               # Source design files (logo PDF, CDR)
```

## Sections

- **Hero** — Headline with CTA
- **Services** — Project Loans, Machinery Loans, Working Capital, Loan Takeover
- **About** — Founder bio and credentials
- **Process** — 5-step client engagement flow
- **Why Us** — Key differentiators
- **Clients** — Past client list by service category
- **Suppliers** — Machinery supplier partnerships
- **Contact** — Phone, email, and inquiry form

## License

Private. All rights reserved.
