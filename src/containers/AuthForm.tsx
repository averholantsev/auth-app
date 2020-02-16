import React, { Component } from "react";
import { Typography, Link } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import styled from "styled-components";
import axios from "../axios-main";

import lockIcon from "../components/UI/Icons/icon.png";
import AuthInput from "../components/AuthComponents/AuthInput";
import AuthButton from "../components/AuthComponents/AuthButton";
import AuthCheckbox from "../components/AuthComponents/AuthCheckbox";
import CSSAlert from "../components/AuthComponents/AuthAlert";
import { JWT_AUTH } from "../store/reducer";

// Стили
const Container = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 10%;
  padding: 0 28px;

  @media (min-width: 390px) {
    width: 380px;
    padding: 0;
    margin-top: 5%;
  }
`;

const LockIconContainer = styled.div`
  padding-top: 72px;
  padding-bottom: 15px;
`;

const AuthHeader = styled.h1`
  padding: 0;
  margin: 0 0 20px 0;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 18px;
`;

const CSSTypography = withStyles({
  root: {
    display: "block",
    "& .remember": {
      float: "left"
    },
    "& .register": {
      float: "right",
      "@media (max-width: 389px)": {
        width: "125px",
        textAlign: "right"
      }
    }
  }
})(Typography);

const CSSLink = withStyles({
  root: {
    color: "#2F80ED",
    fontSize: "14px",
    "&:hover": {
      textDecoration: "underline"
    }
  }
})(Link);

const Copyright = styled.p`
  margin-top: 66px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.16px;
  color: rgba(0, 0, 0, 0.54);

  @media (max-width: 375px) {
    display: none;
  }
`;

// Типы данных
interface IProps {
  onAuthAccepted: (id: string) => void;
  history: any;
}

type validateFieldsType = {
  email: boolean;
  password: boolean;
};

interface IState {
  email?: string;
  password?: string;
  rememberMe?: boolean;
  validateFields?: validateFieldsType;
  fieldValidationErrors?: {
    email: string;
    password: string;
  };
  willSend?: boolean;
  resError?: boolean;
  errorMessage?: string;
}

type StateKeys = keyof validateFieldsType;

// Реализация классового компонента формы
class AuthForm extends Component<IProps, IState> {
  state = {
    email: "",
    password: "",
    rememberMe: false,
    validateFields: {
      email: false,
      password: false
    },
    fieldValidationErrors: {
      email: "Обязательное поле!",
      password: "Обязательное поле!"
    },
    willSend: true,
    resError: false,
    errorMessage: ""
  };

  //Функция для обновления состояния полей ввода
  inputHandler = (event: any) => {
    const name: StateKeys = event.target.name;
    const value: string = event.target.value;
    const reg = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;

    //Валидация
    let validateFieldsUpdate = { ...this.state.validateFields };
    let fieldValidationErrors = { ...this.state.fieldValidationErrors };
    switch (name) {
      case "email":
        validateFieldsUpdate.email = reg.test(value);
        if (value.length === 0) {
          fieldValidationErrors.email = "Обязательное поле!";
        } else fieldValidationErrors.email = "Проверьте корректность почты";
        break;
      case "password":
        validateFieldsUpdate.password = value.length >= 6;
        if (value.length === 0) {
          fieldValidationErrors.password = "Обязательное поле!";
        } else
          fieldValidationErrors.password =
            "Пароль должен быть более 6 символов";
        break;
      default:
        break;
    }
    this.setState({
      validateFields: validateFieldsUpdate,
      fieldValidationErrors: fieldValidationErrors
    });

    //Обновление State значения почты или пароля
    this.setState({ [name]: value });
  };

  //Функция для обновления состояния чекбокса
  checkboxHandler = () => {
    let checkbox: boolean = this.state.rememberMe;

    this.setState({ rememberMe: !checkbox });
  };

  //Проверка валидности формы
  formValidate = () => {
    const dataToServer = {
      email: this.state.email,
      password: this.state.password,
      rememberMe: this.state.rememberMe
    };

    if (this.state.validateFields.email && this.state.validateFields.password) {
      this.setState({ willSend: true });
      console.log("Отправляем на сервер данные");
      axios
        .post("/314145ed-4ccd-46fd-a1f9-f5b83468e714", dataToServer)
        .then(response => {
          console.log(response.data);
          this.props.onAuthAccepted(response.data.jwt);
          this.props.history.push("/auth-app/next-page");
        })
        .catch(error => {
          if (error.response.status === 401) {
            this.setState({
              resError: true,
              errorMessage:
                "Ошибка авторизации, проверьте данные и повторите попытку"
            });
          } else this.setState({
              resError: true,
              errorMessage: "Произошла ошибка, попробуйте повторите попытку позднее"
            });
        });
    } else {
      this.setState({ willSend: false });
    }
  };

  render() {
    //Вспомогательные переменные для отображения валидации и подсказки
    let emailError: boolean = false;
    let passwordError: boolean = false;

    if (!this.state.willSend) {
      emailError = !this.state.validateFields.email;
      passwordError = !this.state.validateFields.password;
    }

    return (
      <Container>
        <form>
          <LockIconContainer>
            <img src={lockIcon} alt="auth-lock" />
          </LockIconContainer>
          <AuthHeader>Вход в аккаунт</AuthHeader>
          {this.state.resError ? (
            <CSSAlert severity="error">{this.state.errorMessage}</CSSAlert>
          ) : null}
          <AuthInput
            key="email"
            id="email"
            label="Почта*"
            name="email"
            error={emailError}
            helperText={
              emailError ? this.state.fieldValidationErrors.email : null
            }
            onChange={this.inputHandler}
            value={this.state.email}
          />
          <AuthInput
            key="password"
            id="password"
            type="password"
            label="Пароль*"
            name="password"
            error={passwordError}
            helperText={
              passwordError ? this.state.fieldValidationErrors.password : null
            }
            onChange={this.inputHandler}
            value={this.state.password}
          />
          <AuthCheckbox
            id="rememberMe"
            label="Запомнить меня"
            name="rememberMe"
            onChange={this.checkboxHandler}
            checked={this.state.rememberMe}
          />
          <AuthButton onClick={this.formValidate}>Войти в аккаунт</AuthButton>
          <CSSTypography>
            <CSSLink key="remember" className="remember" href="/#">
              Забыли пароль?
            </CSSLink>
            <CSSLink key="register" className="register" href="/#">
              Ещё нет аккаунта? Регистрация
            </CSSLink>
          </CSSTypography>
          <Copyright>Copyright© Ваш сайт 2019.</Copyright>
        </form>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onAuthAccepted: (id: string) => dispatch({ type: JWT_AUTH, jwt: id })
  };
};

export default connect(null, mapDispatchToProps)(AuthForm);
