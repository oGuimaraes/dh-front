import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto 30px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  border-bottom: 1px #d1e1e6 solid;

  h2 {
    color: #0c515e;
    align-self: flex-end;
    margin-bottom: 5px;
    margin-left: 10px;
  }

  Button {
    margin-left: 10px;
    display: flex;
    align-items: end;
  }
`;
