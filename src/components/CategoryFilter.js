import React from "react";

function CategoryFilter({categories=[],selectedClass,setSelectedClass}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {
      categories.map(category => 
        <button 
          key={category} 
          className={category === selectedClass ? "selected":""} 
          onClick={() => {setSelectedClass(category)}}
        >
          {category}
        </button>)
      }
    </div>
  );
}

export default CategoryFilter;
