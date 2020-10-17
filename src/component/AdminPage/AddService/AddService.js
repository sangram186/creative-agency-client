import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

const AddService = () => {
    const [file, setFile] = useState(null);
    const [addService, setAddService] = useState({});

    const handleAddInput = e => {
        const newService = { ...addService };
        newService[e.target.name] = e.target.value;
        setAddService(newService)
    }

    const handleAddFile = e => {
        const file = e.target.files[0];
        setFile(file)
    }

    const handleSubmit = e => {
        const formData = new FormData();

        formData.append('file', file);
        formData.append('title', addService.title);
        formData.append('description', addService.description);

        fetch('https://evening-basin-84570.herokuapp.com/services', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('Service Added Successfully')
                    console.log(data)
                }
            })
            .catch(error => {
                console.error(error)
            })

        console.log(addService)
        e.preventDefault();
    }
    return (
        <div className='add-service'>
            <form onSubmit={handleSubmit}>
                <div className='row container'>
                    <div class="form-group col-md-6">
                        <label for="exampleFormControlInput1">Service Title</label>
                        <input name='title' required onBlur={handleAddInput} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Title" />
                    </div>
                    <div class="form-group col-md-4">
                        <label for="exampleFormControlInput1">Icon</label>
                        <label className='w-50 upload-btn p-1' for='file'><FontAwesomeIcon className='mr-3' icon={faUpload} />Upload Image</label>
                        <input onChange={handleAddFile} id='file' class="form-control-file" accept='image/*' type="file" />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="exampleFormControlInput1">Description</label>
                        <textarea name='description' required onBlur={handleAddInput} class="form-control p-4" id="exampleFormControlTextarea1" rows="5" placeholder="Enter Description"></textarea>
                    </div>

                </div>
                <button type="submit" className='btn btn-success mt-4 ml-auto d-flex justify-content-end px-3'>Submit</button>
            </form>
        </div>
    );
};

export default AddService;