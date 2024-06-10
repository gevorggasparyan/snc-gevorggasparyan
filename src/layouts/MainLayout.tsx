import {
  FunctionComponent,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { Inter } from "next/font/google";
import { useQuery } from "@tanstack/react-query";
import classNames from "classnames";
import { PersonsList } from "@/components/PersonsList";
import { PersonCard } from "@/components/PersonCard";
import { Time } from "@/components/Time";
import { useLogPerson } from "@/hooks/useLogPerson";
import { getPerson } from "@/utils/client/person";

const inter = Inter({ subsets: ["latin"] });

type MainLayoutProps = PropsWithChildren & {};

export const MainLayout: FunctionComponent<MainLayoutProps> = () => {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const [selectedPerson, setSelectedPerson] = useState<string | null>(null);

  const {
    data: person,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["person", selectedPerson],
    queryFn: getPerson,
    enabled: !!selectedPerson,
  });

  useLogPerson(person, currentTime);

  useEffect(() => {
    setCurrentTime(new Date());

    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <main
      className={classNames(
        inter.className,
        "min-h-screen w-full py-8 px-4",
        "flex flex-col justify-center items-center",
      )}
    >
      <Time date={currentTime} />

      <PersonsList
        selectedPerson={selectedPerson}
        onPersonChange={setSelectedPerson}
      />

      <div
        className={classNames(
          "mt-4 flex items-start justify-center w-full min-h-[25rem]",
        )}
      >
        <PersonCard person={person} isLoading={isLoading} error={error} />
      </div>
    </main>
  );
};
