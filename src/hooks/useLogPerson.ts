import { useEffect, useRef } from "react";
import { useLog } from "@/context/LogProvider";
import { User } from "@/utils/common/person";

export const useLogPerson = (
  person: User | undefined,
  currentTime: Date | null,
) => {
  const currentTimeRef = useRef(currentTime);

  const { enableLogs } = useLog();

  useEffect(() => {
    currentTimeRef.current = currentTime;
  }, [currentTime]);

  useEffect(() => {
    if (enableLogs && currentTimeRef.current) {
      console.log(person, currentTimeRef.current);
    }
  }, [enableLogs, person, currentTimeRef]);
};
