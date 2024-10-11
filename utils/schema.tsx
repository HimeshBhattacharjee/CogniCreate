import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const aiOutput = pgTable("AIOutput", {
    id: serial("id").primaryKey(),
    formData: varchar("formData"),
    AIResponse: text("AIResponse"),
    templateSlug: varchar("templateSlug").notNull(),
    createdBy: varchar("createdBy"),
    createdAt: varchar("createdAt")
})