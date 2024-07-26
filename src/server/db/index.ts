import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

const sql = neon(process.env.POSTGRES_URL!);

// Export the `db` object directly so it can be used throughout your application
export const db = drizzle(sql, { schema });
