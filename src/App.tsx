import React,{useState,useEffect} from 'react'
import './index0.css';
import Img1 from './img/img1.png'
import Img2 from './img/img2.png'
import CouponBanner from './CouponBanner';
import axios from 'axios';
export default function App() {
    const [viewportWidth,setViewportWidth] = useState(window.innerWidth)
    const [num,setNum] = useState(viewportWidth>=768?Img1:Img2)
    const [TC, setTC] = useState(true)
      const [dataS,setdataS]=useState({
        leftContent1:'现在享受你',
        leftContent2:'最喜欢的品牌',
        leftContent3:'30% Off',
        rightContent1:'优惠券',
        rightContent2:'适用于所有项目',
        rightContent3:'最低订单10欧元,有效期为10天',
        rightContent4:'30%',
        rightContent5:'OFF',
        rightButton:'iLo quiero!'
       })
    useEffect(()=>{
        axios.get('https://www.fastmock.site/mock/02418c233491e66e02b90a1c2591c8b5/mock/mock').then((res)=>{
            if(TC&&window.innerWidth>768){
                setdataS(res.data.zh['1440'])
            }else if(TC&&window.innerWidth<=768){
                setdataS(res.data.zh['768'])
            }

            if(!TC&&window.innerWidth>768){
                setdataS(res.data.en['1440'])
            }else if(!TC&&window.innerWidth<=768){
                setdataS(res.data.en['768'])
            }
        })
    },[TC])
useEffect(() => {
    const handleResize =() => {
      setTimeout(()=>{
        setViewportWidth(window.innerWidth);
        if(viewportWidth>=768){
            setNum(Img1)
        }else{
            setNum(Img2)
        }
      },0)
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
}, [viewportWidth]) 


    return (<div>
        <div id="container">
            <div className="left">
                <div className="img">
                   <img src={num} alt="" />
                </div>
                <div className="content">
                    <p>{dataS.leftContent1}</p>
                    <p>{dataS.leftContent2}</p>
                    <p className="off">{dataS.leftContent3}</p>
                </div>
            </div>
            <div className="right">
                <div className="right-container">
                    <div className="time"><CouponBanner/></div>
                    <div className="group">
                        <div className="group-back">
                            <div className="content-left">
                                <p className="content-left-p1">{dataS.rightContent4}</p>
                                <p className="content-left-p2">{dataS.rightContent5}</p>
                            </div>
                            <div className="content-center">
                                <p className="content-center-p1">{dataS.rightContent1}</p>
                                <p className="content-center-p2">{dataS.rightContent2}</p>
                                <p className="content-center-p2">{dataS.rightContent3}</p>
                                <button>{dataS.rightButton}</button>
                            </div>
                        </div>
                        <div className="TC">
                          <span onClick={()=>{setTC(!TC)}}>T&C</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}




