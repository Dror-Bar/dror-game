var React = require('react');
var Images = require('../imagesController');

class NavBar5Male extends React.Component {

    render() {
        return (
            <div>
                <button onClick={this.props.onClick.bind(this, 'personShirt', 'back')} style={styles._button1}>Back!</button>
                <img src={Images.personShirts[1]} style={styles._button2} onClick={this.props.onClick.bind(this, 'personShirt', 1)} onDragStart={this.props.onDragStart.bind(this, 'personShirt', 1, 'highlightChest')} onDragEnd={this.props.onDragEnd.bind(this, 'highlightChest')} />
                <img src={Images.personShirts[2]} style={styles._button3} onClick={this.props.onClick.bind(this, 'personShirt', 2)} onDragStart={this.props.onDragStart.bind(this, 'personShirt', 2, 'highlightChest')} onDragEnd={this.props.onDragEnd.bind(this, 'highlightChest')} />
                <button onClick={this.props.onClick.bind(this, 'personShirt', 'next')} style={styles._button4}>Next!</button>
            </div>
        );
    }
}

module.exports = NavBar5Male;

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
