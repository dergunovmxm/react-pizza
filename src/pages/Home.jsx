import React from "react";
import { Categories, Sort } from "../components";
import useShowItems from "../hooks/useShowItems";
import Card from "../components/Card";
import Skeleton from "../components/Card/Skeleton";

const Home = () => {
  const { items, isLoading } = useShowItems();

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : items.map((item) => <Card {...item} key={item.id} />)}
      </div>
    </>
  );
};

export default Home;
