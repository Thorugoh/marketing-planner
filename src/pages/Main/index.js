import React, {useState} from 'react';
import PdfView from '../PdfView';
import Checkbox from "./Checkbox";

import { Container, Label, Button, TextInput, TextArea, PreviewContainer, FormContainer} from './styles';

function Main() {
  const [client, setClient] = useState('');
  const [socialMedias, setSocialMedias] = useState([]);
  const [topic, setTopic] = useState('');
  const [briefing, setBriefing] = useState('');
  const [reference, setReference] = useState('');
  const [date, setDate]= useState('');
  const[plans, setPlans]= useState([]);

  function handleCreatePlan(e){
    e.preventDefault();
    const plan = {
      client,
      socialMedias,
      topic,
      briefing,
      attachment: reference,
      date
    }

    setPlans([...plans, plan]);
  }

  return (
      <Container>
          <FormContainer>
            <form onSubmit={handleCreatePlan}>
            <h1 style={{color: '#555'}}>Vamos iniciar o seu planejamento...</h1>
              <Label>
                Cliente
                <TextInput 
                  type="text" 
                  name ="client"
                  value={client}
                  onChange={(e) => {setClient(e.target.value)}}
                />
              </Label>

              <span className="row-form">
                <Label>
                  Titulo 
                  <TextInput 
                    size="495px" 
                    type="text" 
                    name ="title"
                    value={topic}
                    onChange={(e) => {setTopic(e.target.value)}}
                  />
                </Label>

                <Label>
                  Data 
                  <TextInput 
                    size="85px" 
                    type="text" 
                    placeholder="DD/MM" 
                    name ="date"
                    value={date}
                    onChange={(e) => {setDate(e.target.value)}} 
                  />
                </Label>
              </span>

              <span>
                <Label>Mídias</Label>
                <div style={{display:"flex"}}>
                  <Checkbox >Instagram</Checkbox>
                  <Checkbox>Story</Checkbox>
                  <Checkbox>Facebook</Checkbox>
                  <Checkbox>Linkedin</Checkbox>
                </div>
              </span>
            
              <Label>
                Briefing
                <TextArea 
                  type="text" 
                  name ="briefing"
                  value={briefing}
                  onChange={(e) => {setBriefing(e.target.value)}}
                />
              </Label>

              <Label>
                Referências
                <TextInput 
                  type="text" 
                  name ="references"
                  value={reference}
                  onChange={(e) => {setReference(e.target.value)}}
                />
              </Label>

              <Button type="submit">Save</Button>
            </form>
          </FormContainer>
        <PreviewContainer>
          <PdfView plans={plans}/>
        </PreviewContainer>
        
      </Container>

  );
  
}

export default Main;