import ListItem from "components/ListItem/ListItem";
import css from './ListStatistics.module.css'

export default function ListStatistics({  good, neutral, bad,total,positivePercentage=0 }) {

    return (
        <ul className={css.list} >
            <li className={css.item} > <ListItem statistic={good} title={'Good'}/> </li>
            <li className={css.item} > <ListItem statistic={neutral} title={'Neutral'}/> </li>
            <li className={css.item} > <ListItem statistic={bad} title={'Bad'} /> </li>
            <li className={css.item} > <ListItem statistic={total} title={'Total'} /> </li>
            <li className={css.item} > <ListItem statistic={positivePercentage} title={'Positive feedback'}/> </li>
        </ul>
    );
}