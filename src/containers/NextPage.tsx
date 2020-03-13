import React, { Component } from "react";
import { connect } from "react-redux";
import Helmet from "react-helmet";

import { Container } from "./AuthForm/AuthFormStyles";
import CSSAlert from "../components/AuthComponents/AuthAlert";
import AuthButton from "../components/AuthComponents/AuthButton";


interface IProps {
  jwt?: string;
}

class NextPage extends Component<IProps> {
  render() {
    return (
      <Container>
        <Helmet>
          <title>Следующая страница</title>
        </Helmet>
        <CSSAlert>
          Авторизация прошла успешна, ваш jwt: {this.props.jwt}
        </CSSAlert>
        <AuthButton href="/auth-app/" >Назад</AuthButton>
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    jwt: state.jwt
  };
};

export default connect(mapStateToProps)(NextPage);
