import css from './Button.module.css'

export default function Button ({functions,text }) {
    
    return (
        <button className={css.button} type="button"  onClick={functions}>{text}</button>
    );
};