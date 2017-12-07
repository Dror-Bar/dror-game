var React = require('react');
var Images = require('../imagesController');

class NavBar3Male extends React.Component {

    render() {
        return (
            <div>
                <button onClick={this.props.onClick.bind(this, 'personFace', 'back')} style={styles._button1}>Back!</button>
                <img src={Images.personFaces[1]} style={styles._button2} onClick={this.props.onClick.bind(this, 'personFace', 1)} onDragStart={this.props.onDragStart.bind(this, 'personFace', 1, 'highlightHead')} onDragEnd={this.props.onDragEnd.bind(this, 'highlightHead')} />
                <img src={Images.personFaces[2]} style={styles._button3} onClick={this.props.onClick.bind(this, 'personFace', 2)} onDragStart={this.props.onDragStart.bind(this, 'personFace', 2, 'highlightHead')} onDragEnd={this.props.onDragEnd.bind(this, 'highlightHead')} />
                <button onClick={this.props.onClick.bind(this, 'personFace', 'next')} style={styles._button4}>Next!</button>

            </div>
        );
    }
}

module.exports = NavBar3Male;

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
