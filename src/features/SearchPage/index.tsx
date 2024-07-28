import { useSearchParams } from "react-router-dom";

import { useGetSpecialistsQuery } from "../../store/searchPageApi";
import { selectSpecialistsList } from "../../store/searchPageSlice";
import { useAppSelector } from "../../store";

import { Filters } from "./filters";
import { Cards } from "./cards";
import { Button } from "../../components/Button";
import { CardsNotFound } from "../../components/CardsNotFound";

import { ISpecialist } from "../../interfaces/api/ISpecialist";

import { SHOW_MORE, PAGE } from "../../constants";
import { SDivider } from "./styles";

export const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get(PAGE);

  const payload = { key: searchParams.toString(), searchParams };
  // const { data } = useGetSpecialistsQuery(payload, { refetchOnMountOrArgChange: true });
  useGetSpecialistsQuery(payload, { refetchOnMountOrArgChange: true });

  const data = useAppSelector(selectSpecialistsList);

  const handleShowMore = (): void => {
    if (page) {
      const nextPage: number = parseInt(page as string) + 1;
      setSearchParams(params => ({ ...Object.fromEntries(params), page: `${nextPage}` }));
    }
  }

  return (
    <>
      <Filters />
      <SDivider />
      {
        data?.length === 0
        ? <CardsNotFound /> :
          <>
            <Cards cardData={data as ISpecialist[]} />
            <Button onClick={handleShowMore} text={SHOW_MORE} />
          </>
      }
    </>
  );
}
