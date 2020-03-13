import React, { Component } from "react";
import { connect } from "react-redux";
import Helmet from "react-helmet";

import {
  Container,
  LockIconContainer,
  RoundIcon,
  AuthHeader,
  LinkContainer,
  LeftLink,
  RightLink,
  Copyright
} from "./AuthFormStyles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import AuthInput from "../../components/AuthComponents/AuthInput";
import AuthInputPassword from "../../components/AuthComponents/AuthInputPassword";
import AuthButton from "../../components/AuthComponents/AuthButton";
import AuthCheckbox from "../../components/AuthComponents/AuthCheckbox";
import CSSAlert from "../../components/AuthComponents/AuthAlert";
import { auth } from "../../store/actions";
import { Redirect } from "react-router-dom";

// Типы данных
interface IProps {
  onAuth: (email: string, password: string, rememberMe: boolean) => void;
  isAuth: boolean;
  resError: boolean;
  errorMessage: string;
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
    willSend: true
  };

  //Функция для обновления состояния полей ввода
  inputHandler = (event: any): void => {
    const name: StateKeys = event.target.name;
    const value: string = event.target.value;
    this.validation(name, value);

    //Обновление State значения почты или пароля
    this.setState({ [name]: value });
  };

  //Валидация
  validation = (name: string, value: string): void => {
    const reg = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
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
  };

  //Функция для обновления состояния чекбокса
  checkboxHandler = (): void => {
    let checkbox: boolean = this.state.rememberMe;

    this.setState({ rememberMe: !checkbox });
  };

  //Функция для отправки данных формы
  formSenderHandler = (): void => {
    //Проверка на заполненные поля
    if (this.state.validateFields.email && this.state.validateFields.password) {
      this.setState({ willSend: true });
      //Отправка POST запроса на backend
      this.props.onAuth(
        this.state.email,
        this.state.password,
        this.state.rememberMe
      );
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

    let authRedirect = null;
    if (this.props.isAuth) {
      authRedirect = <Redirect to="/auth-app/next-page" />;
    }

    return (
      <Container>
        {authRedirect}
        <Helmet>
          <title>Вход в аккаунт</title>
        </Helmet>
        <form>
          <LockIconContainer>
            <RoundIcon>
              <LockOutlinedIcon />
            </RoundIcon>
          </LockIconContainer>
          <AuthHeader>Вход в аккаунт</AuthHeader>
          {this.props.resError ? (
            <CSSAlert severity="error">{this.props.errorMessage}</CSSAlert>
          ) : null}
          <AuthInput
            key="email"
            id="email"
            label="Почта"
            name="email"
            error={emailError}
            helperText={
              emailError ? this.state.fieldValidationErrors.email : null
            }
            onChange={this.inputHandler}
            value={this.state.email}
          />
          <AuthInputPassword
            key="password"
            id="password"
            label="Пароль"
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
          <AuthButton onClick={this.formSenderHandler}>
            Войти в аккаунт
          </AuthButton>
          <LinkContainer>
            <LeftLink href="/#">Забыли пароль?</LeftLink>
            <RightLink href="/#">Ещё нет аккаунта? Регистрация</RightLink>
          </LinkContainer>
          <Copyright>Copyright© Ваш сайт 2019.</Copyright>
        </form>
      </Container>
    );
  }
}

//Использование Redux
const mapStateToProps = (state: any) => {
  return {
    isAuth: state.jwt !== null,
    resError: state.resError,
    errorMessage: state.errorMessage
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onAuth: (email: string, password: string, rememberMe: boolean) =>
      dispatch(auth(email, password, rememberMe))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
