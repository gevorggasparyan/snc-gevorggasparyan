import { render, fireEvent } from "@testing-library/react";
import { PersonsList } from "@/components/PersonsList";
import { Person } from "@/utils/common/person";

describe("PersonsList", () => {
  it("should render", () => {
    const { getByText, getByRole } = render(
      <PersonsList selectedPerson={null} onPersonChange={() => {}} />,
    );

    // List
    const personsList = getByRole("tablist");
    expect(personsList).toBeInTheDocument();

    // Persons
    Object.values(Person).forEach((person) => {
      const personElement = getByText(person);
      expect(personElement).toBeInTheDocument();
    });
  });

  it("should trigger change event on click", () => {
    const handlePersonChange = jest.fn();

    const { getByText } = render(
      <PersonsList selectedPerson={null} onPersonChange={handlePersonChange} />,
    );

    Object.values(Person).forEach((person) => {
      const personElement = getByText(person);

      fireEvent.click(personElement);

      expect(handlePersonChange).toHaveBeenCalledWith(person);
    });
  });

  it("should mark selected", () => {
    const selectedPerson = Person.PersonA;

    const { getByText } = render(
      <PersonsList selectedPerson={selectedPerson} onPersonChange={() => {}} />,
    );

    const personElement = getByText(selectedPerson);

    expect(personElement.getAttribute("aria-selected")).toBeTruthy();
  });
});
