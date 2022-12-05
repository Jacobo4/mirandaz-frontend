import Image from 'next/image';
import styles from './Card.module.scss';

const Card = ({imageUrl, title, description, actions, moreInfo}) => {
    return (
        <div className={styles.card}>
            <div className={styles['card__header']}>
                <div className={styles['card__header-image']}>
                    <Image layout='fill' src={imageUrl}/>
                </div>
            </div>
            <div className={styles['card__body']}>
                <h4>{title}</h4>
                {moreInfo}
                <p>{description}</p>
            </div>
            {actions &&
                <div className={styles['card__footer']}>
                    {actions}
                </div>
            }
        </div>
    )
}

export default Card;