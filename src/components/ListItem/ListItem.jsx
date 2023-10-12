import css from './ListItem.module.css'

export default function ListItem({title,statistic=0}) {
    return (
        <p className={css.text}>{title} : {statistic } {title === 'Positive feedback' && '%'}</p>
    )
}