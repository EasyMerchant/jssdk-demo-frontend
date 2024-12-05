export const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')} `;
};

export const countryOptions = [
    { value: "AF", label: "Afghanistan" },
    { value: "BY", label: "Belarus" },
    { value: "BZ", label: "Belize" },
    { value: "TD", label: "Chad" },
    { value: "LS", label: "Lesotho" },
];

export const stateOptions = {
    AF: [
        { value: "KBL", label: "Kabul" },
        { value: "HER", label: "Herat" },
        { value: "BDS", label: "Badakhshan" },
    ],
    BY: [
        { value: "MI", label: "Minsk" },
        { value: "HO", label: "Homyel" },
        { value: "VI", label: "Vitebsk" },
    ],
    BZ: [
        { value: "BZE", label: "Belize" },
        { value: "CAY", label: "Cayo" },
        { value: "STN", label: "Stann Creek" },
        { value: "TOL", label: "Toledo" },
    ],
    TD: [
        { value: "NDA", label: "Ndjamena" },
        { value: "LOG", label: "Logone Oriental" },
        { value: "KAN", label: "Kanem" },
        { value: "ENJ", label: "Ennedi" },
    ],
    LS: [
        { value: "MOT", label: "Motheo" },
        { value: "BEREA", label: "Berea" },
        { value: "MASERU", label: "Maseru" },
        { value: "QUTHING", label: "Quthing" },
    ]
};

export const additionalName = {
    name: "Name",
    email_address: "Email",
    phone_number: "Phone",
    description: "Description"
}


export const cities = {
    KBL: [
        { value: "KAB", label: "Kabul City" },
        { value: "PDZ", label: "Paghman District" },
        { value: "KHI", label: "Khost City" },
    ],
    HER: [
        { value: "HER", label: "Herat City" },
        { value: "GLS", label: "Gulran" },
        { value: "ZAK", label: "Zaranj" },
    ],
    BDS: [
        { value: "FAZ", label: "Faizabad" },
        { value: "BDA", label: "Badakhshan City" },
    ],
    MI: [
        { value: "MI", label: "Minsk City" },
        { value: "BRG", label: "Brest" },
        { value: "GRD", label: "Grodno" },
    ],
    HO: [
        { value: "HO", label: "Homyel City" },
        { value: "MOZY", label: "Mozyr" },
        { value: "RHA", label: "Rechitsa" },
    ],
    VI: [
        { value: "VI", label: "Vitebsk City" },
        { value: "ORS", label: "Orsha" },
        { value: "LIO", label: "Liozno" },
    ],
    BZE: [
        { value: "BZE", label: "Belize City" },
        { value: "SAN", label: "San Ignacio" },
    ],
    CAY: [
        { value: "CAY", label: "Cayo City" },
        { value: "BEN", label: "Benque Viejo" },
    ],
    STN: [
        { value: "STN", label: "Stann Creek Town" },
        { value: "HOP", label: "Hopkins" },
    ],
    TOL: [
        { value: "TOL", label: "Toledo Town" },
        { value: "PUN", label: "Punta Gorda" },
    ],
    NDA: [
        { value: "NDA", label: "Ndjamena City" },
        { value: "BIT", label: "Biltine" },
    ],
    LOG: [
        { value: "LOG", label: "Logone Oriental" },
        { value: "MBO", label: "Moundou" },
    ],
    KAN: [
        { value: "KAN", label: "Kanem Region" },
        { value: "BEB", label: "Bebedjia" },
    ],
    ENJ: [
        { value: "ENJ", label: "Ennedi Region" },
        { value: "BOK", label: "Bokoro" },
    ],
    MOT: [
        { value: "MAS", label: "Motheo City" },
        { value: "ROM", label: "Roma" },
    ],
    BEREA: [
        { value: "BERE", label: "Berea City" },
        { value: "MATS", label: "Matsieng" },
    ],
    MASERU: [
        { value: "MAS", label: "Maseru City" },
        { value: "MAPUT", label: "Maputsoe" },
    ],
    QUTHING: [
        { value: "QTH", label: "Quthing City" },
        { value: "QHA", label: "Qacha's Nek" },
    ]
};

