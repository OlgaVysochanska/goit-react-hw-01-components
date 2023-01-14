import PropTypes, { bool } from 'prop-types';
import css from './friend-list-item.module.css';

const FriendListItem = ({isOnline, avatar, name}) => {
    return (
        <li className={css.item}>
            <span className={isOnline ? `${css.status} ${css.online}` : `${css.status}`}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    )
}

export default FriendListItem;

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: bool
}