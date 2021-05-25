import React, { useState, createContext } from "react";

export const ShowPricingModalContext = createContext();
export const PageContext = createContext();

export const GlobalProvider = (props) => {
  const [showPricingModal, setShowPricingModal] = useState(false);

  const [page, setPage] = useState("home");

  return (
    <ShowPricingModalContext.Provider
      value={[showPricingModal, setShowPricingModal]}
    >
      <PageContext.Provider value={[page, setPage]}>
        {props.children}
      </PageContext.Provider>
    </ShowPricingModalContext.Provider>
  );
};
