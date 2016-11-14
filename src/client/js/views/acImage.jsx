define(["react", "utils"], function(React, utils) {
    class ACImage extends React.Component {
        constructor(props) {
            super(props);
            this.x = props.x;
            this.y = props.y;
        }
        render() {
            let scale = (this.props.scale || 1) * utils.baseACIconSize;

            let x = (this.props.x * scale) + "px";
            let y = (this.props.y * scale) + "px";
            let width = scale + "px";
            let height = scale + "px";

            let image = "url(/img/tracks/" + this.props.name + ".png)"

            return (
                <div className="ac-image" style={{
                    left: x,
                    top: y,
                    width: width,
                    height: height,
                    backgroundImage: image
                }}></div>
            );
        }
    }

    return ACImage;
});
