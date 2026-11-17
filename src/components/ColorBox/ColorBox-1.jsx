import { Component } from "react";
import css from "./ColorBox.module.css";

export class ColorBox extends Component {
    state = {
        color: "",
    }

    render() {
        return (
            <div className={css.colorBoxContainer}>
                <h2 className={css.colorBoxTitle}>Вибір кольорів</h2>
                <p className={css.colorBoxDescription}> Останній <u>доданий</u> колір:  </p>
                <div className={css.colorBox}></div>
                <button
                    className={css.colorBoxButton}
                >
                ✅On
                </button>
            </div>
        )
    }
} 