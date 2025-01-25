// src/app/utils/fetchCategories.js

import { db, collection, getDocs } from "../../firebase"; // Correct import

export async function fetchCategories() {
  try {
    const categoriesRef = collection(db, "categories"); // Firestore reference to 'categories' collection
    const querySnapshot = await getDocs(categoriesRef); // Fetch data from Firestore
    const categories = querySnapshot.docs.map((doc) => doc.data()); // Extract the data

    console.log("Fetched categories:", categories); // Log fetched categories
    return categories; // Return the categories
  } catch (error) {
    console.error("Error fetching categories:", error); // Log any errors
    return []; // Return an empty array in case of error
  }
}
