import React from 'react';
import "./ImageLinkForm.css";
const ImageLinkForm = ({ imageURL, boxes }) => {

	return (
		<div className="ma2 pa2" style={{ display: "flex", justifyContent: "center" }}>
			<div id="imageDiv" className="mt2 absolute">
				<img id="image" style={{ width: "500px", height: "auto" }} src={imageURL} alt="" />




				<div style={{ top: boxes.top, bottom: boxes.bottom, left: boxes.left, right: boxes.right }} className="boundingbox">
				</div>





			</div>

		</div>

	);
}
export default ImageLinkForm;
