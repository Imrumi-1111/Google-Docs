
import React, { useState } from 'react';
import { AiOutlineUndo, AiOutlineRedo, AiOutlineSave } from 'react-icons/ai';
import { BsZoomIn, BsZoomOut } from 'react-icons/bs';
import { BiSave } from 'react-icons/bi'
import { MdImage, MdFormatAlignLeft, MdFormatAlignCenter, MdFormatAlignRight } from 'react-icons/md';
import styles from './toolbar.module.css'

export default function Toolbar() {
  const [zoomLevel, setZoomLevel] = useState(100);
  const [alignment, setAlignment] = useState('left');




  const handleAlignmentChange = (alignment) => {
    setAlignment(alignment);
  };

  const handleZoomIn = (zoomLevel) => {
    setZoomLevel(zoomLevel);
  };

  const handleUndo = () => {
    document.execCommand('undo');
  };

  const handleRedo = () => {
    document.execCommand('redo');
  };

  const handleSave = () => {
    const documentContent = [
      [
        'name',
      ]
    ]
    localStorage.setItem('document', documentContent);
  };


  function handleZoomOut() {
    setZoomLevel(100);
  };

  const handleImagePicker = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = handleImageUpload;
    input.click();
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
  };

  const handleTextAlign = (textAlign) => {
    document.execCommand('justify' + textAlign);
  };

  return (
    <div className={styles.toolbar}>

      <AiOutlineUndo onClick={handleUndo} />


      <AiOutlineRedo onClick={handleRedo} />


      <AiOutlineSave onClick={handleSave} />


      <BsZoomIn onClick={handleZoomIn} />


      <BsZoomOut onClick={handleZoomOut} />


      <MdImage onClick={handleImagePicker} />

      <BiSave onClick={handleSave} />

      <MdFormatAlignLeft onClick={() => handleAlignmentChange('left')} />
      <MdFormatAlignCenter onClick={() => handleAlignmentChange('center')} />
      <MdFormatAlignRight onClick={() => handleAlignmentChange('right')} />

    </div>
  );
};

