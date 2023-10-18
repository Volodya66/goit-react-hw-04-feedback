
import Button from "components/Button/Button"
import css from './FeedbackOptions.module.css'

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    // console.log(Object.keys(options))
    return (
        <ul  className={css.list}>
  
         {options.map(option => (
        <li key={option}>
          <Button text={option.toLowerCase()} functions={onLeaveFeedback} />
        </li>
      ))}

        </ul>
    )
}