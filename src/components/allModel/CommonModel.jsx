import React, { useState, useRef, useEffect } from 'react';
import Group from '../../assets/icon/Group.png';
import axios from 'axios';

function CommonModel({ open, onClose, onSave, type, mode = 'add', editData = null }) {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fileInputRef = useRef();

  // Load edit data when mode is 'edit'
  useEffect(() => {
    if (mode === 'edit' && editData) {
      setFormData(editData);
    }
  }, [mode, editData]);

  if (!open) return null;

  const formConfig = {
    'Category': {
      title: mode === 'add' ? 'Add Category' : 'Edit Category',
      fields: [
        {
          name: 'categoryName',
          label: 'Category Name',
          type: 'text',
          placeholder: 'Type Here'
        },
        {
          name: 'image',
          label: 'Upload Image',
          type: 'file',
          accept: 'image/*'
        }
      ],
      // apiEndpoints: {
      //   add: '/api/categories',
      //   edit: '/api/categories'
      // },
      // method: 'POST'
    },
    'Diamond': {
      title: mode === 'add' ? 'Add Diamond Shape' : 'Edit Diamond Shape',
      fields: [
        {
          name: 'shape',
          label: 'Diamond Shape',
          type: 'text',
          placeholder: 'Enter diamond shape'
        }
      ],
      // apiEndpoints: {
      //   add: '/api/diamond-shapes',
      //   edit: '/api/diamond-shapes'
      // },
      // method: 'POST'
    },
    'Diamond-clarity': {
      title: mode === 'add' ? 'Add Diamond Clarity' : 'Edit Diamond Clarity',
      fields: [
        {
          name: 'clarity',
          label: 'Diamond Clarity Type',
          type: 'text',
          placeholder: 'Enter diamond clarity type'
        }
      ],
      // apiEndpoints: {
      //   add: '/api/diamond-clarity',
      //   edit: '/api/diamond-clarity'
      // },
      // method: 'POST'
    },
    'Metal': {
      title: mode === 'add' ? 'Add Metal Type' : 'Edit Metal Type',
      fields: [
        {
          name: 'metalType',
          label: 'Metal Type',
          type: 'text',
          placeholder: 'Enter metal type'
        }
      ],
      // apiEndpoints: {
      //   add: '/api/metal-types',
      //   edit: '/api/metal-types'
      // },
      // method: 'POST'
    },
    'Size': {
      title: mode === 'add' ? 'Add Size Type' : 'Edit Size Type',
      fields: [
        {
          name: 'size',
          label: 'Size',
          type: 'text',
          placeholder: 'Enter size'
        },
        {
          name: 'price',
          label: 'Price',
          type: 'text',
          placeholder: 'Enter price'
        }
      ],
      // apiEndpoints: {
      //   add: '/api/sizes',
      //   edit: '/api/sizes'
      // },
      // method: 'POST'
    }
  };

  const config = formConfig[type] || formConfig['Category'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        image: file
      }));
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        image: file
      }));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      setError(null);

      // Create FormData if there's a file upload
      let dataToSend = formData;
      if (formData.image) {
        const formDataObj = new FormData();
        Object.keys(formData).forEach(key => {
          formDataObj.append(key, formData[key]);
        });
        dataToSend = formDataObj;
      }

      // Determine API endpoint and method based on mode
      // const endpoint = config.apiEndpoints[mode];
      const method = mode === 'edit' ? 'PUT' : config.method;

      // Make API call
      const response = await axios({
        method,
        url: mode === 'edit' ? `${endpoint}/${editData.id}` : endpoint,
        data: dataToSend,
        headers: formData.image ? {
          'Content-Type': 'multipart/form-data'
        } : {
          'Content-Type': 'application/json'
        }
      });

      // Call the onSave callback with the response data
      onSave(response.data);
      setFormData({});
      onClose();
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setFormData({});
    setError(null);
    onClose();
  };

  const renderField = (field) => {
    if (field.type === 'file') {
      return (
        <div
          className="flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-lg bg-[#D9E0E7] h-36 cursor-pointer transition hover:border-[#303F26]"
          onClick={() => fileInputRef.current.click()}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          {formData.image ? (
            <div className="flex flex-col items-center">
              <img
                src={typeof formData.image === 'string' ? formData.image : URL.createObjectURL(formData.image)}
                alt="Preview"
                className="h-16 mb-2 object-contain"
              />
              <span className="text-xs text-gray-600">
                {typeof formData.image === 'string' ? 'Current Image' : formData.image.name}
              </span>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <button>
                <img src={Group} alt="Upload" className="w-10 h-10 mb-2" />
              </button>
              <span className="text-gray-500 text-sm">Drag & Drop or click to upload file</span>
            </div>
          )}
          <input
            type="file"
            accept={field.accept}
            ref={fileInputRef}
            className="hidden"
            onChange={handleImageChange}
          />
        </div>
      );
    }

    // Special case for Size model to display fields in a row
    if (type === 'Size') {
      return (
        <div className="flex gap-4">
          {config.fields.map((field) => (
            <div key={field.name} className="flex-1">
              <label className="block text-sm font-medium mb-1">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#303F26] bg-white"
                placeholder={field.placeholder}
                value={formData[field.name] || ''}
                onChange={handleInputChange}
              />
            </div>
          ))}
        </div>
      );
    }

    return (
      <input
        type={field.type}
        name={field.name}
        className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#303F26] bg-white"
        placeholder={field.placeholder}
        value={formData[field.name] || ''}
        onChange={handleInputChange}
      />
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
      <div className="bg-[#E6EAEE] rounded-2xl shadow-lg w-full max-w-xl p-8 relative animate-zoom-in">
        <h2 className="text-lg font-semibold mb-4">{config.title}</h2>
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}
        {type === 'Size' ? (
          <div className="mb-6">
            {renderField(config.fields[0])}
          </div>
        ) : (
          config.fields.map((field) => (
            <div key={field.name} className="mb-6">
              <label className="block text-sm font-medium mb-1">{field.label}</label>
              {renderField(field)}
            </div>
          ))
        )}
        <div className="flex justify-center gap-4">
          <button
            className="bg-white px-6 py-2 rounded-xl font-medium"
            onClick={handleCancel}
            type="button"
            disabled={loading}
          >
            Cancel
          </button>
          <button
            className="bg-[#303F26] text-white px-6 py-2 rounded-xl font-medium hover:bg-[#26371e] disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleSave}
            type="button"
            disabled={loading}
          >
            {loading ? 'Saving...' : mode === 'add' ? 'Save' : 'Update'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CommonModel; 