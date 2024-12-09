import React from 'react'
import { appearanceColorOptions, appearanceFontOptions } from '../utils/common';

const AppearanceSettings = ({ appearance, handleAppearanceToggle, apperanceSettings, handleAppearanceSettings }) => {
    const renderOptions = () => {

        switch (appearance) {
            case "color":
                return (
                    <div className="w-full flex items-center  flex-col gap-2">
                        { appearanceColorOptions.map((setting) => (
                            <div key={ setting.name } className="w-full flex  items-start flex-col gap-2">
                                <label className="block text-sm font-medium text-gray-700"> { setting.label }</label>
                                <div className='center h-051 bg-[#F7F7F7] w-full px-4 py-4 rounded-md'>
                                    <input
                                        type="color"
                                        name={ setting.name }
                                        value={ apperanceSettings[setting.name] }
                                        onChange={ handleAppearanceSettings }
                                        className="inline-block w-6 h-6 border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-0 sm:text-sm"
                                    /><span className='ml-2'>{ apperanceSettings[setting.name] }</span>
                                </div>
                            </div>
                        )) }
                    </div>
                )
            case "font":
                return (
                    // <div className="w-full flex items-center ps-3 flex-col">
                    //     <div className="mb-4">
                    //         <label htmlFor="fontSize" className="block text-sm font-medium text-gray-700">
                    //             Font Size
                    //         </label>
                    //         <input
                    //             type="range"
                    //             id="fontSize"
                    //             name="fontSize"
                    //             min="10"
                    //             max="20"
                    //             value={ apperanceSettings.fontSize }
                    //             onChange={ handleAppearanceSettings }
                    //             className="mt-2 w-full"
                    //         />
                    //         <p className="text-sm mt-1">Font Size: { apperanceSettings.fontSize }px</p>
                    //     </div>
                    // </div>
                    <div className="w-full bg-white rounded-lg shadow-md">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Font family</label>
                                <select
                                    // value={ fontFamily }
                                    // onChange={ (e) => setFontFamily(e.target.value) }
                                    className="mt-2 h-051 bg-[#F7F7F7] border-0 block w-full px-3 py-2  rounded-md shadow-sm focus:outline-none focus:ring-0 focus:border-0 sm:text-sm"
                                >
                                    <option>Arial</option>
                                    <option>Times New Roman</option>
                                    <option>Courier New</option>
                                </select>
                            </div>

                            <div className='flex justify-between gap-4'>
                                <div className='w-full'>
                                    <label className="block text-sm font-medium text-gray-700">Font weight</label>
                                    <select
                                        // value={ fontWeight }
                                        // onChange={ (e) => setFontWeight(e.target.value) }
                                        className="mt-2 h-051 bg-[#F7F7F7] border-0 block w-full px-3 py-2  rounded-md shadow-sm focus:outline-none focus:ring-0 focus:border-0 sm:text-sm"
                                    >
                                        <option value={ 100 } >Thin</option>
                                        <option value={ 200 }>Extra Light</option>
                                        <option value={ 300 }>Light</option>
                                        <option value={ 400 }>Normal</option>
                                        <option value={ 500 }>Medium</option>
                                        <option value={ 600 }>Semibold</option>
                                        <option value={ 700 }>Bold</option>
                                        <option value={ 800 }>Extra Bold</option>
                                        <option value={ 900 }>Black</option>
                                    </select>
                                </div>
                                <div className='w-full'>
                                    <label className="block text-sm font-medium text-gray-700">Font size</label>
                                    <select
                                        name="fontSize"
                                        value={ apperanceSettings.fontSize }
                                        onChange={ handleAppearanceSettings }
                                        className="mt-1 min-w-24 h-051 bg-[#F7F7F7] border-0 block w-full px-3 py-2  rounded-md shadow-sm focus:outline-none focus:ring-0 focus:border-0 sm:text-sm"
                                    >
                                        <option>10px</option>
                                        <option>11px</option>
                                        <option>12px</option>
                                        <option>13px</option>
                                        <option>14px</option>
                                        <option>15px</option>
                                        <option>16px</option>
                                        <option>17px</option>
                                        <option>18px</option>
                                        <option>19px</option>
                                        <option>20px</option>
                                    </select>
                                </div>
                            </div>
                            { appearanceFontOptions.map((setting) => {
                                return (
                                    <div key={ setting.name } className="w-full flex  items-start flex-col gap-2">
                                        <label className="block text-sm font-medium text-gray-700"> { setting.label }</label>
                                        <div className='flex items-center h-051 bg-[#F7F7F7] w-full px-4 py-4 rounded-md'>
                                            <input
                                                type="color"
                                                name={ setting.name }
                                                value={ apperanceSettings[setting.name] }
                                                onChange={ handleAppearanceSettings }
                                                className="inline-block w-6 h-6 border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-0 sm:text-sm"
                                            /><span className='ml-2'>{ apperanceSettings[setting.name] }</span>
                                        </div>
                                    </div>
                                )
                            }) }
                        </div>
                    </div>
                )
            case "border":
                return (
                    <div className="w-full flex items-center  flex-col">
                        <div className="mb-4 w-full">
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
                    </div>)

            default:
                return (
                    <div>Please select a options.</div>
                )
        }
    }
    return (
        <div className={ `absolute top-0 w-full h-full bg-white ${appearance ? "left-0" : "-left-80"} transition-all overflow-hidden` }>
            <button onClick={ () => handleAppearanceToggle(false) } className='mb-6 w-full h-6 flex gap-2 justify-start items-center '>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 18L9 12L15 6" stroke="#2E333E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                <span className='text-sm font-medium'> { appearance.charAt(0).toUpperCase() + appearance.slice(1) }</span>
            </button>
            <div>
                <ul>
                    { renderOptions() }
                </ul>
            </div>
        </div>
    )
}

export default AppearanceSettings;