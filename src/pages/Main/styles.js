import styled from 'styled-components';

export const Container = styled.div`
    background-color: #FAFBFB;
    width: 750px;
    height: 760px;
    margin: auto;
    padding-top: 20px;
    margin-top: 100px;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    form {
        margin: 76px;
        display: flex;
        flex-direction: column;
    }

    .row-form{
        display: flex;
        flex-direction: row;
    }    
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    color: black;
    padding: 8px 0px;
`;

export const CheckBox = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;

    label {
        display: flex;
        flex-direction: row;
        background-color: blue;
        width: 120px;
        height: 35px;
        border-radius: 5px;
        align-items: center;

        ::after{
            content: '';
            background-color: green;
        }
    }

`;

export const CheckBoxInput = styled.input`
    background-color: blue;

    :checked after{
        background-color: black;
    }
    
`;

export const TextInput = styled.input`
    width: ${props => props.size ? props.size : '590px'};
    height: 25px;
    margin-top: 4px;
    margin-right: 4px; 
    border: 1px solid black;
    border-radius: 5px;
    border-color: black;
    &:hover{
        border-color: #97c160;
    }
`;

export const TextArea = styled.textarea`
    max-width: 590px;
    min-width: 590px;
    margin-top: 4px;
    
`;