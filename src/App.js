import React, { useState } from "react";
import ProductList from "./Components/ProductList";
import data from "./data.json";
import Aside from "./Components/Aside";

const App = () => {
  const [input, setInput] = useState({ search: "", type: "all",color:'' });
  const [products, setProducts] = useState(data);

  const handleSearch = () => {
    const newList = products.filter((product) => {
      if (product.name.toUpperCase().includes(input.search.toUpperCase())) {
        return product;
      }
    });
    setProducts(newList);
  };

  const handleType = () => {
    if (input.type !== "all") {
      const newList = data.filter((product) => {
        if (product.type.toUpperCase() === input.type.toUpperCase()) {
          return product;
        }
      });
      setProducts(newList);
    } else{
      setProducts(data);
    }
  };

  const handleColor = ()=>{
    console.log(input)
  }


  return (
    <div className="py-16 flex px-16">
      <div className="flex-1 px-6">
        <Aside
          handleSearch={handleSearch}
          input={input}
          setInput={setInput}
          handleType={handleType}
        />
      </div>
      <div className="w-4/5 px-6">
        <ProductList products={products} />
      </div>
    </div>
  );
};

export default App;
