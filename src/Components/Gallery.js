// import { GalleryData } from "../Constants";
// import { useEffect, useState } from "react";
// import '../App.css'
// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import { textVariant, slideIn } from "../utils/motion";

// function Gallery() {

//   const [data,setData] = useState([]);
//   const [collection,setCollection] = useState([]);

//   useEffect(()=>{
//     setData(GalleryData);
//     setCollection([...new Set(GalleryData.map((item)=> item.titile))])
//   },[])

//   const gallery_filter = (itemData) =>{
//     const filterData = GalleryData.filter((item)=> item.titile === itemData);
//     setData(filterData);
//   }

//   return (
//     <section id="gallery" className="w-full h-screen mx-auto ">
//       <div id="gallery" className={`${styles.paddingX}`} >
//         <motion.h2 initial="hidden" whileInView="show" viewport={{once:true}} variants={textVariant()} className={styles.sectionHeadText}>Gallery</motion.h2>
//       </div>
//       <div className="galleryWrapper">
//         <div className="filterItem">
//           <ul>
//             <li><button onClick={()=> setData(GalleryData)}>All</button></li>
//             {
//               collection.map((item)=> <li><button onClick={()=>{gallery_filter(item)}}>{item}</button></li>)
//             }
//           </ul>
//         </div>
//         <div className="galleryContainer">
//           {
//             data.map((item)=> <div  key={item.id} className="galleryItem object-contain"><img className="object-contain" src={item.image} alt="img" /></div> )
//           }
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Gallery;

import React, { useState } from "react";
import "../App.css";
import CloseIcon from "@mui/icons-material/Close";
import Img1 from "../assets/Gallery/pica2.jpeg";
import Img2 from "../assets/Gallery/pica1.jpeg";
import Img3 from "../assets/Gallery/pica7.jpg";
import Img4 from "../assets/Gallery/pica4.jpg";
import Img5 from "../assets/Gallery/pica5.jpg";
import Img6 from "../assets/Gallery/team1.jpg";
import Img7 from "../assets/Gallery/pica6.jpg";
import Img8 from "../assets/Gallery/pica3.jpeg";
import Img9 from "../assets/Gallery/ENTE.webp";

import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant, slideIn } from "../utils/motion";

const Gallery = () => {
  let data = [
    {
      id: 8,
      imgSrc: Img8,
    },
    
    {
      id: 2,
      imgSrc: Img2,
    }, 
    {
      id: 9,
      imgSrc: Img9,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
   
    {
      id: 4,
      imgSrc: Img4,
    },
    {
      id: 5,
      imgSrc: Img5,
    },
    {
      id: 6,
      imgSrc: Img6,
    },
    {
      id: 7,
      imgSrc: Img7,
    },
   
   
  ];
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };
  return (
    <section id="gallery" className="w-full h-fit mx-auto my-20">
      <div id="gallery" className={`${styles.paddingX}`}>
      <motion.h1
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={textVariant()}
        className={`${styles.heroHeadText} flex justify-center`}
      >
        Gallery
      </motion.h1>
      <motion.h5
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={textVariant()}
        className={`${styles.heroSubText} flex justify-center mb-10`}
      >
        Memories of our Journey
      </motion.h5>
      </div>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} />
        <CloseIcon onClick={() => setModel(false)} />
      </div>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img src={item.imgSrc} style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
