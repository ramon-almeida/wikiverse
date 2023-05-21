import React from 'react';


// export const PagesList = ({pages}) => {
// 	return <>
// 		{
// 			pages.map((page, idx) => {
// 				return <Page page={page} key={idx} />
// 			})
// 		}
// 	</>
// } 


export const PagesList = ({ pages, setCurrentPage }) => {
  return (
    <ul>
      {pages.map((page, idx) => (
        <li key={idx}>
          <a href={`/wiki/${pages.slug}`} onClick={(e) => {
            setCurrentPage(page.slug)
            e.preventDefault()
            }}>
            {page.title} 
          </a>

        </li>
      ))}
    </ul>
  );
};

