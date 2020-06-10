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
            <FormControlLabel value="3 anos" control={<Radio />} label="3 anos" />
            <FormControlLabel value="1 ano" control={<Radio />} label="1 ano" />
            <FormControlLabel value="1 mes" control={<Radio />} label="1 mes" />
          </RadioGroup>
        );
      }}
    </PlanosContextConsumer>
  );
};
