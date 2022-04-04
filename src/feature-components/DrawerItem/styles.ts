import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  margin: 0px 40px;
  padding: 22px 0px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.shape_dark};
`;
