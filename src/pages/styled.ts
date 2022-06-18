import styled from "styled-components";

export const ContainerPage = styled.div`
  width: 100%;

  .content-body {
    width: 80%;
    margin-top: 108px;
    margin-left: auto;
    margin-right: auto;
  }

  .description-about {
    display: flex;
    flex-direction: row;
    margin-top: 61px;

    .logo-about {
      padding: 73px 49px 61.32px 48px;
      border-radius: 5px;
      margin-right: 70px;
    }

    .description {
      text-align: justify;
      margin-top: 50px;
      font-size: 20px;
      text-indent: 50px;
    }
  }

  .eixos-programmer,
  .others-news {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .sponsor-content {
    margin-top: 100px;
    text-align: center;
  }

  .login {
    right: 0;
    height: 90%;
    padding: 45px;

    .form-login {
      margin-top: 118px;
      border-radius: 20px;
      width: 38vw;
      height: 80%;

      span {
        padding: 10px;
      }
    }

    .container-footer {
      width: 80%;
      display: flex;
      justify-content: space-around;
      margin: -100px auto;
    }
  }
`;
