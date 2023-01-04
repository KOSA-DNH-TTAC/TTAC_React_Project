
import { padding } from '@mui/system';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, ListGroup, Button, FloatingLabel } from 'react-bootstrap';
// import { Input } from '@mui/material';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';


const Yb = styled.div`
    float : left;
    margin : 20px;
`

function ReviewForm(props) {


    const handleChange = (e) => {
        props.setValue(e.target.value)
    }
    const handleNickChange = (e) => {
        props.setNickValue(e.target.value)
    }

    return <form onSubmit={props.handleSubmit}>
         <Form.Control
                as="textarea"
                placeholder="Nickname"
                style={{ height: '10px', width :'200px', marginBottom:'13px'}}
                value={props.nickvalue}
                onChange={handleNickChange}
            />
            <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: '100px' }}
                value={props.value}
                onChange={handleChange}
            />
            <Button
            variant="primary"
                // className='p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-200'
                type="submit"
                value="입력"
                style={{ marginTop: '7px', marginBottom:'13px' }}
            >입력</Button>
        </form>

}
export default ReviewForm;