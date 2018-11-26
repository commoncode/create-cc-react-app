import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { ExternalLink } from "../../components/Link";
import Button from "../../components/Button";
import ErrorMessage from "../../components/ErrorMessage";
import Input from "../../components/Input";

const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  border: 0;
`;

const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.space[2]}px;
  ${Button} {
    margin-bottom: ${({ theme }) => theme.space[3]}px;
    font-size: ${({ theme }) => theme.fontSizes.gamma}px;
  }
`;

const FieldsetGroup = styled.div`
  ${Fieldset} {
    &:last-child {
      margin-bottom: ${({ theme }) => theme.space[2]}px;
    }
  }
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.gamma}px;
  line-height: 36px;
  color: ${({ theme }) => theme.colors.gray40};
`;

const InnerForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isFetching,
}) => (
  <Form onSubmit={handleSubmit}>
    <FieldsetGroup>
      <Fieldset>
        <Label htmlFor="email">EMAIL</Label>
        <Input
          autoComplete="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          isInvalid={touched.email && errors.email}
        />
        <ErrorMessage visible={touched.email && errors.email}>
          {errors.email}
        </ErrorMessage>
      </Fieldset>
      <Fieldset>
        <Label htmlFor="password">PASSWORD</Label>
        <Input
          type="password"
          autoComplete="current-password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          isInvalid={touched.password && errors.password}
        />
        <ErrorMessage visible={touched.password && errors.password}>
          {errors.password}
        </ErrorMessage>
      </Fieldset>
    </FieldsetGroup>
    <Button type="submit" disabled={isFetching}>
      {isFetching ? "..." : "Sign in"}
    </Button>
    <ExternalLink href="/auth/password_reset/" style={{ textAlign: "center" }}>
      Forgot your password?
    </ExternalLink>
  </Form>
);

InnerForm.propTypes = {
  values: PropTypes.object,
  errors: PropTypes.object,
  touched: PropTypes.object,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  handleSubmit: PropTypes.func,
  isFetching: PropTypes.bool,
};

export default InnerForm;
