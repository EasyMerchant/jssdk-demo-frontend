import React from 'react'
import { fieldOptionsLabel } from '../utils/common';

const FieldsOptions = ({ data, handleFieldsOptions, type }) => {
    const optionLabel =fieldOptionsLabel[type];
    return (
        <div className='py-2 pl-9'>
            <strong className='mb-3 -m-3 mt-3 flex gap-2'><img src="/public/check.svg" alt="check" width={20} height={20} /> Check For Required<span className="text-[red] ml-1"> *</span></strong>
            <ol className='flex flex-col list-none gap-2'>
                { data.map((item, index) => (
                    <li className='flex flex-row gap-1 items-center' key={ index }>
                        <input
                            id={ item.name }
                            type="checkbox"
                            name={ item.name }
                            checked={ item.required }
                            value={ item.value }
                            onChange={ (event) => handleFieldsOptions(event, type) }
                            className="checkbox mb-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-0 focus:border-0 focus:outline-0 focus:ring-offset-0"
                        />
                        <label
                            htmlFor={ item.name }
                            className="w-full  text-sm font-medium text-gray-900 dark:text-gray-300 select-none"
                        >
                            { optionLabel[item.name] }
                        </label>
                    </li>
                )) }
            </ol>
        </div>
    )
}

export default FieldsOptions;