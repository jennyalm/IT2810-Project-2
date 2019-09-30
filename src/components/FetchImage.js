import React from "react"

class FetchImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenPic: ""
        };
        this.getImage = this.getImage.bind(this)
    }

    // fetches the svg fila from public with pictureCategory and imageName, then changes chosenPic to the newly fetched svg.
    getImage(){
        fetch(process.env.PUBLIC_URL + "/svg_images/" + this.props.pictureCategory + "/" + this.props.imageName)
            .then(response => response.text())
            .then(data =>{
                this.setState({
                    chosenPic : data
                })
            })
    }

    // runs getImage when the components state or props gets an update if current pictureCategory not equals previous pictureCategory.
    componentDidUpdate(prevProps) {
        if(this.props.pictureCategory !== prevProps.pictureCategory){
            this.getImage()
        }
    }

    // runs getImage when the component is made
    componentDidMount() {
        this.getImage()
    }

    // dangerouslySetInnerHTML is not the greatest option here, since it can be "hacked", however the task is not concerned with security, so we will leave it like this.
    render() {
            return (
                <div dangerouslySetInnerHTML={{__html: this.state.chosenPic}}/>
            );
        }
    }



export default FetchImage