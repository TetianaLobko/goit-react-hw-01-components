import React from "react";
import PropTypes from "prop-types";
import styles from './FriendList.module.css'

export default function FriendsListItem({ avatar, name, isOnline }) {
    return (
        <li className={styles.item}>
        <span className={isOnline ? styles.statusOn : styles.statusOff}></span>
        <img className={styles.avatar} src={avatar} alt={name} width="48" />
        <p className={styles.name}>{name}</p>
    </li>
    )
};

FriendsListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
