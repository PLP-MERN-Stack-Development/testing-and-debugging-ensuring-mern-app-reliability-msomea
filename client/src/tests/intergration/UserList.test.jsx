import { render, screen, waitFor } from "@testing-library/react";
import UserList from "../../components/UserList";
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  rest.get("/api/users", (req, res, ctx) => res(ctx.json([{ username: "testuser" }])))
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("displays users fetched from API", async () => {
  render(<UserList />);
  await waitFor(() => screen.getByText("testuser"));
  expect(screen.getByText("testuser")).toBeInTheDocument();
});
