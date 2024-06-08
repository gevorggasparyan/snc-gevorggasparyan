import { memo } from "react";
import classNames from "classnames";

export const PersonCardSkeleton = memo(function PersonCardSkeleton() {
  return (
    <div
      aria-busy
      aria-label="Loading person data..."
      className={classNames(
        "relative bg-white dark:bg-gray-900 rounded-lg shadow-lg max-w-sm w-full",
      )}
    >
      <div
        aria-hidden
        className={classNames(
          "rounded-t-lg animate-pulse bg-gray-300 dark:bg-gray-700 absolute top-0 left-0 w-full h-14 bg-cover bg-no-repeat bg-center",
        )}
      />

      <div
        aria-hidden
        className={classNames(
          "relative z-1 border-b border-b-gray-300 dark:border-b-gray-600 px-6 pb-6",
        )}
      >
        <div className={classNames("text-center my-4")}>
          <div
            className={classNames(
              "w-32 h-32 bg-gray-300 dark:bg-gray-700 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4",
            )}
          />

          <div className={classNames("flex flex-col items-center")}>
            <div
              className={classNames(
                "w-full h-4 mt-1 mb-4 animate-pulse bg-gray-300 dark:bg-gray-700 rounded",
              )}
            />

            <div
              className={classNames(
                "w-full h-4 my-1 animate-pulse bg-gray-300 dark:bg-gray-700 rounded",
              )}
            />
          </div>
        </div>

        <div className={classNames("flex gap-2 px-2")}>
          <div
            className={classNames(
              "flex-1 min-h-[2.75rem] rounded-full animate-pulse bg-gray-300 dark:bg-gray-700 px-4 py-2",
            )}
          />

          <div
            className={classNames(
              "flex-1 rounded-full animate-pulse bg-gray-300 dark:bg-gray-700 px-4 py-2",
            )}
          />
        </div>
      </div>

      <div className={classNames("px-6 py-4")}>
        <div
          className={classNames(
            "flex gap-2 items-start flex-col text-gray-800 dark:text-gray-300",
          )}
        >
          <div
            className={classNames(
              "w-full h-4 my-1 animate-pulse bg-gray-300 dark:bg-gray-700 rounded",
            )}
          />

          <div
            className={classNames(
              "w-full h-4 my-1 animate-pulse bg-gray-300 dark:bg-gray-700 rounded",
            )}
          />
        </div>
      </div>
    </div>
  );
});
