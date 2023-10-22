import React from "react";

function usePreview(initalState: string) {
  const [previewText, setPreviewText] = React.useState(initalState);

  function handlePreviewText(event: React.ChangeEvent<HTMLInputElement>) {
    setPreviewText(event.target.value);

    if (event.target.value === "") {
      setPreviewText(initalState);
    }
  }

  return {
    previewText,
    handlePreviewText,
  };
}

export default usePreview;
