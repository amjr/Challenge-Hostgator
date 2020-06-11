import React from 'react';
import { PlanosContextConsumer } from 'screens/main/context';
import { RadioGroup, FormControlLabel, Radio, styled as MaterialStyled, Typography } from '@material-ui/core';
import styled from 'styled-components';
import * as colors from 'colors';

export default () => {
  return (
    <PlanosContextConsumer>
      {context => {
        return (
          <RadioGroupWrapper>
            <SelectPeriod>Quero pagar a cada:</SelectPeriod>
            <StyledRadioGroup
              aria-label="Selecione o período de pagamento"
              name="paymentPeriod"
              value={context.paymentPeriod}
              onChange={e => context.setPaymentPeriod(e.target.value)}
              row
              style={{}}
            >
              {context.paymentOptions.map(option => (
                <StyledFormControlLabel
                  value={option.value}
                  control={<Radio />}
                  label={option.label}
                  style={{}}
                  active={context.paymentPeriod === option.value}
                />
              ))}
            </StyledRadioGroup>
          </RadioGroupWrapper>
        );
      }}
    </PlanosContextConsumer>
  );
};

const RadioGroupWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 32px;
  padding-bottom: 43px;

  @media screen and (min-width: 768px) {
    padding-top: 37px;
  }

  @media screen and (min-width: 1920px) {
    padding-top: 50px;
  }
`;

const StyledRadioGroup = MaterialStyled(({ ...other }) => <RadioGroup {...other} />)({
  backgroundColor: colors.white,
  borderRadius: '21px',
  border: `1px solid ${colors.indigo}`,
  height: '41px',
  width: '290px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
});

const StyledFormControlLabel = MaterialStyled(({ active, ...other }) => <FormControlLabel {...other} />)({
  backgroundColor: props => (props.active ? colors.indigo : colors.white),
  borderRadius: '21px',
  height: '39px',
  width: props => (props.active ? '105px' : '91px'),
  marginLeft: 'unset',
  marginRight: 'unset',
  border: props => (props.active ? `1px solid ${colors.indigo}` : '0px'),

  color: props => (props.active ? colors.white : colors.chathamsBlue),
  fontWeight: props => (props.active ? 700 : 400),
  fontSize: '16px',
  lineHeight: 23,

  '& .MuiRadio-colorSecondary': {
    color: colors.pigeonPost,
    '&.Mui-checked': {
      color: colors.white
    }
  }
});

const SelectPeriod = MaterialStyled(({ ...other }) => <Typography {...other} />)({
  color: colors.matisse,
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '26px',
  textAlign: 'center',
  marginBottom: '7px'
});
