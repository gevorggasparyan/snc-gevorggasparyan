import { FunctionComponent, memo, useMemo } from "react";
import classNames from "classnames";
import { formatFullDate } from "@/utils/client/date";

type TimeProps = {
  date: Date | null;
};

export const Time: FunctionComponent<TimeProps> = memo(function Time({ date }) {
  const formattedDate = useMemo(() => {
    if (!date) {
      return "";
    }

    return formatFullDate(date);
  }, [date]);

  const isoDate = useMemo(() => {
    if (!date) {
      return;
    }

    return date.toISOString();
  }, [date]);

  return (
    <time dateTime={isoDate} className={classNames("fixed top-2 right-2 z-50")}>
      {formattedDate}
    </time>
  );
});
