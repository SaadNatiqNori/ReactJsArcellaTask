import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import ArticleView from "../views/ArticleView";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ArticleView />} />
      </Route>
    </Routes>
  );
};

export default Routing;
