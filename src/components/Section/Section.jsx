import css from "./Section.module.css"; //! CSS-модулі
import { TitleLugrasimoBold, SectionGlobal } from './Section.styled.jsx'; //! Emotion

export default function Section({ children, title, isOn=true, color, numOfAircrafts, numOfModels }) {
  return (
    <>
    {isOn && 
      <SectionGlobal style={{backgroundColor: color}}>
      {title
        ?
        <TitleLugrasimoBold
        // style={{
        //   marginBottom: 24,
        //   fontSize: '48px',
        //   textAlign: 'center',
        //   color: "darkred",
        // }}
        // className="title"
        // className="title lugrasimoBold"
        // className={css.title}
        // className={`${css.title} ${css.lugrasimoBold}`}
        // className={css.titleLugrasimoBold}
        >
          {title}
        </TitleLugrasimoBold>
        :
        <TitleLugrasimoBold
        
        // style={{
        //   marginBottom: 24,
        //   fontSize: '48px',
        //   textAlign: 'center',
        //   color: "darkred",
        // }}
        // className="title"
        // className={css.title}
        >
          No title
        </TitleLugrasimoBold>}
        <p>Кількість ЛА на сторінці: {numOfAircrafts}</p>
        <p>Кількість моделей магазину на сторінці: {numOfModels}</p>
      {children}
    </SectionGlobal>
    }
    </> 
  )
}