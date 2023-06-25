import React, { useEffect, useState } from 'react';
import fetchImages from '../data/firebase-storage';


function PixelArt() {
    const [images, setImages] = useState([]);
    useEffect( () => {
      async function fetchImgs() {
        let imgs = await fetchImages();
        setImages(imgs);
      }

      fetchImgs();
    }, []);

    let imageArray = renderImages(images);
    return (
      <div>
        <h2>🎨 Pixel Art Gallery</h2>
        { imageArray }
      </div>
    )
}

function renderImages(images) {
  if (images !== undefined && images.length > 0) {
    return (
        <table>
          <tbody>
            <tr>
              {getImageCells(images)}
            </tr>
          </tbody>
        </table>
    );
  } else if(images.length === 0) {
    return <h3>Loading image</h3>;
  } else {
    return <p>No pictures found!</p>;
  }
}

function getImageCells(images) {
  let cells = images.map((img) => (
    <td><img key={img.name} alt="pixel_gallery_image" src={img.url} /></td>
  ));

  console.log(cells);
  return cells;
}


export default PixelArt;