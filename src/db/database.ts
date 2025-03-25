import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE URL is not set in the environment variables.");
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

const db = drizzle(pool);

export default db;
