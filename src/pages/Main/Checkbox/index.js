import React, {useState} from 'react';

import { CheckboxContainer, HiddenCheckbox, StyledCheckbox, Text } from './styles';
import CheckIcon from '../../../assets/images/tick.svg'

export default function Checkbox({className, children, ...props}){
    const [checked, setChecked] = useState(false);

    function handleCheckboxChange(){
        setChecked(!checked);
    }

    return (
    //<input type="checkbox" {...props} />
    <CheckboxContainer checked={checked} onClick={handleCheckboxChange}>
        <HiddenCheckbox onChange={handleCheckboxChange} checked={checked} {...props}/>
        <StyledCheckbox checked={checked}>
            <img alt="tick icon" checked={checked} style={{width: '15px'}} src={CheckIcon} />
        </StyledCheckbox>
        <Text checked={checked} >{children}</Text>
    </CheckboxContainer>
  );
}