import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  border-bottom-left-radius: ${({ theme }) => theme.radius.default}px;
  border-bottom-right-radius: ${({ theme }) => theme.radius.default}px;
  padding-bottom: 40px;
`;

export const MonthContainer = styled.View`
  flex-direction: row;
`;

export const Title = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 30px;
`;
