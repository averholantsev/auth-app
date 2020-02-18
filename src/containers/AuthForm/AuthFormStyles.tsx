import styled from "styled-components";

export const Container = styled.div`
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

export const LockIconContainer = styled.div`
  position: inherit;
  padding-top: 72px;
  padding-bottom: 15px;

  .roundIcon {
    background-color: #e10050;
    border-radius: 100%;
    display: block;
    width: 40px;
    height: 40px;
    margin: 0 auto;
  }
`;

export const AuthHeader = styled.h1`
  padding: 0;
  margin: 0 0 20px 0;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 18px;
`;

export const Copyright = styled.p`
  margin-top: 66px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.16px;
  color: rgba(0, 0, 0, 0.54);
`;