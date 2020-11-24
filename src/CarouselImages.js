import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import info1 from './images/Covid_knowabout.png';
import info2 from './images/Covid_spread.png';
import info3 from './images/Covid_protect.png';
import info4 from './images/Covid_socialdistancing.png';
import info5 from './images/Covid_ifsick.png';
import info6 from './images/Covid_severeill.png';
import stats from './images/Covid_cases.png';
  
export class CarouselImages extends Component {  
        render() {  
                return (  
                 <div>  
                   <div class='container-fluid' >  
                     <div className="row title" style={{ marginBottom: "50px" }} >  
                       <div class="col-sm-12 btn btn-warning">  
                          What you should know about COVID-19 
                       </div>  
                     </div>  
                   </div> 
                   <div className='container-fluid' >  
                     <Carousel interval={2000} keyboard={false} pauseOnHover={true}>  
                       <Carousel.Item style={{'height':"600px"}}>  
                         <img style={{'height':"500px"}} className="legend" src={stats}/>  
                       </Carousel.Item>
                       <Carousel.Item style={{'height':"700px"}}  >  
                         <img style={{'height':"400px"}} className="d-block w-100" src={info1}/>  
                       </Carousel.Item  >  
                       <Carousel.Item style={{'height':"700px"}}>  
                         <img style={{'height':"400px"}} className="d-block w-100" src={info2}/>  
                       </Carousel.Item>  
                       <Carousel.Item style={{'height':"700px"}}>  
                         <img style={{'height':"400px"}} className="d-block w-100" src={info3}/>  
                       </Carousel.Item>
                       <Carousel.Item style={{'height':"700px"}}>  
                         <img style={{'height':"400px"}} className="d-block w-100" src={info4}/>  
                       </Carousel.Item>
                       <Carousel.Item style={{'height':"700px"}}>  
                         <img style={{'height':"550px"}} className="d-block w-100" src={info5}/>  
                       </Carousel.Item>
                       <Carousel.Item style={{'height':"700px"}}>  
                         <img style={{'height':"400px"}} className="d-block w-100" src={info6}/>  
                       </Carousel.Item>
                     </Carousel>  
                    </div>  
                 </div>  
                )  
        }  
}  
  
export default CarouselImages  
