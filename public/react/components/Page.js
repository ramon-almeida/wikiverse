import React from 'react';




export const Page = (props) => {
  
  const handleBackToListClick = () => {
    props.setCurrentPage(null)
    };
  
  return <>
    <h3>{props.currentPage}</h3>
    {/* {<p>{props.currentPage.content}</p>
    <ul>{props.currentPage.tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
    </ul>
    <p>{props.currentPage.createdAt}</p>  */}
    <button onClick={handleBackToListClick}>Back to Wiki List</button>
  </>

} 

