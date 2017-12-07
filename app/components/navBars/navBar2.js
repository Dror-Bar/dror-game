var React = require('react');

class NavBar2 extends React.Component {

    render() {
        return (
            <div>
                <button onClick={this.props.onClick.bind(this, 'personBody', 1)} style={styles._button1}>Male</button>
                <button onClick={this.props.onClick.bind(this, 'personBody', 2)} style={styles._button2}>Female</button>
                <button onClick={this.props.onClick.bind(this, 'personBody', 'next')} style={styles._button3}>Next!</button>
            </div>
        );
    }
}

module.exports = NavBar2;

const styles = {
    _button1: {
        width: 300,
        height: 100,
        marginLeft: 15,
        marginRight: 15,
        fontSize: 25,
    },
    _button2: {
        width: 300,
        height: 100,
        marginLeft: 15,
        marginRight: 15,
        fontSize: 25,
    },
    _button3: {
        width: 300,
        height: 100,
        marginLeft: 15,
        marginRight: 15,
        fontSize: 25,
    }
};
