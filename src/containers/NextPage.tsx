import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import CSSAlert from "../components/AuthComponents/AuthAlert";
import AuthButton from "../components/AuthComponents/AuthButton";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 10%;
  padding: 0 28px;

  @media (min-width: 390px) {
    width: 380px;
    padding: 0;
    margin-top: 5%;
  }
`;

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
