import React, { Component } from "react";
import { connect } from "react-redux";

import { Container } from "./AuthForm/AuthFormStyles";
import CSSAlert from "../components/AuthComponents/AuthAlert";
import AuthButton from "../components/AuthComponents/AuthButton";

interface IProps {
  jwt?: string;
  history?: any;
}

class NextPage extends Component<IProps> {
  backToAuthPage = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <Container>
        <CSSAlert>
          Авторизация прошла успешна, ваш jwt: {this.props.jwt}
        </CSSAlert>
        <AuthButton onClick={this.backToAuthPage}>Назад</AuthButton>
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
