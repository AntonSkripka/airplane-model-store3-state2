import { Component } from "react";
import css from "./ColorBox.module.css";

export class ColorBox extends Component {
    state = {
        activeButtonIdx: null, //! індекс обраного елемента
    }

    setActiveIdx(index) {
        this.setState({activeButtonIdx: index});
    }

    render() {
        const { colorBoxes } = this.props;
        const { activeButtonIdx } = this.state;
        console.log("----------------------------------------------")
        console.log("🔘🆔Активна кнопка:", activeButtonIdx);
        console.log("----------------------------------------------");

        return (
            <div className={css.colorBoxContainer}>
                <h2 className={css.colorBoxTitle}>Вибір кольорів</h2>
                <p className={css.colorBoxDescription}> Останній <u>доданий</u> колір:  </p>
                <div className={css.colorBox}>
                    {colorBoxes.map(({ color, label }, index) => {
                        return (
                            <button
                                className={css.colorBoxButton}
                                key={index}
                                style={{ backgroundColor: color }}
                                onClick={() => this.setActiveIdx(index)}
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