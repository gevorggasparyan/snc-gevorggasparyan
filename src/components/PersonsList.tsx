import { FunctionComponent, memo } from "react";
import classNames from "classnames";
import { Button } from "@/components/Button";
import { Person } from "@/utils/common/person";

type PersonsListProps = {
  selectedPerson: string | null;
  onPersonChange: (person: string) => void;
};

export const PersonsList: FunctionComponent<PersonsListProps> = memo(
  function PersonsList({ selectedPerson, onPersonChange }) {
    return (
      <div
        role="tablist"
        aria-label="Persons"
        className={classNames(
          "w-full flex items-center justify-center flex-wrap gap-2",
        )}
      >
        {Object.values(Person).map((person) => {
          const isActive = person === selectedPerson;

          return (
            <Button
              key={person}
              role="tab"
              aria-selected={isActive}
              outline={!isActive}
              onClick={() => onPersonChange(person)}
            >
              {person}
            </Button>
          );
        })}
      </div>
    );
  },
);
