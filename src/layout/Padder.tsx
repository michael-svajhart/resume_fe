
interface TPadder {
    height: number
}

const Padder: React.FC<TPadder> = ({height}) => {
    var divStyle = {
        height: height + "px",
      };
    return(
        <div style={divStyle}></div>
    );
};

export default Padder;