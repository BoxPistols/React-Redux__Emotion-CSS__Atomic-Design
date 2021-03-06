import { useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/css'
import * as ui from './AtomicDesign/Utility/ui'
// import { Menu } from "./AtomicDesign/Atoms/Menu";
import './style/main.scss'
import SvgIconsColor from './Components/Icons'

export const App2 = () => {
  const [isSelected, setIsSelected] = useState(false)

  // Sizes
  // const sizes = [{ xxs: 10, xs: 11, ss: 12, sm: 14, md: 16 }]

  // オブジェクトの定義
  const sizes = [
    'xxs',
    'xs',
    'ss',
    'sm',
    'md',
    'ml',
    'lg',
    'xl',
    'xxl',
    'xxxl',
    'balus'
  ]

  return (
    <DivEmWrap>
      {/* <Menu /> */}
      <div>
        <h1 className={`${em_css__color} fs-xxxl`}>React Atomic Emotion</h1>
        {/* useState Toggle Style */}
        <button
          className={styles({ isSelected })}
          onClick={() => setIsSelected(!isSelected)}
        >
          Click here to change styles!
        </button>

        <div>
          <ul>
            {' '}
            {sizes.map((size, index) => (
              <li key={index} className={`fs-${size}`}>
                {size}
              </li>
            ))}
          </ul>
        </div>

        <hr />

        <div>
          <ul>
            {' '}
            {sizes.map((size, index) => (
              <li key={index}>
                <SvgIconsColor className={`size-${size}`} />
              </li>
            ))}
          </ul>
          {/* <SvgIconsColor className={`size-balus`} /> */}
        </div>

        <hr />

        <div>
          <p
            className={css`
              color: ${ui.c.gray.__700};
              ${ui.fz(14)};
              margin: ${ui.size(4)};
            `}
          >
            emotion className / {styles({ isSelected })}
          </p>
        </div>
      </div>
    </DivEmWrap>
  )
}

/* ===== Styling-Design ===== */

/* emotion css */
const em_css__color = css`
  color: ${ui.c.main};
`

/* Emotion Styled */
const DivEmWrap = styled.div`
  ${ui.tx_center}/* ${ui.fx_center} */
`

/* Toggle Style useState */
const styles = ({ isSelected }) => css`
  border: solid 2px gray;
  padding: 8px 16px;
  background: none;
  border-radius: 24px;
  color: white;
  cursor: pointer;
  transition: 0.2s;
  ${isSelected === true &&
  `
    border-color: hotpink;
    background-color: #413F42;
    color: hotpink;
  `}
`
