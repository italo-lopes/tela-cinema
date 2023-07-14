import React from "react";
import styles from './Video.module.css';

const Video = (props) => {
  return (
    <section className={styles.video} > 
      <iframe
        width= '100%'   
        height= '720'
        src={props.link} 
        title={props.title}
        allow="accelerometer; autoplay; clipboard-write; gyroscope"
      />
      </section>    
  );
};

export default Video;
