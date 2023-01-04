import 'bootstrap/dist/css/bootstrap.min.css';
import './Bjgo.css';
import { useState,useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Data from './data'
import BjgoSwiper from './BjgoSwiper';


function Bjgo(){
    useEffect(() => {
      console.log("BJGO")
    }, );
    
    let [menu, setMenu] = useState(Data);  //HOOK

    return (
    <>
        <div>
          
              <Col md={12} className="d-flex justify-content-center">
                <a href='https://www.kfckorea.com/'><img src='https://user-images.githubusercontent.com/92353613/210508099-211695ae-1c24-4679-9ede-832cc69a00ed.png'/></a>
              </Col>
              <Col md={12} >
                <BjgoSwiper />
              </Col>
              <Container>
                <br/>
              <Row>
                {
                  menu.map((item, i)=> {

                    let result = item.price.toLocaleString('ko-KR');
                    return <Col md={4}>
                        <div>
                          <img className='logo' src={item.img}/>
                        </div>
                        <div className='text-center'>
                          <h1>
                            {item.title}
                          </h1>
                          <h5 className='text-secondary'>
                            {item.content}
                          </h5>
                          <br/>
                          <h3 className='text-danger'>
                            ₩{result}
                          </h3>
                        </div>
                        <br/>
                        <div className='d-flex justify-content-center'>
                          <h3><button type='button' className='clickButton' onClick={()=>{
                            window.open(item.detail)
                          }}>상세보기</button></h3>
                        </div>
                      </Col>
                  })
                }
              </Row>
              
          </Container>
        
        </div>
    </>
    )
}
export default Bjgo;