import './Hjdo.css'
import { padding } from '@mui/system';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, ListGroup, Button, FloatingLabel } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import ReviewForm from './ReviewForm';



let mtjson = {
    title: "MOM's TOUCH",
    logo: "images/momstouch.png",
    site : "http://momstouch.co.kr/",
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
    background : #F4F4F4;
    text-align:center;
`;

// background: papayawhip;
function Hjdo() {
    const [mom, setMom] = useState(mtjson)
    const [review, setReview] = useState([{user:"박예빈", content:'참깨빵 위에 순 쇠고기 패티 두 장 특별한 소스 양상추 치즈 피클 양파 까지'}])
    const [value, setValue] = useState(""); //댓글 입력창 value
    const [nickvalue, setNickValue] = useState("");
    const [like, setLike] = useState([0, 0, 0, 0]);


    const handleSubmit = (e) => {
        e.preventDefault();
        // setTodoData((prev) => [...prev, newTodo]);
        // localStorage.setItem('todoData', JSON.stringify([...todoData, newTodo]));
        let copy = [...review];
        let newReview = {
            user : nickvalue,
            content : value
        }
        copy.push(newReview)

        setReview(copy);
        console.log(copy)
        localStorage.setItem('review', JSON.stringify(copy));
        
        setValue("");
        setNickValue("");
    }
    useEffect(()=>{
        //로컬스토리지가 널이면?
        if(localStorage.getItem('review') === null){
            // localStorage.setItem('reivew', null)
        }else{
        let local = localStorage.getItem('review')
        setReview(JSON.parse(local)) 
        }
        if(localStorage.getItem('like')===null){
        //    localStorage.setItem('like', null)
        }else{
            let likelocal = localStorage.getItem('like');
            setLike(JSON.parse(likelocal))
        }
        
    },[])


    return (
        <>
            <Container className='mt-4'>
                <Row>
                  
                        <img style={{ width: '900px',   margin: "auto", display: "block", marginBottom:"40px" }} src={mom.logo}></img>
                    
                </Row>
                <Row>
                    <Col>
                        <h1>{mom.title}</h1>
                        <p>{mom.content}</p>
                        <Button  variant="warning">바로가기</Button>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <h3>대표버거</h3>
                    <Wrapper>
                        <Row>

                            {mom.burgers.map((item, index) => {
                                return (
                                    <Col key={index}>
                                        <img className='hjburger' style={{ height: '140px' }} src={item.burgerSrc}></img>
                                        <h4>{item.burgername}</h4>
                                        <span>{item.burgerinfo}</span><br></br>
                                        <span><span onClick={()=>{
                                            let likecopy = [...like];
                                            likecopy[index]++;
                                            setLike(likecopy);
                                            localStorage.setItem('like', JSON.stringify(likecopy));
                                        }}>👍</span>{like[index]}</span>
                                    </Col>
                                )
                            })}

                        </Row>
                    </Wrapper>
                </Row>
                <hr></hr>
                <Row>
                    <h2>후기</h2>
                        <ReviewForm value={value} setValue={setValue} nickvalue={nickvalue} setNickValue={setNickValue} handleSubmit={handleSubmit}></ReviewForm>
                </Row>
                <Row>
                    {/* <Col> */}
                    <Card>
                        <ListGroup className='w-100' variant="flush">
                            {review.map((item, index) => {
                                return <ListGroup.Item key={index}>
                                        <b>{item.user}&nbsp;&nbsp;</b>
                                        {item.content}
                                    </ListGroup.Item>
                            })}

                        </ListGroup>
                    </Card>
                    {/* </Col> */}
                </Row>
            </Container>



        </>
    )
}

export default Hjdo;