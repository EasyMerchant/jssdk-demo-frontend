import React from 'react'
import { appearanceColorOptions, appearanceFontOptions, fontFamilyList } from '../utils/common';

const AppearanceSettings = ({ appearance, handleAppearanceToggle, apperanceSettings, handleAppearanceSettings }) => {
    const renderOptions = () => {

        switch (appearance) {
            case "color":
                return (
                    <div className="w-full flex items-center flex-col gap-2">
                        { appearanceColorOptions.map((setting) => (
                            <div key={ setting.name } className="w-full flex  items-start flex-col gap-2">
                                <label className="block text-sm font-medium text-gray-700"> { setting.label }</label>
                                <div className='flex justify-between items-center gap-1 h-051 bg-transparent border border- w-full px-2 rounded-md'>
                                    <input
                                        type="color"
                                        name={ setting.name }
                                        value={ apperanceSettings[setting.name] }
                                        onChange={ handleAppearanceSettings }
                                        className="!w-8 h-8 !border-0 !bg-transparent rounded-lg"
                                    />
                                    <input
                                        type="text"
                                        name={ setting.name }
                                        value={ apperanceSettings[setting.name] }
                                        onChange={ handleAppearanceSettings }
                                        className="inline-block w-full min-h-8 border border-gray-300 rounded-md focus:outline-none focus:ring-0 border-0 focus:border-0 bg-transparent"
                                    />
                                </div>
                            </div>
                        )) }
                    </div>
                )
            case "font":
                return (
                    <div className="w-full">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Font family</label>
                                <select
                                    name="fontFamily"
                                    value={ apperanceSettings.fontFamily }
                                    onChange={ handleAppearanceSettings }
                                    className="mt-2 h-051 bg-transparent border border-gray-300 block w-full px-3 py-2 rounded-md"
                                >
                                    { fontFamilyList.map((item, index) => (
                                        <option key={ index } value={ item.value }>{ item.name }</option>
                                    )) }
                                </select>
                            </div>

                            <div className='flex justify-between gap-4'>
                                <div className='w-full'>
                                    <label className="block text-sm font-medium text-gray-700">Font weight</label>
                                    <select
                                        name="fontWeight"
                                        value={ apperanceSettings.fontWeight }
                                        onChange={ handleAppearanceSettings }
                                        className="mt-2 h-051 bg-transparent border border-gray-300 block w-full px-3 py-2 rounded-md"
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
                                        className="mt-2 min-w-24 h-051 bg-transparent border border-gray-300 block w-full px-3 py-2 rounded-md"
                                    >
                                        <option value={ 10 } >10px</option>
                                        <option value={ 11 }>12px</option>
                                        <option value={ 12 }>11px</option>
                                        <option value={ 13 }>13px</option>
                                        <option value={ 14 }>14px</option>
                                        <option value={ 15 }>15px</option>
                                        <option value={ 16 }>16px</option>
                                        <option value={ 17 }>17px</option>
                                        <option value={ 18 }>18px</option>
                                        <option value={ 19 }>19px</option>
                                        <option value={ 20 }>20px</option>
                                    </select>
                                </div>
                            </div>
                            { appearanceFontOptions.map((setting) => {
                                return (
                                    <div key={ setting.name } className="w-full flex  items-start flex-col gap-2">
                                <label className="block text-sm font-medium text-gray-700"> { setting.label }</label>
                                <div className='flex justify-between items-center gap-1 h-051 bg-transparent border w-full px-2 rounded-md'>
                                    <input
                                        type="color"
                                        name={ setting.name }
                                        value={ apperanceSettings[setting.name] }
                                        onChange={ handleAppearanceSettings }
                                        className="!w-8 h-8 !border-0 !bg-transparent rounded-lg"
                                    />
                                    <input
                                        type="text"
                                        name={ setting.name }
                                        value={ apperanceSettings[setting.name] }
                                        onChange={ handleAppearanceSettings }
                                        className="inline-block w-full min-h-8 border border-gray-300 rounded-md focus:outline-none focus:ring-0 border-0 focus:border-0 bg-transparent"
                                    />
                                </div>
                            </div>
                                )
                            }) }
                        </div>
                    </div>
                )
            case "border":
                return (
                    <div className="w-full flex items-center flex-col">
                        <div className="mb-4 w-full">
                            <label htmlFor="borderRadius" className="block text-sm font-medium text-gray-700">
                                Border Radius
                            </label>
                            <input
                                type="range"
                                id="borderRadius"
                                name="borderRadius"
                                min="0"
                                max="50"
                                value={ apperanceSettings.borderRadius }
                                onChange={ handleAppearanceSettings }
                                className="mt-2 w-full min-h-3"
                            />
                            <p className="text-sm mt-1">Border Radius: { apperanceSettings.borderRadius }px</p>
                        </div>
                    </div>)

            default:
                return (
                    <div>Please select a options.</div>
                )
        }
    }
    return (
        <div className={ `absolute top-0 w-full h-full bg-white ${appearance ? "left-0" : "-left-80"} transition-all overflow-hidden pt-10 px-6` }>
            <button onClick={ () => handleAppearanceToggle(false) } className='mb-6 w-full h-6 flex gap-2 justify-start items-center '>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="#2E333E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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