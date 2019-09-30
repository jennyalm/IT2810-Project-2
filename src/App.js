import React from 'react';
import './App.css';


import Header from "./components/Header";
import TabContent from "./components/TabContent";
import MediaSettings from "./components/MediaSettings";


class App extends React.Component {
    constructor(){
        super()
        this.state = {
            tabCategory: "kombinasjon1",
            pictureCategory: "dessert",
            imageName: "cake.svg",
            textCategory: "1",
            soundCategory: "electronic",
            soundName: "electronic1.mp3",
            favorite: [],
            clicks: sessionStorage.clickcount
        }

        // binds the functions to this class (App)
        this.handleNewPicture = this.handleNewPicture.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleChangeOnPage = this.handleChangeOnPage.bind(this)
        this.handleNewText = this.handleNewText.bind(this)
        this.handleNewSound = this.handleNewSound.bind(this)
        this.displayFavorite = this.displayFavorite.bind(this)
        this.saveFavorite = this.saveFavorite.bind(this)
        this.handleSoundChange = this.handleSoundChange.bind(this)
        this.clickCounter = this.clickCounter.bind(this)

    }

    // handles det changes to the picture given the different states from handleClick og handleNewPicture
    // value is this.state.pictureCategory and tab is this.state.tabCategory. Have to send them in as params because setState in handleNewPicture and handleClick are to slow to keep up.
    handleChangeOnPage(value, tab){
        let dessert = ["cake.svg", "icecream.svg", "pie.svg", "pudding.svg"]
        let drinks = ["beer.svg", "juice.svg", "soda.svg", "wine.svg"]
        let food = ["burger.svg", "hotdog.svg", "pizza.svg", "taco.svg"]
        let imgName = ""
        if(value === "dessert"){
            if(tab === "kombinasjon1"){
                imgName = dessert[0]
            } else if(tab === "kombinasjon2"){
                imgName = dessert[1]
            } else if(tab === "kombinasjon3"){
                imgName = dessert[2]
            } else{
                imgName = dessert[3]
            }
        } else if(value === "drinks"){
            if(tab === "kombinasjon1"){
                imgName = drinks[0]
            } else if(tab === "kombinasjon2"){
                imgName = drinks[1]
            } else if(tab === "kombinasjon3"){
                imgName = drinks[2]
            } else{
                imgName = drinks[3]
            }
        } else if(value === "food"){
            if(tab === "kombinasjon1"){
                imgName = food[0]
            } else if(tab === "kombinasjon2"){
                imgName = food[1]
            } else if(tab === "kombinasjon3"){
                imgName = food[2]
            } else{
                imgName = food[3]
            }
        }
        this.setState((prevState) => {
            return{
                imageName: imgName
            }
        })
    }

    // handles det changes to the sound given the different states from handleClick og handleNewSound
    // value is this.state.soundCategory and tab is this.state.tabCategory. Have to send them in as params because setState in handleNewSound and handleClick are to slow to keep up.
    handleSoundChange(value, tab){
        let electronic = ["electronic1.mp3", "electronic2.mp3", "electronic3.mp3", "electronic4.mp3"]
        let guitar = ["guitar1.mp3", "guitar2.mp3", "guitar3.mp3", "guitar4.mp3"]
        let piano = ["piano1.mp3", "piano2.mp3", "piano3.mp3", "piano4.mp3"]
        let soName = ""
        if(value === "electronic"){
            if(tab === "kombinasjon1"){
                soName = electronic[0]
            } else if(tab === "kombinasjon2"){
                soName = electronic[1]
            } else if(tab === "kombinasjon3"){
                soName = electronic[2]
            } else{
                soName = electronic[3]
            }
        } else if(value === "guitar"){
            if(tab === "kombinasjon1"){
                soName = guitar[0]
            } else if(tab === "kombinasjon2"){
                soName = guitar[1]
            } else if(tab === "kombinasjon3"){
                soName = guitar[2]
            } else{
                soName = guitar[3]
            }
        } else if(value === "piano"){
            if(tab === "kombinasjon1"){
                soName = piano[0]
            } else if(tab === "kombinasjon2"){
                soName = piano[1]
            } else if(tab === "kombinasjon3"){
                soName = piano[2]
            } else{
                soName = piano[3]
            }
        }

        this.setState((prevState) => {
            return{
                soundName: soName
            }
        })
    }

