import { db } from "./lib/db"; // adjust path as needed
import { users } from "./drizzle/schema";

async function createUser() {
  await db.insert(users).values({
    name: "Aryan Ahmed",
    email: "aryan@webnoxia.com",
  });
}
