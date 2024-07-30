const HeaderMenu = ({ title, from }) => {
  return (
    <div className="p-8"> 
      <div className="text-center">
        <h1 className="font-semibold text-color-accent text-2xl">{title}</h1>
        <p className="text-sm opacity-30">{from}</p>
      </div>
    </div>
  );
};

export default HeaderMenu;
