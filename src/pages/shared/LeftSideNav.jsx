import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import New from "../../components/New";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  const [newss, setNewss] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setNewss(data));
  }, []);



  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold mb-4">All Category</h2>
        {categories.map((category) => (
          <Link
            className="block p-4 hover:font-bold hover:bg-gray-100"
            key={category.id}
            to={`/category/${category.id}`}>
            {category.name}
          </Link>
        ))}
      </div>
      <div>
        <h2>news:{newss.length}</h2>
        {
            newss.map(news=><New key={news.id} news={news} ></New>)
        }
      </div>
    </div>
  );
};

export default LeftSideNav;
