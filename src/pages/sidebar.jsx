import React, { useState } from 'react';
import FieldsOptions from './FieldsOptions';
import AppearanceSettings from './AppearanceSettings';
import { Tooltip } from '../utils/commonUtils';
import ReactSelectDropdown from '../components/ReactSelectDropdown';
import { countryCurrency } from '../utils/common';

const Sidebar = ({ customizeOptions, setCustomizeOptions, handleRenderUpdate, toggleShowObject, showObject }) => {
    const optionsArray = ['card', "ach", "crypto", "wallet"];
    const [appearance, setAppearance] = useState(false);
    const [optionsToggle, setOptionsToggle] = useState({
        additionalFieldsOptions: true,
        paymentOptions: true,
        fieldsOptions: false,
        appearanceSettings: true
    });
    const {
        paymentMethods,
        saveCard,
        // scanCard,
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
    const handleCheckboxChange = async (method) => {
        await setCustomizeOptions((prevOptions) => {
            const updatedMethods = prevOptions.paymentMethods.includes(method)
                ? prevOptions.paymentMethods.filter((item) => item !== method)
                : [...prevOptions.paymentMethods, method];

            return { ...prevOptions, paymentMethods: updatedMethods };
        });
        if (method === "card") {
            if (paymentMethods.includes(method)) {
                setCustomizeOptions((prevData) => ({
                    ...prevData,
                    saveCard: false,
                    // scanCard: false,
                }));
            } else {
                setCustomizeOptions((prevData) => ({
                    ...prevData,
                    saveCard: true,
                    // scanCard: true,
                }));
            }
        }
        if (method === "ach") {
            if (paymentMethods.includes(method)) {
                setCustomizeOptions((prevData) => ({
                    ...prevData,
                    saveAccount: false,
                }));
            } else {
                setCustomizeOptions((prevData) => ({
                    ...prevData,
                    saveAccount: true,
                }));
            }
        }
        setCustomizeOptions((prevData) => ({
            ...prevData,
            ...(!prevData.paymentMethods.includes("card") && !prevData.paymentMethods.includes("ach") && { tokenOnly: false })
        }));
    };

    const handleTogglePaymentMEthods = (event) => {
        const { checked } = event.target
        setCustomizeOptions((pervData) => ({
            ...pervData,
            paymentMethods: checked ? ['card', "ach", "crypto", "wallet"] : []
        }))
    }
    const handleInputChange = (event) => {
        const { name, value } = event.target
        setCustomizeOptions((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleInputBlur = (value) => {
        if (value < 0.5) value = "0.50"
        setCustomizeOptions((prevData) => ({
            ...prevData,
            amount: value
        }))
    }

    const handleCardCheckboxChange = (event) => {
        const { name, checked } = event.target
        if (name === "tokenOnly") {
            setCustomizeOptions((prevOptions) => ({
                ...prevOptions,
                [name]: checked,
                showReceipt: !checked
            }));
        } else if (name === "showSubmitButton") {
            setCustomizeOptions((prevOptions) => ({
                ...prevOptions,
                [name]: checked,
                submitButtonText: checked ? "Submit" : ""
            }));
        } else {
            setCustomizeOptions((prevOptions) => ({
                ...prevOptions,
                [name]: checked,
            }));
        }
    };

    const toggleAppearance = (checked) => {
        if (checked) {
            setCustomizeOptions((prevOptions) => ({
                ...prevOptions,
                apperanceSettings: {
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
                    fontSize: "16",
                    fontWeight: 500,
                    fontFamily: `"Montserrat", sans-serif`,
                    borderRadius: "8",
                }
            }));
        } else {
            setCustomizeOptions(({ apperanceSettings, ...prevOptions }) => {
                return { ...prevOptions }
            });
        }
    }

    const handleFieldsRender = (event) => {
        const { name, checked } = event.target
        if (name === "billing" || name === "fields") {
            setCustomizeOptions((prevOptions) => ({
                ...prevOptions,
                "fields": {
                    ...prevOptions.fields,
                    billing: checked ? [
                        { name: 'address', required: true, value: 'Test ACH Address' },
                        { name: 'country', required: true, value: 'Country' },
                        { name: 'state', required: true, value: '' },
                        { name: 'city', required: true, value: '' },
                        { name: 'postal_code', required: true, value: '' },
                    ] : []
                },
            }))
        }
        if (name === "additional" || name === "fields") {
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

    const handleSidebarToggle = (id) => document.getElementById(id)?.classList.toggle("hidden");
    const logCustomizeOptions = () => {
        handleRenderUpdate();
    };

    const handleAppearanceToggle = (value) => setAppearance(value);


    return (
        <div
            id="drawer-navigation"
            className="relative w-392 scrollbar-hidden h-screen pb-6 overflow-y-auto transition-transform bg-white dark:bg-gray-800"
            tabIndex={ -1 }
            aria-labelledby="drawer-navigation-label"
        >
            <div className='flex gap-4 sticky left-0 w-full top-0 z-30 py-4 px-2 justify-between items-center bg-slate-200'>
                <h5
                    id="drawer-navigation-label"
                    className="text-base pt-0 px-0 font-semibold text-black capitalize dark:text-white rounded-xl"
                >
                    JS SDK DEMO
                </h5>
                <div className='flex gap-2'>
                   
                    <button onClick={ () => toggleShowObject() } className='inline-flex items-center justify-center bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>
                        <svg viewBox="0 0 24 24" className='w-6 h-6' fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth={ 0 } />
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                                <path
                                    opacity="0.5"
                                    d="M13.9868 5L10.0132 19.8297"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                            </g>
                        </svg>

                    </button>
                    <button className='inline-flex items-center justify-center bg-primary-300 hover:bg-primary-200 text-white font-bold py-2 px-4 rounded' onClick={ (event) => { event.preventDefault(); logCustomizeOptions(); } }>
                        <svg viewBox="0 0 512 512" className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" fill="#000000">
                            <g id="SVGRepo_bgCarrier" strokeWidth={ 0 } />
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                            <g id="SVGRepo_iconCarrier">
                                { " " }
                                <path
                                    fill="currentColor"
                                    d="M472.971,122.344,373.656,23.029A23.838,23.838,0,0,0,356.687,16H56A24.028,24.028,0,0,0,32,40V472a24.028,24.028,0,0,0,24,24H456a24.028,24.028,0,0,0,24-24V139.313A23.838,23.838,0,0,0,472.971,122.344ZM320,48v96H176V48ZM448,464H64V48h80V176H352V48h1.373L448,142.627Z"
                                />{ " " }
                                <path
                                    fill="currentColor"
                                    d="M252,224a92,92,0,1,0,92,92A92.1,92.1,0,0,0,252,224Zm0,152a60,60,0,1,1,60-60A60.068,60.068,0,0,1,252,376Z"
                                />{ " " }
                            </g>
                        </svg>


                    </button>
                </div>
            </div>
            <div className="relative pt-10 px-6">
                <div>
                    <ul className="font-medium flex flex-col gap-4">
                        {/* Theme Options List */ }
                        <li className="">
                            <div className='flex gap-x-3'>
                                <input
                                    id="appearance-settings-checkbox"
                                    type="checkbox"
                                    checked={ optionsToggle.appearanceSettings }
                                    onChange={ (event) => {
                                        handleSidebarToggle("appearance-settings-fields");
                                        toggleAppearance(event.target.checked);
                                        setOptionsToggle((pervVal) => ({ ...pervVal, appearanceSettings: !pervVal.appearanceSettings }));
                                    }
                                    }
                                    className="checkbox w-5 h-5 text-blue-600 bg-transparent accent-transparent border-gray-300 rounded focus:ring-transparent dark:focus:ring-transparent dark:ring-offset-transparent dark:focus:ring-offset-transparent focus:ring-0 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label
                                    htmlFor="appearance-settings-checkbox"
                                    className="w-full text-sm font-medium text-gray-900 dark:text-gray-300 select-none"
                                >
                                    Appearance Settings
                                </label>
                            </div>

                            <div id="appearance-settings-fields" className='w-full'>                           
                                <div className='flex gap-4 w-full h-20 mt-3'>
                                    <button className={ `w-1/2 h-full bg-[#F7F7F7] text-sm  rounded-lg ${apperanceSettings?.theme === "light" ? "border-2 border-solid border-blue-600 " : ""}` } onClick={ () => handleThemChange(false) }>Light</button>
                                    <button className={ `w-1/2 h-full bg-[#F7F7F7] text-sm rounded-lg ${apperanceSettings?.theme === "dark" ? "border-2 border-solid border-blue-600 " : ""}` } onClick={ () => handleThemChange(true) }>Dark</button>
                                </div>
                                <div className='mt-6'>
                                <label
                                    className="w-full ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 select-none"
                                >
                                    Appearance
                                </label>
                                </div>
                                <div className='my-4 flex gap-4 w-full h-20'>
                                    <button className={ `w-1/2 h-full bg-[#F7F7F7] text-sm rounded-lg flex flex-col items-center justify-center gap-3` } onClick={ () => handleAppearanceToggle("color") }>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <rect width="20" height="20" rx="10" fill="#1757D9" />
                                        </svg>
                                        <span>
                                            Color
                                        </span>
                                    </button>
                                    <button className={ `w-1/2 h-full bg-[#F7F7F7] text-sm rounded-lg flex flex-col items-center justify-center gap-3` } onClick={ () => handleAppearanceToggle("font") }>
                                        <span className=' text-xl h-5'>H1</span>
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
                            </div>
                        </li>
                        {/* Configure amount */ }
                        <li className="mt-0">
                            <div className='flex mt-0'>
                                <input
                                    id="additional-fields-options-checkbox"
                                    type="checkbox"
                                    checked={ optionsToggle.additionalFieldsOptions }
                                    onChange={ () => {
                                        handleSidebarToggle("additional-fields-options");
                                        handleSidebarToggle("additional-fields-options-alert");
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
                                className="w-full min-w-48 pl-8 pr-0 pt-3 text-sm font-medium text-gray-900 bg-white"
                            >
                                <li className="w-full ">
                                    <span className=' text-sm pt-0 py-0 mb-2 block'>Amount</span>
                                    <div className="h-051 flex gap-4 flex-row items-center justify-center">
                                        <ReactSelectDropdown defaultValue={ currency } options={ countryCurrency } setCustomizeOptions={ setCustomizeOptions } />
                                        <input
                                            id="amount-fields-input"
                                            type="text"
                                            name="amount"
                                            value={ amount }
                                            onChange={ handleInputChange }
                                            onBlur={ e => handleInputBlur(Number(amount).toFixed(2)) }
                                            className="bg-gray-50 h-full px-3 py-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Enter a value"
                                        />
                                    </div>
                                </li>
                            </ul>
                           {!optionsToggle.additionalFieldsOptions&& <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 mt-3" role="alert">
                                    <p className="font-bold">Note:</p>
                                    <p>Amount must be provided at the time of creating payment intent by developer. For demo purpose we have used random amount in backend.</p>
                                </div>}
                        </li>
                        {/* Fields Options List */ }
                        <li className="">
                            <div className='flex gap-x-3'>
                                <input
                                    id="fields-checkbox"
                                    type="checkbox"
                                    name='fields'
                                    checked={ optionsToggle.fieldsOptions }
                                    onChange={ (event) => {
                                        handleSidebarToggle("fields-options-checkbox");
                                        handleFieldsRender(event);
                                        setOptionsToggle((pervVal) => ({ ...pervVal, fieldsOptions: !pervVal.fieldsOptions }))
                                    } }
                                    className="checkbox w-5 h-5 text-blue-600 bg-transparent accent-transparent border-gray-300 rounded focus:ring-transparent dark:focus:ring-transparent dark:ring-offset-transparent dark:focus:ring-offset-transparent focus:ring-0 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label
                                    htmlFor="fields-checkbox"
                                    className="w-full text-sm font-medium text-gray-900 dark:text-gray-300 select-none"
                                >
                                    Fields
                                </label>
                            </div>
                            <ul
                                id="fields-options-checkbox"
                                className="hidden w-full min-w-48 mt-3  px-4 py-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
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
                        {/* Payment Options List */ }
                        <li>
                            <div className='flex gap-x-3'>
                                <input
                                    id="payment-method-checkbox"
                                    type="checkbox"
                                    checked={ optionsToggle.paymentOptions }
                                    onChange={ (event) => {
                                        handleSidebarToggle("payment-options");
                                        handleTogglePaymentMEthods(event);
                                        setOptionsToggle((pervVal) => ({ ...pervVal, paymentOptions: !pervVal.paymentOptions }));
                                    }
                                    }
                                    className="checkbox w-5 h-5 text-blue-600 bg-transparent accent-transparent border-gray-300 rounded focus:ring-transparent dark:focus:ring-transparent dark:ring-offset-transparent dark:focus:ring-offset-transparent focus:ring-0 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label
                                    htmlFor="payment-method-checkbox"
                                    className="w-full text-sm font-medium text-gray-900 dark:text-gray-300 select-none"
                                >
                                    Payment method
                                </label>
                            </div>
                            <ul
                                id="payment-options"
                                className="w-full mt-3 min-w-48 mt-2 px-4 py-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
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
                                                    checked={ method === "wallet" ? false : paymentMethods.includes(method) }
                                                    onChange={ () => method === "wallet" ? console.log("coming soon") :
                                                        handleCheckboxChange(method) }
                                                    disabled={ method === "wallet" }
                                                    className={ `${method === "wallet" ? "cursor-not-allowed" : "cursor-pointer"} checkbox w-5 h-5 text-blue-600 bg-transparent accent-transparent border-gray-300 rounded focus:ring-transparent dark:focus:ring-transparent dark:ring-offset-transparent dark:focus:ring-offset-transparent focus:ring-0 dark:bg-gray-600 dark:border-gray-500` }
                                                />
                                                <label
                                                    htmlFor={ `${method}-checkbox` }
                                                    className="flex gap-7 w-full text-sm font-medium text-gray-900 dark:text-gray-300 select-none"
                                                >
                                                    { payMethod[index].charAt(0).toUpperCase() + payMethod[index].slice(1) }
                                                    { method === "wallet" && <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">coming soon</span> }
                                                </label>
                                            </div>
                                        </li>
                                    )
                                }) }
                            </ul>
                        </li>
                        {/* Token Only */ }
                        <li className="w-full">
                            <div className="relative flex items-center gap-x-3">
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
                                <Tooltip text={"When enabled we do not process payment but only tokenise the card/account."} ><svg
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
                                </Tooltip>
                            </div>
                        </li>
                        {/* Save Card */ }
                        <li className="w-full">
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="save-card-checkbox"
                                    type="checkbox"
                                    name='saveCard'
                                    checked={ saveCard }
                                    disabled={ !paymentMethods.includes("card") }
                                    onChange={ (event) => handleCardCheckboxChange(event) }
                                    className={ `${!paymentMethods.includes("card") ? "cursor-not-allowed" : "cursor-pointer"} checkbox w-5 h-5 text-blue-600 bg-transparent accent-transparent border-gray-300 rounded focus:ring-transparent dark:focus:ring-transparent dark:ring-offset-transparent dark:focus:ring-offset-transparent focus:ring-0 dark:bg-gray-600 dark:border-gray-500` }
                                />
                                <label
                                    htmlFor="save-card-checkbox"
                                    className={ `${!paymentMethods.includes("card") ? "cursor-not-allowed  text-gray-500" : "cursor-pointer  text-gray-900"} w-full text-sm font-medium dark:text-gray-300 select-none` }
                                >
                                    Save Card
                                </label>
                            </div>
                        </li>
                        {/* Scan Card */ }
                        {/* This is disabled for now.  */ }
                        {/* <li className="w-full">
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
                        </li> */}
                        {/* Save Account */ }
                        <li className="w-full">
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="save-account-checkbox"
                                    type="checkbox"
                                    name='saveAccount'
                                    checked={ saveAccount }
                                    disabled={ !paymentMethods.includes("ach") }
                                    onChange={ (event) => handleCardCheckboxChange(event) }
                                    className={ `${!paymentMethods.includes("ach") ? "cursor-not-allowed" : "cursor-pointer"} checkbox w-5 h-5 text-blue-600 bg-transparent accent-transparent border-gray-300 rounded focus:ring-transparent dark:focus:ring-transparent dark:ring-offset-transparent dark:focus:ring-offset-transparent focus:ring-0 dark:bg-gray-600 dark:border-gray-500` }
                                />
                                <label
                                    htmlFor="save-account-checkbox"
                                    className={ `${!paymentMethods.includes("ach") ? "cursor-not-allowed  text-gray-500" : "cursor-pointer  text-gray-900"} w-full text-sm font-medium dark:text-gray-300 select-none` }
                                >
                                    Save Account
                                </label>
                            </div>
                        </li>
                        {/* Show Receipt */ }
                        <li className="w-full">
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="show-receipt-checkbox"
                                    type="checkbox"
                                    name='showReceipt'
                                    checked={ showReceipt }
                                    disabled={ tokenOnly }
                                    onChange={ (event) => handleCardCheckboxChange(event) }
                                    className={ `${tokenOnly ? "cursor-not-allowed" : "cursor-pointer"} checkbox w-5 h-5 text-blue-600 bg-transparent accent-transparent border-gray-300 rounded focus:ring-transparent dark:focus:ring-transparent dark:ring-offset-transparent dark:focus:ring-offset-transparent focus:ring-0 dark:bg-gray-600 dark:border-gray-500` }
                                />
                                <label
                                    htmlFor="show-receipt-checkbox"
                                    className={ `${tokenOnly ? " text-gray-500 cursor-not-allowed" : " text-gray-900 cursor-pointer"} w-full text-sm font-medium dark:text-gray-300 select-none` }
                                >
                                    Show Receipt
                                </label>
                            </div>
                        </li>
                        {/* Show Total */ }
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
                        {/* Show Submit Button */ }
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
                        { showSubmitButton ? <li className="pl-8">
                            <label htmlFor="submit_btn_text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Submit Button Text</label>
                            <input type="text" id="submit_btn_text" name="submitButtonText" className="bg-gray-50 px-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter a value" value={ submitButtonText } onChange={ handleInputChange } />
                        </li> :
                            <li>
                                <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
                                    <p className="font-bold">Note:</p>
                                    <p>Form submission needs to be handled by developer.</p>
                                </div>
                            </li>
                        }
                    </ul>
                </div>
                { appearance && <AppearanceSettings appearance={ appearance } handleAppearanceToggle={ handleAppearanceToggle } apperanceSettings={ apperanceSettings } handleAppearanceSettings={ handleAppearanceSettings } /> }
            </div>
        </div>
    );
};

export default Sidebar;
