const Card = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="p-0.5 rounded-lg bg-[radial-gradient(at_left_top,#71717a,50px,#27272a_50%)]">
      <div className="bg-stone-900 rounded-lg">{children}</div>
    </div>
  );
};

export default Card;
