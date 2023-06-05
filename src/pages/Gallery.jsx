import React, { useState } from "react";
import g1 from "../assets/Galerija/g1.jpg";
import g2 from "../assets/Galerija/g2.jpg";
import g3 from "../assets/Galerija/g3.jpg";
import g4 from "../assets/Galerija/g4.jpg";
import g5 from "../assets/Galerija/g5.jpg";
import g6 from "../assets/Galerija/g6.jpg";
import g7 from "../assets/Galerija/g7.jpg";
import g8 from "../assets/Galerija/g8.jpg";
import g9 from "../assets/Galerija/g9.jpg";
import g10 from "../assets/Galerija/g10.jpg";
import g11 from "../assets/Galerija/g11.jpg";
import g12 from "../assets/Galerija/g12.jpg";
import g13 from "../assets/Galerija/g13.jpg";
import g14 from "../assets/Galerija/g14.jpg";
import g16 from "../assets/Galerija/g16.jpg";
import g17 from "../assets/Galerija/g17.jpg";
import g18 from "../assets/Galerija/g18.jpg";
import "../App.css";
import CloseIcon from "@mui/icons-material/Close";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Gallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: g1,
    },
    {
      id: 2,
      imgSrc: g2,
    },
    {
      id: 3,
      imgSrc: g3,
    },
    {
      id: 4,
      imgSrc: g4,
    },
    {
      id: 5,
      imgSrc: g5,
    },
    {
      id: 6,
      imgSrc: g6,
    },
    {
      id: 7,
      imgSrc: g7,
    },
    {
      id: 8,
      imgSrc: g8,
    },
    {
      id: 9,
      imgSrc: g9,
    },
    {
      id: 10,
      imgSrc: g10,
    },
    {
      id: 11,
      imgSrc: g11,
    },
    {
      id: 12,
      imgSrc: g12,
    },
    {
      id: 13,
      imgSrc: g13,
    },
    {
      id: 14,
      imgSrc: g14,
    },
    {
      id: 15,
      imgSrc: g16,
    },
    {
      id: 16,
      imgSrc: g17,
    },
    {
      id: 17,
      imgSrc: g18,
    },
  ];
  const [model, setModel] = useState(false);
  const [tempSrc, setTempSrc] = useState("");
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const getImg = (imgSrc) => {
    setTempSrc(imgSrc);
    setModel(true);
  };
  const openModal = (index) => {
    setTempSrc(data[index].imgSrc);
    setCurrentImgIndex(index);
    setModel(true);
  };

  const closeModal = () => {
    setModel(false);
  };

  const showPrevImage = () => {
    if (currentImgIndex > 0) {
      const newIndex = currentImgIndex - 1;
      setTempSrc(data[newIndex].imgSrc);
      setCurrentImgIndex(newIndex);
    }
  };

  const showNextImage = () => {
    if (currentImgIndex < data.length - 1) {
      const newIndex = currentImgIndex + 1;
      setTempSrc(data[newIndex].imgSrc);
      setCurrentImgIndex(newIndex);
    }
  };

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <div className="flex relative">
          <div
            className="absolute left-[85px] lg:left-0 top-[50%]  -translate-y-[50%] cursor-pointer  flex align-center justify-center"
            onClick={showPrevImage}
          >
            <AiOutlineArrowLeft size={6} />
          </div>
          <div className="p-2">
            <img src={tempSrc} />
          </div>
          <div
            className="absolute right-[20px] lg:-right-16 top-[50%]  -translate-y-[50%] cursor-pointer flex align-center justify-center"
            onClick={showNextImage}
          >
            <AiOutlineArrowRight size={6} />
          </div>

          <CloseIcon onClick={closeModal} />
        </div>
      </div>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div className="pics" key={index} onClick={() => openModal(index)}>
              <img src={item.imgSrc} className="w-full" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
