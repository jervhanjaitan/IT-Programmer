import { createClient } from "redis";
import dotenv from "dotenv";

dotenv.config();

const client = createClient({ url: process.env.REDIS_URL });
client.connect();

client.on("connect", () => console.log("✅ Redis connected"));
client.on("error", (err) => console.error("❌ Redis error:", err));

export default client;
