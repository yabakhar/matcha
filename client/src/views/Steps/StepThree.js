import { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Delete from '../../assets/icons/delete.png'
import Swal from 'sweetalert2'
import styled  from 'styled-components';
const StepThree =() => {
  const [photos, Setphotos] = useState([])
  const [InputValue, setInputValue] = useState("")
  
  function DeleteImage(index) {
     Setphotos(photos.filter((item, i) => i !== index))
  }
  const changepic = (e) => {
    if (photos.length > 3)
    {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
    }
    else
    {
      let file = e.target.files[0]
      let reader = new FileReader()
      reader.readAsDataURL(file);
      reader.onloadend = function (e) {
        Setphotos(
         [...photos,e.currentTarget.result])
       }
       setInputValue("")
    }
    }
    return (
          <div >
           <input accept="image/*"  id="icon-button-file" type="file" onChange={changepic} value={InputValue} disabled={photos.length > 3} />
           {
           photos.length < 1 ? "" :
            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={150}>
            {photos?.map((item, index) => (
              <div key={index}>
              <ImageListItem >
              <Image src={Delete} alt="delete" onClick={() => DeleteImage(index)}/>
                <img
                  className="photo"
                  src={item}
                  alt={item}
                  loading="lazy"
                  style={{width : '150px', height : '150px'}}
                />
              </ImageListItem>
             </div>
            ))}
           </ImageList>
            }
          </div>
    )
  }
export default StepThree

export const Image = styled.img`
  width : 15px;
  height : 15px;
  position : absolute;
  cursor : pointer;
`