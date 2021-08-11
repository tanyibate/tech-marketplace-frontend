/**
 * @jest-environment jsdom
 */
import React from "react";
import {
  render,
  fireEvent,
  waitFor,
  screen,
  cleanup,
} from "@testing-library/react";
import NavBar from "../src/components/NavBar/NavBar";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

import App from "../src/App";

afterEach(cleanup);
const menuOptions = ["Home", "Headphones", "Speakers", "Earphones"];

describe("test navbar", () => {
  const history = createMemoryHistory();
  beforeEach(() => {
    history.push("/");
  });

  it("navbar loads links", () => {
    render(<NavBar />);
    menuOptions.forEach((el) => {
      const Link = screen.queryByText(el);
      expect(Link).toBeTruthy();
    });
  });
  menuOptions.forEach((el) => {
    it(`${el} link works`, () => {
      render(
        <Router history={history}>
          <App />
        </Router>
      );
      const leftClick = { button: 0 };
      userEvent.click(screen.getByText(el), leftClick);
      expect(screen.getByText(el + " Page")).toBeInTheDocument();
    });
  });
});
