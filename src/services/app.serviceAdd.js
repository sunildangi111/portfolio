// src/services/app.serviceAdd.js
import { supabase } from "./supabaseClient";  // relative import

let tableName = "databook";

async function addData(data) {
  const { error } = await supabase.from(tableName).insert([data]);

  if (error) {
    console.error("Error inserting data:", error);
  } else {
    console.log("Data inserted successfully!");
  }
}

export { addData };