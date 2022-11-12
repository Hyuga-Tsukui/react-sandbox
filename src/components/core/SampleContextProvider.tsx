import React, { createContext, useContext, useState } from "react";

type SampleContextType = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
};

const SampleContext = createContext<SampleContextType | undefined>(undefined);

type SampleContextProviderType = {
  children: React.ReactNode;
};

export const SampleContextProvider: React.FC<SampleContextProviderType> = ({
  children,
}) => {
  const [name, setName] = useState<string>("Hyuga");

  return (
    <SampleContext.Provider value={{ name, setName }}>
      {children}
    </SampleContext.Provider>
  );
};

export const useUserProfile = () => {
  const context = useContext(SampleContext);
  if (context === undefined) {
    throw new Error(
      "useUserProfile must be used within a SampleContextProvider"
    );
  }
  return context;
};
