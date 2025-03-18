import React, { useState } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $getSelection,
  $isRangeSelection,
  UNDO_COMMAND,
    REDO_COMMAND  ,
  FORMAT_TEXT_COMMAND,
  FORMAT_ELEMENT_COMMAND,
} from "lexical";
import { $wrapNodes } from "@lexical/selection";
import { $createParagraphNode } from "lexical";
import { $patchStyleText } from "@lexical/selection";
import { $createHeadingNode } from "@lexical/rich-text";
import { $setBlocksType } from "@lexical/selection";

function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  const [textColor, setTextColor] = useState("#000000"); 
  const [fontFamily, setFontFamily] = useState("Arial");
  const [fontSize, setFontSize] = useState("16px");

  const fontFamilies = [
    "Arial",
    "Verdana",
    "Times New Roman",
    "Courier New",
    "Georgia",
    "Comic Sans MS",
  ];

  const fontSizes = ["12px", "14px", "16px", "18px", "20px", "24px", "32px"];

  // Apply font family
  const handleFontFamilyChange = (e) => {
    const selectedFont = e.target.value;
    setFontFamily(selectedFont);

    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $patchStyleText(selection, {
          "font-family": selectedFont,
        });
      }
    });
  };
  const handleFontSizeChange = (e) => {
    const selectedSize = e.target.value;
    setFontSize(selectedSize);

    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $patchStyleText(selection, {
          "font-size": selectedSize,
        });
      }
    });
  };

  const formatBold = () => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
  };

  const formatItalic = () => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
  };

  const formatUnderline = () => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline");
  };

  const formatParagraph = () => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $setBlocksType(selection, () => $createParagraphNode());
      }
    });
  };

  const formatHeading = (level) => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $setBlocksType(selection, () => $createHeadingNode(level));
      }
    });
  };

  const handleTextColorChange = (e) => {
    const color = e.target.value;
    setTextColor(color);

    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $patchStyleText(selection, {
          color: color,
        });
      }
    });
  };

  const handleUndo = () => editor.dispatchCommand(UNDO_COMMAND);
  const handleRedo = () => editor.dispatchCommand(REDO_COMMAND);

  return (
    <div className="toolbar p-2 border-b flex gap-2 flex-wrap">
      <button
        onClick={handleUndo}
        className="px-2 py-1 border rounded hover:bg-gray-100"
        title="Undo"
      >
        ↶ Undo
      </button>

      <button
        onClick={handleRedo}
        className="px-2 py-1 border rounded hover:bg-gray-100"
        title="Redo"
      >
        ↷ Redo
      </button>

      <select
        value={fontFamily}
        onChange={handleFontFamilyChange}
        className="px-2 py-1 border rounded hover:bg-gray-100"
      >
        {fontFamilies.map((font) => (
          <option key={font} value={font}>
            {font}
          </option>
        ))}
      </select>

      {/* Font Size Dropdown */}
      <select
        value={fontSize}
        onChange={handleFontSizeChange}
        className="px-2 py-1 border rounded hover:bg-gray-100"
      >
        {fontSizes.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>

      <button
        onClick={formatBold}
        className="px-2 py-1 border rounded hover:bg-gray-100"
        title="Bold"
      >
        Bold
      </button>
      <button
        onClick={formatItalic}
        className="px-2 py-1 border rounded hover:bg-gray-100"
        title="Italic"
      >
        Italics
      </button>
      <button
        onClick={formatUnderline}
        className="px-2 py-1 border rounded hover:bg-gray-100"
        title="Underline"
      >
        Underline
      </button>
      <div className="h-4 w-px bg-gray-300 mx-1"></div>
      <button
        onClick={formatParagraph}
        className="px-2 py-1 border rounded hover:bg-gray-100"
        title="Paragraph"
      >
        P
      </button>
      <button
        onClick={() => formatHeading(1)}
        className="px-2 py-1 border rounded hover:bg-gray-100"
        title="Heading 1"
      >
        H1
      </button>
      <button
        onClick={() => formatHeading(2)}
        className="px-2 py-1 border rounded hover:bg-gray-100"
        title="Heading 2"
      >
        H2
      </button>
      <div className="h-4 w-px bg-gray-300 mx-1"></div>
      
      <input
        type="color"
        value={textColor}
        onChange={handleTextColorChange}
        className="cursor-pointer"
        title="Text Color"
      />
    </div>
  );
}

export default ToolbarPlugin;