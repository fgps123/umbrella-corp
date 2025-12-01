import styles from "./page.module.css";
import database from "@/database/database";

export default async function Home() {

  const sql = "select * from characters";
  const responseDB = await database.query(sql);

  console.log(responseDB.rows);

  return (
    <div className={styles.page}>
      <h1>Welcome to Umbrella Corporation</h1>
      {
        responseDB.rows.map((item) => {
          <div>
            <h3>Nome: {item.name}</h3>
            <h2>Tipo: {item.type}</h2>
          </div>
        })
      }


    </div>
  );
}
