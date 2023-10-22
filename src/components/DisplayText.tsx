import React from "react";

type Props = {
  size: number;
  previewText: string;
};

function DisplayText({ size, previewText }: Props) {
  return (
    <div className="flex items-center gap-4">
      <p
        style={{ fontSize: size }}
        className="text-blue-light font-normal flex items-center"
      >
        {previewText}
      </p>
    </div>
  );
}

export default DisplayText;
