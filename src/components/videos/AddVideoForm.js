import React from 'react';
import BackButton from '../utility/BackButton';


const AddVideoForm = ({ handleChange, handleSubmit, video, errors }) => {

  const formIsInvalid = Object.keys(errors).some(key => errors[key]);

  return (
    <div className="singleComponentBox">
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
            <option value='Hip-hop'>Hip-hop</option>
            <option value='Waacking'>Waacking</option>
            <option value='Popping'>Popping</option>
            <option value='Locking'>Locking</option>
            <option value='B-Boy'>B-Boy</option>
          </select>
        </div>

        {/* <div>
          <label htmlFor="status">Status:</label>
          <select id="status"
            name="status"
            onChange={handleChange}
            value={criminal.status}
          >
            <option value="" disabled>- - Please Select One - -</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="Unknown">Unknown</option>
          </select>
        </div> */}


        <div className="buttonsBox">
          <button className="button" disabled={formIsInvalid}>Add</button>
          <BackButton />
        </div>

      </form>
    </div>
  );
};

export default AddVideoForm;
