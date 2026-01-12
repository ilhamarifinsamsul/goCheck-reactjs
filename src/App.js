import { useState } from "react";

// data list
const listItems = [
  { id: 1, title: "Eat", done: false },
  { id: 2, title: "Drink", done: false },
];

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <CheckList />
      <Stats />
    </div>
  );
}

// components logo

function Logo() {
  return <span className="logo">✅ GoCheck 📝</span>;
}

// components form
function Form() {
  const [title, setTitle] = useState("");

  function handleChange(e) {
    setTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Ada yang mau kamu catat ?</h3>
      <input
        type="text"
        name="title"
        id=""
        onChange={handleChange}
        value={title}
      />
      <button>➕</button>
    </form>
  );
}

// components CheckList
function CheckList() {
  return (
    <div className="list">
      <ul>
        {listItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

// function Item dengan membuat props
function Item({ item }) {
  return (
    <li>
      <input type="checkbox" />
      <span style={{ textDecoration: item.done ? "line-through" : "" }}>
        {item.title}
      </span>
      <button>🗑</button>
    </li>
  );
}

// components Stats
function Stats() {
  return (
    <footer className="stats">
      <span>✅ Kamu punya x catatan dan baru x yang di checklist (x%) 📝</span>
    </footer>
  );
}

export default App;
