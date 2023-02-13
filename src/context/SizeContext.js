import { createContext, useState } from "react";

const SizeContext = createContext({
  sizeName: null,
  additionalPriceMultiliper: 1,
  updateValues: (newName, newVal) => {},
});

export function SizeContextProvider(props) {
  const [sizeName, setSizeName] = useState("Normal");
  const [additionalPriceMultiliper, setAdditionalPriceMultiliper] = useState(1);

  const updateValues = (newName, newVal) => {
    setSizeName(() => newName);
    setAdditionalPriceMultiliper(() => newVal);
  };

  const context = {
    sizeName: sizeName,
    additionalPriceMultiliper: additionalPriceMultiliper,
    updateValues: updateValues,
  };

  return (
    <SizeContext.Provider value={context}>
      {props.children}
    </SizeContext.Provider>
  );
}

export default SizeContext;
