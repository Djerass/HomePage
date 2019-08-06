import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Time from "./components/Time/Time";
import MainActivity from "./components/MainActivity/MainActivity";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";

const App = () => (
  <Layout>
    <Header />
    <Time />
    <MainActivity />
    <TodoList></TodoList>
  </Layout>
);

export default App;
