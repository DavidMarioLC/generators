import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

type Props = {
  code: string | string[];
  language: string;
};

const BlockCode = ({ code, language }: Props) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={nightOwl}
      customStyle={{
        padding: 12,
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "rgba(30 41 59 / 1)",
        borderRadius: 8,
        overflowY: "auto",
        maxHeight: "32rem",
      }}
      wrapLongLines={true}
      wrapLines={true}
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default BlockCode;
