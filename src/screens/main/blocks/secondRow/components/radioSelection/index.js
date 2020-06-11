import React from 'react';
import { PlanosContextConsumer } from 'screens/main/context';
import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

export default () => {
  return (
    <PlanosContextConsumer>
      {context => {
        return (
          <RadioGroup
            aria-label="Selecione o período de pagamento"
            name="paymentPeriod"
            value={context.paymentPeriod}
            onChange={e => context.setPaymentPeriod(e.target.value)}
            row
          >
            {context.paymentOptions.map(option => (
              <FormControlLabel value={option.value} control={<Radio />} label={option.label} />
            ))}
          </RadioGroup>
        );
      }}
    </PlanosContextConsumer>
  );
};
