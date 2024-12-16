import React from 'react';
import Select from 'react-select';

const ReactSelectDropdown = ({ options ,setCustomizeOptions, defaultValue}) => {
    const handleInputChange = (data) => {
        setCustomizeOptions((prevData) => ({
            ...prevData,
            currency: data.value
        }))
    }
    return (
        <Select
            className="basic-single"
            classNamePrefix="select"
            defaultValue={ options[0] }
            isLoading={ !options ? true : false }
            onChange={ handleInputChange }
            isSearchable={ true }
            name="currency"
            styles={ { minWidth: "60px", minHeight: "51px" } }
            options={ options }
        />
    )
}

export default ReactSelectDropdown;