import { Component } from "react";
import css from "./ColorBox.module.css";

export class ColorBox extends Component {
    state = {
        color: "",
    }

    render() {
        const { colorBoxes } = this.props;
        return (
            <div className={css.colorBoxContainer}>
                <h2 className={css.colorBoxTitle}>Вибір кольорів</h2>
                <p className={css.colorBoxDescription}> Останній <u>доданий</u> колір:  </p>
                <div className={css.colorBox}>
                {colorBoxes.map(({color, label}, index) => {
                    return (
                        <button
                            className={css.colorBoxButton}
                            key={index}
                            style={{backgroundColor: color}}
                        >
                            ✅On
                        </button>
                    )
                })}
                </div>
            </div>
        )
    }
} 