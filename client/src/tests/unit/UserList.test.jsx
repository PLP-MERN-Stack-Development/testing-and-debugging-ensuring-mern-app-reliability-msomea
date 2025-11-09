const React = require("react");
const { render, screen, waitFor } = require("@testing-library/react");
const UserList = require("../../components/UserList").default;

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve([{ username: "mockuser1" }]),
    })
  );
});

afterEach(() => {
  jest.resetAllMocks();
});

test("renders users fetched from API", async () => {
  render(<UserList />);
  await waitFor(() => screen.getByText("mockuser1"));
  expect(screen.getByText("mockuser1")).toBeInTheDocument();
});
