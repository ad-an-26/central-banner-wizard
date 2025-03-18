import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Banner from "../components/Banner";

describe("Banner", () => {
  const props = {
    backgroundColor: "#940000",
    text: "Test Banner",
    htmlContent: "",
    textSize: "medium",
    textStyles: [],
    imageUrl: null,
    backgroundImageUrl: null,
    bannerHeight: "200px",
    bannerBorder: false,
  };

  it("renders the banner with the correct text", () => {
    render(<Banner {...props} />);
    expect(screen.getByText("Test Banner")).toBeInTheDocument();
  });

  it("renders an image if imageUrl is provided", () => {
    const imageProps = { ...props, imageUrl: "test-image.jpg" };
    render(<Banner {...imageProps} />);
    expect(screen.getByAltText("Banner")).toBeInTheDocument();
  });
});
