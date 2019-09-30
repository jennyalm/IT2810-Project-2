import React from "react"

import "../App.css"

import BildeSettings from "../data/bildeSettings.json"
import LydSettings from "../data/lydSettings.json"
import TekstSettings from "../data/tekstSettings.json"





function MediaSettings(props){

    {/* We setup our radio buttons with 3 json files, this makes out code more readable since we only need to see 3 inputs instead of 12. */}
    const bSettings = BildeSettings.map(item =>
        <form>
            <label>
                <input
                    type={item.type}
                    name={item.name}
                    value={item.path}
                    checked={item.path === props.pictureCategory}
                    onChange={props.handleNewPicture}
                />
                {item.label}
            </label>
        </form>
    )
    const lSettings = LydSettings.map(item =>
        <form>
            <label>
                <input
                    type={item.type}
                    name={item.name}
                    value={item.id}
                    checked={item.id === props.soundCategory}
                    onChange={props.handleNewSound}
                />
                {item.label}
            </label>
        </form>
    )
    const tSettings = TekstSettings.map(item =>
        <form>
            <label>
                <input
                    type={item.type}
                    name={item.name}
                    value={item.id}
                    checked={item.id === props.textCategory}
                    onChange={props.handleNewText}
                />
                {item.label}
            </label>
        </form>

    )


    /* returns the layout of the settings, picture categories first, then sound categories and then text settings. in the end we have the save/show favorite buttons with a click counter under. */
    return(
        <div className="categories">
            <div className="bildeSetting">
                <p className={"bilde"}>Bilde:</p>
                {bSettings}
            </div>
            <div className="lydSetting">
                <p>Lyd:</p>
                {lSettings}
            </div>
            <div className="tekstSetting">
                <p>Tekst:</p>
                {tSettings}
            </div>
            <br />
            <div className="storageSetting">
                <div className="knapp">
                    <button className="knapp1"  onClick={props.displayFavorite}>Show Favorite</button>
                    <button className="knapp2" onClick={props.saveFavorite}>Save Favorite</button>
                </div>
                <p>Du har trykket: {props.clicks} ganger</p>
            </div>
        </div>
    )
}

export default MediaSettings
