import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import CountryList from '../components/CountryList';
import ReactPaginate from 'react-paginate';
import '../App.css';


const Home = () => {
    const [countries, setCountries] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [countriesPerPage] = useState(3); // Показываем по 3 страны на странице
  
    // Функция для поиска стран
    const handleSearch = async (query) => {
      const response = await fetch(`https://restcountries.com/v3.1/name/${query}`);
      const data = await response.json();
      setCountries(data);  // Обновляем состояние с результатами поиска
    };
  
    // Логика для пагинации
    const indexOfLastCountry = (currentPage + 1) * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);
  
    const handlePageChange = (selectedPage) => {
      setCurrentPage(selectedPage.selected); // Обновляем номер текущей страницы
    };
  
    return (
      <div>
        <h1>Поиск стран</h1>
        <SearchBar onSearch={handleSearch} />
        <CountryList countries={currentCountries} />
        
        {/* Добавляем пагинацию */}
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          pageCount={Math.ceil(countries.length / countriesPerPage)} // Количество страниц
          onPageChange={handlePageChange} // Функция для смены страницы
          containerClassName={'pagination'}
          activeClassName={'active'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          previousClassName={'page-item'}
          nextClassName={'page-item'}
        />
      </div>
    );
  };
  
  export default Home;
  
