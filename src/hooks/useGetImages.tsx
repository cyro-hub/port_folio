import { useState, useEffect } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "@/config/firebase";

const useGetImages = (folderPath: string) => {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const folderRef = ref(storage, folderPath);
        const result = await listAll(folderRef);

        const urls = await Promise.all(
          result.items.map(async (item) => await getDownloadURL(item))
        );

        setImages(urls);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [folderPath]);

  return { images, loading, error };
};

export default useGetImages;
