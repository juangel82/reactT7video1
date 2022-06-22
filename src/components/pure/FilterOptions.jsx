import React from 'react';
import PropTypes from 'prop-types';
import FilterContainer from '../containers/FilterContainer';


const FilterOptions = () => {
    
   
    
    return (
        <div className='filters'>
            {/*Filter containers */}
            <FilterContainer filter ='SHOW_ALL'>
            TODOS
            </FilterContainer>
            <FilterContainer filter ='SHOW_ACTIVE'>
            Activos
            </FilterContainer>
            <FilterContainer filter ='SHOW_COMPLETED'>
            Complteados
            </FilterContainer>
        </div>
    );
};




export default FilterOptions;
