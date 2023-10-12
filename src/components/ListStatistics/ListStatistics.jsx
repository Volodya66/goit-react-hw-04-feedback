import ListItem from "components/ListItem/ListItem";
import css from './ListStatistics.module.css'

export default function ListStatistics({  good, neutral, bad,total,positivePercentage=0 }) {

    return (
        <ul className={css.list} >
            <li className={css.item} key={1}> <ListItem statistic={good} title={'Good'}/> </li>
            <li className={css.item} key={2}> <ListItem statistic={neutral} title={'Neutral'}/> </li>
            <li className={css.item} key={3}> <ListItem statistic={bad} title={'Bad'} /> </li>
            <li className={css.item} key={4}> <ListItem statistic={total} title={'Total'} /> </li>
            <li className={css.item} key={5}> <ListItem statistic={positivePercentage} title={'Positive feedback'}/> </li>
        </ul>
    );
}