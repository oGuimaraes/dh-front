import styled from 'styled-components';

export const Container = styled.div`
  span {
    font-size: 12px;
  }
`;

export const ButtonContainer = styled.div`
  .buttonContainer {
    display: flex;
    justify-content: center;
  }

  button {
    margin: 30px;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  img {
    border-radius: 65px;
    border: 1px #9a9a9a solid;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }
`;
