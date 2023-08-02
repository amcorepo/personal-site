import * as React from 'react';
import WorkExperience from './workExperience.js';
import data from '../data.json';


export default function MainContent(props) {
  return (
        <WorkExperience experience={props.experience}/>
  );
}