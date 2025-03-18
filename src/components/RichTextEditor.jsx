import React, { useEffect } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getRoot, $insertNodes } from "lexical";
import { $generateHtmlFromNodes, $generateNodesFromDOM } from "@lexical/html";
import ToolbarPlugin from "./ToolbarPlugin";

const theme = {
  paragraph: "editor-paragraph",
  heading: {
    h1: "editor-heading-h1",
    h2: "editor-heading-h2",
  },
};

const editorConfig = {
  theme,
  onError(error) {
    console.error(error);
  },
  namespace: "editor",
  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode,
  ],
};

function HtmlConvertPlugin({ setHtmlContent }) {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        const html = $generateHtmlFromNodes(editor);
        setHtmlContent(html);
      });
    });
  }, [editor, setHtmlContent]);

  return null;
}

function LoadInitialContent({ initialHtml }) {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    if (initialHtml) {
      editor.update(() => {
        const root = $getRoot();
        root.clear(); // Clear existing content
        const parser = new DOMParser();
        const dom = parser.parseFromString(initialHtml, "text/html");
        const nodes = $generateNodesFromDOM(editor, dom);
        $insertNodes(nodes);
      });
    }
  }, [editor, initialHtml]);

  return null;
}

function RichTextEditor({ setHtmlContent, initialHtml }) {
  
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="editor-container border rounded-md">
        <div className="editor-inner">
          <ToolbarPlugin />
          <div className="editor-input">
            <RichTextPlugin
              contentEditable={
                <ContentEditable className="editor-input p-4 min-h-[200px]" />
              }
              placeholder={
                <div className="editor-placeholder">Enter your text here..</div>
              }
            />
            <HistoryPlugin />
            <AutoFocusPlugin />
            <ListPlugin />
            <LinkPlugin />
            <OnChangePlugin onChange={() => {}} />
            <HtmlConvertPlugin setHtmlContent={setHtmlContent} />
            <LoadInitialContent initialHtml={initialHtml} />
          </div>
        </div>
      </div>
    </LexicalComposer>
  );
}

export default RichTextEditor;
