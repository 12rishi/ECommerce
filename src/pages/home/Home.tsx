import { useEffect } from "react";
import Card from "../../globals/components/card/Card";
import Hero from "../../globals/components/Hero/Hero";
import Navbar from "../../globals/components/navbar/Navbar";
import { useAppdispatch, useAppSelector } from "../../store/hooks";
import { fetchProduct } from "../../store/productSlice";

const Home = () => {
  const dispatch = useAppdispatch();
  const { product } = useAppSelector((store) => store.product);
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);
  return (
    <>
      {/* Hero Section: Centered with Simple Header */}
      <div className="relative  overflow-hidden bg-white dark:bg-gray-900 dark:text-gray-100">
        {/* Main Header */}
        <Navbar />
        {/* END Main Header */}

        {/* Hero Content */}
        <Hero />
        {/* END Hero Content */}
      </div>
      <div className="text-center font-bold text-gray-700 text-3xl">
        <h1>Products:</h1>
      </div>
      {/* END Hero Section: Centered with Simple Header */}

      <div className="flex  text-center">
        {product.length > 0 &&
          product.map((pd) => {
            return <Card key={pd.id} data={pd} />;
          })}
      </div>
    </>
  );
};

export default Home;
