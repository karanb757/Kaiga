import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { firestore } from "./config";

export const getFrameById = async (frameID) => {
  try {
    const exhibitionCollectionRef = collection(firestore, "frames");
    const querySnapshot = await getDocs(
      query(exhibitionCollectionRef, where("id", "==", frameID))
    );
    if (querySnapshot.empty) {
      throw new Error("Exhibition not found");
    }
    return querySnapshot.docs[0].data();
  } catch (error) {
    console.error("Error fetching exhibition:", error);
    throw error;
  }
};

// Saving new Item
export const saveItem = async (data) => {
  await setDoc(doc(firestore, "frames", `${Date.now()}`), data, {
    merge: true,
  });
};

export const saveExhibition = async (data) => {
  await setDoc(doc(firestore, "exhibition", `${Date.now()}`), data, {
    merge: true,
  });
};

export const getExhibitionById = async (exhibitionId) => {
  try {
    const exhibitionCollectionRef = collection(firestore, "exhibition");
    const querySnapshot = await getDocs(
      query(exhibitionCollectionRef, where("id", "==", exhibitionId))
    );
    if (querySnapshot.empty) {
      throw new Error("Exhibition not found");
    }
    return querySnapshot.docs[0].data();
  } catch (error) {
    console.error("Error fetching exhibition:", error);
    throw error;
  }
};

export const getAllExhibition = async () => {
  const items = await getDocs(
    query(collection(firestore, "exhibition"), orderBy("id", "desc"))
  );

  return items.docs.map((doc) => doc.data());
};

export const getAllFrames = async () => {
  const items = await getDocs(
    query(collection(firestore, "frames"), orderBy("id", "desc"))
  );

  return items.docs.map((doc) => doc.data());
};

export const saveTicket = async (email, purchaseData) => {
  // Create a reference to the "purchases" collection
  const purchasesCollectionRef = collection(firestore, "tickets");

  // Add a new document to the "purchases" collection
  await addDoc(purchasesCollectionRef, {
    userEmail: email,
    purchaseData: purchaseData,
    timestamp: new Date(), // Store timestamp of the purchase
  });
};

export const getTicketByEmailAndId = async (email, id) => {
  // Decode the email before using it in the query
  const decodedEmail = decodeURIComponent(email);

  // Create a reference to the "purchases" collection
  const purchasesCollectionRef = collection(firestore, "tickets");

  // Create a query to retrieve purchases for a specific user with a specific ID
  const querySnapshot = await getDocs(
    query(
      purchasesCollectionRef,
      where("userEmail", "==", decodedEmail), // Filter purchases by user's email
      where("purchaseData.id", "==", id) // Filter purchases by purchase ID
    )
  );

  // If a document with the provided email and ID exists, return its data
  if (!querySnapshot.empty) {
    return querySnapshot.docs[0].data();
  } else {
    // If no document matches the provided email and ID, return null
    return null;
  }
};

export const getAllTicket = async (email) => {
  // Create a reference to the "purchases" collection
  const purchasesCollectionRef = collection(firestore, "tickets");

  // Create a query to retrieve purchases for a specific user
  const querySnapshot = await getDocs(
    query(
      purchasesCollectionRef,
      where("userEmail", "==", email) // Filter purchases by user's email
      // orderBy("timestamp", "desc") // Order purchases by timestamp in descending order
    )
  );

  // Map documents to purchase data and return only the purchaseData field
  return querySnapshot.docs.map((doc) => doc.data().purchaseData);
};

export const savePurchase = async (email, purchaseData) => {
  // Create a reference to the "purchases" collection
  const purchasesCollectionRef = collection(firestore, "purchases");

  // Add a new document to the "purchases" collection
  await addDoc(purchasesCollectionRef, {
    userEmail: email,
    purchaseData: purchaseData,
    timestamp: new Date(), // Store timestamp of the purchase
  });
};

// Get all purchases for a user
export const getAllPurchases = async (email) => {
  // Create a reference to the "purchases" collection
  const purchasesCollectionRef = collection(firestore, "purchases");

  // Create a query to retrieve purchases for a specific user
  const querySnapshot = await getDocs(
    query(
      purchasesCollectionRef,
      where("userEmail", "==", email) // Filter purchases by user's email
      // orderBy("timestamp", "desc") // Order purchases by timestamp in descending order
    )
  );

  // Map documents to purchase data and return
  return querySnapshot.docs.map((doc) => doc.data());
};
