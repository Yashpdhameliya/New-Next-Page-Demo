import React, { useState } from 'react';
import styles from './likeIcon.module.scss';

const LikeIcon: React.FC = () => {
  const [toggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!toggled);
  };

  return (
    <div className={styles.iconContainer} onClick={handleToggle}>
      <svg
        width="34"
        height="35"
        viewBox="0 0 34 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${styles.icon} ${toggled ? styles.iconToggled : ''}`}
      >
        <rect
          y="0.476807"
          width="34"
          height="34"
          rx="10"
          className={styles.iconBackground}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17 25.4768C14.795 24.9968 8 21.2368 8 14.4768C8 13.4274 8.33019 12.4046 8.94379 11.5533C9.55739 10.7019 10.4233 10.0652 11.4189 9.73339C12.4144 9.40154 13.4892 9.39134 14.4908 9.70424C15.4925 10.0171 16.3704 10.6373 17 11.4768C17.6296 10.6373 18.5075 10.0171 19.5092 9.70424C20.5108 9.39134 21.5856 9.40154 22.5811 9.73339C23.5767 10.0652 24.4426 10.7019 25.0562 11.5533C25.6698 12.4046 26 13.4274 26 14.4768C26 21.2368 19.205 24.9968 17 25.4768ZM17 23.4768C20.12 22.5468 24 18.6718 24 14.4768C24 13.6812 23.6839 12.9181 23.1213 12.3555C22.5587 11.7929 21.7956 11.4768 21 11.4768C19.695 11.4768 18.362 12.3098 17 13.9768C15.638 12.3098 14.305 11.4768 13 11.4768C12.2044 11.4768 11.4413 11.7929 10.8787 12.3555C10.3161 12.9181 10 13.6812 10 14.4768C10 18.6718 13.88 22.5468 17 23.4768Z"
          className={styles.iconHeart}
        />
      </svg>
    </div>
  );
};

export default LikeIcon;
