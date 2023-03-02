import dotenv from "dotenv";
import path from "path";
import { createConnection, Connection } from "typeorm";

const initEnvironments = (): void => {
  dotenv.config({
    path: path.join(process.cwd(), "environments", ".env.common"),
  });
  dotenv.config({
    path: path.join(
      process.cwd(),
      "environments",
      `.env.${process.env.NODE_ENV}`
    ),
  });
};

const initPostgresConnection = async (): Promise<Connection> => {
  const connection = await createConnection({
    type: "postgres",
    host: process.env.POSTGRES_HOST || "localhost",
    port: Number(process.env.POSTGRES_TCP_PORT) || 5432,
    username: process.env.POSTGRES_USER || "postgres",
    password: process.env.POSTGRES_PASSWORD || "admin123456",
    database: process.env.POSTGRES_DATABASE || "Bus_Manager",
    entities: [__dirname + "/entities/*.{js,ts}"],
  });
  return connection;
};

export { initEnvironments, initPostgresConnection };
