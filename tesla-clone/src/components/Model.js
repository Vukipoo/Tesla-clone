import React from "react";
import { FiChevronDown } from "react-icons/fi";
import styled from 'styled-components'


function Model(props) {
  return (
    <Wrap bgImage = { props.background } className="lg: bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_2560,w_4096,c_fit,f_auto,q_auto:best/Homepage-Model-3-Desktop-LHD')] h-screen bg-cover bg-center">
      <div className="relative inset-x-0 text-center top-[8%]">
        <h1 className="text-3xl font-bold">{ props.title }</h1>
        <p className="p-2 text-sm">{ props.description }</p>
      </div>

      <div className="flex flex-col items-center justify-center text-sm lg:flex-row relative inset-x-0 top-[70%]">
        <button className="bg-[#171a20] rounded-md w-96 lg:w-64 lg:mx-4 h-10 mt-2 text-white">
          {props.leftBtnText }
        </button>
        <button className="bg-[#f4f4f4] rounded-md w-96 lg:w-64 lg:mx-4 h-10 mt-2 ">
        { props.rightBtnText }
        </button>
      </div>

      <div className="flex justify-center animate-bounce relative inset-x-0 top-[73%]">
        <FiChevronDown size={24} />
      </div>
    </Wrap>
  );
}

export default Model;


const Wrap = styled.div `
    background-image : ${props => `url(${props.bgImage})`}
`



