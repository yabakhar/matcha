import { useState,useContext } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Delete from '../../assets/icons/delete.png'
import Swal from 'sweetalert2'
import styled  from 'styled-components';
import { userContext } from "../CompleteProfile";
const StepThree =() => {
  const {
    userData,
    setUserData
  } = useContext(userContext);
  const [InputValue, setInputValue] = useState("")
  function DeleteImage(index) {
    setUserData(initialValue => {
      const finalValue = {...initialValue}
      finalValue.galery = [...finalValue.galery.filter((item, i) => i !== index)]
      return finalValue;
    })
  }
  const changepic = (e) => {
    if (userData.galery.length > 3)
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
        if (e.currentTarget.result.match('image.*'))
        {
          setUserData(initialValue => {
            const finalValue = {...initialValue}
            finalValue.galery = [...finalValue.galery, e.currentTarget.result]
            return finalValue;
          })
        }
        else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
        }
       }
       setInputValue("")
    }
    }
    return (
          <div >
           <input accept="image/*" name="uploadgalerry" type="file" onChange={changepic} value={InputValue} disabled={userData.galery.length > 3} />
           {
           userData.galery.length < 1 ? "" :
            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={150}>
            {userData.galery?.map((item, index) => (
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

const Image = styled.img`
  width : 15px;
  height : 15px;
  cursor : pointer;
  position : absolute;
  float:right;
`