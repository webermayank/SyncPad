// /types/slateTypes.ts
import { BaseEditor } from "slate";
import { ReactEditor } from "slate-react";
import { HistoryEditor } from "slate-history";

// Define the custom properties for text formatting
type CustomText = { text: string; bold?: boolean };

// You can add more types for different types of elements if needed
type ParagraphElement = { type: "paragraph"; children: CustomText[] };

// Extend the Slate types
declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & HistoryEditor;
    Text: CustomText;
    Element: ParagraphElement;
  }
}
