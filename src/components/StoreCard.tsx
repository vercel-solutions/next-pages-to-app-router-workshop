import type {Store} from "../types";

const StoreCard = ({store}: {store: Store}) => {
  return (
    <div className="flex flex-col gap-[6px]">
      <h2 className="font-bold text-xl">{store.title}</h2>
      <p className="text-sm text-primary-400 text-white/50">{store.description}</p>
      <p className="text-sm text-white/70">※ {store.address}</p>
    </div>
  );
};

export default StoreCard;
