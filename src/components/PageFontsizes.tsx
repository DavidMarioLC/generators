"use client";
import React from "react";
import { Toaster } from "react-hot-toast";
import {
  ArrowDecoration,
  WavesDecoration,
  PatternDecoration,
} from "@/components/Decoration";
import useSizes from "@/hooks/useSizes";
import usePreview from "@/hooks/usePreview";
import useTab from "@/hooks/useTab";
import useCopy from "@/hooks/useCopy";

import TextArea from "@/components/TextArea";
import DisplayText from "@/components/DisplayText";
import BlockCode from "@/components/BlockCode";

const INITIAL_HOW_TO_USE = `<h2 class="fs-12 fs-md-32">Don't Repeat Yourself</h2>`;
const INITIAL_STATE = [12, 14, 16, 18, 20, 24, 32, 42];
const INITIAL_PREVIEW_TEXT = "Don't Repeat Yourself";

const PageFontsizes = () => {
  const { sizesOrdered, generateSizes } = useSizes(INITIAL_STATE);
  const { previewText, handlePreviewText } = usePreview(INITIAL_PREVIEW_TEXT);
  const { cssActive, sassActive, handleBlockCSS, handleBlockSASS } = useTab();
  const { copyCode } = useCopy();

  let rootStyles = "";
  let mobileSizes = "";
  let desktopSizes = "";

  sizesOrdered.forEach((size) => {
    if (cssActive) {
      rootStyles += `--fs-${size}:${size / 16}rem;\n`;
    } else {
      rootStyles += `$fs-${size}:${size / 16}rem;\n`;
    }
  });

  sizesOrdered.forEach((size) => {
    if (cssActive) {
      mobileSizes += `.fs-${size} {\n font-size:var(--fs-${size});\n}\n`;
    } else {
      mobileSizes += `.fs-${size} {\n font-size:$fs-${size};\n}\n`;
    }
  });

  sizesOrdered.map((size) => {
    if (cssActive) {
      desktopSizes += `.fs-md-${size} {\n font-size:var(--fs-${size});\n }\n`;
    } else {
      desktopSizes += `.fs-md-${size} {\n font-size:$fs-${size};\n }\n`;
    }
  });

  const blockCodeCSS = `
:root {
${rootStyles}
}

${mobileSizes}
  
@media(width>=768px) {
 ${desktopSizes}
}
  
`;

  const blockCodeSASS = `
${rootStyles}

${mobileSizes}
      
@media(width>=768px) {
  ${desktopSizes}

}
`;

  return (
    <main className="max-w-7xl mx-auto relative">
      <div className="px-5 pt-5 md:text-center md:pt-20 md:pb-14 relative">
        <h1 className="text-gradient text-xl md:text-4xl inline-block">
          <ArrowDecoration className="hidden md:block position-left" />
          Generador
          <ArrowDecoration className="hidden md:block position-right" />
        </h1>
        <h2 className="text-gradient font-bold text-2xl md:text-5xl pb-3">
          Tamaños Tipográficos
        </h2>
      </div>
      <div className="md:flex gap-20">
        <section className="p-5 relative">
          <div className="sticky top-0">
            <p className="text-blue-soft mb-2 text-lg font-medium	">
              Lista de tamaños tipográficos
            </p>
            <div className="relative">
              <WavesDecoration className="absolute position-waves-left" />
              <TextArea
                handleTextArea={generateSizes}
                placeholder={INITIAL_STATE}
              />
            </div>
            <p className="text-slate-500 mb-12">
              * Ingresa los tamaños separados por coma.
            </p>

            <p className="text-blue-soft mb-2 text-lg font-medium	">
              Vista previa del texto
            </p>
            <input
              type="text"
              onChange={handlePreviewText}
              className="p-2 text-white	 rounded-md w-full bg-blue-dark  border  border-slate-800 text-sm	"
              placeholder="Escribe aquí el texto que deseas visualizar"
              maxLength={32}
            />
          </div>
        </section>
        <section className="flex-1 p-5 ">
          <p className="text-slate-500 mb-2 text-gradient md:text-3xl	">
            Vista previa del texto
          </p>
          <div className="border p-6 md:py-12 rounded-lg border-slate-800 mb-12 flex flex-col	 gap-3 max-h-[32rem] bg-blue-dark">
            <WavesDecoration className="absolute position-waves-right" />
            <div className="overflow-y-auto ">
              {sizesOrdered.map((size) => (
                <DisplayText key={size} size={size} previewText={previewText} />
              ))}
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-slate-500 font-medium mb-5 text-gradient md:text-3xl	">
              Como usar:
            </h2>
            <BlockCode code={INITIAL_HOW_TO_USE} language="html" />
          </div>
          <div className="relative">
            <h2 className="text-slate-500 font-medium mb-5 text-gradient md:text-3xl	">
              Tokens
            </h2>
            <div className="flex gap-1 justify-end pe-5">
              <button
                onClick={handleBlockCSS}
                className={`text-white ${
                  cssActive ? "bg-blue-600" : "bg-blue-dark"
                } p-3 rounded-tl-lg rounded-tr-lg hover:bg-blue-600`}
              >
                CSS
              </button>
              <button
                onClick={handleBlockSASS}
                className={`text-white ${
                  sassActive ? "bg-blue-600" : "bg-blue-dark"
                } p-3 rounded-tl-lg rounded-tr-lg hover:bg-blue-600`}
              >
                SASS
              </button>
            </div>
            {cssActive && (
              <div className="gap-3 max-h-[32rem] overflow-y-auto rounded-md">
                <BlockCode code={blockCodeCSS} language="css" />
              </div>
            )}

            {sassActive && (
              <div className="gap-3 max-h-[32rem] overflow-y-auto rounded-md">
                <BlockCode code={blockCodeSASS} language="scss" />
              </div>
            )}

            <div className="flex justify-end">
              {cssActive && (
                <button
                  onClick={() => copyCode(blockCodeCSS)}
                  className=" mt-5 border p-2 rounded text-white hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400 active:scale-95 "
                >
                  Copiar CSS
                </button>
              )}

              {sassActive && (
                <button
                  onClick={() => copyCode(blockCodeSASS)}
                  className=" mt-5 border p-2 rounded text-white hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400 active:scale-95 "
                >
                  Copiar SASS
                </button>
              )}
            </div>
          </div>
        </section>
      </div>
      <Toaster position="bottom-center" reverseOrder={false} />
      <PatternDecoration className="pattern-left" />
      <PatternDecoration className="pattern-bottom" />
    </main>
  );
};

export default PageFontsizes;
