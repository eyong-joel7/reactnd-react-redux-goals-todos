const List = ({items, removeItem, toggleHandler}) => {

    return (
      <ul>
        {items.map((item) => (
          <li key={item.id}  onClick = { () => toggleHandler && toggleHandler(item.id) }>
            {" "}
            <span style = {{textDecorationLine: item.complete? 'line-through' : 'none'}}>{item.name}</span>
            <button onClick = {()=> removeItem(item)}>X</button>
          </li>
        ))}
      </ul>
    );
  };
  export default List