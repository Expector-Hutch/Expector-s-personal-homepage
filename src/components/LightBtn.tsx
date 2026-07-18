import style from "./LightBtn.scss?inline";

interface LightBtnProps {
  color?: string;
  href?: string;
  children?: any;
}

function LightBtn({ color = "#ffffff", href = "#", children }: LightBtnProps) {
  return (
    <div class="light-btn" style={{ "--btn-color": color }}>
      <a href={href} target="_blank">
        {children}
      </a>
      <style>{style}</style>
    </div>
  );
}

export default LightBtn;
