import { render } from "@testing-library/react";
import { PersonCard } from "@/components/PersonCard";
import { mockUsers } from "@/utils/server/mock-users";

describe("PersonCard", () => {
  it("should render person", () => {
    const person = mockUsers.PersonA!;

    expect(person).toBeTruthy();

    const { container, getByText } = render(<PersonCard person={person} />);

    // Avatar
    const avatar = container.querySelector<HTMLImageElement>("img");
    expect(avatar).toBeInTheDocument();

    // Name
    const name = getByText(person.name);
    expect(name).toBeInTheDocument();

    // Title
    const title = getByText(person.title);
    expect(title).toBeInTheDocument();

    // Follow
    const followButton = getByText("Follow");
    expect(followButton).toBeInTheDocument();

    // Message
    const messageButton = getByText("Message");
    expect(messageButton).toBeInTheDocument();

    // Followers
    const followers = getByText("Followers:");
    const followersCount = getByText(person.followers);
    expect(followers).toBeInTheDocument();
    expect(followersCount).toBeInTheDocument();

    // Following
    const following = getByText("Following:");
    const followingCount = getByText(person.following);
    expect(following).toBeInTheDocument();
    expect(followingCount).toBeInTheDocument();
  });

  it("should render loading state", () => {
    const { getByLabelText } = render(<PersonCard isLoading />);

    const loaderSkeleton = getByLabelText("Loading person data...");
    expect(loaderSkeleton).toBeInTheDocument();
  });

  it("should render error state", () => {
    const errorMessage = "Test";

    const { getByText } = render(
      <PersonCard error={new Error(errorMessage)} />,
    );

    // Error title
    const title = getByText("Something went wrong!");
    expect(title).toBeInTheDocument();

    // Error message
    const message = getByText(errorMessage);
    expect(message).toBeInTheDocument();
  });
});
