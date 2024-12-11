import React, { useState } from 'react';
import FieldsOptions from './FieldsOptions';
import AppearanceSettings from './AppearanceSettings';

const Sidebar = ({ customizeOptions, setCustomizeOptions, handleRenderUpdate, toggleShowObject, showObject }) => {
    const optionsArray = ['card', "ach", "crypto", "wallet"];
    const [appearance, setAppearance] = useState(false);
    const [optionsToggle, setOptionsToggle] = useState({
        additionalFieldsOptions: true,
        paymentOptions: false,
        fieldsOptions:false
    });
    const {
        paymentMethods,
        saveCard,
        scanCard,
        saveAccount,
        showReceipt,
        showTotal,
        tokenOnly,
        currency,
        amount,
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

    const handleThemChange = (checked) => {
        setCustomizeOptions((prevOptions) => ({
            ...prevOptions,
            apperanceSettings: {
                ...prevOptions.apperanceSettings,
                ...(checked ? {
                    bodyBackgroundColor: "#111827",
                    containerBackgroundColor: "#1f2937",
                    primaryFontColor: "#FFFFFF",
                    secondaryFontColor: "#c5c5c5",
                    primaryButtonBackgroundColor: "#0090e7",
                    primaryButtonHoverColor: "#26a1eb",
                    primaryButtonFontColor: "#e4e4e4",
                    secondaryButtonBackgroundColor: "#0d0d0d",
                    secondaryButtonHoverColor: "#ffffff",
                    secondaryButtonFontColor: "#e4e4e4",
                    theme: "dark",
                } : {
                    bodyBackgroundColor: "#eeeff2",
                    containerBackgroundColor: "#ffffff",
                    primaryFontColor: "#000000",
                    secondaryFontColor: "#666666",
                    primaryButtonBackgroundColor: "#1757d9",
                    primaryButtonHoverColor: "#3a70df",
                    primaryButtonFontColor: "#ffffff",
                    secondaryButtonBackgroundColor: "#ffffff",
                    secondaryButtonHoverColor: "#1757d9",
                    secondaryButtonFontColor: "#1757d9",
                    theme: "light",
                }),
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

    const handleAppearanceToggle = (value) => setAppearance(value);


    return (
        <div
            id="drawer-navigation"
            className="w-392 shadow-sidebar scrollbar-hidden  h-screen  pt-10 px-6 pb-6 overflow-y-auto transition-transform bg-white dark:bg-gray-800"
            tabIndex={ -1 }
            aria-labelledby="drawer-navigation-label"
        >
            <h5
                id="drawer-navigation-label"
                className="text-base pt-0 px-0 pb-034 font-semibold text-black capitalize dark:text-white rounded-xl"
            >
                Appearance Settings
            </h5>
            <div className="relative">
                <div>
                    <ul className="font-medium flex flex-col gap-4">
                        {/* Theme Options List */ }
                        <li className="">
                            <a
                                id="theme-options-fields"
                                href="#"
                                className="flex flex-col justify-between pt-0 py-0 pb-2 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group"
                            >
                                <span className=" text-sm ">Theme</span>
                            </a>
                            <div className='flex gap-4 w-full h-20'>
                                <button className={ `w-1/2 h-full bg-[#F7F7F7] text-sm  rounded-lg ${apperanceSettings.theme === "light" ? "border-2 border-solid border-blue-600 " : ""}` } onClick={ () => handleThemChange(false) }>Light</button>
                                <button className={ `w-1/2 h-full bg-[#F7F7F7] text-sm rounded-lg ${apperanceSettings.theme === "dark" ? "border-2 border-solid border-blue-600 " : ""}` } onClick={ () => handleThemChange(true) }>Dark</button>
                            </div>
                        </li>
                        {/* Font Options */ }
                        <li className="mt-8">
                            <a
                                id="appearance-options-fields"
                                href="#"
                                className="flex flex-col justify-between pt-0 py-0 pb-2 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group"
                            >
                                <span className=" text-sm ">Appearance</span>
                            </a>
                            <div className='flex gap-4 w-full h-20'>
                                <button className={ `w-1/2 h-full bg-[#F7F7F7] text-sm rounded-lg flex flex-col items-center justify-center gap-3` } onClick={ () => handleAppearanceToggle("color") }>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <rect width="20" height="20" rx="10" fill="#1757D9" />
                                    </svg>
                                    <span>
                                        Color
                                    </span>
                                </button>
                                <button className={ `w-1/2 h-full bg-[#F7F7F7] text-sm rounded-lg flex flex-col items-center justify-center gap-3` } onClick={ () => handleAppearanceToggle("font") }>
                                    <span className=' text-sm text-xl h-5'>H1</span>
                                    <span>Font</span>
                                </button>
                                <button className={ `w-1/2 h-full bg-[#F7F7F7] text-sm rounded-lg flex flex-col items-center justify-center gap-3` } onClick={ () => handleAppearanceToggle("border") }>
                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.32292 2.5H4.82292C4.38089 2.5 3.95697 2.67559 3.64441 2.98816C3.33184 3.30072 3.15625 3.72464 3.15625 4.16667V6.66667M18.1562 6.66667V4.16667C18.1562 3.72464 17.9807 3.30072 17.6681 2.98816C17.3555 2.67559 16.9316 2.5 16.4896 2.5H13.9896M13.9896 17.5H16.4896C16.9316 17.5 17.3555 17.3244 17.6681 17.0118C17.9807 16.6993 18.1562 16.2754 18.1562 15.8333V13.3333M3.15625 13.3333V15.8333C3.15625 16.2754 3.33184 16.6993 3.64441 17.0118C3.95697 17.3244 4.38089 17.5 4.82292 17.5H7.32292" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span>
                                        Border
                                    </span>
                                </button>
                            </div>
                        </li>{/* Additional Options List */ }
                        <li className="mt-8">
                            <span className=" text-sm ">Additional Options</span>
                            <div className='flex mt-4'>
                                <input
                                    id="additional-fields-options-checkbox"
                                    type="checkbox"
                                    checked={ optionsToggle.additionalFieldsOptions }
                                    onChange={ () => {
                                        handleSidebarToggle("additional-fields-options");
                                        setOptionsToggle((pervVal) => ({ ...pervVal, additionalFieldsOptions: !pervVal.additionalFieldsOptions }))
                                    }
                                    }
                                    className="checkbox w-5 h-5 text-blue-600 bg-transparent accent-transparent border-gray-300 rounded focus:ring-transparent dark:focus:transparent dark:ring-offset-transparent dark:focus:ring-offset-transparentfocus:ring-2 dark:bg-gray-600 dark:border-transparent"
                                />
                                <label
                                    htmlFor="additional-fields-options-checkbox"
                                    className="w-full ms-3 text-sm font-medium text-gray-900 dark:text-gray-300 select-none"
                                >
                                    Configure amount
                                </label>
                            </div>
                            <ul
                                id="additional-fields-options"
                                className="w-full min-w-48 pl-8 pr-0 py-3 text-sm font-medium text-gray-900 bg-white"
                            >
                                <li className="w-full ">
                                    <span className=' text-sm pt-0 py-0 mb-2 block'>Amount</span>
                                    <div className="h-051 flex gap-4 flex-row items-center justify-center">
                                        <select
                                            name="currency"
                                            value={ currency }
                                            onChange={ handleInputChange }
                                            className="appearance-none min-w-[50px] h-full text-center block w-auto py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            style={ {
                                                background: 'none',
                                                WebkitAppearance: 'none',
                                                MozAppearance: 'none',
                                                padding: '8px 0'
                                            } }
                                        >
                                            <option value="usd">US</option>
                                            <option value="ind">IND</option>
                                        </select>
                                        <input
                                            id="billing-fields-checkbox"
                                            type="text"
                                            name="amount"
                                            value={ amount }
                                            onChange={ handleInputChange }
                                            className="bg-gray-50 h-full px-3 py-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Enter a value"
                                        />
                                    </div>
                                </li>

                            </ul>
                        </li>
                        {/* Fields Options List */ }
                        <li className="">
                            {/* <a
                                id="payment-options-fields"
                                href="#"
                                onClick={ () => handleSidebarToggle("payment-fields-options") }
                                className="flex items-center text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group"
                            >
                                <span className=" text-sm ">Fields</span>
                            </a> */}
                            <div className='flex my-3 '>
                                <input
                                    id="fields-checkbox"
                                    type="checkbox"
                                    checked={ optionsToggle.fieldsOptions }
                                    onChange={ () => {
                                        handleSidebarToggle("fields-options-checkbox")
                                        setOptionsToggle((pervVal) => ({ ...pervVal, fieldsOptions: !pervVal.fieldsOptions }))
                                    }
                                    }
                                    className="checkbox w-5 h-5 text-blue-600 bg-transparent accent-transparent border-gray-300 rounded focus:ring-transparent dark:focus:ring-transparent dark:ring-offset-transparent dark:focus:ring-offset-transparent focus:ring-0 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label
                                    htmlFor="fields-checkbox"
                                    className="w-full ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 select-none"
                                >
                                    Fields
                                </label>
                            </div>
                            <ul
                                id="fields-options-checkbox"
                                className="hidden w-full min-w-48  px-4 py-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            >
                                <li className="w-full py-1 rounded-t-lg dark:border-gray-600">
                                    <div className="flex items-center gap-x-3">
                                        <input
                                            id="billing-fields-checkbox"
                                            type="checkbox"
                                            name='billing'
                                            checked={ billing.length > 0 }
                                            onChange={ (event) => handleFieldsRender(event) }
                                            className="checkbox w-5 h-5 text-blue-600 bg-transparent accent-transparent border-gray-300 rounded focus:ring-transparent dark:focus:ring-transparent dark:ring-offset-transparent dark:focus:ring-offset-transparent focus:ring-0 dark:bg-gray-600 dark:border-gray-500"
                                        />
                                        <label
                                            htmlFor="billing-fields-checkbox"
                                            className="w-full text-sm font-medium text-gray-900 dark:text-gray-300 select-none"
                                        >
                                            Billing Info
                                        </label>
                                    </div>
                                    { billing.length > 0 && <FieldsOptions data={ billing } handleFieldsOptions={ handleFieldsOptions } type="billing" /> }
                                </li>
                                <li className="w-full py-1 rounded-t-lg dark:border-gray-600">
                                    <div className="flex items-center gap-x-3">
                                        <input
                                            id="additional-fields-checkbox"
                                            type="checkbox"
                                            name='additional'
                                            checked={ additional.length > 0 }
                                            onChange={ (event) => handleFieldsRender(event) }
                                            className="checkbox w-5 h-5 text-blue-600 bg-transparent accent-transparent border-gray-300 rounded focus:ring-transparent dark:focus:ring-transparent dark:ring-offset-transparent dark:focus:ring-offset-transparent focus:ring-0 dark:bg-gray-600 dark:border-gray-500"
                                        />
                                        <label
                                            htmlFor="additional-fields-checkbox"
                                            className="w-full text-sm font-medium text-gray-900 dark:text-gray-300 select-none"
                                        >
                                            Additional Info
                                        </label>
                                    </div>
                                    { additional.length > 0 && <FieldsOptions data={ additional } handleFieldsOptions={ handleFieldsOptions } type="additional" /> }
                                </li>
                            </ul>
                        </li>
                        {/* Card Options List */ }
                        <li className="w-full">
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="token-only-checkbox"
                                    type="checkbox"
                                    name='tokenOnly'
                                    checked={ tokenOnly }
                                    onChange={ (event) => handleCardCheckboxChange(event) }
                                    className="checkbox w-5 h-5 text-blue-600 bg-transparent accent-transparent border-gray-300 rounded focus:ring-transparent dark:focus:ring-transparent dark:ring-offset-transparent dark:focus:ring-offset-transparent focus:ring-0 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label
                                    htmlFor="token-only-checkbox"
                                    className="w-full text-sm font-medium text-gray-900 dark:text-gray-300 select-none"
                                >
                                    Token Only
                                </label>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={ 20 }
                                    height={ 20 }
                                    viewBox="0 0 20 20"
                                    fill="none"
                                >
                                    <path
                                        d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                                        stroke="#2E333E"
                                        strokeWidth={ 2 }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M7.5 7.66915C7.70163 7.11262 8.09962 6.64334 8.62346 6.34442C9.1473 6.0455 9.7632 5.93623 10.3621 6.03596C10.9609 6.1357 11.5041 6.43801 11.8954 6.88934C12.2867 7.34067 12.5009 7.91191 12.5 8.50186C12.5 10.1673 9.9271 11 9.9271 11"
                                        stroke="#2E333E"
                                        strokeWidth={ 2 }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M9.85156 14.2422H9.86156"
                                        stroke="#2E333E"
                                        strokeWidth={ 2 }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>

                            </div>
                        </li>
                        <li className="w-full">
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="save-card-checkbox"
                                    type="checkbox"
                                    name='saveCard'
                                    checked={ saveCard }
                                    onChange={ (event) => handleCardCheckboxChange(event) }
                                    className="checkbox w-5 h-5 text-blue-600 bg-transparent accent-transparent border-gray-300 rounded focus:ring-transparent dark:focus:ring-transparent dark:ring-offset-transparent dark:focus:ring-offset-transparent focus:ring-0 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label
                                    htmlFor="save-card-checkbox"
                                    className="w-full text-sm font-medium text-gray-900 dark:text-gray-300 select-none"
                                >
                                    Save Card
                                </label>
                            </div>
                        </li>
                        <li className="w-full">
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="scan-card-checkbox"
                                    type="checkbox"
                                    name='scanCard'
                                    checked={ scanCard }
                                    onChange={ (event) => handleCardCheckboxChange(event) }
                                    className="checkbox w-5 h-5 text-blue-600 bg-transparent accent-transparent border-gray-300 rounded focus:ring-transparent dark:focus:ring-transparent dark:ring-offset-transparent dark:focus:ring-offset-transparent focus:ring-0 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label
                                    htmlFor="scan-card-checkbox"
                                    className="w-full text-sm font-medium text-gray-900 dark:text-gray-300 select-none"
                                >
                                    Scan Card
                                </label>
                            </div>
                        </li>
                        {/* Other Options List */ }
                        <li className="w-full">
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="save-account-checkbox"
                                    type="checkbox"
                                    name='saveAccount'
                                    checked={ saveAccount }
                                    onChange={ (event) => handleCardCheckboxChange(event) }
                                    className="checkbox w-5 h-5 text-blue-600 bg-transparent accent-transparent border-gray-300 rounded focus:ring-transparent dark:focus:ring-transparent dark:ring-offset-transparent dark:focus:ring-offset-transparent focus:ring-0 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label
                                    htmlFor="save-account-checkbox"
                                    className="w-full text-sm font-medium text-gray-900 dark:text-gray-300 select-none"
                                >
                                    Save Account
                                </label>
                            </div>
                        </li>
                        <li className="w-full">
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="show-receipt-checkbox"
                                    type="checkbox"
                                    name='showReceipt'
                                    checked={ showReceipt }
                                    onChange={ (event) => handleCardCheckboxChange(event) }
                                    className="checkbox w-5 h-5 text-blue-600 bg-transparent accent-transparent border-gray-300 rounded focus:ring-transparent dark:focus:ring-transparent dark:ring-offset-transparent dark:focus:ring-offset-transparent focus:ring-0 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label
                                    htmlFor="show-receipt-checkbox"
                                    className="w-full text-sm font-medium text-gray-900 dark:text-gray-300 select-none"
                                >
                                    Show Receipt
                                </label>
                            </div>
                        </li>
                        <li className="w-full">
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="show-total-checkbox"
                                    type="checkbox"
                                    name='showTotal'
                                    checked={ showTotal }
                                    onChange={ (event) => handleCardCheckboxChange(event) }
                                    className="checkbox w-5 h-5 text-blue-600 bg-transparent accent-transparent border-gray-300 rounded focus:ring-transparent dark:focus:ring-transparent dark:ring-offset-transparent dark:focus:ring-offset-transparent focus:ring-0 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label
                                    htmlFor="show-total-checkbox"
                                    className="w-full text-sm font-medium text-gray-900 dark:text-gray-300 select-none"
                                >
                                    Show Total
                                </label>
                            </div>
                        </li>
                        <li className="w-full">
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="show-submit-button-checkbox"
                                    type="checkbox"
                                    name='showSubmitButton'
                                    checked={ showSubmitButton }
                                    onChange={ (event) => handleCardCheckboxChange(event) }
                                    className="checkbox w-5 h-5 text-blue-600 bg-transparent accent-transparent border-gray-300 rounded focus:ring-transparent dark:focus:ring-transparent dark:ring-offset-transparent dark:focus:ring-offset-transparent focus:ring-0 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label
                                    htmlFor="show-submit-button-checkbox"
                                    className="w-full text-sm font-medium text-gray-900 dark:text-gray-300 select-none"
                                >
                                    Show Submit Button
                                </label>
                            </div>
                        </li>
                        {/* Submit Button Text */ }
                        { showSubmitButton && <li className="pl-8">
                            <label htmlFor="submit_btn_text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Submit Button Text</label>
                            <input type="text" id="submit_btn_text" name="submitButtonText" className="bg-gray-50 px-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter a value" value={ submitButtonText } onChange={ handleInputChange } />
                        </li> }
                        {/* Payment Options List */ }
                        <li>
                            <div className='flex my-3 '>
                                <input
                                    id="payment-method-checkbox"
                                    type="checkbox"
                                    checked={ optionsToggle.paymentOptions }
                                    onChange={ () => {
                                        handleSidebarToggle("payment-options");
                                        setOptionsToggle((pervVal) => ({ ...pervVal, paymentOptions: !pervVal.paymentOptions }))
                                    }
                                    }
                                    className="checkbox w-5 h-5 text-blue-600 bg-transparent accent-transparent border-gray-300 rounded focus:ring-transparent dark:focus:ring-transparent dark:ring-offset-transparent dark:focus:ring-offset-transparent focus:ring-0 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label
                                    htmlFor="payment-method-checkbox"
                                    className="w-full ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 select-none"
                                >
                                    Payment method
                                </label>
                            </div>
                            <ul
                                id="payment-options"
                                className="hidden w-full min-w-48 mt-2 px-4 py-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            >
                                { optionsArray.map((method, index) => {
                                    return (
                                        <li
                                            key={ method }
                                            className="w-full py-1 rounded-t-lg dark:border-gray-600"
                                        >
                                            <div className="flex items-center gap-x-3">
                                                <input
                                                    id={ `${method}-checkbox` }
                                                    type="checkbox"
                                                    checked={ paymentMethods.includes(method) }
                                                    onChange={ () => handleCheckboxChange(method) }
                                                    className="checkbox w-5 h-5 text-blue-600 bg-transparent accent-transparent border-gray-300 rounded focus:ring-transparent dark:focus:ring-transparent dark:ring-offset-transparent dark:focus:ring-offset-transparent focus:ring-0 dark:bg-gray-600 dark:border-gray-500"
                                                />
                                                <label
                                                    htmlFor={ `${method}-checkbox` }
                                                    className="w-full text-sm font-medium text-gray-900 dark:text-gray-300 select-none"
                                                >
                                                    { payMethod[index].charAt(0).toUpperCase() + payMethod[index].slice(1) }
                                                </label>
                                            </div>
                                        </li>
                                    )
                                }) }
                            </ul>
                        </li>
                    </ul>
                    <button className='mt-3 text-center w-full bg-zinc-400 px-2 py-3 rounded-xl border-none' onClick={ (event) => { event.preventDefault(); logCustomizeOptions(); } }>Apply Change</button>
                    <button onClick={ () => toggleShowObject() } className='mt-3 text-center w-full bg-blue-800 px-2 py-3 rounded-xl border-none text-white'>
                        { showObject ? "Close" : "Show Code" }
                    </button>
                </div>
                { appearance && <AppearanceSettings appearance={ appearance } handleAppearanceToggle={ handleAppearanceToggle } apperanceSettings={ apperanceSettings } handleAppearanceSettings={ handleAppearanceSettings } /> }
            </div>
        </div>
    );
};

export default Sidebar;
