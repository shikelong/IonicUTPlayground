import { screen, render } from "@testing-library/react";
import Test from "./Test";

test("test find radio", async () => {
  const { findByTestId, findAllByRole } = render(<Test />);

  const radioWithTestId = await findByTestId("radioWithTestId");

  expect(radioWithTestId).not.toBeNull();

  const radios = await findAllByRole("radio");

  //it will failed, because can get get radio by other method exclude by testId
  expect(radios.length).toBe(2);
});

test("try to find input", () => {
  const { getByRole, getByDisplayValue } = render(<Test />);

  expect(getByDisplayValue("hello ionic")).not.toBeNull();
  expect(getByRole("input")).not.toBeNull();
});
