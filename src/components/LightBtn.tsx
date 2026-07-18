import { withStyles } from "nano-jsx";

import style from "./LightBtn.scss?inline";

interface LightBtnProps {
  color?: string;
  href?: string;
  children?: string;
}

function LightBtn({ color = "#ffffff", href = "#", children }: LightBtnProps) {
  return withStyles(style)(
    <div class="light-btn" style={{ "--btn-color": color }}>
      <a href={href} target="_blank">
        {children}
      </a>
    </div>
  );
}

export default LightBtn;
