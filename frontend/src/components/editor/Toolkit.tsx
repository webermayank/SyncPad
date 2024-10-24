// Toolbar.tsx
import React from "react";
import { Editor, Transforms, Text } from "slate";
import { useSlate } from "slate-react";

interface ToolbarProps {
  editor: Editor; // Define that the editor prop is of type Editor
}


const isBoldMarkActive = (editor: Editor) => {
  const [match] = Editor.nodes(editor, {
    match: (n) => (n as any).bold === true, // TypeScript needs to know the custom property
    universal: true,
  });
  return !!match;
};

const toggleBoldMark = (editor: Editor) => {
  const isActive = isBoldMarkActive(editor);
  Transforms.setNodes(
    editor,
    { bold: isActive ? false : true }, // Toggle the bold property
    { match: (n) => Text.isText(n), split: true }
  );
};

const Toolbar: React.FC <ToolbarProps>= ({editor}) => {

  return (
    <div>
      <button
        onMouseDown={(event) => {
          event.preventDefault();
          toggleBoldMark(editor);
        }}
      >
        Bold
      </button>
    </div>
  );
};

export default Toolbar;
