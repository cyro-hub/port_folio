import Loading from "@/pages/components/Loading";
import React, { createContext, useContext, useState } from "react";

interface LoadingContextProps {
  isLoading?: boolean;
  setLoading: (loading: boolean) => void;
}

export const LoadingContext = createContext<LoadingContextProps | undefined>(
  undefined
);

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [appLoading, setAppLoading] = useState(false);

  const isLoading = appLoading;

  const setLoading = (loading: boolean) => {
    setAppLoading(loading);
  };

  return (
    <LoadingContext.Provider value={{ setLoading }}>
      {children}
      {isLoading && <Loading />}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
