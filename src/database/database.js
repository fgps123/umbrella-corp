import { Pool } from "pg";

const url = "postgresql://neondb_owner:npg_4LegdvHP8URt@ep-icy-field-ackomeu3-pooler.sa-east-1.aws.neon.tech/neondb?sslmode=require";

const database = new Pool({
  connectionString: url,
});

export default database;
