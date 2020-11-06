import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #d6f8ff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  img {
    width: 160px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.13);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #0f4954;
      margin: 0 0 10px;
      transition: background 0.2s;
      &::placeholder {
        color: #0f4954;
        font-size: 13px;
        font-weight: 200;
      }
    }

    span {
      color: #f64c75;
      align-self: flex-start;
      margin: -5px 0 15px 5px;
      font-size: 12px;
      font-weight: bold;
    }

    a {
      color: #1e93a9;
      margin-top: 15px;
      font-size: 14px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #1e93a9;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;

      &:hover {
        background: ${darken(0.03, '#1e93a9')};
      }
    }
  }
`;
