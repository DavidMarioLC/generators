import React from "react";

function useTab() {
  const [cssActive, setCssActive] = React.useState(true);
  const [sassActive, setSassActive] = React.useState(false);

  function handleBlockCSS() {
    setCssActive(true);
    setSassActive(false);
  }

  function handleBlockSASS() {
    setCssActive(false);
    setSassActive(true);
  }

  return {
    cssActive,
    sassActive,
    handleBlockCSS,
    handleBlockSASS,
  };
}

export default useTab;
