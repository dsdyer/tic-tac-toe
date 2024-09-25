interface ControlsProps {
  handleReset: () => void;
}

function Controls(props: ControlsProps) {
  return (
    <div className="controls">
      <button className="reset" onClick={props.handleReset}>Reset</button>
    </div>
  );
}

export default Controls;