import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import CheckList from "./components/CheckList";
import Stats from "./components/Stats";

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * The main App component.
 * Contains the application's logo, form, checklist, and statistics.
 * Handles adding, deleting, toggling, and clearing items.
 */
/*******  8086d4db-e544-4d68-843c-f60913a838a6  *******/ function App() {
  const [listItems, setListItems] = useState([]);

  function handleAddItem(item) {
    setListItems((listItems) => [...listItems, item]);
  }

  function handleDeleteItem(id) {
    setListItems((listItems) => listItems.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setListItems((listItems) => {
      return listItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            done: !item.done,
          };
        }
        return item;
      });
    });
  }

  function handleClearItems() {
    const confirm = window.confirm("Are you sure you want to clear the list?");
    if (confirm) {
      setListItems([]);
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <CheckList
        items={listItems}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearItems}
      />
      <Stats items={listItems} />
    </div>
  );
}

export default App;
