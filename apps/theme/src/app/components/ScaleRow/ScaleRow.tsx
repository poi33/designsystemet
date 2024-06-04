import cn from "classnames";
import type { CssColor } from "@adobe/leonardo-contrast-colors";
import { useEffect, useRef, useState } from "react";
import { CheckmarkIcon, XMarkIcon } from "@navikt/aksel-icons";
import { ChromePicker } from "react-color";
import { useClickOutside } from "@react-awesome/use-click-outside";

import type { modeType } from "../../../types";
import { getRatioFromLum, luminanceFromHex } from "../../../utils/ColorUtils";
import { Scale } from "../Scale/Scale";

import classes from "./ScaleRow.module.css";

type ScaleRowProps = {
  color: CssColor;
  showHeader?: boolean;
  name: string;
  themeMode: modeType;
};

export const ScaleRow = ({
  color = "#00000",
  showHeader,
  name,
  themeMode,
}: ScaleRowProps) => {
  const [contrast, setContrast] = useState<number>(0);
  const [activeColor, setActiveColor] = useState<CssColor>("#000000");
  const [showPicker, setShowPicker] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const lum1 = luminanceFromHex(color) as number;
    const lum2 = luminanceFromHex("#ffffff") as number;
    const ratio = getRatioFromLum(lum1, lum2);
    setContrast(ratio);
    setActiveColor(color);
  }, [color]);

  useClickOutside(ref.current, () => {
    setShowPicker(false);
  });

  const handleClick = () => {
    setShowPicker(!showPicker);
  };

  return (
    <div className={classes.row}>
      <div className={classes.selectedColor}>
        <div className={classes.name}>{name}</div>
        <div ref={ref} className={classes.tomato}>
          <button className={classes.tt} onClick={() => handleClick()}>
            <div
              className={classes.previewColor}
              style={{ backgroundColor: activeColor }}
            ></div>
            <div className={classes.picker}>
              <div>Velg farge</div>
            </div>
          </button>
          <div
            className={cn(classes.pickerTool, {
              [classes.showPickerTool]: showPicker,
            })}
          >
            <ChromePicker
              onChange={(e) => {
                const lum1 = luminanceFromHex(e.hex as CssColor) as number;
                const lum2 = luminanceFromHex("#ffffff") as number;
                const ratio = getRatioFromLum(lum1, lum2);
                setContrast(ratio);
                setActiveColor(e.hex as CssColor);
              }}
              color={activeColor}
              /* @ts-expect-error Chromepicker has a width, but its not included in its types */
              width={250}
            />
          </div>
        </div>
        <div>{activeColor}</div>
        <div className={classes.contrast}>
          Contrast: {contrast.toFixed(2)}
          <div
            className={cn(classes.icon, {
              [classes.red]: contrast < 4.5,
            })}
          >
            {contrast > 4.5 && (
              <CheckmarkIcon title="a11y-title" fontSize="1.3rem" />
            )}
            {contrast < 4.5 && (
              <XMarkIcon title="a11y-title" fontSize="1.3rem" />
            )}
          </div>
        </div>
      </div>
      <Scale
        color={activeColor}
        showHeader={showHeader}
        themeMode={themeMode}
        type="accent"
      />
      <div></div>
    </div>
  );
};
