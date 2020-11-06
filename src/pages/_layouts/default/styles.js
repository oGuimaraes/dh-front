import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100%;
  height: auto;
  background: linear-gradient(-90deg, #a2cfdc, #a2cfdc);

  input {
    background: rgba(255, 255, 255, 0.4);
    border-radius: 5px;
    width: 100%;
    height: 38px;
    padding: 0 15px;
    color: #0f4954;
    transition: background 0.2s;
    &::placeholder {
      color: #0f4954;
      font-size: 13px;
      font-weight: 200;
    }
  }
`;
