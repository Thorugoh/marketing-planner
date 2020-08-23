import styled from 'styled-components';

export const CheckboxContainer = styled.div`

  display: flex;
  background-color: ${props => props.checked ? '#97C160' : '#E5E5E5'};
  border-radius: 5px;
  align-items: center;
  width: 120px;
  height: 35px;
  padding-left: 5px;
  margin: 0px 4px;
  &:hover{
        border-color: #97c160;
    };
`;

export const HiddenCheckbox = styled.input.attrs({type: 'checkbox'})`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px; 
`;

export const Text = styled.label`
  color: ${props => props.checked ? '#FFF' : '#555'};
  
`;

export const StyledCheckbox = styled.label`
  display: flex;
  width: 23px;
  height: 23px;
  background: #F6F6F6;
  border-radius: 50%;
  transition: all 150ms;
  margin-right: 6px;
  box-shadow: 0 0 0 1px #F6F6F6;
  justify-content: center;
  align-items: center;
  img {
    display: ${props => props.checked ? 'flex' : 'none'};
    filter: invert(75%) sepia(11%) saturate(6042%) hue-rotate(30deg) brightness(105%) contrast(68%);
  }
`;
