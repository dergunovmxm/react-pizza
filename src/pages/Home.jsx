import React from "react";
import { Categories, Sort } from "../components";
import useShowItems from "../hooks/useShowItems";
import Card from "../components/Card";
import Skeleton from "../components/Card/Skeleton";

const Home = () => {
  const [categoryId, setCategoryId] = React.useState(0);
  const [sort, setSort] = React.useState({
    name: "популярности",
    sortType: "rating"
  });
  const { items, isLoading } = useShowItems({ categoryId, sort });
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onClickCategory={(index) => setCategoryId(index)}
        />
        <Sort value={sort} onChangeSort={(index) => setSort(index)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : items.map((item) => <Card {...item} key={item.id} />)}
      </div>
    </div>
  );
};

export default Home;
