import React from 'react';
import PersonaEdit from '../../components/persona-edit/persona-edit.component';
import TelefonoEdit from '../../components/telefono-edit/telefono-edit.component';
import CorreoEdit from '../../components/correo-edit/correo-edit.component';

import './edit.styles.scss'

const Edit = (query) => {
  
  const data = query.location.query
  return (
      <div className="edit">
        <PersonaEdit data={data}/>
        <TelefonoEdit data={data}/>
        <CorreoEdit data={data}/>
      </div>
  )
};

export default Edit;