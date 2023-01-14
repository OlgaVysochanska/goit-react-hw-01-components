import PropTypes, { bool } from 'prop-types';
import css from './friend-list-item.module.css';

const FriendListItem = ({ status, avatar, name }) => {
    const fullClassName = status ? `${css.status} ${css.active}` : css.status;
    return (
        <li className={css.item}>
            <span className={fullClassName}></span>
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