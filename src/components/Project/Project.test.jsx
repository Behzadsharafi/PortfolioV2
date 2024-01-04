import { render, screen } from "@testing-library/react";
import Project from "./Project";

describe("Card Component", () => {
  it("should render a title based on props", () => {
    render(
      <Project
        project={{
          title: "Test Title",
          description: "Some description ",
          techStack: ["ReactJS", "SCSS", "Google Firestore"],
          gitHub: "Some URL",
          liveSite: "Some URL",
        }}
        index={1}
      />
    );

    const heading = screen.getByText(/Test Title/i);
    expect(heading).toBeVisible();
  });
});
