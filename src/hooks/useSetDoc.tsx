import { useState, useCallback } from "react";
import {
  doc,
  setDoc,
  collection,
  addDoc,
  SetOptions,
} from "firebase/firestore/lite";
import { db } from "@/config/firebase";
import { toast } from "sonner";
import { UseFormReturn } from "react-hook-form";
import Message from "@/@types/Message";

interface UseSetDocReturn {
  setDocument: (
    docId: string | null,
    data: Record<string, any>,
    options?: SetOptions
  ) => Promise<string | void>;
  loading: boolean;
}

const useSetDoc = (
  collectionName: string,
  message: Message,
  form?: UseFormReturn<any>
): UseSetDocReturn => {
  const [loading, setIsLoading] = useState<boolean>(false);

  const setDocument = useCallback(
    async (
      docId: string | null,
      data: Record<string, any>,
      options: SetOptions = {}
    ) => {
      setIsLoading(true);

      const myPromise = new Promise<string>(async (resolve, reject) => {
        try {
          let docRefId: string = "";
          if (docId) {
            await setDoc(doc(db, collectionName, docId), data, options);
            docRefId = docId;
          } else {
            const docRef = await addDoc(collection(db, collectionName), data);
            docRefId = docRef.id;
          }

          if (form) form.reset();

          resolve(docRefId);
        } catch (error) {
          reject(error);
        }
      });

      toast.promise(myPromise, {
        loading: message.loading,
        success: () => message.success,
        error: () => message.error,
      });

      return await myPromise;
    },
    [collectionName, form]
  );

  return { setDocument, loading };
};

export default useSetDoc;
