import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "@db/schema";

let instance: ReturnType<typeof drizzle>;

export function getDb() {
  if (!instance) {
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    });
    instance = drizzle(pool, { schema });
  }
  return instance;
}
