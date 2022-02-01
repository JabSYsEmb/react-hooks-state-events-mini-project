import React, { useRef, useState } from "react";

function NewTaskForm({categories,onTaskFormSubmit}) {
  const [category, setCategory] = useState({value: 'All'});
  const inputText = useRef('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onTaskFormSubmit(preValue =>  preValue.concat(
        {
          text: inputText.current.value,
          category: category.value
        }
    ))
  }
  
  const handleChange = (event) => {
    setCategory({value: event.target.value})
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" ref={inputText} name="text" />
      </label>
      <label>
        Category
        <select name="category" value={category.value} onChange={handleChange}> 
          {
            categories?.map(category => category === "All" ? 
            <option key={category} value={category} disabled hidden>Select</option>
            :
            <option key={category} value={category}>{category}</option>)
          }
        </select>
      </label>
      <input type="submit" value="Add task"/>
    </form>
  );
}

export default NewTaskForm;
