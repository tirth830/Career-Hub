import React , { useEffect } from 'react'
// import { gsap } from 'gsap';
import GoogleLogo from '../../assets/googlelogo.png';
import MicrosoftLogo from '../../assets/microsoftlogo.png';
import InfosysLogo from '../../assets/infosyslogo.png';
import AmazonLogo from '../../assets/amazonlogo.png';
import FlipkartLogo from '../../assets/flipkartlogo.png';
import MetaLogo  from '../../assets/metalogo.png';
import TcsLogo from '../../assets/tcslogo.png';

const logos = [
  GoogleLogo,
  MicrosoftLogo,
  InfosysLogo,
  AmazonLogo,
  GoogleLogo,
  FlipkartLogo,
  MetaLogo,
  TcsLogo,
  MicrosoftLogo,
  InfosysLogo,
  AmazonLogo,
  FlipkartLogo,
  MetaLogo,
  TcsLogo,
  MicrosoftLogo,
  InfosysLogo,
  AmazonLogo,
  FlipkartLogo,
  MetaLogo,
  TcsLogo,
  MicrosoftLogo,
  InfosysLogo,
  AmazonLogo,
  GoogleLogo,
  FlipkartLogo,
  MetaLogo,
  TcsLogo,
  FlipkartLogo,
  MetaLogo,
  GoogleLogo,
  TcsLogo,
  MicrosoftLogo,
  InfosysLogo,
  AmazonLogo,
  FlipkartLogo,
  MetaLogo,
  TcsLogo,
  GoogleLogo,
];

const Scroll = () => {

  return (
    <>
      <div className="relative flex items-center w-full h-32 overflow-hidden  wrapper">
        <div className="absolute top-0 left-0 z-10 w-40 h-full bg-gradient-to-r from-gray-200"></div>
        <div className="absolute top-0 right-0 z-10 w-40 h-full bg-gradient-to-l from-gray-200 transform rotate-200"></div>
        <div className="flex track object-contain ">
          {logos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 w-40 logo">
              <img src={logo} alt={`logo-${index}`} className="h-20" />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Scroll;
