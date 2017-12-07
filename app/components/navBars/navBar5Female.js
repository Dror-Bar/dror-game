var React = require('react');
var Images = require('../imagesController');

class NavBar5Female extends React.Component {

    render() {
        return (
            <div>
                <button onClick={this.props.onClick.bind(this, 'personShirt', 'back')} style={styles._button1}>Back!</button>
                <img src={Images.personShirts[3]} style={styles._button2} onClick={this.props.onClick.bind(this, 'personShirt', 3)} onDragStart={this.props.onDragStart.bind(this, 'personShirt', 3, 'highlightChest')} onDragEnd={this.props.onDragEnd.bind(this, 'highlightChest')} />
                <img src={Images.personShirts[4]} style={styles._button3} onClick={this.props.onClick.bind(this, 'personShirt', 4)} onDragStart={this.props.onDragStart.bind(this, 'personShirt', 4, 'highlightChest')} onDragEnd={this.props.onDragEnd.bind(this, 'highlightChest')} />
                <button onClick={this.props.onClick.bind(this, 'personShirt', 'next')} style={styles._button4}>Next!</button>
            </div>
        );
    }
}

module.exports = NavBar5Female;

const styles = {
    _button1: {
        width: 200,
        height: 80,
        marginLeft: 15,
        marginRight: 15,
        fontSize: 25,
    },
    _button2: {
        width: 150,
        height: 100,
        marginLeft: 15,
        marginRight: 15,
        cursor: 'move',
    },
    _button3: {
        width: 150,
        height: 100,
        marginLeft: 15,
        marginRight: 15,
        cursor: 'move',
    },
    _button4: {
        width: 200,
        height: 80,
        marginLeft: 15,
        marginRight: 15,
        fontSize: 25,
    }
};
