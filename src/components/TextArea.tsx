import React from "react";

type Props = {
  handleTextArea: (event: any) => void;
  placeholder: number[];
};

function TextArea({ handleTextArea, placeholder }: Props) {
  return (
    <textarea
      onChange={handleTextArea}
      className="p-4 rounded-md w-full bg-blue-dark text-blue-ligh border  border-slate-800 text-white	text-sm	"
      placeholder={`${placeholder}`}
      cols={30}
      rows={10}
    ></textarea>
  );
}

export default TextArea;
