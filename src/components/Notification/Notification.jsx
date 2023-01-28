import PropTypes from 'prop-types';
// import { Message } from './Notification.styled';

export const Notification = ({ message='' }) => {
    return (
<>
{message && <p>{message}</p>}
</>

    )
}
Notification.propTypes = {
    message: PropTypes.string.isRequired,
};