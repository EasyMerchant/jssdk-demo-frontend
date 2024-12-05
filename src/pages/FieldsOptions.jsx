import React from 'react'

const FieldsOptions = ({ data, handleFieldsOptions, type }) => {
    return (
        <div className='py-2 pl-9'>
            <strong className='mb-2 -ml-5'>&#x2705; Check For Required<span className="text-[red] ml-1"> *</span></strong>
            <ol className='list-disc'>
                { data.map((item, index) => (
                    <li key={ index }>
                        <input
                            id={ item.name }
                            type="checkbox"
                            name={ item.name }
                            checked={ item.required }
                            value={ item.value }
                            onChange={ (event) => handleFieldsOptions(event, type) }
                            className="checkbox mb-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                            htmlFor={ item.name }
                            className="w-full ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 select-none"
                        >
                            { item.name }
                        </label>
                    </li>
                )) }
            </ol>
        </div>
    )
}

export default FieldsOptions;