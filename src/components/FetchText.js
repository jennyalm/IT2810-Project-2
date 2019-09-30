import React from "react"

class FetchText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allText: [],
            currentText: ""
        };
        this.getText = this.getText.bind(this)
    }

    // fetches text from a json file, and places it in this.state.allText
    getText(){
        fetch(process.env.PUBLIC_URL + "/tekster.json")
            .then(response => response.text())
            .then(data =>{
                this.setState(prevState => {
                    return{
                        allText : JSON.parse(data)
                    }
                })
            })
    }

    // since every text is in the same json we can simply run componentDidMount and then run getText().
    componentDidMount() {
        this.getText()
    }


    render() {

        // maps the data from allText, finds the correct text based on type and label, then splits it were there are \m
        const textData = this.state.allText.map(item =>
                item.type === this.props.textCategory && item.label === this.props.tabCategory ?
                    item.text.split('\n').map(line => <p>{line} <br /></p>) :
                    null
        )


        return(
            <p>{textData}</p>
        )




    }
}



export default FetchText
