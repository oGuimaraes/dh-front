import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav:first-child {
    display: flex;
    align-items: center;

    a {
      font-weight: bold;
      color: #0085b2;
      font-size: 14px;
    }

    img {
      width: 60px;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }
  }

  nav:nth-child(2) {
    display: flex;
    align-items: center;
    a {
      color: #999;
      font-size: 14px;
      margin-left: 40px;
      font-weight: bold;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }

  img {
    height: 38px;
    width: 38px;
    border-radius: 50%;
  }
`;
