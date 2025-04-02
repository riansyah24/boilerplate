import { describe, it, beforeEach, expect } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import Home from "../pages/Home.tsx"

describe("Unit test", () => {
  beforeEach(() => {
    render(<Home />)
  })
  
  it("Test heading", () => {
    expect(screen.getByTestId("heading")).toBeInTheDocument()
  })
})