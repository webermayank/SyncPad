import React ,{useMemo, useState} from 'react';
import { createEditor, Descendant ,Editor } from "slate";
import {Slate, Editable, withReact} from 'slate-react';

import { withHistory } from "slate-history";
import Toolkit from './Toolkit';
import { Leaf } from './Leaf';



const MainEditor: React.FC = () => {
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  const [value, setValue] = useState<Descendant[]>([
    { type: "paragraph", children: [{ text: "start typing..." }] },
  ]);

  const renderLeaf = (props: any) => <Leaf {...props} />;

  return (
    <Slate
      editor={editor}
      initialValue={value}
      onChange={(newValue) => setValue(newValue)}
    >
      <Toolkit editor={editor} />
      <Editable
        renderLeaf={renderLeaf}
        placeholder="Write something pelase.."
      />
    </Slate>
  );
};

export default MainEditor;