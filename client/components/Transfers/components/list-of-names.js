import React, { Component } from 'react';
import WaitListPatron from './waitlist-patron';

class ListOfNames extends Component {
    renderItems() {
        return _.map(this.props.waitlist, (person, index) => <WaitListPatron key={index} {...person} {...this.props} />);
    }

    render() {
      return (
				<div className="list">
				  <h2>Current Waitlist</h2>
            <div className="table">
              <table>
                <tbody>
                  {this.renderItems()}
                </tbody>
              </table>
					  </div>
        </div>
        );
    }
}

export default ListOfNames;