import { Component } from "react";
import css from "./ColorBox.module.css";

export class ColorBox extends Component {
    state = {
        activeButtonIdx: null, //! індекс обраного елемента
        selectedButtonsIdx: [], //! масив індексів обраних елементів
        selectedColors: [] //! масив обраних елементів згідно масиву індексів
    }

    // setSelectedColors(colorBoxes, selectedButtonsIdx) {
    //     //! Формуємо масив обраних елементів(кольорів)
    //     // return colorBoxes.filter((item, index) => selectedButtonsIdx.includes(index));
    //     let newSelectedColors = [];
    //     for (let i = 0; i < colorBoxes.length; i++) {
    //         console.log(selectedButtonsIdx.includes(i));
    //         if (selectedButtonsIdx.includes(i)) {
    //             newSelectedColors.push(colorBoxes[i]);
    //         };
    //     };
    //     return newSelectedColors;
    // } 

    //! Формуємо масив обраних елементів(кольорів)
    // setSelectedColors = (arr) => {
    //     this.setState(prevState => ({
    //         selectedColors: prevState.selectedButtonsIdx.flatMap(item =>
    //             arr.filter((el, idx) => idx === item))
    //     }));
    // };

    // /todo: var.3
    //! Формуємо масив обраних елементів(кольорів)
    setSelectedColors = (arr) => {
        this.setState(prevState => ({
            selectedColors: prevState.selectedButtonsIdx.map(item => arr[item])
        }));
    };
    //     const newSelectedColors = selectedButtonsIdx.map(item => colorBoxes[item]);


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
        this.setSelectedColors(this.props.colorBoxes);
        // this.setState((prevState) => ({
        //     selectedColors: this.setSelectedColors(this.props.colorBoxes, prevState.selectedButtonsIdx)
        // }))
        // console.log("SetActiveIdx:", this.state.activeButtonIdx, this.state.selectedButtonsIdx);
    };

    render() {
        const { colorBoxes } = this.props;
        const { activeButtonIdx, selectedButtonsIdx, selectedColors } = this.state;
        console.log("----------------------------------------------")
        console.log("🔘🆔Активна кнопка:", activeButtonIdx);
        console.log("ℹ️Індекси обраних кнопок:", selectedButtonsIdx);
        console.log("Ⓜ️Масив обраних елементів(кольорів):", selectedColors);
        console.log("----------------------------------------------");

        return (
            <>
                <div className={css.colorBoxContainer}>
                    {/*//! Блок вибору кольорів */}
                    <h2 className={css.colorBoxTitle}>Вибір кольорів</h2>
                    <p className={css.colorBoxDescription}> Останній <u>доданий</u> колір: <span style={{ backgroundColor: colorBoxes[activeButtonIdx]?.color || "white" }}>{colorBoxes[activeButtonIdx]?.label || ""}</span> </p>
                    <div className={css.colorBox}>
                        {colorBoxes.map(({ color }, index) => {
                            return (
                                <button
                                    className={css.colorBoxButton}
                                    key={index}
                                    style={{ backgroundColor: color }}
                                    onClick={() => this.setActiveIdx(index)}
                                >
                                    {selectedButtonsIdx.includes(index) ? "✅On" : "🆓Off"}
                                </button>
                            )
                        })}
                    </div>
                </div>

                <div className={css.selectedColorsContainer}>
                    <h2 className={css.colorBoxTitle}>Обрані кольори:</h2>
                    <p className={css.colorBoxDescription}>
                        Кількість обраних кольорів:
                        <span className={css.colorBoxSelectedColor}>
                            {selectedButtonsIdx.length}
                        </span>
                    </p>
                    <div className={css.selectedColorsBox}>
                        {selectedColors.map(({color, label}, index) => (
                            <div
                                key={index}
                                className={css.selectedColor}
                                style={{backgroundColor: color}}
                            >
                                {label}
                            </div>

                        ))}
                    </div>
                </div>
            </>
        )
    }
} 