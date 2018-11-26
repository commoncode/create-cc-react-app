import { Formik } from "formik";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";
import styled from "styled-components";

import { isAuthenticated } from "selectors/auth";
import { requestLogin } from "actions";
import LargeCard from "components/Card/LargeCard";
import InnerForm from "./InnerForm";

const Container = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray95};
  padding-left: ${({ theme }) => theme.space[2]}px;
  padding-right: ${({ theme }) => theme.space[2]}px;
`;

const FormSection = styled.section`
  display: flex;
  justify-content: center;
  padding-top: ${({ theme }) => theme.space[3]}px;
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[0]}px) {
    padding-top: 10.125rem;
  }
  ${LargeCard} {
    @media only screen and (min-width: ${({ theme }) =>
        theme.breakpoints[0]}px) {
      width: 27rem;
    }
  }
`;

class Login extends React.Component {
  handleSubmit = values => {
    const { requestLogin } = this.props;
    requestLogin(values);
  };

  validate = values => {
    const errors = {};
    if (!values.email) {
      errors.email = "Email address is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  render() {
    const { isAuthenticated, location, isFetching } = this.props;
    const { from } = location.state || { from: { pathname: "/" } };
    const responseError = {};
    ({
      responseError: responseError.email,
      responseError: responseError.password,
    } = this.props);

    if (isAuthenticated) {
      return <Redirect to={from} />;
    }

    return (
      <Container>
        <FormSection>
          <LargeCard>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validate={this.validate}
              onSubmit={this.handleSubmit}
              render={props => (
                <InnerForm
                  {...props}
                  errors={responseError}
                  isFetching={isFetching}
                />
              )}
            />
          </LargeCard>
        </FormSection>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: isAuthenticated(state),
    isFetching: state.auth.isFetching,
    responseError: state.auth.errorMessage,
  };
}

const mapDispatchToProps = {
  requestLogin,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
