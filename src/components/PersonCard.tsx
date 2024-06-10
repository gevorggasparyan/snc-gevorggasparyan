import { FunctionComponent, memo } from "react";
import Image from "next/image";
import classNames from "classnames";
import { Button } from "@/components/Button";
import { PersonCardSkeleton } from "@/components/PersonCardSkeleton";
import { User } from "@/utils/common/person";

type PersonCardProps = {
  person?: User;
  isLoading?: boolean;
  error?: Error | null;
};

export const PersonCard: FunctionComponent<PersonCardProps> = memo(
  function UserCard({ person, isLoading, error }) {
    if (isLoading) {
      return <PersonCardSkeleton />;
    }

    if (error) {
      return (
        <div
          className={classNames(
            "flex items-center flex-col p-4 max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg",
          )}
        >
          <h3 className={classNames("text-xl")}>Something went wrong!</h3>

          <p className={classNames("mt-2 text-sm")}>{error.message}</p>
        </div>
      );
    }

    if (!person) {
      return null;
    }

    return (
      <div
        className={classNames(
          "relative w-full max-w-sm bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg",
        )}
      >
        <div
          aria-hidden
          className={classNames(
            "absolute top-0 left-0 w-full h-14 bg-cover bg-no-repeat bg-center",
          )}
          style={{ backgroundImage: `url(${person.backgroundImageUrl})` }}
        />

        <div
          className={classNames(
            "relative z-1 border-b border-b-gray-300 dark:border-b-gray-600 px-6 pb-6",
          )}
        >
          <div className={classNames("text-center my-4")}>
            <Image
              className={classNames(
                "w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4 object-cover",
              )}
              src={person.profilePictureUrl}
              alt={person.name}
              width={256}
              height={256}
              quality={100}
            />

            <div className={classNames("flex flex-col items-center")}>
              <h3
                className={classNames(
                  "font-bold text-2xl text-gray-800 dark:text-white mb-1",
                )}
              >
                {person.name}
              </h3>

              <span
                className={classNames(
                  "inline-flex text-gray-700 dark:text-gray-300 items-center",
                )}
              >
                {person.title}
              </span>
            </div>
          </div>

          <div className={classNames("flex gap-2 px-2")}>
            <Button className={classNames("flex-1 rounded-full")}>
              Follow
            </Button>

            <Button outline className={classNames("flex-1 rounded-full")}>
              Message
            </Button>
          </div>
        </div>

        <div className={classNames("px-6 py-4")}>
          <div
            className={classNames(
              "flex gap-2 items-start flex-col text-gray-800 dark:text-gray-300",
            )}
          >
            <span>
              Followers:{" "}
              <strong className={classNames("text-black dark:text-white")}>
                {person.followers}
              </strong>
            </span>
            <span>
              Following:{" "}
              <strong className={classNames("text-black dark:text-white")}>
                {person.following}
              </strong>
            </span>
          </div>
        </div>
      </div>
    );
  },
);
