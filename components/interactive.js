import React from 'react'

import Results from './results';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      whereSelection: 1,
      whenSelection: 'anytime',
      wherePurchaseSelection: 'onboard_purchase',
      ridesSelection: 1,
      totalCost: 0,
      error: '',
    };
    this.defaultChecked = this.state.purchaseSelection;
    this.handleWhereSelection = this.handleWhereSelection.bind(this);
    this.handleWhenSelection = this.handleWhenSelection.bind(this);
    this.handleWherePurchaseSelection = this.handleWherePurchaseSelection.bind(this);
    this.handleNumberRidesSelection = this.handleNumberRidesSelection.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
  }

  calculateTotal() {
    if (this.props.zones[this.state.whereSelection]) {
      console.log(
        this.state.whenSelection,
        this.state.wherePurchaseSelection,
        this.state.ridesSelection
      );
      const match = this.props.zones[this.state.whereSelection].fares
        .find((fare) => {
          if (fare.type === this.state.whenSelection &&
            fare.purchase === this.state.wherePurchaseSelection &&
            fare.trips == this.state.ridesSelection
          ) {
            this.setState({
              totalCost: fare.price,
              error: '',
            });
            return true;
          }
          return false;
        });
      if ( ! match ) {
        this.setState({
          error: 'Sorry, not enough data provided.'
        });
      }
    }

  }

  handleWhenSelection(event) {
    this.setState({
      whenSelection: event.target.value
    }, () => {
      this.calculateTotal();
    });
  }

  handleWhereSelection(event) {
    console.log(event.target.value);
    this.setState({
      whereSelection: event.target.value
    }, () => {
      this.calculateTotal();
    });
  }

  handleWherePurchaseSelection(event) {
    this.setState({
      wherePurchaseSelection: event.target.value
    }, () => {
      this.calculateTotal();
    });
  }

  handleNumberRidesSelection(event) {
    this.setState({
      ridesSelection: event.target.value
    }, () => {
      this.calculateTotal();
    });
  }

  render() {
    const { info, zones, constants } = this.props;
    return (
      <div>
        <h2>{constants.whereText}</h2>
        <select name="whereSelection" defaultValue={this.state.zoneSelection} onChange={this.handleWhereSelection}>
          {zones.map(({ zone, name }) => {
            return (
              <option key={zone} value={zone}>{name}</option>
            )
          })}
        </select>
        <hr />
        <h2>{constants.whenText}</h2>
        <select name="whenSelection" defaultValue={this.state.whenSelection} onChange={this.handleWhenSelection}>
          {constants.whenOptions.map(({ option, label }) => {
            return (
              <option key={option} value={option}>{label}</option>
            )
          })}
        </select>
        <hr />
        <h2>{constants.wherePurchase}</h2>
        <select name="wherePurchaseSelection" defaultValue={this.state.wherePurchaseSelection} onChange={this.handleWherePurchaseSelection}>
        {constants.wherePurchaseOptions.map(({ option, label }) => {
            return (
              <option key={option} value={option}>{label}</option>
            )
          })}
        </select>
        <hr />
        <h2>{constants.numberRides}</h2>
        <input id="numberRides" type="number" defaultValue={this.state.ridesSelection} step="9" min="1" max={constants.numberRidesLimit}  onChange={this.handleNumberRidesSelection} />
        <Results
          text={constants.totalText}
          cost={this.state.totalCost}
          error={this.state.error}
        />
      <style jsx>{`
        div {
          text-align: center;
        }
        h2 {
          color: #595959;
          padding: 10px 20px;
        }
        select {
          width: calc(100% - 40px);
          margin-bottom: 10px;
        }

        input {
          margin-bottom: 10px;
        }
      `}</style>
      </div>
    )
  }
}