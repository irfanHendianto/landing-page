import { Row, Col , Steps, Typography  } from 'antd';
const { Text } = Typography;
const { Step } = Steps;

const Experience = ()=>{
    return (
        <div id="experience" className="block">
            <div className="container-fluid" >
                <Row gutter={[16, 16]} style={{justifyContent:"center"}}>
                    <Col className="gutter-row" xs={{ span: 24 }} s={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }}  lg={{ span: 8 }} xl={{ span: 8}} xxl={{ span: 8}}  >
                        <div className="titleHolder" >
                            <h2>Experience</h2>
                        </div >                            
                        <Row  style={{justifyContent: 'center'}}>
                            <Col>
                                <div style={{}}>
                                    <Steps progressDot direction="vertical" current={3} stlye={{paddingLeft:'13%'}}>
                                        <Step title="Maret 2019 - Febuari 2020" description="FullStack Developer di Sejahtera Group" />
                                        <Step title="Agustus 2020 - Juli 2021" description="RPA Developer di PT.Adidata Informatika" />
                                    </Steps>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="gutter-row"  xs={{ span: 24 }} s={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 8 }} xl={{ span: 8 }} xxl={{ span: 8 }}>
                        <div className="titleHolder"  >
                            <h2>Skills</h2>
                        </div >
                            <div style={{textAlign:'center'}}>
                                <Row style={{justifyContent: 'center'}}>
                                    <Col span={1}>
                                        <span className="Blackdot"></span>
                                    </Col>
                                    <Col  xs={{ span: 8 }} s={{ span: 8 }} sm={{ span: 8 }} md={{ span: 5 }} lg={{ span: 8 }} xl={{ span: 8 }} xxl={{ span: 8 }} style={{textAlign:'left'}}>
                                        <Text style={{fontFamily: 'sans-serif', fontSize:'11px',marginLeft: '10px'}}>PHP</Text>
                                    </Col>
                                    <Col span={5}>
                                        <span className="Redtdot"></span>
                                        <span className="Redtdot"></span>
                                        <span className="Redtdot"></span>
                                        <span className="GreyDot"></span>
                                        <span className="GreyDot"></span>
                                    </Col>
                                </Row>
                                <Row  style={{justifyContent: 'center'}}>
                                    <Col span={1}>
                                        <span className="Blackdot"></span>
                                    </Col>
                                    <Col  xs={{ span: 8 }} s={{ span: 8 }} sm={{ span: 8 }} md={{ span: 5 }} lg={{ span: 8 }} xl={{ span: 8 }} xxl={{ span: 8 }} style={{textAlign:'left'}}>
                                        <Text style={{fontFamily: 'sans-serif', fontSize:'11px',marginLeft: '10px'}}>HTML & CSS</Text>
                                    </Col>
                                    <Col span={5}>
                                        <span className="Redtdot"></span>
                                        <span className="Redtdot"></span>
                                        <span className="Redtdot"></span>
                                        <span className="GreyDot"></span>
                                        <span className="GreyDot"></span>
                                    </Col>
                                </Row>
                                <Row  style={{justifyContent: 'center'}}>
                                    <Col span={1}>
                                        <span className="Blackdot"></span>
                                    </Col>
                                    <Col  xs={{ span: 8 }} s={{ span: 8 }} sm={{ span: 8 }} md={{ span: 5 }} lg={{ span: 8 }} xl={{ span: 8 }} xxl={{ span: 8 }} style={{textAlign:'left'}}>
                                        <Text style={{fontFamily: 'sans-serif', fontSize:'11px',marginLeft: '10px'}}>Javascript</Text>
                                    </Col>
                                    <Col span={5}>
                                        <span className="Redtdot"></span>
                                        <span className="Redtdot"></span>
                                        <span className="Redtdot"></span>
                                        <span className="GreyDot"></span>
                                        <span className="GreyDot"></span>
                                    </Col>
                                </Row>
                                <Row  style={{justifyContent: 'center'}}>
                                    <Col span={1}>
                                        <span className="Blackdot"></span>
                                    </Col>
                                    <Col  xs={{ span: 8 }} s={{ span: 8 }} sm={{ span: 8 }} md={{ span: 5 }} lg={{ span: 8 }} xl={{ span: 8 }} xxl={{ span: 8 }} style={{textAlign:'left'}}>
                                        <Text style={{fontFamily: 'sans-serif', fontSize:'11px',marginLeft: '10px'}}>MySQL</Text>
                                    </Col>
                                    <Col span={5}>
                                        <span className="Redtdot"></span>
                                        <span className="Redtdot"></span>
                                        <span className="Redtdot"></span>
                                        <span className="GreyDot"></span>
                                        <span className="GreyDot"></span>
                                    </Col>
                                </Row>
                                <Row  style={{justifyContent: 'center'}}>
                                    <Col span={1}>
                                        <span className="Blackdot"></span>
                                    </Col>
                                    <Col  xs={{ span: 8 }} s={{ span: 8 }} sm={{ span: 8 }} md={{ span: 5 }} lg={{ span: 8 }} xl={{ span: 8 }} xxl={{ span: 8 }} style={{textAlign:'left'}}>
                                        <Text style={{fontFamily: 'sans-serif', fontSize:'11px',marginLeft: '10px'}}>Laravel</Text>
                                    </Col>
                                    <Col span={5}>
                                        <span className="Redtdot"></span>
                                        <span className="Redtdot"></span>
                                        <span className="Redtdot"></span>
                                        <span className="GreyDot"></span>
                                        <span className="GreyDot"></span>
                                    </Col>
                                </Row>
                                <Row  style={{justifyContent: 'center'}}>
                                    <Col span={1}>
                                        <span className="Blackdot"></span>
                                    </Col>
                                    <Col  xs={{ span: 8 }} s={{ span: 8 }} sm={{ span: 8 }} md={{ span: 5 }} lg={{ span: 8 }} xl={{ span: 8 }} xxl={{ span: 8 }} style={{textAlign:'left'}}>
                                        <Text style={{fontFamily: 'sans-serif', fontSize:'11px',marginLeft: '10px'}}>React JS</Text>
                                    </Col>
                                    <Col span={5}>
                                        <span className="Redtdot"></span>
                                        <span className="Redtdot"></span>
                                        <span className="GreyDot"></span>
                                        <span className="GreyDot"></span>
                                        <span className="GreyDot"></span>
                                    </Col>
                                </Row>
                                <Row  style={{justifyContent: 'center'}}>
                                    <Col span={1}>
                                        <span className="Blackdot"></span>
                                    </Col>
                                    <Col  xs={{ span: 8 }} s={{ span: 8 }} sm={{ span: 8 }} md={{ span: 5 }} lg={{ span: 8 }} xl={{ span: 8 }} xxl={{ span: 8 }} style={{textAlign:'left'}}>
                                        <Text style={{fontFamily: 'sans-serif', fontSize:'11px',marginLeft: '10px'}}>UIPath</Text>
                                    </Col>
                                    <Col span={5}>
                                        <span className="Redtdot"></span>
                                        <span className="Redtdot"></span>
                                        <span className="Redtdot"></span>
                                        <span className="GreyDot"></span>
                                        <span className="GreyDot"></span>
                                    </Col>
                                </Row>

                            </div>
                    </Col>
                    <Col className="gutter-row" xs={{ span: 24 }} s={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24}}  lg={{ span: 8 }} xl={{ span: 8 }} xxl={{ span: 8 }}  >
                        <div className="titleHolder" >
                            <h2>Contact</h2>
                        </div >
                        <div style={{paddingLeft:'10px',textAlign:'center'}}>
                            <p style={{ fontSize: '20px'}}><i class="fas fa-address-book" ></i> +6281373193935</p>
                            <p style={{ fontSize: '20px'}}><i class="fas fa-envelope"></i> irfanhendianto@gmail.com</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Experience;