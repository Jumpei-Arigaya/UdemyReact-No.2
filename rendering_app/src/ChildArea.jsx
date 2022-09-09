import { memo } from "react";

const style = {
    width: "100%",
    height: "200px",
    backgroundColor: "khaki"
};

export const ChildArea = memo(({ open, onClickClose }) => {
    console.log('Cエリアのレンダリング実行');

    // const data = [...Array(2000).keys()];
    // console.log(data);
    // data.forEach(() => {
    //     console.log("...");
    // })
    return (
        <>
            <div style={style}>
                {open ? (
                    <div>
                        <p>子コンポーネント</p>
                        <button onClick={onClickClose}>閉じる</button>
                    </div>) :
                    null
                }
            </div>
        </>
    )
});