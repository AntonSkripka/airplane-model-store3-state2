import { Component } from "react";
import css from "./ColorBox.module.css";

export class ColorBox extends Component {
    state = {
        activeButtonIdx: null, //! індекс обраного елемента
        selectedButtonsIdx: [], //! масив індексів обраних елементів
    }

    filterSelectedButtons(arr, index) {
        if (arr.includes(index)) {
            return arr.filter(n => n != index);
        }
        return [...arr, index].toSorted((a, b) => a - b);
    }

    setActiveIdx = (index) => {
        this.setState((prevState) => ({
            activeButtonIdx: index,
            selectedButtonsIdx: this.filterSelectedButtons(prevState.selectedButtonsIdx, index),
        }));
        // console.log("SetActiveIdx:", this.state.activeButtonIdx, this.state.selectedButtonsIdx);
    };

    render() {
        const { colorBoxes } = this.props;
        const { activeButtonIdx, selectedButtonsIdx } = this.state;
        console.log("----------------------------------------------")
        console.log("🔘🆔Активна кнопка:", activeButtonIdx);
        console.log("ℹ️Індекси обраних кнопок:", selectedButtonsIdx);
        console.log("----------------------------------------------");

        return (
            <div className={css.colorBoxContainer}>
                {/*//! Блок вибору кольорів */}
                <h2 className={css.colorBoxTitle}>Вибір кольорів</h2>
                <p className={css.colorBoxDescription}> Останній <u>доданий</u> колір: <span style={{backgroundColor: colorBoxes[activeButtonIdx]?.color || "white"}}>{colorBoxes[activeButtonIdx]?.label || ""}</span> </p>
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