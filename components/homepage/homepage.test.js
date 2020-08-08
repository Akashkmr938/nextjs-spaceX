import { render, screen } from "@testing-library/react";
import HomePage from "./homepage";
import * as nextRouter from "next/router";
import "@testing-library/jest-dom/extend-expect";

nextRouter.useRouter = jest.fn();
nextRouter.useRouter.mockImplementation(() => ({ route: "/", query: {} }));

describe("render homepage component", () => {
  it("should call component", () => {
    const props = {
      shuttleArray: [],
    };
    const { getByText } = render(<HomePage {...props} />);
    expect(getByText("No results To Display")).toBeInTheDocument();
  });

  it("should call component", () => {
    const props = {
      shuttleArray: [
        {
          flight_number: 1,
          mission_name: "Sat",
          links: {
            mission_patch: 1,
          },
          mission_id: [],
          launch_year: "2006",
          launch_success: true,
          tbd: true,
        },
      ],
    };
    render(<HomePage {...props} />);

    expect(screen.getByRole("img")).toHaveAttribute("alt");
  });
});
