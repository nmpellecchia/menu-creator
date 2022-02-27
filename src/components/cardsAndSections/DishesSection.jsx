// recieves title, listComponent & component content
function DishesSection(props) {
  return (
    <article>
      <h2 className="uppercase text-3xl text-lime-600 font-bold ml-6 font-title">
        {props.title}
      </h2>
      <ul className="w-11/12 flex justify-center flex-wrap gap-4">
        {props.children}
      </ul>
    </article>
  );
}

export default DishesSection;
