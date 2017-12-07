var React = require('react');
var Images = require('../imagesController');

class NavBar1 extends React.Component {

    render() {
        return (
            <div style={styles._div}>
                <input type='image' src={Images.misc[2]} onClick={this.props.onClick.bind(this, 'navBar', 'next')} style={styles._button} onMouseEnter={this.props.onMouseEnter.bind(this)} onMouseLeave={this.props.onMouseLeave.bind(this)} />
                <h2 style={styles._text}>Start Designing!</h2>
            </div>
        );
    }
}

module.exports = NavBar1;

const styles = {
    _div: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
    },
    _button: {
        width: 300,
        height: 100,
    },
    _text: {
        position: 'absolute',
        marginTop: 30,
    }
};
