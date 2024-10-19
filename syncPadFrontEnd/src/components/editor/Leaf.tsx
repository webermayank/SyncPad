// Leaf.tsx
import React from "react";

export const Leaf: React.FC<any> = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }
  return <span {...attributes}>{children}</span>;
};
