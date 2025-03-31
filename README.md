# PartySpot

## Introduction

PartySpot is a modern digital platform developed with Next.js 15 designed to connect people with venues and spaces ideal for organizing events. Its main objective is to facilitate the search, comparison, and booking of venues quickly, intuitively, and accessibly. The platform offers tools to evaluate characteristics, prices, and availability, providing flexible solutions that adapt to each client's needs.

## Key Features

1. **Advanced Search and Filtering**

   - Search by location, price, capacity, features, availability, etc.
   - Quick and efficient matching with ideal venues

2. **Detailed Venue Information**

   - Complete details including descriptions, images, services, prices, availability, location
   - Side-by-side comparison functionality to facilitate decision-making

3. **Online Booking System**

   - Intuitive reservation system with date and time selection
   - Immediate confirmation and reservation management
   - Secure payment processing

4. **Reviews and Ratings**

   - User evaluations and feedback on venues
   - Building trust and helping future clients in their choices

5. **User-Provider Communication**

   - Messaging tools to facilitate inquiries and personalized attention
   - Coordination of event details

6. **Notifications and Reminders**

   - Automated alerts via email or SMS
   - Confirmations, booking reminders, modifications, or cancellations

7. **Administration Panel**
   - Interface for providers to manage their offerings and availability
   - Platform management tools for the PartySpot team

8. **Authentication System**
   - User registration and login with secure authentication
   - Password recovery functionality
   - Protected routes and session management

## Application Structure

The application follows Next.js 15 App Router structure with route groups:

- **Public Routes** (`app/(public)/`):
  - Sign-in page
  - Sign-up page
  - Forgot password functionality
  
- **Private Routes** (`app/(private)/`):
  - Protected pages

## Tech Stack

- **Frontend**:
  - Next.js 15 (App Router)
  - React 19
  - TypeScript
  - Tailwind CSS
- **State Management**:
  - Zustand
- **Database**:

  - PostgreSQL (with Docker)
  - Drizzle ORM

- **Development Tools**:
  - ESLint
  - Prettier
  - Husky (Git hooks)
  - TypeScript

## Environment Setup

### Prerequisites

- Node.js (recommended version: 18 or higher)
- Docker and Docker Compose
- npm, yarn, pnpm, or bun

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/Orbitado/partyspot.git
   cd partyspot
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn
   # or
   pnpm install
   # or
   bun install
   ```

3. Set up environment variables:

   ```bash
   cp .env.example .env.local
   ```

   Then edit the `.env.local` file with your specific configurations.

### Environment Variables

The application uses the following environment variables in `.env.local`:

- `DATABASE_URL`: Connection string for the PostgreSQL database
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Public key for Clerk authentication
- `CLERK_SECRET_KEY`: Secret key for Clerk authentication (keep this private)
- `NEXT_PUBLIC_CLERK_SIGN_IN_URL`: URL path for the sign-in page
- `NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL`: Redirect URL after successful sign-in
- `NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL`: Redirect URL after successful sign-up

Variables prefixed with `NEXT_PUBLIC_` are accessible in the browser, while others are only available on the server side. Never expose sensitive keys like `CLERK_SECRET_KEY` to the client.

### Database Setup with Docker

The project uses Docker to manage the PostgreSQL database. To start it:

```bash
npm run db:start
# or
yarn db:start
```

To stop Docker containers:

```bash
npm run db:stop
# or
yarn db:stop
```

To reset the database (deletes all data):

```bash
npm run db:reset
# or
yarn db:reset
```

### Database Migrations

To generate migrations:

```bash
npm run db:generate
# or
yarn db:generate
```

To apply migrations:

```bash
npm run db:migrate
# or
yarn db:migrate
```

To visualize and manipulate the database through a graphical interface:

```bash
npm run db:studio
# or
yarn db:studio
```

## Development

To start the development server with Turbopack:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Available Scripts

- `dev`: Starts the development server with Turbopack.
- `build`: Builds the application for production.
- `start`: Starts the application in production mode.
- `lint`: Runs ESLint to check the code.
- `format`: Formats the code with Prettier.
- `format:check`: Checks code formatting without modifying it.
- `prepare`: Sets up Husky for Git hooks.
- `db:start`: Starts Docker containers for the database.
- `db:stop`: Stops Docker containers.
- `db:reset`: Restarts Docker containers and removes volumes.
- `db:migrate`: Applies database migrations.
- `db:generate`: Generates migration files based on schema changes.
- `db:studio`: Launches the graphical interface for database management.

## Best Practices

- Use Next.js server components when possible.
- Implement dynamic loading for non-critical components.
- Follow a "mobile-first" approach for responsive designs.
- Use TypeScript for all implementations.
- Keep components small and focused on a single responsibility.
