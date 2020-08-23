import React from 'react';

import { PDFViewer } from '@react-pdf/renderer';

import { Page, View, Document, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    document: {
        margin: 20,
    },
    title:{
        fontSize: 20,
        margin: 16,
        alignSelf: "center",
        
    },
    plan:{
        marginTop: 30,
    },
    subTitle:{
        fontSize: 18,
        marginBottom: 20,        
    },
    view:{
        width: 530,
        height: 760,
    }

});

function PdfView({plans}) {
    console.log(plans.length);
  if(plans.length > 0){
    return (
        <PDFViewer style={styles.view}>
        <Document>
            <Page size="A4">
                
                <View style={styles.document}> 
                <Text style={styles.title}>{plans[0].client}</Text>
                    {plans.map(plan => {
                        return (
                            <>
                                <Text style={styles.plan}>
                                    {plan.date} | {plan.socialMedias.join(' + ')}
                                </Text>                             
                                <Text style={styles.subTitle}>Titulo              {plan.topic}</Text>
                                <Text style={styles.subTitle}>Briefing           {plan.briefing}</Text>
                                <Text style={styles.subTitle}>Referências     {plan.attachment}</Text>
                               
                            </>
                            
                        )
                    })}
                </View>
                
            </Page>
        </Document>
        </PDFViewer>
      );
  }
  return(<div></div>)
  
}

export default PdfView;