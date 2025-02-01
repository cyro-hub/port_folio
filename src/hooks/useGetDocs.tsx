import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "@/config/firebase";

const useGetDocs = <T = any,>(collectionName: string) => {
  const [docs, setDocs] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchDocs = async () => {
      setLoading(true);
      try {
        const colRef = collection(db, collectionName);
        const snapshot = await getDocs(colRef);
        const dataList = snapshot.docs.map((doc) => ({
          id: doc.id, // Include document ID
          ...doc.data(),
        })) as T[];

        setDocs(dataList);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchDocs();
  }, [collectionName]);

  return { docs, loading, error };
};

export default useGetDocs;
