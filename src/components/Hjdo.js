
import { padding } from '@mui/system';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, ListGroup, Button, FloatingLabel } from 'react-bootstrap';
// import { Input } from '@mui/material';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import ReviewForm from './ReviewForm';



let mtjson = {
    title: "MOM's TOUCH",
    logo: "images/momstouch.png",
    content: "맘스터치는 대한민국의 패스트푸드 프랜차이즈로, 맘스터치앤컴퍼니가 운영하는 브랜드이다. 맘스터치라는 이름은 엄마의 손길이라는 의미이다. 대표 메뉴로는 싸이버거, 인크레더블 버거, 내슈빌 핫치킨 시리즈 등이 있다. 2020년 4월 기준 1,262개의 가맹점을 가지고 있다",
    burgers: [{
        burgername: "싸이버거",
        burgerSrc: "images/psy.png",
        burgerinfo: "바삭하고 매콤한 치킨 패티와 신선한 양상추가 조화를 이루는 맘스터치 시그니처 버거."
    },
    {
        burgername: "할라피뇨통살버거",
        burgerSrc: "images/할라피뇨.png",
        burgerinfo: "바삭한 통다리살 패티와 매콤한 할라피뇨 소스가 어우러져 뒷맛까지 깔끔한 버거."
    },
    {
        burgername: "화이트갈릭버거",
        burgerSrc: "images/화이트갈릭.png",
        burgerinfo: "부드러운 화이트 갈릭소스에 프리미엄 더블햄과 통가슴살 패티까지 담은 묵직한 버거."
    },
    {
        burgername: "딥치즈버거",
        burgerSrc: "images/딥치즈.png",
        burgerinfo: "부드러운 치즈와 한층 더 촉촉해진 통가슴살 패티가 일품인 버거."
    }
    ]
}

const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
    text-align:center;
`;


function Hjdo() {
    const [mom, setMom] = useState(mtjson)
    const [review, setReview] = useState(['날씨가 좋아요', '어쩔티비', '참깨빵 위에 순 쇠고기 패티 두 장 특별한 소스 양상추 치즈 피클 양파 까지'])
    const [value, setValue] = useState("");



    const handleSubmit = (e) => {
        e.preventDefault();
        // setTodoData((prev) => [...prev, newTodo]);
        // localStorage.setItem('todoData', JSON.stringify([...todoData, newTodo]));
        let copy = [...review];
        copy.push(value)

        setReview(copy);
        localStorage.setItem('review', JSON.stringify(copy));
        
        setValue("");
    }
    useEffect(()=>{
        let local = localStorage.getItem('review')
        setReview(JSON.parse(local))
        
    },[])


    return (
        <>
            <Container className='mt-4'>
                <Row>
                    <Col>
                        <img style={{ height: '250px', padding: '40px', border: '1px black solid' }} src={mom.logo}></img>
                    </Col>
                    <Col>
                        <h1>{mom.title}</h1>
                        <p>{mom.content}</p>
                    </Col>
                </Row>
                <Row>
                    <h3>대표버거</h3>
                    <Wrapper>
                        <Row>

                            {mom.burgers.map((item, index) => {
                                return (
                                    <Col>
                                        <img style={{ height: '140px' }} src={item.burgerSrc}></img>
                                        <h4>{item.burgername}</h4>
                                        <span>{item.burgerinfo}</span>
                                    </Col>
                                )
                            })}

                        </Row>
                    </Wrapper>
                </Row>
                <hr></hr>
                <Row>
                    <h2>후기</h2>
                        <ReviewForm value={value} setValue={setValue} handleSubmit={handleSubmit}></ReviewForm>
                </Row>
                <Row>
                    <Card style={{ width: '100%' }}>
                        <ListGroup variant="flush">
                            {review.map((item, index) => {
                                return <ListGroup.Item>{item}</ListGroup.Item>
                            })}

                        </ListGroup>
                    </Card>


                </Row>
            </Container>



        </>
    )
}

export default Hjdo;