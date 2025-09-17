import { getFirestore, doc, setDoc } from "firebase/firestore";
import { app } from "./firebase.js";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const db = getFirestore(app);

function loadProducts() {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const jsonPath = join(__dirname, "../../JSON_Productos/products.json");
    const jsonData = readFileSync(jsonPath, "utf8");
    const data = JSON.parse(jsonData);
    return data;
  } catch (error) {
    console.error("Error cargando productos:", error);
    throw error;
  }
}

async function uploadProducts() {
  try {
    const data = loadProducts();
    for (const product of data.products) {
      await setDoc(doc(db, "products", product.id), product);
      console.log(`Producto ${product.titulo} subido`);
    }
    console.log("Todos los productos subidos a Firestore");
  } catch (error) {
    console.error("Error subiendo productos:", error);
  }
}

uploadProducts();