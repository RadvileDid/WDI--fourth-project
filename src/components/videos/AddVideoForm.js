import React from 'react';
import BackButton from '../utility/BackButton';



const AddVideoForm = ({ handleChange, handleSubmit, video, errors }) => {

  const formIsInvalid = Object.keys(errors).some(key => errors[key]);

  return (
    <div className="singleComponentBox">
      <div className="formBackButton"><BackButton /></div>
      <form onSubmit={handleSubmit} className="formContainer">
        <div>
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleChange}
            value={video.title}
            className="formInput"
          />
          {errors.title && <p>{errors.title}</p>}
        </div>
        <div>
          <input
            type="text"
            name="videoId"
            placeholder="Please enter a valid YouTube URL"
            onChange={handleChange}
            value={video.videoId}
            className="formInput"
          />
          {errors.videoId && <p>{errors.videoId}</p>}
        </div>
        <div>
          <select id="danceStyle"
            name="danceStyle"
            onChange={handleChange}
            value={video.danceStyle}
            className="formInput"
          >
            <option value="Waacking">Waacking</option>
            <option value="Popping">Popping</option>
            <option value="Locking">Locking</option>
            <option value="B-Boy">Break Dance</option>
            <option value="Funk">Funk</option>
            <option value="Tutting">Tutting</option>
            <option value="Krump">Krump</option>
            <option value="Liquids">Liquids</option>
            <option value="Boogaloo">Boogaloo</option>
            <option value="Lyrical">Lyrical</option>
            <option value="Jerkin">Jerkin</option>
            <option value="Robot">Robot</option>
          </select>
        </div>
        <div className="buttonsBox">
          <button className="button addVideo" disabled={formIsInvalid}>Add</button>
        </div>

      </form>
    </div>
  );
};

export default AddVideoForm;
