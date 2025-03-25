import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const testTable = pgTable("test_table", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow().notNull()
});

export type TestTable = typeof testTable.$inferSelect;
export type NewTestTable = typeof testTable.$inferInsert;
