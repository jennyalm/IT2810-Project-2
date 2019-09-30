import React from 'react'

class AudioPlayer extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
        this.getSound = this.getSound.bind(this)

    }

    // pauses the audio and then loads it. This is needed to rerender the sound if it changes. It's not enough to just edit the src in source.
    getSound(){
        this.playAudio.pause();
        this.playAudio.load();
    }

    // runs getSound() whenever the component updates it's props and current soundCategory not equals the previous one.
    componentDidUpdate(prevProps){
        if(this.props.soundCategory !== prevProps.soundCategory ) {
            this.getSound()
        }
    }

    // runs getSound() when the component is made.
    componentDidMount(){
        this.getSound()
    }

    // returns a div with a audio tag and a source. The source gets the correct path from public with soundCategory and soundName
    render() {
        return (
            <div style={{width: "100%", height: "100%"}}>
                <audio
                    controls
                    ref={(playAudio) => { this.playAudio = playAudio; }}
                    style={{width: "100%", height: "100%"}}
                >
                    <source ref="audio"
                            src={process.env.PUBLIC_URL + "/Sound/" + this.props.soundCategory + "/" + this.props.soundName}
                            type="audio/mpeg"
                    />
                </audio>
            </div>

        );
    }
}

export default AudioPlayer;