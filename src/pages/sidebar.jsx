import React from 'react';
import FieldsOptions from './FieldsOptions';

const Sidebar = ({ customizeOptions, setCustomizeOptions, handleRenderUpdate, toggleShowObject, showObject }) => {
    const optionsArray = ['card', "ach", "crypto", "wallet"];
    const {
        paymentMethods,
        saveCard,
        scanCard,
        saveAccount,
        showReceipt,
        showTotal,
        tokenOnly,
        showSubmitButton,
        fields: { billing, additional },
        apperanceSettings,
        submitButtonText,
    } = customizeOptions;
    const payMethod = ['card', "bank", "crypto", "wallet"];

    // Function to handle form options checkbox change
    const handleCheckboxChange = (method) => {
        setCustomizeOptions((prevOptions) => {
            const updatedMethods = prevOptions.paymentMethods.includes(method)
                ? prevOptions.paymentMethods.filter((item) => item !== method)
                : [...prevOptions.paymentMethods, method];

            return { ...prevOptions, paymentMethods: updatedMethods };
        });
    };
    const handleInputChange = (event) => {
        const { name, value } = event.target
        setCustomizeOptions((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleCardCheckboxChange = (event) => {
        const { name, checked } = event.target
        setCustomizeOptions((prevOptions) => ({
            ...prevOptions,
            [name]: checked,
        }))
    };

    const handleFieldsRender = (event) => {
        const { name, checked } = event.target
        if (name === "billing") {
            setCustomizeOptions((prevOptions) => ({
                ...prevOptions,
                "fields": {
                    ...prevOptions.fields,
                    billing: checked ? [
                        { name: 'address', required: false, value: 'Test ACH Address' },
                        { name: 'country', required: true, value: 'Country' },
                        { name: 'state', required: false, value: '' },
                        { name: 'city', required: false, value: '' },
                        { name: 'postal_code', required: true, value: '' },
                    ] : []
                },
            }))
        }
        if (name === "additional") {
            setCustomizeOptions((prevOptions) => ({
                ...prevOptions,
                "fields": {
                    ...prevOptions.fields,
                    additional: checked ? [
                        { name: 'name', required: true, value: '' },
                        { name: 'email_address', required: true, value: '' },
                        { name: 'phone_number', required: true, value: '' },
                        { name: 'description', required: true, value: '' },
                        { name: 'donate', required: false }
                    ] : []
                },
            }))
        }
    };

    const handleFieldsOptions = (event, type) => {
        const { name, value, checked } = event.target;
        if (type === "billing") {
            setCustomizeOptions((prevOptions) => ({
                ...prevOptions,
                fields: {
                    ...prevOptions.fields,
                    billing: prevOptions.fields.billing.map((element) =>
                        element.name === name
                            ? { ...element, required: checked, value }
                            : element
                    ),
                },
            }));
        } else if (type === "additional") {
            setCustomizeOptions((prevOptions) => ({
                ...prevOptions,
                fields: {
                    ...prevOptions.fields,
                    additional: prevOptions.fields.additional.map((element) =>
                        element.name === name
                            ? { ...element, required: checked, value }
                            : element
                    ),
                },
            }));
        }
    };

    const handleThemChange = (event) => {
        const { name, checked } = event.target;
        setCustomizeOptions((prevOptions) => ({
            ...prevOptions,
            apperanceSettings: {
                ...prevOptions.apperanceSettings,
                [name]: checked ? "dark" : "light"
            }
        }));
    }
    const handleAppearanceSettings = (event) => {
        const { name, value } = event.target
        setCustomizeOptions((prevOptions) => ({
            ...prevOptions,
            apperanceSettings: {
                ...prevOptions.apperanceSettings,
                [name]: value
            }
        }));
    };

    const handleSidebarToggle = (id) => document.getElementById(id).classList.toggle("hidden");
    const logCustomizeOptions = () => {
        handleRenderUpdate();
    };


    return (
        <div
            id="drawer-navigation"
            className="w-96 min-w-60 h-screen p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800"
            tabIndex={ -1 }
            aria-labelledby="drawer-navigation-label"
        >
            <h5
                id="drawer-navigation-label"
                className="text-base font-semibold text-gray-500 uppercase dark:text-gray- px-2 py-3 rounded-xl"
            >
                Appearance Settings
            </h5>
            <div className="py-4 overflow-y-auto">
                <ul className="mt-2 font-medium">
                    {/* Submit Button Text */ }
                    <li className="mt-2">
                        <label htmlFor="submit_btn_text" className="block mb-2 px-4 text-sm font-medium text-gray-900 dark:text-white">Submit Button Text</label>
                        <input type="text" id="submit_btn_text" className="bg-gray-50 px-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter a value" value={ submitButtonText } onChange={ handleInputChange } />
                    </li>
                    {/* Theme Options List */ }
                    <li className="mt-2">
                        <a
                            id="account-options-fields"
                            href="#"
                            className="flex items-center justify-between p-2 py-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <span className="ms-3">Theme</span>
                            <label htmlFor="toggle" className="flex items-center cursor-pointer gap-1">
                                <div className="relative">
                                    <input
                                        id="toggle"
                                        type="checkbox"
                                        name='them'
                                        className="hidden"
                                        checked={ apperanceSettings.them === "dark" }
                                        onChange={ handleThemChange }
                                    />
                                    <div
                                        className={ `block w-12 h-6 rounded-full ${apperanceSettings.them === "dark" ? 'bg-gray-700' : 'bg-gray-300'
                                            }` }
                                    ></div>
                                    <div
                                        className={ `dot absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform ${apperanceSettings.them === "dark" ? 'transform translate-x-6' : ''
                                            }` }
                                    ></div>
                                </div>
                                <p className='text-gray-900'>{ apperanceSettings.them }</p>
                            </label>
                        </a>
                    </li>
                    {/* Payment Options List */ }
                    <li>
                        <a
                            onClick={ () => handleSidebarToggle("payment-options") }
                            id="sidebar-list-payment-options"
                            href="#"
                            className="flex items-center p-2 py-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <span className="ms-3">Payment Options</span>
                        </a>
                        <ul
                            id="payment-options"
                            className="hidden w-full min-w-48 mt-2 px-4 py-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        >
                            { optionsArray.map((method, index) => {
                                return (
                                    <li
                                        key={ method }
                                        className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600"
                                    >
                                        <div className="flex items-center ps-3">
                                            <input
                                                id={ `${method}-checkbox` }
                                                type="checkbox"
                                                checked={ paymentMethods.includes(method) }
                                                onChange={ () => handleCheckboxChange(method) }
                                                className="checkbox w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                            />
                                            <label
                                                htmlFor={ `${method}-checkbox` }
                                                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 select-none"
                                            >
                                                { payMethod[index].charAt(0).toUpperCase() + payMethod[index].slice(1) }
                                            </label>
                                        </div>
                                    </li>
                                )
                            }) }
                        </ul>
                    </li>
                    {/* Card Options List */ }
                    <li className="mt-2">
                        <a
                            id="payment-options-card"
                            href="#"
                            onClick={ () => handleSidebarToggle("payment-card-options") }
                            className="flex items-center p-2 py-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <span className="ms-3">Card</span>
                        </a>
                        <ul
                            id="payment-card-options"
                            className="hidden w-full min-w-48 px-4 py-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        >
                            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                <div className="flex items-center ps-3">
                                    <input
                                        id="save-card-checkbox"
                                        type="checkbox"
                                        name='saveCard'
                                        checked={ saveCard }
                                        onChange={ (event) => handleCardCheckboxChange(event) }
                                        className="checkbox w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                    />
                                    <label
                                        htmlFor="save-card-checkbox"
                                        className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 select-none"
                                    >
                                        Save Card
                                    </label>
                                </div>
                            </li>
                            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                <div className="flex items-center ps-3">
                                    <input
                                        id="scan-card-checkbox"
                                        type="checkbox"
                                        name='scanCard'
                                        checked={ scanCard }
                                        onChange={ (event) => handleCardCheckboxChange(event) }
                                        className="checkbox w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                    />
                                    <label
                                        htmlFor="scan-card-checkbox"
                                        className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 select-none"
                                    >
                                        Scan Card
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </li>
                    {/* Fields Options List */ }
                    <li className="mt-2">
                        <a
                            id="payment-options-fields"
                            href="#"
                            onClick={ () => handleSidebarToggle("payment-fields-options") }
                            className="flex items-center p-2 py-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <span className="ms-3">Fields</span>
                        </a>
                        <ul
                            id="payment-fields-options"
                            className="hidden w-full min-w-48 px-4 py-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        >
                            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                <div className="flex items-center ps-3">
                                    <input
                                        id="billing-fields-checkbox"
                                        type="checkbox"
                                        name='billing'
                                        checked={ billing.length > 0 }
                                        onChange={ (event) => handleFieldsRender(event) }
                                        className="checkbox w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                    />
                                    <label
                                        htmlFor="billing-fields-checkbox"
                                        className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 select-none"
                                    >
                                        Billing Info
                                    </label>
                                </div>
                                { billing.length > 0 && <FieldsOptions data={ billing } handleFieldsOptions={ handleFieldsOptions } type="billing" /> }
                            </li>
                            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                <div className="flex items-center ps-3">
                                    <input
                                        id="additional-fields-checkbox"
                                        type="checkbox"
                                        name='additional'
                                        checked={ additional.length > 0 }
                                        onChange={ (event) => handleFieldsRender(event) }
                                        className="checkbox w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                    />
                                    <label
                                        htmlFor="additional-fields-checkbox"
                                        className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 select-none"
                                    >
                                        Additional Info
                                    </label>
                                </div>
                                { additional.length > 0 && <FieldsOptions data={ additional } handleFieldsOptions={ handleFieldsOptions } type="additional" /> }
                            </li>
                        </ul>
                    </li>
                    {/* Other Options List */ }
                    <li className="mt-2">
                        <a
                            id="account-options-fields"
                            href="#"
                            onClick={ () => handleSidebarToggle("other-options") }
                            className="flex items-center p-2 py-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <span className="ms-3">Other Options</span>
                        </a>
                        <ul
                            id="other-options"
                            className="hidden w-full min-w-48 px-4 py-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        >
                            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                <div className="flex items-center ps-3">
                                    <input
                                        id="save-account-checkbox"
                                        type="checkbox"
                                        name='saveAccount'
                                        checked={ saveAccount }
                                        onChange={ (event) => handleCardCheckboxChange(event) }
                                        className="checkbox w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                    />
                                    <label
                                        htmlFor="save-account-checkbox"
                                        className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 select-none"
                                    >
                                        Save Account
                                    </label>
                                </div>
                            </li>
                            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                <div className="flex items-center ps-3">
                                    <input
                                        id="show-receipt-checkbox"
                                        type="checkbox"
                                        name='showReceipt'
                                        checked={ showReceipt }
                                        onChange={ (event) => handleCardCheckboxChange(event) }
                                        className="checkbox w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                    />
                                    <label
                                        htmlFor="show-receipt-checkbox"
                                        className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 select-none"
                                    >
                                        Show Receipt
                                    </label>
                                </div>
                            </li>
                            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                <div className="flex items-center ps-3">
                                    <input
                                        id="show-total-checkbox"
                                        type="checkbox"
                                        name='showTotal'
                                        checked={ showTotal }
                                        onChange={ (event) => handleCardCheckboxChange(event) }
                                        className="checkbox w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                    />
                                    <label
                                        htmlFor="show-total-checkbox"
                                        className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 select-none"
                                    >
                                        Show Total
                                    </label>
                                </div>
                            </li>
                            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                <div className="flex items-center ps-3">
                                    <input
                                        id="show-submit-button-checkbox"
                                        type="checkbox"
                                        name='showSubmitButton'
                                        checked={ showSubmitButton }
                                        onChange={ (event) => handleCardCheckboxChange(event) }
                                        className="checkbox w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                    />
                                    <label
                                        htmlFor="show-submit-button-checkbox"
                                        className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 select-none"
                                    >
                                        Show Submit Button
                                    </label>
                                </div>
                            </li>
                            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                <div className="flex items-center ps-3">
                                    <input
                                        id="token-only-checkbox"
                                        type="checkbox"
                                        name='tokenOnly'
                                        checked={ tokenOnly }
                                        onChange={ (event) => handleCardCheckboxChange(event) }
                                        className="checkbox w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                    />
                                    <label
                                        htmlFor="token-only-checkbox"
                                        className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 select-none"
                                    >
                                        Token Only
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </li>
                    {/* Style Options List */ }
                    <li className="mt-2">
                        <a
                            id="account-options-fields"
                            href="#"
                            onClick={ () => handleSidebarToggle("account-options") }
                            className="flex items-center p-2 py-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <span className="ms-3">Style</span>
                        </a>
                        <ul
                            id="account-options"
                            className="hidden w-full min-w-48 px-4 py-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        >
                            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                <div className="flex items-center ps-3 flex-col">
                                    <div className="flex items-center space-x-2 flex-col">
                                        <label htmlFor="color-picker-body-backgroundColor" className="text-sm font-medium">
                                            Body BackgroundColor
                                        </label>
                                        <div className="flex items-center border rounded-md overflow-hidden">
                                            <input
                                                type="text"
                                                id="color-picker-body-backgroundColor"
                                                name='bodyBackgroundColor'
                                                value={ apperanceSettings.bodyBackgroundColor }
                                                onChange={ handleAppearanceSettings }
                                                className="w-24 px-2 py-1 text-sm border-none focus:outline-none"
                                            />
                                            <input
                                                type="color"
                                                name='bodyBackgroundColor'
                                                value={ apperanceSettings.bodyBackgroundColor }
                                                onChange={ handleAppearanceSettings }
                                                className="w-10 h-10 border-l cursor-pointer"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 flex-col">
                                        <label htmlFor="container-picker-body-backgroundColor" className="text-sm font-medium">
                                            Container BackgroundColor
                                        </label>
                                        <div className="flex items-center border rounded-md overflow-hidden">
                                            <input
                                                type="text"
                                                id="container-picker-body-backgroundColor"
                                                name='containerBackgroundColor'
                                                value={ apperanceSettings.containerBackgroundColor }
                                                onChange={ handleAppearanceSettings }
                                                className="w-24 px-2 py-1 text-sm border-none focus:outline-none"
                                            />
                                            <input
                                                type="color"
                                                name='containerBackgroundColor'
                                                value={ apperanceSettings.containerBackgroundColor }
                                                onChange={ handleAppearanceSettings }
                                                className="w-10 h-10 border-l cursor-pointer"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 flex-col">
                                        <label htmlFor="primary-font-color" className="text-sm font-medium">
                                            Primary FontColor
                                        </label>
                                        <div className="flex items-center border rounded-md overflow-hidden">
                                            <input
                                                type="text"
                                                id="primary-font-color"
                                                name='primaryFontColor'
                                                value={ apperanceSettings.primaryFontColor }
                                                onChange={ handleAppearanceSettings }
                                                className="w-24 px-2 py-1 text-sm border-none focus:outline-none"
                                            />
                                            <input
                                                type="color"
                                                name='primaryFontColor'
                                                value={ apperanceSettings.primaryFontColor }
                                                onChange={ handleAppearanceSettings }
                                                className="w-10 h-10 border-l cursor-pointer"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 flex-col">
                                        <label htmlFor="secondary-font-color" className="text-sm font-medium">
                                            Secondary FontColor
                                        </label>
                                        <div className="flex items-center border rounded-md overflow-hidden">
                                            <input
                                                type="text"
                                                id="secondary-font-color"
                                                name='secondaryFontColor'
                                                value={ apperanceSettings.secondaryFontColor }
                                                onChange={ handleAppearanceSettings }
                                                className="w-24 px-2 py-1 text-sm border-none focus:outline-none"
                                            />
                                            <input
                                                type="color"
                                                name='secondaryFontColor'
                                                value={ apperanceSettings.secondaryFontColor }
                                                onChange={ handleAppearanceSettings }
                                                className="w-10 h-10 border-l cursor-pointer"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 flex-col">
                                        <label htmlFor="primary-button-background-color" className="text-sm font-medium">
                                            Primary Button Background
                                        </label>
                                        <div className="flex items-center border rounded-md overflow-hidden">
                                            <input
                                                type="text"
                                                id="primary-button-background-color"
                                                name='primaryButtonBackgroundColor'
                                                value={ apperanceSettings.primaryButtonBackgroundColor }
                                                onChange={ handleAppearanceSettings }
                                                className="w-24 px-2 py-1 text-sm border-none focus:outline-none"
                                            />
                                            <input
                                                type="color"
                                                name='primaryButtonBackgroundColor'
                                                value={ apperanceSettings.primaryButtonBackgroundColor }
                                                onChange={ handleAppearanceSettings }
                                                className="w-10 h-10 border-l cursor-pointer"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 flex-col">
                                        <label htmlFor="primary-button-font-color" className="text-sm font-medium">
                                            Primary Button FontColor
                                        </label>
                                        <div className="flex items-center border rounded-md overflow-hidden">
                                            <input
                                                type="text"
                                                id="primary-button-font-color"
                                                name='primaryButtonFontColor'
                                                value={ apperanceSettings.primaryButtonFontColor }
                                                onChange={ handleAppearanceSettings }
                                                className="w-24 px-2 py-1 text-sm border-none focus:outline-none"
                                            />
                                            <input
                                                type="color"
                                                name='primaryButtonFontColor'
                                                value={ apperanceSettings.primaryButtonFontColor }
                                                onChange={ handleAppearanceSettings }
                                                className="w-10 h-10 border-l cursor-pointer"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 flex-col">
                                        <label htmlFor="primary-button-hover-color" className="text-sm font-medium">
                                            Primary Button HoverColor
                                        </label>
                                        <div className="flex items-center border rounded-md overflow-hidden">
                                            <input
                                                type="text"
                                                id="primary-button-hover-color"
                                                name='primaryButtonHoverColor'
                                                value={ apperanceSettings.primaryButtonHoverColor }
                                                onChange={ handleAppearanceSettings }
                                                className="w-24 px-2 py-1 text-sm border-none focus:outline-none"
                                            />
                                            <input
                                                type="color"
                                                name='primaryButtonHoverColor'
                                                value={ apperanceSettings.primaryButtonHoverColor }
                                                onChange={ handleAppearanceSettings }
                                                className="w-10 h-10 border-l cursor-pointer"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 flex-col">
                                        <label htmlFor="secondary-button-background-color" className="text-sm font-medium">
                                            Secondary Button Background
                                        </label>
                                        <div className="flex items-center border rounded-md overflow-hidden">
                                            <input
                                                type="text"
                                                id="secondary-button-background-color"
                                                name='secondaryButtonBackgroundColor'
                                                value={ apperanceSettings.secondaryButtonBackgroundColor }
                                                onChange={ handleAppearanceSettings }
                                                className="w-24 px-2 py-1 text-sm border-none focus:outline-none"
                                            />
                                            <input
                                                type="color"
                                                name='secondaryButtonBackgroundColor'
                                                value={ apperanceSettings.secondaryButtonBackgroundColor }
                                                onChange={ handleAppearanceSettings }
                                                className="w-10 h-10 border-l cursor-pointer"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 flex-col">
                                        <label htmlFor="secondary-button-font-color" className="text-sm font-medium">
                                            Secondary Button FontColor
                                        </label>
                                        <div className="flex items-center border rounded-md overflow-hidden">
                                            <input
                                                type="text"
                                                id="secondary-button-font-color"
                                                name='secondaryButtonFontColor'
                                                value={ apperanceSettings.secondaryButtonFontColor }
                                                onChange={ handleAppearanceSettings }
                                                className="w-24 px-2 py-1 text-sm border-none focus:outline-none"
                                            />
                                            <input
                                                type="color"
                                                name='secondaryButtonFontColor'
                                                value={ apperanceSettings.secondaryButtonFontColor }
                                                onChange={ handleAppearanceSettings }
                                                className="w-10 h-10 border-l cursor-pointer"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 flex-col">
                                        <label htmlFor="secondary-button-hover-color" className="text-sm font-medium">
                                            Secondary Button HoverColor
                                        </label>
                                        <div className="flex items-center border rounded-md overflow-hidden">
                                            <input
                                                type="text"
                                                id="secondary-button-hover-color"
                                                name='secondaryButtonHoverColor'
                                                value={ apperanceSettings.secondaryButtonHoverColor }
                                                onChange={ handleAppearanceSettings }
                                                className="w-24 px-2 py-1 text-sm border-none focus:outline-none"
                                            />
                                            <input
                                                type="color"
                                                name='secondaryButtonHoverColor'
                                                value={ apperanceSettings.secondaryButtonHoverColor }
                                                onChange={ handleAppearanceSettings }
                                                className="w-10 h-10 border-l cursor-pointer"
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="fontSize" className="block text-sm font-medium text-gray-700">
                                            Font Size
                                        </label>
                                        <input
                                            type="range"
                                            id="fontSize"
                                            name="fontSize"
                                            min="10"
                                            max="20"
                                            value={ apperanceSettings.fontSize }
                                            onChange={ handleAppearanceSettings }
                                            className="mt-2 w-full"
                                        />
                                        <p className="text-sm mt-1">Font Size: { apperanceSettings.fontSize }px</p>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="borderRadious" className="block text-sm font-medium text-gray-700">
                                            Border Radius
                                        </label>
                                        <input
                                            type="range"
                                            id="borderRadious"
                                            name="borderRadious"
                                            min="0"
                                            max="50"
                                            value={ apperanceSettings.borderRadious }
                                            onChange={ handleAppearanceSettings }
                                            className="mt-2 w-full"
                                        />
                                        <p className="text-sm mt-1">Border Radius: { apperanceSettings.borderRadious }px</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
                <button className='mt-3 text-center w-full bg-zinc-400 px-2 py-3 rounded-xl border-none' onClick={ (event) => { event.preventDefault(); logCustomizeOptions(); } }>Apply Change</button>
                <button onClick={ () => toggleShowObject() } className='mt-3 text-center w-full bg-blue-800 px-2 py-3 rounded-xl border-none text-white'>
                    { showObject ? "Close" : "Show Code" }
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
