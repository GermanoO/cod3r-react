import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeValue } from './fieldActions'

class Field extends Component {

    render() {
        return (
        <div>
             <label>{ this.props.value }</label>
             <br />
             <input onChange={this.props.changeValue} value={this.props.value}></input>
        </div>
        )
    }
}

function mapStatetoProps(state) {
    return {
        value: state.field.value
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ changeValue }, dispatch)
}

export default connect(mapStatetoProps, mapDispatchToProps)(Field)