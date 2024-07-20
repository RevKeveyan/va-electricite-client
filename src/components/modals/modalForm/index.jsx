import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import "./style.scss";
import { filterObjectByKeysRecursive } from "../../../helpers";
import useTariffService from "../../../service/tariffService";
import useSkillService from "../../../service/skillService";
import useUserService from "../../../service/userService";
import { useAuth } from "../../../context/userContext";


const ModalForm = ({ open, data, id, onClose, type, onSubmit, onDelete }) => {
    const { control, handleSubmit, setValue, reset, formState } = useForm();
  const [selectedType, setSelectedType] = useState(type);
  const [selectedImage, setSelectedImage] = useState(null);
  const { dirtyFields } = formState;
  const { addTariff } = useTariffService()
  const { addSkill } = useSkillService()
  const { editUser } = useUserService();
  const { user } = useAuth();

  useEffect(() => {
    if (type) {
      setSelectedType(type);
    }
    if (data) {
      reset(data);
    }
  },[data]);

  useEffect(() => {
    if (selectedType === "newUser") {
      reset(user);
    }else{
      reset({})
    }
    
  },[selectedType]);

  const onAdd = (newData) =>{
    const filteredResult = filterObjectByKeysRecursive(newData, dirtyFields);
    if(selectedImage){
      filteredResult.image = selectedImage;
    }
    if(!data && selectedType){
      filteredResult.type = selectedType;
      if(selectedType === "tariff"){
        addTariff(filteredResult)
      }else if(selectedType === "skill" || selectedType === "slide" ){
        addSkill(filteredResult)
      }else if(selectedType === "newUser"){
        editUser(filteredResult)
      }
    }
    reset({})
    onClose()
  }

 const submit = (data) =>{
  const filteredResult = filterObjectByKeysRecursive(data, dirtyFields);
  if(selectedImage){
    filteredResult.image = selectedImage;
  }
  onSubmit(filteredResult)
 }

  const onTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  const onImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
    setValue("image", file); 
  };

  return (
    <div className={`modal ${open ? "open" : ""}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <form onSubmit={handleSubmit(data ? submit : onAdd)}>
          {!data ? (
            <div>
              <label>Select Type:</label>
              <select value={selectedType} onChange={onTypeChange}>
                <option value="tariff">Tariff</option>
                <option value="skill">Skill</option>
                <option value="newUser">User</option>
                <option value="slide">Slide</option>
              </select>
            </div>
          ) : null}
          {selectedType === "tariff" && (
            <div>
              <label>Title:</label>
              <Controller
                name="title"
                control={control}
                render={({ field }) => <input {...field} type="text" />}
              />
              <label>Price:</label>
              <Controller
                name="price"
                control={control}
                render={({ field }) => <input {...field} type="text" />}
              />
              <label>Select Image:</label>
              <input type="file" accept="image/*" onChange={onImageChange} />
              {selectedImage && (
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="Selected Image"
                />
              )}
            </div>
          )}
          {selectedType === "skill" || selectedType === "slide" ? (
            <div>
              <label>Title:</label>
              <Controller
                name="title"
                control={control}
                render={({ field }) => <input {...field} type="text" />}
              />
              <label>Description:</label>
              <Controller
                name="description"
                control={control}
                render={({ field }) => <input {...field} type="text" />}
              />
              <label>Select Image:</label>
              <input type="file" accept="image/*" onChange={onImageChange} />
              {selectedImage && (
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="Selected Image"
                />
              )}
            </div>
          ) : null}
          {selectedType === "newUser" && (
            <div>
              <label>First Name:</label>
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => <input {...field} type="text" />}
              />
              <label>Last Name:</label>
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => <input {...field} type="text" />}
              />
              <label>Email:</label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => <input {...field} type="text" />}
              />
              <label>Phone:</label>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => <input {...field} type="text" />}
              />
              <label>Experience:</label>
              <Controller
                name="experience"
                control={control}
                render={({ field }) => <input {...field} type="number" />}
              />
              <label>Realized Projects Count:</label>
              <Controller
                name="realizedProjectsCount"
                control={control}
                render={({ field }) => <input {...field} type="number" />}
              />
              
              <label>Select Image:</label>
              <input type="file" accept="image/*" onChange={onImageChange} />
              {selectedImage && (
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="Selected Image"
                />
              )}
            </div>
          )}
          <div className="modal__btns">
            <button type="submit">Submit</button>
            {onDelete ? <button type="button" className="modal__btns__delete" onClick={onDelete}>Delete</button>:null}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
