// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { Doughnut } from 'react-chartjs-2';
import walletActions from './walletActions';
// import type { WalletFetchRequest } from './walletActionTypes';
import './Wallet.css';

type Props = {
  wallets: Array<{}>,
  fetchWallet: void,
};

export class Wallet extends Component<Props> {
  componentDidMount() {
    this.props.fetchWallet();
  }

  data = {
    datasets: [
      {
        data: [10, 20, 30],
        backgroundColor: ['#19c3ed', '#47d6e2', '#62dfd9'],
        borderWidth: [0, 0, 0],
      },
    ],
    labels: ['BTC', 'ETH', 'CAG'],
  };

  options = {
    circumference: 10 / 6 * Math.PI,
    rotation: 1 / 6 * Math.PI,
    legend: {
      display: false,
    },
  };

  render() {
    return (
      <div>
        <Row className="justify-content-md-center">
          <Col className="wallet col-lg-4">
            <div className="top">
              <div className="text-right">
                <button type="button" className="btn btn-primary bmd-btn-icon">
                  <i className="material-icons">more_horiz</i>
                </button>
              </div>
              <Doughnut data={this.data} options={this.options} />
            </div>
            <nav className="bottom navbar navbar-light bg-light">
              <i className="material-icons md-dark md-48">home</i>
              <i className="material-icons md-dark md-48">account_balance</i>
              <i className="material-icons md-dark md-48">credit_card</i>
              <i className="material-icons md-dark md-48">apps</i>
            </nav>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  wallets: state.wallet ? state.wallet.wallets : [],
});

const mapDispatchToProps = {
  fetchWallet: walletActions.walletFetchRequested,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
