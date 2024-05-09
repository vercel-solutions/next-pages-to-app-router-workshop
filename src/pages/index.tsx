import type {GetStaticProps, InferGetStaticPropsType} from "next";
import type {Store} from "../types";

import Link from "next/link";

import api from "../api";
import StoreCard from "../components/StoreCard";

export const getStaticProps: GetStaticProps<{
  stores: Store[];
}> = async () => {
  const stores: Store[] = await api.store.list();

  return {
    props: {stores},
  };
};

const HomePage = ({stores}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="flex flex-col gap-6">
      {stores.map((store) => (
        <Link key={store.id} href={`/${store.id}`}>
          <StoreCard store={store} />
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
