import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'


export default class App extends React.Component {

  render() {
    return (

      <Container className='mt-1' fluid>
        <Alert className='text' variant={'primary'}>Primary Alert</Alert>
        <Alert className='text' variant={'success'}>Success Alert</Alert>
        <Alert className='text' variant={'warning'}>Warning Alert</Alert>
        <Alert className='text' variant={'danger '}>Danger Alert</Alert>
        <Alert className='text' variant={'info '}>Info Alert</Alert>

        {/* <Alert>
          <AlertHeading>Rather than line all alert manually we can iterate and use it</AlertHeading>
        </Alert> */}
        {/* 
Rather than line all alert manually we can iterate and use it */}
        {
          ['primary', 'success', 'danger', 'info', 'warning', 'light', 'dark'].map((element, index) => (
            <Alert className='text' variant={element}>Primary Alert</Alert>
          ))
        }
      </Container>
    );
  }
}