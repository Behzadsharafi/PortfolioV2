import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../config/firestore";

export const getAllMessages = async () => {
  const collectionRef = collection(db, "messages");
  const querySnapshot = await getDocs(collectionRef);
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const addMessage = async (data) => {
  const collectionRef = collection(db, "messages");
  addDoc(collectionRef, data);
};
