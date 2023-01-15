import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats: {followers, views, likes} }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.statItem}>
          <span className="label">Followers</span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li className={css.statItem}>
          <span className="label">Views</span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li className={css.statItem}>
          <span className="label">Likes</span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
