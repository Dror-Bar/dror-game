/*
TODO:
1) Finish the game.
2) Improve art / layout (not critical).
3) Change the Navbar states in render() to a single function.
4) Break into more components?
5) Go over everything, try to maximize readability, architechture, design, good names, and so on.
6) Add comments to everything.
7) Make es6 exports and imports?
8) Change original body image? change annoying alerts?
9) Don't use same names for different inputs.
10) Change <> and </> to </> if possible.
11) Change buttons to image buttons (not necessary).
12) Require styles?
13) Build unit tests?
14) Add back to male/female screen?
*/
var React = require('react');
var Images = require('./imagesController');
var NavBar1 = require('./navBars/navBar1');
var NavBar2 = require('./navBars/navBar2');
var NavBar3Male = require('./navBars/navBar3Male');
var NavBar3Female = require('./navBars/navBar3Female');
var NavBar4Female = require('./navBars/navBar4Female');
var NavBar4Male = require('./navBars/navBar4Male');
var NavBar5Male = require('./navBars/navBar5Male');
var NavBar5Female = require('./navBars/navBar5Female');
var NavBar6Male = require('./navBars/navBar6Male');
var NavBar6Female = require('./navBars/navBar6Female');

const styles = {
    _background: {
        backgroundColor: 'gray',
        width: '100%',
        height: '100%',
    },
    _title: {
        height: 100,
        width: 600,
    },
    _div_Highlight_Head: {
        position: 'absolute',
        marginLeft: 'auto',
        marginRight: 'auto',
        left: 0,
        right: 5,
        height: 100,
        width: 100,
        border: '2px dashed red',
    },
    _div_Highlight_Chest: {
        position: 'absolute',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 85,
        left: 0,
        right: 0,
        height: 160,
        width: 130,
        border: '2px dashed red',
    },
    _div_Highlight_Legs: {
        position: 'absolute',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 200,
        left: 0,
        right: 0,
        height: 180,
        width: 110,
        border: '2px dashed red',
    },
    _divTitle: {
        display: 'flex',
        justifyContent: 'center',
    },
    _divPerson: {
        display: 'flex',
        justifyContent: 'center',
        height: 460,
    },
    _divNavBar: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 15,
    },
    _imageBody: {
        position: 'absolute',
        height: 460,
        width: 250,
    },
    _imageFace: {
        position: 'absolute',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 40,
        height: 31,
        width: 31,
        left: 0,
        right: 6,
    },
    _imageHair: {
        position: 'absolute',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 17,
        height: 100,
        width: 100,
        left: 11,
        right: 0,
    },
    _imageShirt: {
        position: 'absolute',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 75,
        height: 140,
        width: 160,
        left: 0,
        right: 3,
    },
    _imagePants: {
        position: 'absolute',
        marginTop: 190,
        height: 230,
        width: 240,
    },
    _imageArrow1: {
        position: 'absolute',
        marginLeft: 'auto',
        marginRight: 'auto',
        left: 0,
        right: 250,
        height: 100,
        width: 150,
    },
    _imageArrow2: {
        position: 'absolute',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 100,
        left: 0,
        right: 250,
        height: 100,
        width: 150,
    },
    _imageArrow3: {
        position: 'absolute',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 230,
        left: 0,
        right: 250,
        height: 100,
        width: 150,
    },
};

class MainApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = { navBar: 1, personBody: 0, personFace: 0, personHair: 0, personShirt: 0, personPants: 0, highlightHead: false, highlightChest: false, highlightLegs: false };
        this.handleClick = this.handleClick.bind(this);
        this.handleOnDrop = this.handleOnDrop.bind(this);
        this.handleOnDragEnd = this.handleOnDragEnd.bind(this);
        this.handleOnDragOver = this.handleOnDragOver.bind(this);
        this.handleOnDragLeave = this.handleOnDragLeave.bind(this);
        this.handleOnDragStart = this.handleOnDragStart.bind(this);
        this.handleOnDragEnter = this.handleOnDragEnter.bind(this);
        this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
        this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
    }

    handleClick(_type, _input) {
        if (_input === 'next') {
            if (this.state[_type] === 0)
                alert("You must choose before proceeding");
            else {
                if (_type === 'personPants')
                    alert('Coming soon!');
                else
                    this.setState({ navBar: ++this.state.navBar });
            }
        } else if (_input === 'back') {
            this.setState({ [_type]: 0 });
            this.setState({ navBar: --this.state.navBar });
        } else
            this.setState({ [_type]: _input });
    }

    handleOnMouseEnter(event) {
        event.target.style.opacity = 0.7;
    }

    handleOnMouseLeave(event) {
        event.target.style.opacity = 1;
    }

    handleOnDragStart(_type, _index, _highlight, event) {
        event.dataTransfer.setData('_type', _type);
        event.dataTransfer.setData('_index', _index);
        event.dataTransfer.setData('_highlight', _highlight);
        this.setState({ [_highlight]: true });
    }

    handleOnDragEnd(_highlight) {
        this.setState({ [_highlight]: false });
    }

    handleOnDragEnter(event) {
        event.target.style.backgroundColor = 'yellow';
        event.target.style.opacity = 0.4;
    }

    handleOnDragLeave(event) {
        event.target.style.backgroundColor = 'transparent';
        event.target.style.opacity = 1;
    }

    handleOnDragOver(event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'copy';
    }

    handleOnDrop(event) {
        let _type = event.dataTransfer.getData('_type');
        let _index = event.dataTransfer.getData('_index');
        this.setState({ [_type]: _index });
    }

    render() {
        return (
            <div style={styles._background}>
                <div style={styles._divTitle}>
                    <img src={Images.misc[0]} style={styles._title} />
                </div>
                <div style={styles._divPerson}>
                    <img src={Images.personBodies[this.state.personBody]} style={styles._imageBody} />
                    <img src={Images.personFaces[this.state.personFace]} style={styles._imageFace} />
                    <img src={Images.personPants[this.state.personPants]} style={styles._imagePants} />
                    <img src={Images.personShirts[this.state.personShirt]} style={styles._imageShirt} />
                    <img src={Images.personHair[this.state.personHair]} style={styles._imageHair} />
                    {this.state.highlightHead === true && <div>
                        <div style={styles._div_Highlight_Head} onDragEnter={this.handleOnDragEnter} onDragLeave={this.handleOnDragLeave} onDragOver={this.handleOnDragOver} onDrop={this.handleOnDrop} />
                        <img src={Images.misc[1]} style={styles._imageArrow1} />
                    </div>}
                    {this.state.highlightChest === true && <div>
                        <div style={styles._div_Highlight_Chest} onDragEnter={this.handleOnDragEnter} onDragLeave={this.handleOnDragLeave} onDragOver={this.handleOnDragOver} onDrop={this.handleOnDrop} />
                        <img src={Images.misc[1]} style={styles._imageArrow2} />
                    </div>}
                    {this.state.highlightLegs === true && <div>
                        <div style={styles._div_Highlight_Legs} onDragEnter={this.handleOnDragEnter} onDragLeave={this.handleOnDragLeave} onDragOver={this.handleOnDragOver} onDrop={this.handleOnDrop} />
                        <img src={Images.misc[1]} style={styles._imageArrow3} />
                    </div>}
                </div>
                <div style={styles._divNavBar}>
                    {this.state.navBar === 1 && <NavBar1 onClick={this.handleClick} onMouseEnter={this.handleOnMouseEnter} onMouseLeave={this.handleOnMouseLeave} />}
                    {this.state.navBar === 2 && <NavBar2 onClick={this.handleClick} />}
                    {this.state.navBar === 3 && this.state.personBody === 1 && <NavBar3Male onClick={this.handleClick} onDragStart={this.handleOnDragStart} onDragEnd={this.handleOnDragEnd} />}
                    {this.state.navBar === 3 && this.state.personBody === 2 && <NavBar3Female onClick={this.handleClick} onDragStart={this.handleOnDragStart} onDragEnd={this.handleOnDragEnd} />}
                    {this.state.navBar === 4 && this.state.personBody === 1 && <NavBar4Male onClick={this.handleClick} onDragStart={this.handleOnDragStart} onDragEnd={this.handleOnDragEnd} />}
                    {this.state.navBar === 4 && this.state.personBody === 2 && <NavBar4Female onClick={this.handleClick} onDragStart={this.handleOnDragStart} onDragEnd={this.handleOnDragEnd} />}
                    {this.state.navBar === 5 && this.state.personBody === 1 && <NavBar5Male onClick={this.handleClick} onDragStart={this.handleOnDragStart} onDragEnd={this.handleOnDragEnd} />}
                    {this.state.navBar === 5 && this.state.personBody === 2 && <NavBar5Female onClick={this.handleClick} onDragStart={this.handleOnDragStart} onDragEnd={this.handleOnDragEnd} />}
                    {this.state.navBar === 6 && this.state.personBody === 1 && <NavBar6Male onClick={this.handleClick} onDragStart={this.handleOnDragStart} onDragEnd={this.handleOnDragEnd} />}
                    {this.state.navBar === 6 && this.state.personBody === 2 && <NavBar6Female onClick={this.handleClick} onDragStart={this.handleOnDragStart} onDragEnd={this.handleOnDragEnd} />}
                </div>
            </div>
        );
    }
}

module.exports = MainApp;
