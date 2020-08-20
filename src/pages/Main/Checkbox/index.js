import React, {useState} from 'react';

import { CheckboxContainer, HiddenCheckbox, StyledCheckbox } from './styles';

export default function Checkbox({className, children, ...props}){
    const [checked, setChecked] = useState(false);

    function handleCheckboxChange(){
        setChecked(!checked);
    }

    return (
    //<input type="checkbox" {...props} />
    <CheckboxContainer checked={checked} onClick={handleCheckboxChange}>
        <HiddenCheckbox onChange={handleCheckboxChange} checked={checked} {...props}/>
        <StyledCheckbox checked={checked}/>
        {children}
    </CheckboxContainer>
  );
}