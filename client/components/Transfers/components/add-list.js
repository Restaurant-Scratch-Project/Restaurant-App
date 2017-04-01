import React, { Component } from 'react';


class AddName extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null
        };
    }

    renderError() {
        if(!this.state.error) { return null; }

        return <div style={{color: 'red'}}>
                    {this.state.error}
               </div>;
    }

    render() {
        return (
            <form onSubmit = {this.handleAddName.bind(this)}>
                <input type="text" placeholder="name" ref="createName" />
                 <input type="text" placeholder="cell number" ref="createCell" />
                <button>Add Name</button>
                {this.renderError()}
            </form>
        );
    }

    handleAddName(event) {
        event.preventDefault();

        const createName = this.refs.createName;
        const patron = createName.value;
        const validateInput = this.validateInput(patron);

        const createCell = this.refs.createCell;
        const cell = createCell.value;
        
        if (validateInput) {
            this.setState({ error: validateInput });
            return;
        }

        this.setState({ error: null });
        this.props.addToList(patron, cell);
        this.refs.createName.value = '';
        this.refs.createCell.value = '';
    }

    validateInput(patron) {
        if (!patron) {
            return 'Please enter patron.';
        } else if (_.find(this.props.waitlist, item => item.patron === patron)) {
            return 'This patron is already on the list.'
        } else {
            return null;
        }
    }
}
export default AddName;