import { Blogs } from "./components/Blogs";
import { Header } from "./components/Header";
import { Pagination } from "./components/Pagination";
import './App.css';
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";

export default function App() {

  const {FetchBlogPosts} = useContext(AppContext);

  useEffect(() => {
    const fetchData = async () => {
      await FetchBlogPosts();
    };

    fetchData();
     // eslint-disable-next-line
  },[FetchBlogPosts]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Header></Header>
      <Blogs></Blogs>
      <Pagination></Pagination>
    </div>
  );
}
 