import React from "react";
import { useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import { NepalFlagSlider } from "./NepalFlagSlider";
import { Link, useLocation } from "react-router-dom";
import homeBgVideo from '../../media/HomePage/My Movie.mp4';
import { HomeFooter } from "./HomeFooter";
export const HomePage = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery('(max-width:800px)');
  const location=useLocation()
  return (
    <div className="relative h-[90vh]">
      {/* {location.pathname!=='/'&&<video autoPlay loop muted className="video-background absolute inset-0 w-full h-full object-cover">
        <source src={homeBgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
      } */}
      
      <div className="flex flex-col items-center justify-center h-full relative overflow-hidden">
        <NepalFlagSlider />
        <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'}  gap-4 px-5 w-full`}>
          <Link
            to="/sign-in"
            className={`${
              isMobile ? 'text-xs p-2 px-3' : 'p-3 px-5'
            } no-underline text-white font-bold bg-blue-800 rounded-full cursor-pointer hover:bg-blue-900`}
          >
            {t('sign-in')}
          </Link>
        </div>
        <HomeFooter/>
      </div>
    </div>
  );
};