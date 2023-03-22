import React, { useEffect, useState } from "react";
import { DownArrow } from "../assets/icons";
import { client } from "../lib/utils/fetch";
import CategoriesList from "./CategoriesList";
import PropertyCard from "./PropertyCard";

const query = (limit) => `
{
  propertyCollection(limit: ${limit}) {
    items {
      id
      title
      address
      category
      image {
        url
      }
    }
  }
}
`;
function Properties() {
  const [properties, setProperties] = useState([]);
  const [category, setCategory] = useState("All");
  const [categoryList, setCategoryList] = useState([]);
  const [openCategoryList, setOpenCategoryList] = useState(false);

  const setCategoryListNoDuplicates = (categories) => {
    const categoryList = categories.map((property) => property.category);
    const uniqueCategories = [...new Set(categoryList)];
    setCategoryList(uniqueCategories);
  };

  const handleCategoryChange = (category) => {
    setCategory(category);
    setOpenCategoryList(false);
  };

  const getProperties = async (limit) => {
    const res = await client(query(limit));
    if (!res.error) {
      setProperties(res.data.propertyCollection.items);
      setCategoryListNoDuplicates(res.data.propertyCollection.items);
    }
  };
  useEffect(() => {
    getProperties(3);
  }, []);

  const loadMore = async () => {
    getProperties(properties.length + 3);
  };

  const getFilteredProperties = () => {
    if (category === "All") {
      return properties;
    }
    return properties.filter((property) => property.category === category);
  };

  return (
    <section className="properties section-container">
      <div className="section-details">
        <h2 className="section-title">Properties</h2>
        <p className="section-desc">
          {" "}
          Turpis facilisis tempor pulvinar in lobortis ornare magna.{" "}
        </p>
      </div>
      <div className="section-filter">
        <p onClick={(pre) => setOpenCategoryList(!openCategoryList)}>
          All Categories
          <DownArrow width="10" height="10" />
        </p>
        <CategoriesList
          categories={["All", ...categoryList]}
          activeCategory={category}
          setActiveCategory={handleCategoryChange}
          open={openCategoryList}
        />
      </div>
      <div className="properties-container">
        {getFilteredProperties().map((property, key) => (
          <PropertyCard property={property} key={key} />
        ))}
      </div>
      <div
        className="load-more"
        style={{
          display: properties.length >= 6 ? "none" : "flex",
        }}
      >
        <button onClick={loadMore} className="btn btn-fill">
          Load More
        </button>
      </div>
    </section>
  );
}

export default Properties;
