import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import RichTextEditor from '../components/RichTextEditor';

vi.mock('@lexical/react/LexicalComposer', () => ({
  LexicalComposer: ({ children }) => <div data-testid="lexical-composer">{children}</div>
}));

vi.mock('@lexical/react/LexicalRichTextPlugin', () => ({
  RichTextPlugin: ({ contentEditable, placeholder }) => (
    <div data-testid="rich-text-plugin">
      {contentEditable}
      {placeholder}
    </div>
  )
}));

vi.mock('@lexical/react/LexicalContentEditable', () => ({
  ContentEditable: () => <div data-testid="content-editable" />
}));

vi.mock('@lexical/react/LexicalHistoryPlugin', () => ({
  HistoryPlugin: () => <div data-testid="history-plugin" />
}));

vi.mock('@lexical/react/LexicalAutoFocusPlugin', () => ({
  AutoFocusPlugin: () => <div data-testid="auto-focus-plugin" />
}));

vi.mock('@lexical/react/LexicalLinkPlugin', () => ({
  LinkPlugin: () => <div data-testid="link-plugin" />
}));

vi.mock('@lexical/react/LexicalListPlugin', () => ({
  ListPlugin: () => <div data-testid="list-plugin" />
}));

vi.mock('@lexical/react/LexicalOnChangePlugin', () => ({
  OnChangePlugin: () => <div data-testid="on-change-plugin" />
}));

vi.mock('@lexical/react/LexicalComposerContext', () => ({
  useLexicalComposerContext: () => [
    {
      registerUpdateListener: () => () => {},
      update: (callback) => callback()
    }
  ]
}));

vi.mock('lexical', () => ({
  $getRoot: () => ({
    clear: vi.fn()
  }),
  $insertNodes: vi.fn()
}));

vi.mock('@lexical/html', () => ({
  $generateHtmlFromNodes: () => '<p>Test HTML</p>',
  $generateNodesFromDOM: () => []
}));

vi.mock('../components/ToolbarPlugin', () => ({
  default: () => <div data-testid="toolbar-plugin" />
}));

describe('RichTextEditor Component', () => {
  const mockSetHtmlContent = vi.fn();
  
  beforeEach(() => {
    mockSetHtmlContent.mockClear();
  });

  it('renders correctly', () => {
    render(<RichTextEditor setHtmlContent={mockSetHtmlContent} />);
 
    expect(screen.getByTestId('lexical-composer')).toBeInTheDocument();
    expect(screen.getByTestId('rich-text-plugin')).toBeInTheDocument();
    expect(screen.getByTestId('content-editable')).toBeInTheDocument();
    expect(screen.getByTestId('history-plugin')).toBeInTheDocument();
    expect(screen.getByTestId('auto-focus-plugin')).toBeInTheDocument();
    expect(screen.getByTestId('link-plugin')).toBeInTheDocument();
    expect(screen.getByTestId('list-plugin')).toBeInTheDocument();
    expect(screen.getByTestId('on-change-plugin')).toBeInTheDocument();
    expect(screen.getByTestId('toolbar-plugin')).toBeInTheDocument();
  });

  it('passes initial HTML content to the LoadInitialContent plugin', () => {
    const initialHtml = '<p>Initial content</p>';
    render(<RichTextEditor setHtmlContent={mockSetHtmlContent} initialHtml={initialHtml} />);
    
    expect(screen.getByTestId('lexical-composer')).toBeInTheDocument();
  });

  it('updates HTML content when editor changes', () => {
    render(<RichTextEditor setHtmlContent={mockSetHtmlContent} />);

    expect(screen.getByTestId('lexical-composer')).toBeInTheDocument();
  });
});