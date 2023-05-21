import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';
import { Page } from './Page';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [pages, setPages] = useState([]);
	// const [selectedPage, setSelectedPage] = useState(null);
	const [currentPage, setCurrentPage] = useState(null);
	
	async function fetchPages(){
		try {
			const response = await fetch(`${apiURL}/wiki/`);
			const pagesData = await response.json();
			setPages(pagesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}
	
	useEffect(() => {
		fetchPages();
	  }, []);
	

	async function fetchPage(slug) {
		try {
		  const response = await fetch(`${apiURL}/wiki/${slug}`);
		  const pageData = await response.json();
		  setSelectedPage(pageData);
		  console.log(pageData)
		} catch (err) {
		  console.log("Oh no an error! ", err);
		}
	  }
	  setCurrentPage(pages[0].slug)
	// useEffect(() => {
	// 	fetchPages();

	// }, []);
	
	// async function handlePageClick(e) {
	// 	console.log(e.target.innerText)

	//   };
	//   const handleBackToListClick = () => {
	// 	setSelectedPage(null);
	// 	setCurrentPage(null)
	//   };

	  return (
		<main>
		  <h1>WikiVerse</h1>
		  {!currentPage ? (
			<>
			  <h2>An interesting 📚</h2>
			  <PagesList pages={pages} setCurrentPage={setCurrentPage} />
			</>
		  ) : (
			<>
			  {/* <button onClick={handleBackToListClick}>Back to Wiki List</button> */}
			  <Page setCurrentPage={setCurrentPage} currentPage={currentPage}/>

			</>
		  )}
		</main>
	  );
	};

