import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase"; // Import your Firestore database instance

export async function fetchCategoryProducts(slug) {
  // Reference to the Firestore 'products' collection
  const productsRef = collection(db, "products");

  // Fetch all documents in the 'products' collection
  const querySnapshot = await getDocs(productsRef);

  // Filter products based on the 'slug' field
  const products = querySnapshot.docs
    .map((doc) => doc.data())
    .filter((product) => product.category === slug);

  return products;
}
