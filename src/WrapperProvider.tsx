import { createContext, useState, Dispatch, SetStateAction } from "react";
interface IProvider {
  files: string;
  setFiles: Dispatch<SetStateAction<string>>;
  setType: Dispatch<SetStateAction<string>>;
  type: string;
  resetFile: () => void;
}
export const WrapperContext = createContext<IProvider | null>(null);

const WrapperProvider: React.FC = ({ children }) => {
  const [files, setFiles] = useState<string>("");
  const [type, setType] = useState("");
  const resetFile = () => {
    setFiles("");
    setType("");
  };
  return (
    <WrapperContext.Provider
      value={{ files, setFiles, type, setType, resetFile }}
    >
      {children}
    </WrapperContext.Provider>
  );
};

export default WrapperProvider;
