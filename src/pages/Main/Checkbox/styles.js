import styled from 'styled-components';

export const CheckboxContainer = styled.div`
  display: flex;
  background-color: ${props => props.checked ? '#97C160' : '#F6F6F6'};
  border-radius: 5px;
  align-items: center;
  width: 120px;
  height: 40px;
  padding-left: 5px;
  margin: 0px 4px;
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

export const StyledCheckbox = styled.label`
  display: inline-block;
  width: 23px;
  height: 23px;
  background: #F6F6F6;
  border-radius: 50%;
  transition: all 150ms;
  margin-right: 6px;
  box-shadow: 0 0 0 1px #939191;
`;
