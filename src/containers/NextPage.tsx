import React, { Component } from "react";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import { Redirect } from "react-router-dom";

import { Container } from "./AuthForm/AuthFormStyles";
import CSSAlert from "../components/AuthComponents/AuthAlert";
import AuthButton from "../components/AuthComponents/AuthButton";
import { authLogout } from "../store/actions";

interface IProps {
  jwt?: string;
  onLogout?: any;
}

class NextPage extends Component<IProps> {
  render() {
    let logout: any = null;
    if (!this.props.jwt) {
      logout = <Redirect to="/auth-app/" />;
    }

    return (
      <Container>
        {logout}
        <Helmet>
          <title>Следующая страница</title>
        </Helmet>
        <CSSAlert>
          Авторизация прошла успешна, ваш jwt: {this.props.jwt}
        </CSSAlert>
        <AuthButton onClick={this.props.onLogout}>Выйти</AuthButton>
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    jwt: state.jwt
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onLogout: () => dispatch(authLogout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NextPage);
