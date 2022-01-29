import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.secondary};
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;
`;
