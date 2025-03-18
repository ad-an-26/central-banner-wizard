import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ToolbarPlugin from "../components/ToolbarPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { FORMAT_TEXT_COMMAND } from "lexical";

vi.mock("@lexical/react/LexicalComposerContext", () => ({
  useLexicalComposerContext: vi.fn(),
}));

describe("ToolbarPlugin", () => {
  const mockEditor = {
    dispatchCommand: vi.fn(),
  };

  beforeEach(() => {
    useLexicalComposerContext.mockReturnValue([mockEditor]);
  });

  it("renders without crashing", () => {
    render(
      <LexicalComposer initialConfig={{}}>
        <ToolbarPlugin />
      </LexicalComposer>
    );
    expect(screen.getByText("Bold")).toBeInTheDocument();
  });

  it("calls dispatchCommand when Bold is clicked", () => {
    render(
      <LexicalComposer initialConfig={{}}>
        <ToolbarPlugin />
      </LexicalComposer>
    );
    fireEvent.click(screen.getByText("Bold"));
    expect(mockEditor.dispatchCommand).toHaveBeenCalledWith(FORMAT_TEXT_COMMAND, "bold");
  });
});
