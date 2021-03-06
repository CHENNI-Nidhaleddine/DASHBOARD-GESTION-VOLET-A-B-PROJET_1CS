import {useState,useEffect} from "react"
import {GoogleMap,useLoadScript,Marker, DirectionsRenderer} from "@react-google-maps/api"
import {FiSearch} from "react-icons/fi"
import {BsPlusLg} from "react-icons/bs"
import {BiFilter} from "react-icons/bi"
import { Swiper, SwiperSlide } from 'swiper/react';
import {AiFillStar} from "react-icons/ai"
import rihlati from "../assets/rihlati.png"
function Cartes(){

    const [show,setShow]=useState(false)
    const [viewState, setViewState] = useState({
        longitude: 5.4108,
        latitude: 36.1897,
        zoom: 14
      });
   
      const [center,setCenter]=useState( [{
        lat:36.76834017603671, lng:3.046707319992525
       },
       {
        lng:5.4101,
         lat:35.1898
       }])
       const {isLoaded}=useLoadScript({googleMapsApiKey:"AIzaSyDSUotqEe2hCNPfF1TaJWlVo-3UkzLjTes"})
 
       if (!isLoaded){
           return ( <div>Loading...</div>)
       }else{
    return (
        <div className="relative bg-[#333] w-full h-[calc(100vh-140px)] flex flex-col items-center justify-center mt-[calc(100px)] " >
 
 <GoogleMap zoom={16} center={center[0]} mapContainerClassName=" w-full h-full" >
 <img src={rihlati} className="bg-[#fff] rounded p-1 shadow-xl absolute bottom-0 left-0  w-[80px] mx-2 my-1 h-[40px]" alt=""/>
 {/* Parc beytouth */}
 <Marker position={{lat:36.76834017603671, lng:3.046707319992525}} anchor="center" icon={{url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}}
 ></Marker>
 {/* Constantine */}
 <Marker position={{lat:36.38346730335037, lng:6.612783848407775}} anchor="center" icon={{url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}}  ></Marker>
 {/* Grande mosque */}
 <Marker position={{lat:36.73499739465522, lng:3.14181085710423}} anchor="center" icon={{url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}}  ></Marker>
{/* notre-dame */}
 <Marker position={{lat:36.80106361436944, lng:3.042561701326816}} anchor="center" icon={{url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}}  ></Marker>
{/* Jardin d'essai */}
 <Marker position={{lat:36.74948470933547, lng:3.074556545517744}} anchor="center" icon={{url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}}  ></Marker>

 
 <div className="absolute bottom-5 w-full px-2 pr-16">
        <Swiper watchSlidesProgress={true} slidesPerView={4} className="mySwiper"  >
       <SwiperSlide 
       onClick={()=>
       setCenter( [{
        lat:36.76834017603671, lng:3.046707319992525
       },
       {
        lng:5.4101,
         lat:35.1898
       }])}
    className="relative  mx-2  cursor-pointer h-fit w-fit rounded flex items-center justify-center">
       <div className=" shadow-3xl relative flex flex-col items-center justify-left bg-[#fff] z-50  w-[calc(230px)] h-[calc(280px)] mx-5 rounded-xl shadow-2xl  ">
          <div className=" flex flex-col  self-start">
            <div className=" p-1 flex items-center justidy-center text-lg bg-[#fff] rounded absolute top-2 left-2">
              <h1>4.7</h1>
              <AiFillStar className="text-[#fb0] text-xl"/>
            </div>
        
         <img src="https://i.ibb.co/5h7TD3c/image1.png" className="rounded-t-xl  top-0 left-0 w-full"/>
         <div className="px-5 py-3">
          <h1 className="font-bold text-2xl">Parc Beyrouth</h1>
          <p className=" text-lg text-[#6B7280]">132 visteurs</p>
          </div>
          </div>
          <button className=" absolute bottom-3 bg-[#2400FF] text-[#fff] text-xl w-5/6 py-1 rounded-xl">Plus</button>
        </div>
       </SwiperSlide>
       <SwiperSlide
         onClick={()=>
          setCenter( [{
            lat:36.38346730335037, lng:6.612783848407775
          },
          {
           lng:5.4101,
            lat:35.1898
          }])}
        className="relative z-0 mx-2  cursor-pointer h-fit w-fit rounded flex items-center justify-center">
       <div className=" shadow-3xl relative flex flex-col items-center justify-left bg-[#fff] z-50  w-[calc(230px)] h-[calc(280px)] mx-5 rounded-xl shadow-2xl  ">
          <div className=" flex flex-col  self-start">
          <div className=" p-1 flex items-center justidy-center text-lg bg-[#fff] rounded absolute top-2 left-2">
              <h1>3.0</h1>
              <AiFillStar className="text-[#fb0] text-xl"/>
            </div>
         <img src="https://i.ibb.co/rb9h1bL/image2.png" className="rounded-t-xl  top-0 left-0 w-full"/>
         <div className="px-5 py-3">
          <h1 className="font-bold text-2xl">Constantine</h1>
          <p className=" text-lg text-[#6B7280]">255 visteurs</p>
          </div>
          </div>
          <button className=" absolute bottom-3 bg-[#2400FF] text-[#fff] text-xl w-5/6 py-1 rounded-xl">Plus</button>
        </div>
       </SwiperSlide>
       <SwiperSlide 
         onClick={()=>
          setCenter( [{
            lat:36.73499739465522, lng:3.14181085710423 
          },
          {
           lng:5.4101,
            lat:35.1898
          }])}
       className="relative z-0 mx-2  cursor-pointer h-fit w-fit rounded flex items-center justify-center">
       <div className=" shadow-3xl relative flex flex-col items-center justify-left bg-[#fff] z-50  w-[calc(230px)] h-[calc(280px)] mx-5 rounded-xl shadow-2xl  ">
          <div className=" flex flex-col  self-start">
          <div className=" p-1 flex items-center justidy-center text-lg bg-[#fff] rounded absolute top-2 left-2">
              <h1>3.9</h1>
              <AiFillStar className="text-[#fb0] text-xl"/>
            </div>
         <img src="https://i.ibb.co/9N8qcSV/image3.png" className="rounded-t-xl  top-0 left-0 w-full"/>
         <div className="px-5 py-3">
          <h1 className="font-bold text-2xl">Grand Mosque</h1>
          <p className=" text-lg text-[#6B7280]">255 visteurs</p>
          </div>
          </div>
          <button className=" absolute bottom-3 bg-[#2400FF] text-[#fff] text-xl w-5/6 py-1 rounded-xl">Plus</button>
        </div>
       </SwiperSlide>
       <SwiperSlide
         onClick={()=>
          setCenter( [{
            lat:36.80106361436944, lng:3.042561701326816
          },
          {
           lng:5.4101,
            lat:35.1898
          }])}
           className="relative z-0 mx-2  cursor-pointer h-fit w-fit rounded flex items-center justify-center">
       <div className=" shadow-3xl relative flex flex-col items-center justify-left bg-[#fff] z-50  w-[calc(230px)] h-[calc(280px)] mx-5 rounded-xl shadow-2xl  ">
          <div className=" flex flex-col  self-start">
          <div className=" p-1 flex items-center justidy-center text-lg bg-[#fff] rounded absolute top-2 left-2">
              <h1>4.2</h1>
              <AiFillStar className="text-[#fb0] text-xl"/>
            </div>
         <img src="https://i.ibb.co/5cn0K9S/image4.png" className="rounded-t-xl  top-0 left-0 w-full"/>
         <div className="px-5 py-3">
          <h1 className="font-bold text-2xl">Notre-Dame</h1>
          <p className=" text-lg text-[#6B7280]">43 visteurs</p>
          </div>
          </div>
          <button className=" absolute bottom-3 bg-[#2400FF] text-[#fff] text-xl w-5/6 py-1 rounded-xl">Plus</button>
        </div>
       </SwiperSlide>
       <SwiperSlide 
         onClick={()=>
          setCenter( [{
            lat:36.74948470933547, lng:3.074556545517744
          },
          {
           lng:5.4101,
            lat:35.1898
          }])}
           className="relative z-0 mx-2  cursor-pointer h-fit w-fit rounded flex items-center justify-center">
       <div className=" shadow-3xl relative flex flex-col items-center justify-left bg-[#fff] z-50  w-[calc(230px)] h-[calc(280px)] mx-5 rounded-xl shadow-2xl  ">
          <div className=" flex flex-col  self-start">
          <div className=" p-1 flex items-center justidy-center text-lg bg-[#fff] rounded absolute top-2 left-2">
              <h1>4.9</h1>
              <AiFillStar className="text-[#fb0] text-xl"/>
            </div>
         <img src="https://i.ibb.co/mtx6mWb/image6.jpg" className="rounded-t-xl  top-0 left-0 w-full"/>
         <div className="px-5 py-3">
          <h1 className="font-bold text-2xl">Jardin d'essai</h1>
          <p className=" text-lg text-[#6B7280]">423 visteurs</p>
          </div>
          </div>
          <button className=" absolute bottom-3 bg-[#2400FF] text-[#fff] text-xl w-5/6 py-1 rounded-xl">Plus</button>
        </div>
       </SwiperSlide>
      
       <SwiperSlide 
         onClick={()=>
          setCenter( [{
           lng:5.4108,lat:36.1898
          },
          {
           lng:5.4101,
            lat:35.1898
          }])}
           className="relative z-0 mx-2  cursor-pointer h-fit w-fit rounded flex items-center justify-center">
       <div className="  relative flex flex-col items-center justify-left  z-50  w-[calc(200px)] h-[calc(200px)] mx-5   ">
           </div>
       </SwiperSlide>
     </Swiper>
     </div>
      
    
       <div className="relative w-1/3 ml-48">
           <input type="text" name="" id="" className="absolute top-2 border-2 border-[#c4c4c4] left-5 z-30 outline-none rounded-xl w-full py-2 text-lg pl-3 pr-16" placeholder="Recherche Lieux, Monuments..."/>
           <FiSearch className="absolute right-0 top-4 text-[#c4c4c4] z-50 text-3xl"/>
       </div>
       <button className="absolute flex items-center justify-center  w-fit h-fit top-3 right-48
           font-bold bg-[#FFF] text-[#2400ff] border-2 border-[#2400ff] w-fit py-2 px-2  mr-2 ml-56 rounded-lg  text-lg">
             <span>Filter</span>
             <BiFilter className="text-3xl ml-1"/>
       </button>
       <button className="absolute flex items-center justify-center  w-fit h-fit top-3 right-16
           font-bold bg-[#2400ff] text-[#fff] border-2 border-[#2400ff] w-fit py-2 px-2  mr-2 ml-56 rounded-lg  text-lg">
             <span>Ajouter</span>
             <BsPlusLg className="text-xl ml-1"/>
       </button>
         
      </GoogleMap>  
  </div>
    )}
}
export default Cartes
