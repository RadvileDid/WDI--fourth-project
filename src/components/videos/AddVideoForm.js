import React from 'react';
import BackButton from '../utility/BackButton';


const AddVideoForm = ({ handleChange, handleSubmit, video, errors }) => {

  const formIsInvalid = Object.keys(errors).some(key => errors[key]);

  return (
    <div className="singleComponentBox">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleChange}
            value={video.title}
          />
          {/* {errors.title && <p>{errors.title}</p>} */}
        </div>
        <div>
          <input
            type="text"
            name="videoId"
            placeholder="Video URL"
            onChange={handleChange}
            value={video.videoId}
          />
          {/* {errors.videoId && <p>{errors.videoId}</p>} */}
        </div>

        <div className="buttonsBox">
          <button className="button" disabled={formIsInvalid}>Add</button>
          <BackButton />
        </div>

      </form>
    </div>
  );
};

export default AddVideoForm;
