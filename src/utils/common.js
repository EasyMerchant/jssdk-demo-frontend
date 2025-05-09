export const appearanceColorOptions = [
    {
        label: 'Body Background Color',
        name: 'bodyBackgroundColor',
    },
    {
        label: 'Container Background Color',
        name: 'containerBackgroundColor',
    },
    {
        label: 'Primary Button Background',
        name: 'primaryButtonBackgroundColor',
    },
    {
        label: 'Primary Button Font Color',
        name: 'primaryButtonFontColor',
    },
    {
        label: 'Primary Button Hover Color',
        name: 'primaryButtonHoverColor',
    },
    {
        label: 'Secondary Button Background',
        name: 'secondaryButtonBackgroundColor',
    },
    {
        label: 'Secondary Button Font Color',
        name: 'secondaryButtonFontColor',
    },
    {
        label: 'Secondary Button Hover Color',
        name: 'secondaryButtonHoverColor',
    },
];

export const appearanceFontOptions = [
    {
        label: 'Primary Font Color',
        name: 'primaryFontColor',
    },
    {
        label: 'Secondary Font Color',
        name: 'secondaryFontColor',
    },]


export const fontFamilyList = [
    {
        name: "Inter",
        value: `"Inter", sans-serif`,
    },
    {
        name: "Roboto",
        value: `"Roboto", sans-serif`,
    },
    {
        name: "Open Sans",
        value: `"Open Sans", sans-serif`,
    },
    {
        name: "Lato",
        value: `"Lato", sans-serif`,
    },
    {
        name: "Montserrat",
        value: `"Montserrat", sans-serif`,
    },
    {
        name: "Oswald",
        value: `"Oswald", sans-serif`,
    },
    {
        name: "Source Sans 3",
        value: `"Source Sans 3", sans-serif`,
    },
    {
        name: "PT Sans",
        value: `"PT Sans", sans-serif`,
    },
    {
        name: "Merriweather",
        value: `"Merriweather", sans-serif`,
    },
    {
        name: "Nunito Sans",
        value: `"Nunito Sans", sans-serif`,
    },
    {
        name: "Roboto Mono",
        value: `"Roboto Mono", monospace`,
    },
]



export const countryCurrency = [
    { value: 'usd', label: 'USD' }, // United States Dollar
    { value: 'ind', label: 'INR' }, // Indian Rupee
    { value: 'uk', label: 'GBP' }, // British Pound Sterling
    { value: 'eur', label: 'EUR' }, // Euro
    { value: 'jpn', label: 'JPY' }, // Japanese Yen
    { value: 'chn', label: 'CNY' }, // Chinese Yuan
    { value: 'aus', label: 'AUD' }, // Australian Dollar
    { value: 'cad', label: 'CAD' }, // Canadian Dollar
    { value: 'sgp', label: 'SGD' }, // Singapore Dollar
    { value: 'nzl', label: 'NZD' }, // New Zealand Dollar
    { value: 'saf', label: 'ZAR' }, // South African Rand
    { value: 'chf', label: 'CHF' }, // Swiss Franc
    { value: 'brl', label: 'BRL' }, // Brazilian Real
    { value: 'rub', label: 'RUB' }, // Russian Ruble
    { value: 'krw', label: 'KRW' }, // South Korean Won
    { value: 'mxn', label: 'MXN' }, // Mexican Peso
    { value: 'sek', label: 'SEK' }, // Swedish Krona
    { value: 'nok', label: 'NOK' }, // Norwegian Krone
    { value: 'dkk', label: 'DKK' }, // Danish Krone
    { value: 'hkd', label: 'HKD' }, // Hong Kong Dollar
    { value: 'myr', label: 'MYR' }, // Malaysian Ringgit
    { value: 'thb', label: 'THB' }, // Thai Baht
    { value: 'idr', label: 'IDR' }, // Indonesian Rupiah
    { value: 'php', label: 'PHP' }, // Philippine Peso
    { value: 'sar', label: 'SAR' }, // Saudi Riyal
    { value: 'aed', label: 'AED' }, // United Arab Emirates Dirham
    { value: 'vnd', label: 'VND' }, // Vietnamese Dong
    { value: 'egp', label: 'EGP' }, // Egyptian Pound
    { value: 'pln', label: 'PLN' }, // Polish Zloty
    { value: 'try', label: 'TRY' }, // Turkish Lira
];

export const defaultOptions = {
    container: 'payments',
    environment: "sandbox",
    amount: "10.50",
    tokenOnly: false,
    currency: "usd",
    saveCard: true,
    // scanCard: false,
    saveAccount: true,
    submitButtonText: "Submit",
    showReceipt: true,
    showDonate: true,
    showTotal: true,
    enableRecurring: false,
    intervals: ["weekly", "monthly"],
    allowedCycles: "2",
    recurringStartDateType: "custom",
    recurringStartDate: new Date().toISOString().split('T')[0],
    authenticatedACH: false,
    showSubmitButton: true,
    paymentMethods: ['card', "ach", "crypto"],
    fields: {
        billing: [

        ],
        additional: [

        ]
    },
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
        fontFamily: `"Inter", sans-serif`,
        borderRadius: "8",
    }
}

export const defaultOptionsToggle = {
    additionalFieldsOptions: true,
    paymentOptions: true,
    fieldsOptions: false,
    appearanceSettings: true
}

export const fieldOptionsLabel = {
    billing: {
        address: "Address",
        country: "Country",
        state: "State",
        city: "City",
        postal_code: "Postal Code",
    },
    additional: {
        name: "Name",
        email_address: "Email Address",
        phone_number: "Phone Number",
        description: "Description",
    }

}