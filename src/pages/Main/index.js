import React, {useState} from 'react';

import { Container, CheckBox, Label, CheckBoxInput, TextInput, TextArea} from './styles';

import Checkbox from "./Checkbox";

function Main() {

  return (
      <Container>
          <form>
              <h1>Vamos iniciar o seu planejamento...</h1>
              <Label>
                Empresa
                <TextInput type="text" name ="enterprise"/>
              </Label>

              <span className="row-form">
                <Label>
                  Titulo 
                  <TextInput size="495px" type="text" name ="title"/>
                </Label>

                <Label>
                  Data 
                  <TextInput size="85px" type="text" placeholder="DD/MM" name ="date"/>
                </Label>
              </span>

              <span>
                <Label>Mídias</Label>
                <div style={{display:"flex"}}>
                  <Checkbox>Instagram</Checkbox>
                  <Checkbox>Story</Checkbox>
                  <Checkbox>Facebook</Checkbox>
                  <Checkbox>Linkedin</Checkbox>
                </div>
                
        {/*                 
                  <Label>
                    <CheckBoxInput type="checkbox" id="story" name="story"/>
                    Story  
                  </Label>

                  <Label>
                    <CheckBoxInput type="checkbox" id="facebook" name="facebook"/>
                    Facebook
                  </Label>

                  <Label>
                    <CheckBoxInput type="checkbox" id="linkedin" name="linkedin"/>
                    Linkedin
                  </Label> */}
              </span>
            
              <Label>
                Briefing
                <TextArea type="text" name ="briefing"/>
              </Label>

              <Label>
                Referências
                <TextInput type="text" name ="references"/>
              </Label>
          </form>
      </Container>
  );
}

export default Main;