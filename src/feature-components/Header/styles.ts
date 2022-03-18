import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  border-bottom-left-radius: ${({ theme }) => theme.radius.default}px;
  border-bottom-right-radius: ${({ theme }) => theme.radius.default}px;
  padding-bottom: 40px;
`;

export const IconWrapper = styled.TouchableOpacity`
  margin-right: 22px;
`;

export const Title = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 60px 40px;
`;

export const Separator = styled.View`
  width: 15px;
`;
