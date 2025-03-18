import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ControlPanel from '../components/ControlPanel';

vi.mock('../components/RichTextEditor', () => ({
  default: ({ setHtmlContent }) => (
    <div data-testid="mock-rich-text-editor">
      <button 
        data-testid="mock-update-content" 
        onClick={() => setHtmlContent('Updated content')}
      >
        Update Content
      </button>
    </div>
  )
}));

describe('ControlPanel Component', () => {
  const mockProps = {
    setBannerHeight: vi.fn(),
    setBackgroundcolor: vi.fn(),
    setBackgroundImageUrl: vi.fn(),
    setText: vi.fn(),
    setHtmlContent: vi.fn(),
    setTextStyles: vi.fn(),
    setImageUrl: vi.fn(),
    setImagePosition: vi.fn(),
    setBannerBorder: vi.fn(),
    resetBanner: vi.fn(),
    htmlContent: 'Initial content',
    currentHtmlContent: 'Initial content'
  };

  it('renders correctly', () => {
    render(<ControlPanel {...mockProps} />);
    expect(screen.getByText('Height')).toBeInTheDocument();
    expect(screen.getByText('Background')).toBeInTheDocument();
    expect(screen.getByText('Text')).toBeInTheDocument();
    expect(screen.getByText('Image')).toBeInTheDocument();
    expect(screen.getByText('Show Border')).toBeInTheDocument();
    expect(screen.getByText('Reset')).toBeInTheDocument();
  });

  it('toggles dropdowns when buttons are clicked', () => {
    render(<ControlPanel {...mockProps} />);
    
    expect(screen.queryByText('Banner Height:')).not.toBeInTheDocument();
    
    fireEvent.click(screen.getByText('Height'));
    expect(screen.getByText('Banner Height:')).toBeInTheDocument();
    
    fireEvent.click(screen.getByText('Background'));
    expect(screen.getByText('Background Color:')).toBeInTheDocument();
    expect(screen.queryByText('Banner Height:')).not.toBeInTheDocument();
  });

  it('calls setBannerHeight with the correct value', () => {
    render(<ControlPanel {...mockProps} />);
    
    fireEvent.click(screen.getByText('Height'));
    
    const heightInput = screen.getByPlaceholderText('e.g., 300px');
    fireEvent.change(heightInput, { target: { value: '400' } });
    
    expect(mockProps.setBannerHeight).toHaveBeenCalledWith('400px');
  });


  it('calls setBannerBorder when checkbox is toggled', () => {
    render(<ControlPanel {...mockProps} />);
    
    const borderCheckbox = screen.getByLabelText('Show Border');
    fireEvent.click(borderCheckbox);
    
    expect(mockProps.setBannerBorder).toHaveBeenCalledWith(true);
  });

  it('calls resetBanner when Reset button is clicked', () => {
    render(<ControlPanel {...mockProps} />);
    
    fireEvent.click(screen.getByText('Reset'));
    
    expect(mockProps.resetBanner).toHaveBeenCalled();
  });

  it('calls setHtmlContent when rich text editor content is updated', () => {
    render(<ControlPanel {...mockProps} />);
    
    fireEvent.click(screen.getByText('Text'));
    
    fireEvent.click(screen.getByTestId('mock-update-content'));
    
    expect(mockProps.setHtmlContent).toHaveBeenCalledWith('Updated content');
  });
});