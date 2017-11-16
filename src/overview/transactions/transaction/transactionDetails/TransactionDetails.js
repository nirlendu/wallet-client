// @flow
import React from 'react';
import styled from 'styled-components';
import { Modal, Header } from '../../../../ui';
import type { Transaction as TransactionType } from '../../../../wallet/walletState';
import walletCurrencyValueResolver from '../../../../wallet/walletCurrencyValueResolver';
import FiatValue from '../fiatValue';

export const Amount = Header.extend`
  font-size: 36px;
  margin-bottom: 40px;
  text-transform: uppercase;
`;

export const Label = styled.div`
  font-family: Favorit;
  font-size: 12px;
  font-weight: bold;
  text-align: left;
  color: #02bda5;
`;

export const Field = styled.div`
  font-family: Favorit;
  font-size: 14px;
  line-height: 1.57;
  text-align: left;
  color: #2a2a2a;
  margin-bottom: 10px;
`;

export const AddressField = Field.extend`
  font-size: 12px;
`;

type Props = {
  transaction: TransactionType,
  onConfirm: () => void,
};

export const TransactionDetails = ({ transaction, onConfirm }: Props) => {
  const feeRepresentationCurrency = walletCurrencyValueResolver.resolve(
    transaction.fee,
  );
  const feeWalletCurrency = walletCurrencyValueResolver.resolve(
    transaction.fee,
    transaction.currency,
  );
  const valueRepresentationCurrency = Math.abs(
    walletCurrencyValueResolver.resolve(transaction.value),
  );
  const value = walletCurrencyValueResolver.resolve(
    transaction.value,
    transaction.currency,
  );
  const valueWalletCurrency = Math.abs(value);

  const netValueWalletCurrency = valueWalletCurrency - feeWalletCurrency;
  const netValueRepresentationCurrency =
    valueRepresentationCurrency - feeRepresentationCurrency;

  const sending = value < 0;

  return (
    <div>
      <Modal onConfirm={onConfirm}>
        {sending ? <Label>SENT</Label> : <Label>RECEIVED</Label>}
        <Amount alt>
          {valueWalletCurrency} {transaction.currency}
        </Amount>
        <Label>STATUS</Label>
        <Field>Completed</Field>
        <Label>TOTAL AMOUNT</Label>
        <Field>
          {valueWalletCurrency} (<FiatValue
            inline
            value={valueRepresentationCurrency}
          />)
        </Field>
        {sending && <Label>AMOUNT SENT</Label>}
        {sending && (
          <Field>
            {netValueWalletCurrency} (<FiatValue
              inline
              value={netValueRepresentationCurrency}
            />)
          </Field>
        )}
        {sending && <Label>FEE</Label>}
        {sending && (
          <Field>
            {feeWalletCurrency} (<FiatValue
              inline
              value={feeRepresentationCurrency}
            />)
          </Field>
        )}
        <Label>TIME</Label>
        <Field>{transaction.date.toUTCString()}</Field>
        <Label>{sending ? 'RECIPIENT ADDRESS' : 'SENDER ADDRESS'}</Label>
        <AddressField>{transaction.address}</AddressField>
      </Modal>
    </div>
  );
};

export default TransactionDetails;