    // changes tabCategory depending on which tab you click
    handleClick(label){
        this.setState(prevState => {
            return{
                tabCategory: label
            }
        })
        // since pictureCategory and soundCategory updates here, we can use the state.
        this.handleChangeOnPage(this.state.pictureCategory, label)
        this.handleSoundChange(this.state.soundCategory, label)
    }


    // runs whenever a new category of pictures is clicked, changes the state to the new one, and then runs handleChangeOnPage which displays the new image
    handleNewPicture(event){
        const {value, name} = event.target

        this.setState((prevState) => {
            return{
                [name]: value,
            }
        });
        this.handleChangeOnPage(value, this.state.tabCategory)
    }


    // runs whenever a new category of text is clicked, changes the state to the new one, and updates the text on the page. (the text updates because of the componentDidUpdate in FetchText)
    handleNewText(event){
        const {value, name} = event.target

        this.setState((prevState) => {
            return{
                [name]: value,
            }
        });
    }

    // runs whenever a new category of sound is clicked, changes the state to the new one, and then runs handleSoundChange to display the new sound
    handleNewSound(event){

        const {value, name} = event.target
        this.setState({[name]: value});
        this.handleSoundChange(value, this.state.tabCategory)

    }

    // gets the states which is saved in localStorage and displays them to the site. Also runs the clickCounter.
    displayFavorite(){
        this.clickCounter();
        this.setState(prevState => {
            return{
                tabCategory: localStorage.getItem("tabCategory"),
                pictureCategory: localStorage.getItem("pictureCategory"),
                imageName: localStorage.getItem("imageName"),
                textCategory: localStorage.getItem("textCategory"),
                soundCategory: localStorage.getItem("soundCategory"),
                soundName: localStorage.getItem("soundName")
            }
        })
        this.handleClick(localStorage.getItem("tabCategory"))
        this.handleChangeOnPage(localStorage.getItem("pictureCategory"), localStorage.getItem("tabCategory"))
        this.handleSoundChange(localStorage.getItem("soundCategory"), localStorage.getItem("tabCategory"))

    }

    // saves the current states to localStorage and runs clickCounter.
    saveFavorite(){
        this.clickCounter();
        this.setState(prevState => {
            return{
                favorite: [
                    localStorage.setItem("tabCategory", prevState.tabCategory),
                    localStorage.setItem("pictureCategory", prevState.pictureCategory),
                    localStorage.setItem("imageName", prevState.imageName),
                    localStorage.setItem("textCategory", prevState.textCategory),
                    localStorage.setItem("soundCategory", prevState.soundCategory),
                    localStorage.setItem("soundName", prevState.soundName)
                ]
            }
        })
    }

    // updates sessionStorage.clickcount with +1 and updates the this.state.clicks
    clickCounter(){
        if (sessionStorage.clickcount) {
           sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
        } else {
            sessionStorage.clickcount = 1;
        }
        this.setState({clicks: sessionStorage.clickcount})
    }


    // renders everything, divided up in 3 parts.
    // 1. Header which displays the header
    // 2. TabContent which displays everything inside the tabs, and the tabs themselves.
    // 3. MediaSettings which displays the different settings, such as the category radio buttons and the save/show favorite buttons
    render(){
        return (
            <div className="App">
                <div className="headerDiv">
                    <Header />
                </div>
                <div className="appContent">
                    <TabContent imageName={this.state.imageName}
                                handleClick={this.handleClick}
                                tabCategory={this.state.tabCategory}
                                textCategory={this.state.textCategory}
                                pictureCategory={this.state.pictureCategory}
                                soundCategory={this.state.soundCategory}
                                soundName={this.state.soundName}

                    />
                </div>
                <div className={"settings"}>
                    <MediaSettings pictureCategory={this.state.pictureCategory}
                                   handleNewPicture={this.handleNewPicture}
                                   soundCategory={this.state.soundCategory}
                                   handleNewSound={this.handleNewSound}
                                   textCategory={this.state.textCategory}
                                   handleNewText={this.handleNewText}
                                   saveFavorite={this.saveFavorite}
                                   displayFavorite={this.displayFavorite}
                                   clicks={ this.state.clicks}

                    />
                </div>
                <br />
            </div>
                )
    }

}

export default App;
